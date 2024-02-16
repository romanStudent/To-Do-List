import {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';

function Item({day, id, id_func, id_copy, setIdCopy, edit_day_func, posts}) {


  let date_copy = new Date(day.date);
  date_copy.setDate(date_copy.getDate() - 1);
  let className = `day${id} item border border-2 border-white rounded-xl bg-gray-100 m-2 p-3 w-5/5`;


  return (
    <div className={className}>
      <div className="grid grid-cols-2">
        <div className="justify-start">
           <h3 className="font-bold">{day.date.toLocaleString("en-GB", {year: 'numeric', month: 'numeric', day: 'numeric'})}</h3>
           <p>Exercises: {day.amount_exercises}</p>
        </div>
        
        <div className="justify-end">
        <Link to={`/edit/${id}`}>
          <input 
             type="button" 
             name="Edit" 
             className="edit_note 
                        bg-green-600 
                        text-white 
                        border border-2 border-white rounded-xl
                        p-3" 
             value="Edit"
             onClick={function() {
                                  className = className + ' edit';
                                  edit_day_func(id);
                                  edit_day_func(id);                               
                     }} 
          />
        </Link>
        </div>
      </div>
    </div>
  );
  
}

export default Item;
