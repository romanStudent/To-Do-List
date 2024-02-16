import {useState, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Calendar from 'react-calendar';
import axios from 'axios';

import './CreateNote.css';
import './Calendar.css';
import ListOfExercises from './ListOfExercises';


function CreateNote({index_day, setIndexDay, days, setDays, amount_days, setAmountDays, show_new_day, setShowNewDay, posts, setPosts, index, setIndex, amount_exercises, setAmountExercises}) {

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


let fin = day.date;
let copy_day_for_component;


  async function send() {
    let cop = day.date;
    console.log(cop.setDate(cop.getDate() + 1));


    day.date = cop;

    const ypo = {
       index: Number(day.id),
       amount_exercises: Number(day.amount_exercises),
       posts: JSON.stringify(posts),
       date: new Date(day.date)    
    }



async function postData(url = "", data = {}) {

  const response = await fetch(url, {
    method: "POST",
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


postData(`http://localhost:3012/api`, ypo)
.then((data) => {
  console.log(data);
})
.catch((err) => console.log(err));

setPosts([]);
console.log(cop.setDate(cop.getDate() - 1));


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
   (display_calendar == 'none') ? setDisplayCalendar('block') : setDisplayCalendar('none');
}

     
  return (
    <div 
        className="h-max mr-1.5 ml-1.5 create_note text-center border border-2 border-white rounded-xl" 
        style={{display:'block'}}
    >

       <h3 className="h3 text-xl header font-bold border-b-2 border-gray">Create Note</h3>
         
       <div className="calendar_main">
             <input 
                   type="button" 
                   className="rounded-tr-2xl rounded-bl-2xl w-40 h-20 text-xl font-bold mt-5" 
                   placeholder="Select Date" 
                   onChange={setDate} 
                   onClick={date_func} 
                   value={date.toLocaleString("en-GB", {day: 'numeric', month: 'numeric', year: 'numeric'})} 
             />

             <div 
                 className="text-center border border-2 border-white rounded-xl calendar_main" 
                 style={{display: `${display_calendar}`}}
             >

                <Calendar 
                         onChange={setDate} 
                         value={date} 
                         defaultValue={new Date()} 
                         minDate={new Date()} 
                         className="calendar" 
                         dateFormat="dd/mm/yy" 
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
