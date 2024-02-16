
import axios from 'axios';
import {useState, useEffect} from 'react';
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
  let [days, setDays] = useState([]);
  let [show_new_day, setShowNewDay] = useState('none');
  let [show_edit_day, setShowEditDay] = useState('none');
  let [amount_days, setAmountDays] = useState(1);
  let [id_copy, setIdCopy] = useState(-1);
  const [date, setDate] = useState(new Date());

function None() {
    return '';
}

  function new_day_func() {
      (show_new_day === 'none') ? setShowNewDay('block') : setShowNewDay('none');
      setShowEditDay('none');
      setIndex(0);
      setPosts([]);
      setAmountExercises(0);

    return show_new_day; 
  };



    async function edit_day_func(id) {
        setPosts([]);
        setShowNewDay('none');
        await setIdCopy(id);
        setShowEditDay('block');



      async function main_function(ind) {
        
        let arr_copy = [];

        let oi = 0;
        async function getData(url = "") {
           try {

             const response = await axios.get(url);
             const result = response.data;


             if(result[ind] == undefined) {

                getData(`http://localhost:3012/api/${ind}`);
                return;
             } else {
                const resultFinal = JSON.parse(result[ind].posts);
                setPosts(resultFinal);
                const dateFinal = new Date(result[ind].date);
        

             oi++;    
             let v = dateFinal; let str_w = v.toISOString().split('T')[0]; setDate(str_w);
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}



getData(`http://localhost:3012/api/${ind}`);



let r = `http://localhost:3012/api/${ind}`;

        async function ch() {
            await fetch(r) 
           .then(response => response.json())
           .then(y => console.log(y))
           .then((g) => {let copy_date = g[ind].date; let v = JSON.parse(copy_date); let str_w = v.split('T')[0]; setDate(str_w)});
           
        }
    }
main_function(id);

}


function Create() {
    return (
        <div className="w-full flex container-fluid md:mt-3 grid sm:grid-cols-1">
           <ListOfItems id_copy={id_copy} setIdCopy={setIdCopy} edit_day_func={edit_day_func} posts={posts} setPosts={setPosts} days={days} new_day_func={new_day_func} />
           <CreateNote index_day={index_day} setIndexDay={setIndexDay} days={days} setDays={setDays} amount_days={amount_days} setAmountDays={setAmountDays} show_new_day={show_new_day} setShowNewDay={setShowNewDay} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} />
        </div>
    )
}

function Edit() {
    return (
        <div className="w-full flex container-fluid md:mt-3 grid sm:grid-cols-1">
           <ListOfItems index={index} setIndex={setIndex} id_copy={id_copy} setIdCopy={setIdCopy} edit_day_func={edit_day_func} posts={posts} setPosts={setPosts} days={days} new_day_func={new_day_func} />
           <EditNote edit_day_func={edit_day_func} date={date} setDate={setDate} id_copy={id_copy} index_day={index_day} setIndexDay={setIndexDay} days={days} setDays={setDays} amount_days={amount_days} setAmountDays={setAmountDays} show_edit_day={show_edit_day} setShowEditDay={setShowEditDay} posts={posts} setPosts={setPosts} index={index} setIndex={setIndex} amount_exercises={amount_exercises} setAmountExercises={setAmountExercises} />
        </div>
    )
}

  return (
    
    <BrowserRouter>
    <div className="App" id="App">
     <Routes>
      <Route exact="true" path="/" element={ <ListOfItems id_copy={id_copy} setIdCopy={setIdCopy} edit_day_func={edit_day_func} posts={posts} setPosts={setPosts} days={days} new_day_func={new_day_func} />} />
        
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
