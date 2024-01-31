import {react, useState, useEffect, useRef, useMemo} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

import './EditNote.css';
import './Calendar.css';

import ListOfExercises from './ListOfExercises';



function EditNote({date, setDate, id_copy, save_edited, index_day, setIndexDay, days, setDays, amount_days, setAmountDays, show_edit_day, setShowEditDay , posts, setPosts, index, setIndex, amount_exercises, setAmountExercises}) {

  const ref = useRef();
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
   }


function save() {
setAmountExercises(posts.length);

   days[id_copy] = day;


let fin = day.date;

  async function send() {
let cop = day.date;
    day.date = cop;
 
    let sendParams = new URLSearchParams();
          sendParams.set('id', Number(day.id));
          sendParams.set('amount', Number(day.amount_exercises));
          sendParams.set('posts', JSON.stringify(posts));
          sendParams.set('date', JSON.stringify(day.date));


cop.setDate(cop.getDate() - 1);
day.date = cop;

const ypo = {
    id: day.id,
    amount_exercises: day.amount_exercises,
    posts: posts,
    date: day.date
}




async function putData(url = "", data = {}) {
    console.log('sd');
  // Default options are marked with *
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



putData(`${window.location.origin}/api/${day.id}`, ypo).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
  console.log('sd');
})
.catch((err) => console.log(err));
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

if(display_calendar == 'block') {
document.getElementsByClassName('react-calendar__viewContainer')[1].addEventListener('click', function() {
   setDisplayCalendar('none');
})
}


function memo() {
            return <ListOfExercises amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} deletePost={deletePost} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} textareaCreate={textareaCreate} setTextareaCreate={setTextareaCreate} textareaEdit={textareaEdit} setTextareaEdit={setTextareaEdit} showTextareaCreate={showTextareaCreate} setShowTextareaCreate={setShowTextareaCreate} />
}

function date_func() {
   (display_calendar == 'none') ? setDisplayCalendar('block') : setDisplayCalendar('none');
}



  return (
    <div className="edit_note_block text-center md:col-span-6 sm:col-span-12 border border-2 border-white rounded-xl" style={{/*display: show_edit_day*/ display:'block'}}>
       <h3 className="header text-xl font-bold">Edit Note</h3>


       <div className="calendar_main">
             <input type="button" className="btn w-40 h-20 text-xl font-bold mt-5" placeholder="Select Date" onChange={setDate} onClick={date_func} value={date.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: 'numeric'})} />

             <div className="text-center border border-2 border-white rounded-xl" style={{display: `${display_calendar}`}}>
                <Calendar onChange={setDate} value={date} defaultValue={new Date()} minDate={new Date()} className="calendar" />
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
