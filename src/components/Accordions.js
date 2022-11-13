import React, {useState} from 'react'
import celebrities from '../celebrities.json'
import AccordingContain from './AccordingContain'

export default function Accordions() {
    
const [celebritiesdata , setCelebritiesdata] = useState(celebrities);
const [searchfilter , setSearchfilter] = useState('');

    const Delethandler = (id) =>{
        const newcelebritiesdata = celebritiesdata.filter(
            (e) => e.id !== id
        );

        setCelebritiesdata(newcelebritiesdata);
    } 

   
  return (
    <>
        <div class="input-group mb-3" style={{ borderRadius : 14 }} >
            <span class="input-group-text pe-0" id="basic-addon1" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
            <input type="text" class="form-control" value={searchfilter} onChange={(e)=> setSearchfilter(e.target.value)} placeholder="Search " style={{ borderLeft : 0 }} />
        </div>
        {
            
            celebritiesdata && celebritiesdata.length > 0 ?
            celebritiesdata.filter(val => {if (searchfilter === ''){return val} else if (val.first.toLowerCase().includes(searchfilter.toLowerCase())||val.last.toLowerCase().includes(searchfilter.toLowerCase()) ){return val}}).map( data =>{
                const { id } = data
                return(
                    <> 
                        <AccordingContain key={id} {...data}  Delethandler={Delethandler}/> 
                    </>
                )
            })
            :
            <h5 className='headline6 text-center'>
                Now data in List
            </h5>
        }
        
    </>
  )
}




