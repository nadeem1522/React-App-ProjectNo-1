import React, { useState } from 'react'


export default function AccordingContain({id,first,last,picture,dob,gender,country,description,Delethandler}) {


const fullname = first + " " + last
const [show , setShow] = useState(false);
const [datashow , setDatashow] = useState(false);
const [agedob , setDob] = useState(dob);
const [editgender , setGender] = useState(gender);
const [editcountry , setCountry] = useState(country);
const [editdescription , setDescription] = useState(description);
const [name , setName] = useState(fullname);


    const cancleedit = (id) =>{
        setDatashow(false)
        setGender(gender)
        setDob(dob)
        setCountry(country)
        setDescription(description)
        setName(fullname)
    } 

    const Editfield = (id) =>{
        setDatashow(true)
    }
  return (
    <>
        <div className="card accordion-contain mt-3" >
            <div className="card-body p-2">
                <div className="row">
                    <div className="col-2" onClick={()=>{setShow(!show)}}>
                        <img src={picture} className="rounded-circle image-border" alt="" srcset=""/>  
                    </div>
                    <div className="col-5 m-auto me-0 ms-0 float-start">
                        { 
                                datashow? 
                                <>
                                    <input className='headline6 m-auto' type="text" style={{ maxWidth: 150 ,border: '1px solid #878787',borderRadius: '4px',height:'30px',paddingLeft : 6 }} value ={name}  onChange={(e) => setName(e.target.value)}/>
                                </>
                                :
                                <>
                                    <h6 className='headline5' onClick={()=>{setShow(!show)}}>{name}</h6>
                                </>
                        }
                    </div>
                    <div className="col-5 m-auto text-end" onClick={()=>{setShow(!show)}}>
                        {show? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>}
                    </div>
                </div>
                
                {
                    show && <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col-4">
                            <h6 className='light-grey'>Age</h6>
                            { 
                                datashow? 
                                <>
                                    <input className='headline6' type="text" style={{ maxWidth: 150 ,border: '1px solid #878787',borderRadius: '4px',height:'30px',paddingLeft : 6 }} value={agedob} onChange={(e) => setDob(e.target.value)}/>
                                </>
                                :
                                <>
                                    <h6 className='headline6'>{agedob}</h6>
                                </>
                            }
                            
                        </div>
                        <div className="col-4">
                            <h6 className='light-grey'>Gender</h6>
                            { 
                                datashow? 
                                <>
                                    <select class="form-select text-capitalize" aria-label="Default select example" style={{ maxWidth: 150 ,border: '1px solid #878787',borderRadius: '4px',height:'30px',paddingLeft : 6, paddingTop : 0}} onChange={(e) => setGender(e.target.value)}>
                                        <option selected>{editgender}</option>
                                        <option value="Male">male</option>
                                        <option value="Female">female</option>
                                    </select>
                                </>
                                :
                                <>
                                    <h6 className='headline6 text-capitalize'>{editgender}</h6>

                                </>
                            }

                        </div>
                        <div className="col-4">
                            <h6 className='light-grey'>Country</h6>
                            { 
                                datashow? 
                                <>
                                    <input className='headline6' type="text" style={{ maxWidth: 150 ,border: '1px solid #878787',borderRadius: '4px',height:'30px',paddingLeft : 6 }} value={editcountry} onChange={(e) => setCountry(e.target.value)}/>
                                </>
                                :
                                <>
                                    <h6 className='headline6'>{editcountry}</h6>
                                </>
                            }
                            
                            
                        </div>
                    </div>
                    <div>
                        <h6 className='light-grey mt-2'>Description</h6>
                        <>
                                { 
                                    datashow? 
                                    <>
                                    
                                        <textarea className='headline6' rows="6" cols="800" type="text" style={{ maxWidth: 555 ,border: '1px solid #878787',borderRadius: '4px',paddingLeft : 6 }} value={editdescription} onChange={(e) => setDescription(e.target.value)}/>
                                    </>
                                    :
                                    <>
                                        <h6 className='headline6'>{editdescription}</h6>
                                    </>
                                }   
                        
                        </>
                    </div>
                    <div className='float-end'>
                        <>
                                { 
                                    datashow? 
                                    <>
                                        <button className='btn' onClick={()=> cancleedit(id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        </button>
                                        <button className='btn' type='submit' onClick={()=> setDatashow(false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                            </svg>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                            </svg>
                                        </button>

                                        <button className="btn" onClick={()=> Editfield(id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="blue" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        </button>
                                    </>
                                }   
                        
                        </>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header mb-4 mt-2">
                                <h1 className="headline5 mb-0" id="exampleModalLabel">Are you sure you want to delete?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn close-button" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn delete-button" data-bs-dismiss="modal" onClick={()=>{Delethandler(id)}}>Delete</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                }
            </div>
        </div>
    </>
  )
}
