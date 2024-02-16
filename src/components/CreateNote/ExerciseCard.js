import {react, useState, useEffect, useRef} from 'react';

import './ExerciseCard.css';


    function ExerciseCard({transform, deletePost, setPosts, ChangeTextCreate, ChangeTextEditFirst, ChangeTextEdit, add_func, posts, post, id, textareaCreate, setTextareaCreate, textareaEdit, setTextareaEdit, showTextareaCreate, setShowTextareaCreate}) {
           
        let [edit, setEdit] = useState(false);
        let classNam = `m-2 col-5 textarea ${id}`;
    


        function text() {

            let textareaFinal = '';
            (textareaEdit == '') ? textareaFinal = textareaCreate : textareaFinal = textareaEdit;

            return textareaFinal;
        }



 
function editText(textarea, post) {

   let allPosts = posts;
   allPosts[post.id].textarea = textareaEdit;
   setPosts(() => [...allPosts]) 
}



    function Edit() {

        return (
          <div className="textareaEdit">
                   
             <h4 className="m-2 h4">Edit your Exercise</h4>
             <textarea 
                    className="description border border-2 border-black rounded-xl h-20" 
                    rows="4" 
                    cols="50" 
                    onChange={ChangeTextEdit} 
                    value={textareaEdit}
             >           
             </textarea>
        

             <input 
                    type="button" 
                    name="Edit" 
                    value="Edit exercise"
                    className="bg-black 
                               text-white 
                               border border-2 border-black rounded-xl
                               p-3" 
                    onClick={() => {editText(textareaEdit, post); setEdit(!edit)}}

             />
           </div>
        )
    }


    return (      

         <div id={id}>
            <div className="exercise flex p-2 container container-fluid">

               <p className="m-2 h3 col-1">{post.index + 1}</p>
               <p className={classNam} id={id} style={{width: "100%"}}>{post.textarea}</p>
               <input 
                    type="button" 
                    name="Edit" 
                    value="Edit"
                    className="bg-green-500
                               text-white 
                               border border-2 border-white rounded-xl
                               p-2
                               m-2
                               col-2" 
                    onClick={() => {ChangeTextEditFirst(post); setEdit(!edit)} }
               />
               
               <input 
                    type="button" 
                    name="Delete" 
                    value="Delete"
                    className="bg-red-500 
                               text-white 
                               border border-2 border-white rounded-xl
                               p-2
                               m-2
                               col-2" 
                    onClick={() => deletePost(post)}
               />
             
            </div>

            {edit && Edit()}
         </div>

           )
}

 
export default ExerciseCard;
