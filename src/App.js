
import {useState} from 'react';
 import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import ListOfItems from './components/ListOfItems/ListOfItems';
import CreateNote from './components/CreateNote/CreateNote';
import EditNote from './components/EditNote/EditNote';

import './App.css';
 const mongoose = require('mongoose');
  const cors = require('cors');


function App() {

  let [index, setIndex] = useState(0);
  let [index_day, setIndexDay] = useState(0);
  let [posts, setPosts] = useState([]);
  let [amount_exercises, setAmountExercises] = useState(posts.length);
  let [days, setDays] = useState([])
  let [show_new_day, setShowNewDay] = useState('none');
  let [show_edit_day, setShowEditDay] = useState('none');
  let [amount_days, setAmountDays] = useState(1);
  let [id_copy, setIdCopy] = useState(-1);
    const [date, setDate] = useState(new Date());

function None() {
    return '';
}

console.log(show_edit_day);

  function new_day_func() {
      (show_new_day === 'none') ? setShowNewDay('block') : setShowNewDay('none');
      setShowEditDay('none');
      setIndex(0);
      setPosts([]);
      setAmountExercises(0);

    return show_new_day; 
  };



    async function edit_day_func(id) {
        setShowNewDay('none');

        await setIdCopy(id);


      setShowEditDay('block');

      let plans = 'http://localhost:3003/plans';



    async function main_function(ind) {
        setPosts([]);
        let arr_copy = [];
 



        async function getData(url = "") {
    console.log('sd');
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}





getData(`http://localhost:3012/api/${ind}`).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call

})
.catch((err, data) => {console.log(err); console.log(data); console.log(`http://localhost:3012/api/${ind}`)});



let r = `http://localhost:3012/api/${ind}`;

        async function ch() {
            await fetch(r) 
           .then(response => response.json())
           .then((g) => {let copy_date = g[ind].date; let v = JSON.parse(copy_date); let str_w = v.split('T')[0]; setDate(str_w);  console.log(typeof(v)); console.log(g[ind].date); console.log(date)});
           
}

    }

        main_function(id);

}


function Create() {
    return (
        <div>
                      <ListOfItems id_copy={id_copy} setIdCopy={setIdCopy} edit_day_func={edit_day_func} posts={posts} days={days} new_day_func={new_day_func} />
           <CreateNote index_day={index_day} setIndexDay={setIndexDay} days={days} setDays={setDays} amount_days={amount_days} setAmountDays={setAmountDays} show_new_day={show_new_day} setShowNewDay={setShowNewDay} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} />
        
 
        </div>
    )
}

function Edit() {
    return (
        <div>
            <ListOfItems id_copy={id_copy} setIdCopy={setIdCopy} edit_day_func={edit_day_func} posts={posts} days={days} new_day_func={new_day_func} />
           <EditNote date={date} setDate={setDate} id_copy={id_copy} index_day={index_day} setIndexDay={setIndexDay} days={days} setDays={setDays} amount_days={amount_days} setAmountDays={setAmountDays} show_edit_day={show_edit_day} setShowEditDay={setShowEditDay} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} />
        
 
        </div>
    )
}

  return (
    
    <BrowserRouter>
    <div className="App flex container-fluid md:mt-3 grid md:grid-cols-3 sm:grid-cols-1" id="App">
     <Routes>
      <Route exact="true" path="/" element={ <ListOfItems id_copy={id_copy} setIdCopy={setIdCopy} edit_day_func={edit_day_func} posts={posts} days={days} new_day_func={new_day_func} />} />
        
      <Route exact="true" path="/create" element={
         <Create />
      } />
       <Route exact="true" path={`/edit/${id_copy}`} element={
        <Edit />
    }
        />
      </Routes>
    </div>
    </BrowserRouter>
    


  ); 
}

export default App;
