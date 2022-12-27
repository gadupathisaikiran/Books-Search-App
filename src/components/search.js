import React, { useState } from 'react'

import axios from 'axios';




export default function Search() {




const [books,setbooks]=useState("")






  const booksearch=async (e)=>{

   

       await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`).then((res) => {

    

          
           
            setbooks(res.data.items)
           

            console.log(books)

        }).catch((e) => {


            console.log(e)


        })


        

    }


    

   

    return (
        <div>
            <input style={{ width: "800px", height: "50px", marginLeft: "350px", fontSize: "large" }} type="text" onBlur={(e)=>{booksearch(e)}}   placeholder='search book'></input>


            <button type='submit' style={{ height: "50px", width: "50px" }} ><span class="material-symbols-outlined">
                search
            </span></button> <br/>






{
  (books)?

books.map(element => {

   

    return(
        
        <span className='book' style={{color:"white",width:"200px",height:"200px",display:"inline",marginBottom:"200px"}}>

      
 
        <a href={element.volumeInfo.infoLink}>   <img className='bookimg' src={(element.volumeInfo.readingModes.image==true)?element.volumeInfo.imageLinks.thumbnail:""} alt="img"/> <h1 style={{color:"white"}}>{element.volumeInfo.title}</h1></a> 

          

           <p>{element.volumeInfo.authors}</p>

         
           <p>PAGE COUNT-{element.volumeInfo.pageCount}</p>
           <p>RATING-{element.volumeInfo.averageRating}</p>
           


         
        </span>
        
    )
   

    })
:""

}

    
   

         
      
                

              











        </div>
    )
}
