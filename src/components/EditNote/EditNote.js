  import {react, useState, useEffect, useRef, useMemo} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

import './EditNote.css';
import './Calendar.css';
import ListOfExercises from './ListOfExercises';



function EditNote({edit_day_func, date, setDate, id_copy, save_edited, index_day, setIndexDay, days, setDays, amount_days, setAmountDays, show_edit_day, setShowEditDay , posts, setPosts, index, setIndex, amount_exercises, setAmountExercises}) {



 const [textareaCreate, setTextareaCreate] = useState('');
 const [textareaEdit, setTextareaEdit] = useState('');
 const [showTextareaCreate, setShowTextareaCreate] = useState('none');
 const [display_calendar, setDisplayCalendar] = useState('none');



function showChange() {
    (showTextareaCreate == 'none') ? setShowTextareaCreate('block') : setShowTextareaCreate('none');
    return showTextareaCreate; 
}



let post = {
  index: index,
  textarea: textareaCreate,
  id: index
};

let day = {
  id: index_day, 
  amount_exercises: posts.length, 
  date: date
 };



function save() {

   setAmountExercises(posts.length);
   days[id_copy] = day;

   let fin = day.date;
   day.date = new Date(day.date);
   let day_from_date = day.date.getDate();


     async function send() {

        const ypo = {
          id: Number(day.id),
          amount_exercises: Number(day.amount_exercises),
          posts: JSON.stringify(posts),
          date: new Date(day.date)
        }


          async function putData(url = "", data = {}) {

              const response = await fetch(url, {
                method: "PUT", 
                mode: "cors", 
                cache: "no-cache", 
                credentials: "same-origin", 
                headers: {
                   "Content-Type": "application/json",
                },
                redirect: "follow", 
                referrerPolicy: "no-referrer", 
                body: JSON.stringify(data),
              });
              
              return response.json(); 
          }


          putData(`http://localhost:3012/api/${id_copy}`, ypo)
          .then((data) => {
             edit_day_func(id_copy);
          })
          .catch((err) => {console.log(err.message); console.log(ypo); console.log(err)});

          setPosts([]);
     }

    send();
   setShowEditDay('none');
}



function deletePost(post) {

    setPosts(posts.filter(item => item.id !== post.id));    
    let id_deleted = post.id;

    posts.map(item => {

        if(id_deleted < item.id) {
          item.index--;
          item.id--;
        }
    })
    
    setAmountExercises(amount_exercises - 1);
    setIndex(posts.length - 1);
}



function memo() {
    return <ListOfExercises amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} deletePost={deletePost} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} textareaCreate={textareaCreate} setTextareaCreate={setTextareaCreate} textareaEdit={textareaEdit} setTextareaEdit={setTextareaEdit} showTextareaCreate={showTextareaCreate} setShowTextareaCreate={setShowTextareaCreate} />
}

function date_func() {

   if(display_calendar == 'none') { 
     setDisplayCalendar('block')
    } else {
     setDisplayCalendar('none');
   }
}


  return (
    <div className="h-max mr-1.5 ml-1.5 edit_note_block text-center border border-2 border-white rounded-xl" style={{/*display: show_edit_day*/ display:'block'}}>
       <h3 className="header text-xl font-bold border-b-2 border-gray">Edit Note</h3>


       <div className="calendar_main">
             <input 
                  type="button" 
                  className="rounded-tr-2xl rounded-bl-2xl btn w-40 h-20 text-xl font-bold mt-5 calendar_main"
                  placeholder="Select Date" 
                  onChange={setDate} 
                  onClick={date_func} 
                  value={date.toLocaleString("en-GB", {day: 'numeric', month: 'numeric', year: 'numeric'})} 
             />

             <div 
                className="text-center border border-2 border-white rounded-xl" 
                style={{display: `${display_calendar}`}}>
                  <Calendar 
                         onChange={setDate} 
                         value={date} 
                         defaultValue={new Date()} 
                         minDate={new Date()} 
                         className="calendar" 
                   />
             </div>
       </div>


         <div className="body mt-20">

           {memo()}
                 
            <div className="footer">

               <input 
                    type="button" 
                    name="New exercise" 
                    value="New exercise"
                    className="bg-black 
                               text-white 
                               border border-2 border-black rounded-xl
                               p-3
                               m-2" 
                    onClick={showChange}
               />
         
               <Link to="/">
                   
                   <input 
                        type="button" 
                        name="Save Plan" 
                        value="Save Plan"
                        className="bg-black 
                                   text-white 
                                   border border-2 border-black rounded-xl
                                   save_button
                                   p-3
                                   m-2"
                        onClick={save} 
                   />
               </Link>

            </div>

    </div>
    </div>
  );
}

export default EditNote;
