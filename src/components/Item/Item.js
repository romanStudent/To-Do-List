import {Link, NavLink} from 'react-router-dom';

function Item({day, id, id_func, id_copy, setIdCopy, edit_day_func, posts}) {
  

let className = `day${id} item border border-2 border-black rounded-xl bg-gray-100 m-2 p-3`;

function su() {
    let cop = day.date;
}



  return (
    <div className={className}>
      <div className="grid grid-cols-2">
        <div>
           <h3 className="font-bold">{day.date.toLocaleString("ru-RU", {year: 'numeric', month: 'numeric', day: 'numeric'})}</h3>
           <p>Exercises: {day.amount_exercises}</p>
        </div>
        
        <div>
        <Link to={`/edit/${id}`}>
        <input type="button" name="Edit" className="edit_note 
                                                     bg-black 
                                                     text-white 
                                                     border border-2 border-black rounded-xl
                                                     p-3" 
                                              value="Edit"
                                              onClick={function() {
                                                    su();
                                                    className = className + ' edit';
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
