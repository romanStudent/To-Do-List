import {react, useState, useEffect, useRef, useMemo} from 'react';
import ExerciseCard from './ExerciseCard';
import './ListOfExercises.css';


function ListOfExercises({ref, amount_exercises, setAmountExercises, deletePost, deleteText, posts, setPosts, index, setIndex, textareaCreate, setTextareaCreate, textareaEdit, setTextareaEdit, showTextareaCreate, setShowTextareaCreate}) {

  function transform(post) {
        let text_copy = post.textarea;

        if(window.innerWidth > 1250) {
           
           if(post.textarea.length > 34) {
               text_copy = text_copy.slice(0, 31) + '...';
           } else {
               text_copy = post.textarea;
           }

        } 
        
        else if(window.innerWidth >= 480) {
           
           if(post.textarea.length > 24) {
               text_copy = text_copy.slice(0, 21) + '...';
           } else {
               text_copy = post.textarea;
           }

        } else {
           if(post.textarea.length > 14) { 
               text_copy = text_copy.slice(0, 11) + '...';
           } else {
               text_copy = post.textarea;
           }
        }

   return text_copy;
  }


      function ChangeTextCreate(e) {
           setTextareaCreate(e.target.value);
      }

      function ChangeTextEdit(e) {
           setTextareaEdit(e.target.value);
      }


      let post = {
          index: index,
          textarea: textareaCreate,
          id: index
      };

      function add() {
           setIndex(index + 1);
           setPosts([...posts, post]);
           setTextareaCreate('');
           setAmountExercises(posts.length + 1);
      }

      function add_func() {
           add();
           setShowTextareaCreate('none');
      }


      function ChangeTextEditFirst(post) {
           setTextareaEdit(post.textarea);
      }


    return (    
     <div>     
          <div className="exercises m-3">
            <h3 className="text-xl">Exercises</h3>
            
              <div className="border-t-2 border-b-2 border-gray">
                 { 
                    posts.map((post, id) => 
                    <ExerciseCard transform={transform} ref={ref} ChangeTextEditFirst={ChangeTextEditFirst} ChangeTextEdit={ChangeTextEdit} deletePost={deletePost} setPosts={setPosts} add_func={add_func} posts={posts} post={post} key={id} id={id} textareaCreate={textareaCreate} setTextareaCreate={setTextareaCreate} textareaEdit={textareaEdit} setTextareaEdit={setTextareaEdit} showTextareaCreate={showTextareaCreate} setShowTextareaCreate={setShowTextareaCreate} />
                 )}
              </div>

          </div>


          <div className="textareaCreate text-center" style={{display: showTextareaCreate}}>

                   <h4 className="m-2 text-lg">Write your Exercise</h4>
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
