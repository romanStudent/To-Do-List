import {react, useState, useEffect, useRef} from 'react';

import './ExerciseCard.css';


    function ExerciseCard({transform, ref, deletePost, setPosts, ChangeTextCreate, ChangeTextEditFirst, ChangeTextEdit, add_func, posts, post, id, textareaCreate, setTextareaCreate, textareaEdit, setTextareaEdit, showTextareaCreate, setShowTextareaCreate}) {
           let [edit, setEdit] = useState(false);
           let classNam = `m-2 col-5 textarea ${id}`;


// console.log('card');


if(textareaEdit == '') {
  //  console.log(textareaEdit);
  //  console.log(id);
  //  console.log(post.id);
    //setTextareaEdit(posts[id].textarea)
}
    
/*
    function showChange() {
 
        console.log(post);
        // (showTextarea == 'none') ? setShowTextarea('block') : setShowTextarea('none');
        
           (showTextarea == 'none') ? setShowTextarea('block') : setShowTextarea('none');
            return showTextarea;
    }




    function edit_save(e) {
               console.log(post);
               // (showEdit == false) ? setShowEdit(true) : setShowEdit(false);
              // (post.showEdit == false) ? post.showEdit = true : post.showEdit = false;
               (showEdit == 'none') ? setShowEdit('block') : setShowEdit('none');
               post.showEdit = showEdit;
              // return post.showEdit;
    }

    function edit_click(e) {
               
        
// (post.active == false) ? post.active = true : post.active = false;
// (post.showEdit == false) ? post.showEdit = true : post.showEdit = false;
// console.log(post.id);
// console.log(post.showEdit)

        (showEdit == 'none') ? setShowEdit('block') : setShowEdit('none');

post = {

          index: post.index,
          textarea: post.textarea,
          id: post.index,
          active: post.active,
          showEdit: post.showEdit
        
}

    }


    function Edit() {
        return (
          <div className="textareaEdit" style={{display: post.showEdit}}>
                   
                   <h4 className="m-2 h4">Edit your Exercise</h4>
                   <textarea className="description border border-2 border-black rounded-xl h-20" rows="4" cols="50" onChange={ChangeText} value={textarea}></textarea>
        

             <input 
                    type="button" 
                    name="Edit" 
                    value="Edit exercise"
                    className="bg-black 
                               text-white 
                               border border-2 border-black rounded-xl
                               p-3" 
                   // onClick={() => {return <NewExercise/>} }
                                onClick={edit_save}

             />
           </div>
        )
    }


    function Exercise() {
        return (
           <div className="exercise flex p-2 container" >
            <p className="m-2 h4 col-1">{post.index + 1}</p>
            <p className="m-2 col-5">{post.textarea}</p>
            <input 
                type="button" 
                name="Edit" 
                value="Edit"
                className="bg-black 
                           text-white 
                           border border-2 border-black rounded-xl
                           p-2
                           m-2
                           col-2" 
                onClick={edit_click}
            />
            <input 
                type="button" 
                name="Delete" 
                value="Delete"
                className="bg-black 
                           text-white 
                           border border-2 border-black rounded-xl
                           p-2
                           m-2
                           col-2" 
            />
</div>
        )
    }
*/

           function text() {
            let textareaFinal = '';
            (textareaEdit == '') ? textareaFinal = textareaCreate : textareaFinal = textareaEdit;

            return textareaFinal;
           }



 
function editText(textarea, post) {
    //console.log(post.id);
   let allPosts = posts;
  // console.log(allPosts[post.id]);
   allPosts[post.id].textarea = textareaEdit;
  // console.log(allPosts[post.id]);
  // console.log(textarea);

   setPosts(() => [...allPosts]) 
}



    function Edit() {
          //  console.log(textareaEdit);
        return (
          <div className="textareaEdit">
                   
                   <h4 className="m-2 h4">Edit your Exercise</h4>
                   <textarea className="description border border-2 border-black rounded-xl h-20" rows="4" cols="50" onChange={ChangeTextEdit} value={textareaEdit}></textarea>
        

             <input 
                    type="button" 
                    name="Edit" 
                    value="Edit exercise"
                    className="bg-black 
                               text-white 
                               border border-2 border-black rounded-xl
                               p-3" 
                   // onClick={() => {return <NewExercise/>} }
                                onClick={() => {editText(textareaEdit, post); setEdit(!edit)}}

             />
           </div>
        )
    }


    return (      

<div id={id} ref={ref}>
          <div className="exercise flex p-2 container container-fluid">

            <p className="m-2 h4 col-1">{post.index + 1}</p>
            <p className={classNam} id={id} style={{width: "100%"}}>{post.textarea}</p>
            <input 
                type="button" 
                name="Edit" 
                value="Edit"
                className="bg-black 
                           text-white 
                           border border-2 border-black rounded-xl
                           p-2
                           m-2
                           col-2" 
                // onClick={() => { for(let i = 0; i < posts.length; i++) {if(i !== id && document.getElementById(i).children.length == 2) {setEdit(false); ChangeTextEditFirst(post) } else {setEdit(!edit) } } }}
                   onClick={() => {ChangeTextEditFirst(post); setEdit(!edit)} }
            />
            <input 
                type="button" 
                name="Delete" 
                value="Delete"
                className="bg-black 
                           text-white 
                           border border-2 border-black rounded-xl
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
