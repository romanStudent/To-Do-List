import {useState, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Calendar from 'react-calendar';
import axios from 'axios';


import './CreateNote.css';
import './Calendar.css';

import {CopyPost} from './CopyPost';
import ListOfExercises from './ListOfExercises';


function CreateNote({index_day, setIndexDay, days, setDays, amount_days, setAmountDays, show_new_day, setShowNewDay, posts, setPosts, index, setIndex, amount_exercises, setAmountExercises}) {

  const ref = useRef();
 const [textareaCreate, setTextareaCreate] = useState('');
  const [textareaEdit, setTextareaEdit] = useState('');
  const [date, setDate] = useState(new Date());
   const [yup, setYup] = useState({});




  const [showTextareaCreate, setShowTextareaCreate] = useState('none');
    const [display_calendar, setDisplayCalendar] = useState('none');


 

function showChange() {
    (showTextareaCreate === 'none') ? setShowTextareaCreate('block') : setShowTextareaCreate('none');
    return showTextareaCreate; 
}


function save() {

 setIndexDay(index_day + 1);
   const day = {
    id: index_day, 
    amount_exercises: amount_exercises, 
    date: date
   }

   setDays([...days, day]);
   setIndex(0);
   setAmountExercises(0);
   setShowNewDay('none');


 let plans = 'http://localhost:3003/plans';

let fin = day.date;

let copy_day_for_component;


  async function send() {
    let cop = day.date;

    day.date = cop;
cop.setDate(cop.getDate() - 1);
day.date = cop;


const ypo = {
    id: Number(day.id),
    amount_exercises: Number(day.amount_exercises),
    posts: JSON.stringify(posts),
    date: JSON.stringify(day.date)
}

    let sendParams = new URLSearchParams();
          sendParams.set('id', Number(day.id));
          sendParams.set('amount', Number(day.amount_exercises));
          sendParams.set('posts', JSON.stringify(posts));
          sendParams.set('date', day.date);


async function postData(url = "", data = {}) {
    console.log('sd');
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
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


postData(`${window.location.origin}/api/${day.id}`, sendParams).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
})
.catch((err) => console.log(err));

setPosts([]);

    
const PORT = 3012;
return ypo;
}
copy_day_for_component = send();

return copy_day_for_component;

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
  document.getElementsByClassName('react-calendar__viewContainer')[0].addEventListener('click', function() {

    setDisplayCalendar('none');

  })

}



function memo() {
            return <ListOfExercises amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} deletePost={deletePost} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} textareaCreate={textareaCreate} setTextareaCreate={setTextareaCreate} textareaEdit={textareaEdit} setTextareaEdit={setTextareaEdit} showTextareaCreate={showTextareaCreate} setShowTextareaCreate={setShowTextareaCreate} />
}

function date_func() {
    console.log(display_calendar);
   (display_calendar == 'none') ? setDisplayCalendar('block') : setDisplayCalendar('none');
}

     
  return (
    <div className="create_note text-center border border-2 border-white rounded-xl" ref={ref} style={{/*display: show_new_day*/display:'block'}}>
       <h3 className="h3 text-xl header font-bold">Create Note</h3>
         
       <div className="calendar_main">
             <input type="button" className="w-40 h-20 text-xl font-bold mt-5" placeholder="Select Date" onChange={setDate} onClick={date_func} value={date.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: 'numeric'})} />

             <div className="text-center border border-2 border-white rounded-xl calendar" style={{display: `${display_calendar}`}}>
                <Calendar onChange={setDate} value={date} defaultValue={new Date()} minDate={new Date()} className="calendar" dateFormat="dd/mm/yy" />
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
             onClick={() => {save()}} 
         />
         </Link>

  </div>

    </div>
    </div>
  );
}

export default CreateNote;
