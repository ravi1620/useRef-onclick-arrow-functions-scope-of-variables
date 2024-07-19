import React, { useRef } from 'react'

function InterMediateMarksSheet() {
let firstNameInputRef=useRef();
let lastNameInputRef=useRef();
let sansInputRef= useRef();
let engInputRef= useRef();
let mathsInputRef= useRef();
let phyInputRef= useRef();
let chemInputRef= useRef();
   let resultParaRef=useRef(); 
   let a=200;
   console.log(course;)

  return (
    <div>
        <form className="form">
            <div>
                <label className="label">First Name</label>
                <input type='text'ref={firstNameInputRef}></input>
            </div>
            <div>
                <label className="label">Last Name</label>
                <input type='text'ref={lastNameInputRef}></input>
            </div>
            <div>
                <label className="label">Sanskrit</label>
                <input type='number'ref={sansInputRef}></input>
            </div>
            <div>
                <label className="label">English</label>
                <input type='number'ref={engInputRef}></input>
            </div>
            <div>
                <label className="label">Mathematics</label>
                <input type='number'ref={mathsInputRef}></input>
            </div>
            <div>
                <label className="label">Physics</label>
                <input type='number'ref={phyInputRef}></input>
            </div>
            <div>
                <label className="label">Chemistry</label>
                <input type='number'ref={chemInputRef}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                let firstName=firstNameInputRef.current.value
                let lastName=lastNameInputRef.current.value
                 let sansMarks=Number(sansInputRef.current.value);
                 let engMarks=Number(engInputRef.current.value);
                 let mathsMarks=Number(mathsInputRef.current.value);
                 let phyMarks=Number(phyInputRef.current.value);
                 let chemMarks=Number(chemInputRef.current.value);
              console.log(a);
              let course=mern;
                 let totalMarks=Number(sansMarks+engMarks+mathsMarks+phyMarks+chemMarks);




             
             //alert(`Total Marks are ${totalMarks}`);
             resultParaRef.current.innerHTML=(`${firstName} ${lastName} got Total Marks are ${totalMarks}`);
             console.log(totalMarks);


                }}>Calculate Result </button>
            </div>
            <p ref={resultParaRef}>Please enter values and get results</p>
        </form>
    </div>
  )
}

export default InterMediateMarksSheet