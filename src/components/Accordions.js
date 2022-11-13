import React, {useState} from 'react'
import celebrities from '../celebrities.json'
import AccordingContain from './AccordingContain'

export default function Accordions() {
    
const [celebritiesdata , setCelebritiesdata] = useState(celebrities);

    const Delethandler = (id) =>{
        const newcelebritiesdata = celebritiesdata.filter(
            (e) => e.id !== id
        );

        setCelebritiesdata(newcelebritiesdata);
    } 
 
  return (
    <>
        {
            
            celebritiesdata && celebritiesdata.length > 0 ?
            celebritiesdata.map( data =>{
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




