import {react, useState, useEffect, useRef, useMemo} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

import './EditNote.css';
import './Calendar.css';

import ListOfExercises from './ListOfExercises';



function EditNote({date, setDate, id_copy, save_edited, index_day, setIndexDay, days, setDays, amount_days, setAmountDays, show_edit_day, setShowEditDay , posts, setPosts, index, setIndex, amount_exercises, setAmountExercises}) {

console.log(Calendar.propTypes);


let url = `http://localhost:3003/plans/${id_copy}`;

/*
fetch(url) 
  .then(response => response.json)
  .then(main => JSON.parse(main.date))
  .then(final => setDate(final));
*/



  const ref = useRef();
 const [textareaCreate, setTextareaCreate] = useState('');
  const [textareaEdit, setTextareaEdit] = useState('');
//   const [date, setDate] = useState(new Date());


  const [showTextareaCreate, setShowTextareaCreate] = useState('none');
  const [display_calendar, setDisplayCalendar] = useState('none');




 

function showChange() {
    (showTextareaCreate == 'none') ? setShowTextareaCreate('block') : setShowTextareaCreate('none');
    return showTextareaCreate; 
}

/*
let url = `http://localhost:3003/plans/${id_copy}`;

if(id_copy >= 0) {
async function save_date() {
await fetch(url)
            .then(response => response.json())
        .then(main => setmain.date)
}
save_date();
}
*/

   console.log('DAY ID EDITNOTE' + id_copy);




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

//let day_str = day.date.getFullYear() + '/' + day.date.getMonth() + '/' + day.date.getDate();

function save() {


console.log(days);
console.log(days[id_copy].amount_exercises);
setAmountExercises(posts.length);

   console.log(amount_exercises);

   // setDays([...days, day]);
   // setDays(days.splice())
   console.log(days[id_copy]);
   days[id_copy] = day;
   console.log(days[id_copy]);






// let plans = 'http://localhost:3003/plans';
//   let plans = 'https://v1.nocodeapi.com/programmer_roman/netlify/hTWTzglhPRxhhqjZ/listForms?site_id=062b08cf-49c4-415a-9a90-b397c72e143f';

let fin = day.date;

  async function send() {

// УРА НАХУЙ!!! ДАННЫЕ В JSON ЗАМЕНЯЮТСЯ

   console.log(id_copy);    // НАКОНЕЦ-ТО НАХУЙ. ЕБУЧИЙ ПРАВИЛЬНЫЙ 'ID' ПОЛУЧИЛ

/*
let h = cop.setDate(cop.getDate());

setDate(h);
*/
// cop.setDate(cop.getDate() - 1);
// day.date = cop;

const ypo = {
    id: Number(day.id),
    amount_exercises: Number(day.amount_exercises),
    posts: JSON.stringify(posts),
    date: JSON.stringify(day.date)
}


/*
await fetch(url, {
    method: 'PUT',
    body: sendParams
})
*/


async function putData(url = "", data = {}) {
    console.log(data);
    console.log(url);
    console.log('sd');
  // Default options are marked with *
    /*
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
   // mode: "cors", // no-cors, *cors, same-origin
   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
   // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   // redirect: "manual", // manual, *follow, error
   // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
  */
/*
    fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
   // mode: "cors", // no-cors, *cors, same-origin
   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
   // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "content-type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   // redirect: "manual", // manual, *follow, error
   // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
*/


////////////////////// ТУТ ПОМЕНЯТЬ КОД ДЛЯ МЕТОДА "PUT", А НЕ "GET"
    /*
       const response = await axios.put(url);
       const result = response.data;
       
       if(result[ind] == undefined) {
         edit_day_func(id);
       } else {
        const resultFinal = JSON.parse(result[ind].posts);
        setPosts(resultFinal);
        const dateFinal = result[ind].date;
        let v = dateFinal; let str_w = v.split('T')[0]; setDate(str_w);
       }
       // const resultFinal = JSON.parse(result[0].posts);
       
       console.log(ind);
       console.log(result[ind]);
    */
}


/*
putData(`http://localhost:3012/api/${id_copy}`, ypo).then((data) => {
    console.log(id_copy);
  console.log(data); // JSON data parsed by `data.json()` call
  console.log('sd');
})
.catch((err) => {console.log(err.message); console.log(ypo)});
*/

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

/*
if(display_calendar == 'block') {
document.getElementsByClassName('react-calendar__viewContainer')[1].addEventListener('click', function() {
   setDisplayCalendar('none');
})
}
*/


function memo() {
            return <ListOfExercises amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} deletePost={deletePost} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} textareaCreate={textareaCreate} setTextareaCreate={setTextareaCreate} textareaEdit={textareaEdit} setTextareaEdit={setTextareaEdit} showTextareaCreate={showTextareaCreate} setShowTextareaCreate={setShowTextareaCreate} />
}

function date_func() {
   (display_calendar == 'none') ? setDisplayCalendar('block') : setDisplayCalendar('none');
}



  return (
    <div className="edit_note_block text-center md:col-span-6 sm:col-span-12 border border-2 border-white rounded-xl" style={{/*display: show_edit_day*/ display:'block'}}>
       <h3 className="header text-xl font-bold">Edit Note</h3>
         {/*
         <div className="dropdown body">
            <input type="button" className="btn btn-primary bg-primary dropdown-toggle w-40 h-20 text-xl font-bold show" data-bs-toggle="dropdown" placeholder="Select Date" onChange={setDate} value={date.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: 'numeric'})} />

            <div className="dropdown-menu text-center border border-2 border-white rounded-xl">
                <Calendar onChange={setDate} value={date} defaultValue={new Date()} minDate={new Date()} className="calendar" dateFormat="dd/mm/yy" />
            </div>
         </div>
         */}

       <div className="calendar_main">
             <input type="button" className="btn w-40 h-20 text-xl font-bold mt-5" placeholder="Select Date" onChange={setDate} onClick={date_func} value={date.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: 'numeric'})} />

             <div className="text-center border border-2 border-white rounded-xl" style={{display: `${display_calendar}`}}>
                <Calendar onChange={setDate} value={date} defaultValue={new Date()} minDate={new Date()} className="calendar" />
            </div>
       </div>


         

         <div className="body mt-20">

           {/* useMemo(() => {memo()}, [posts]) */ memo()}
                 
          


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
                           //     onClick={add}

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
