import {react, useState, useEffect, useRef, useMemo} from 'react';
import $ from "jquery";
import ExerciseCard from './ExerciseCard';
import './ListOfExercises.css';


function ListOfExercises({amount_exercises, setAmountExercises, deletePost, deleteText, posts, setPosts, index, setIndex, textareaCreate, setTextareaCreate, textareaEdit, setTextareaEdit, showTextareaCreate, setShowTextareaCreate}) {

 console.log('ListOfExercises');



function transform(post) {
        let text_copy = ''
        let text = post.textarea;

console.log(post);

      if(window.innerWidth > 1250) {
        if(post.textarea.length > 34) {

            text_copy = text.slice(0, 31) + '...';
            console.log(post.textarea);
        } else {
           text_copy = text;
        }


} else if(window.innerWidth >= 480) {
    if(post.textarea.length > 24) {
            
         text_copy = text.slice(0, 21) + '...';
              
        } else {
           text_copy = text;
        }


} else {
    if(post.textarea.length > 14) {
            
            text_copy = text.slice(0, 11) + '...';
            
        } else {
           text_copy = text;
        }
}

return text_copy;
}


function transform_function() {

console.log(posts);
    let copy_posts = Object.assign([], posts);



        for(let i = 0; i < copy_posts.length; i++) {
        copy_posts[i].textarea = transform(copy_posts[i]);
            console.log(copy_posts);
    console.log(posts);
        /*
 let textarea_copy = copy_posts[i].textarea;
            textarea_copy = transform(posts[i]);
            setTextareaEdit(textarea_copy);
        */
    }
// console.log(copy_posts);
// console.log(posts);
// copy_posts.map((post) => {let c = transform(post); console.log(c); post.textarea = c});    // из-за этой строки перестает работать на мобилке

return copy_posts;
}


   // let arr = transform_function();
    // console.log(arr);       
 
 // $(window).on('resize', () => { console.log(transform_function()) });








      function ChangeTextCreate(e) {

           setTextareaCreate(e.target.value);
         //  console.log(post);
      }



console.log(posts);
console.log(posts.length);
setIndex(posts.length);

                let post = {
          index: index,
          textarea: textareaCreate,
          id: index
        };

      function add() {
        console.log(posts);
        

        console.log('INDEXXXXXXXXX ' + index)
   

        setPosts([...posts, post]);
                // console.log(post.textarea);
                console.log(posts);
                          
                setTextareaCreate('');
                setTextareaEdit('');
        setAmountExercises(posts.length + 1);
      }



        function add_func() {
            console.log('add');
        add();
        setShowTextareaCreate('none');
    }


                 function ChangeTextEditFirst(post) {

           setTextareaEdit(post.textarea);

      }

                       function ChangeTextEdit(e) {

e.target.focus();
           setTextareaEdit(e.target.value);
           console.log(e.target);
           

      }


    return (    
      <div>     
          <div className="exercises m-3">
            <h3 className="text-xl">Exercises</h3>
            
              <div className="border-t-2 border-b-2 border-gray">
                 { 
                    posts.map((post, id) => 
                    <ExerciseCard ChangeTextEditFirst={ChangeTextEditFirst} ChangeTextEdit={ChangeTextEdit} deletePost={deletePost} setPosts={setPosts} add_func={add_func} posts={posts} post={post} key={id} id={id} textareaCreate={textareaCreate} setTextareaCreate={setTextareaCreate} textareaEdit={textareaEdit} setTextareaEdit={setTextareaEdit} showTextareaCreate={showTextareaCreate} setShowTextareaCreate={setShowTextareaCreate} />
                 )}
              </div>

          </div>



       <div className="textareaCreate text-center" style={{display: showTextareaCreate}}>
                   
                   <h4 className="m-2 h4">Write your Exercise</h4>
                   <textarea className="description border border-2 border-black rounded-xl h-20 mr-1 ml-1" 
                             rows="4" 
                             cols="50" 
                             onChange={ChangeTextCreate} 
                             value={textareaCreate}>
                                
                    </textarea>
        
             <input 
                    type="button" 
                    name="Save" 
                    value="Save exercise"
                    className="bg-black 
                               text-white 
                               border border-2 border-black rounded-xl
                               p-3
                               mr-1
                               ml-1" 
                    onClick={() => {add_func(); transform(post)}}
             />

    </div>





         </div>

           )
  
}

export default ListOfExercises;
