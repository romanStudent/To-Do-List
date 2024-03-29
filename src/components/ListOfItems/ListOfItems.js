import {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Item from '../Item/Item';
import App from '../../App';
import CreateNote from '../CreateNote/CreateNote';

import './ListOfItems.css';



function ListOfItems({posts, edit_day_func, id_copy, setIdCopy, id_func, days, setPosts, index, setIndex}) {

  return (
    <div className="list_of_items border border-2 border-white rounded-xl h-max p-2 mr-1.5 ml-1.5 pb-5 md: mb-10 list_and_button">
        <h1 className="font-bold h1 text-xl">MY LIST</h1>
         
         <ul className="dates m-2">
           {days.map((day, index) => 
              <Item id={index} key={index} id_copy={id_copy} setIdCopy={setIdCopy} id_func={id_func} edit_day_func={edit_day_func} day={day} posts={posts} />    
           )}
              
         </ul>
              <Link to="/create">
                    <input 
                         type="button" 
                         name="Add" 
                         className="add_note 
                                    bg-blue-500  
                                    text-white 
                                    border border-2 border-white rounded-xl
                                    p-3" 
                         value="Add" 
                         onClick={() => {setPosts([]); if(index !== undefined) {setIndex(0)}}}
                    />
              </Link>
    </div>
  );
}

export default ListOfItems;
