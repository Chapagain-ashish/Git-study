import React from 'react'
 let obj = {  color: "teal",
 /*  backgroundColor: "red", */
 border: "1px solid black",
  padding: "40px",
  margin: "10px",
  width: "200px",
  grid: "flex"

} 
export default function  Card (props) {

  return (
    <React.Fragment>
            <div className='card' style = {obj}>
                <h1>{props.name || "no name"} 
                  {/* { props.age ? (props.age): null }  */} 
                  { props.age && (props.age) } 
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat nisi fugit excepturi quae dolores labore aliquam deleniti non inventore porro facilis ipsa rem, eligendi illo molestias ut velit eos!</p>
            </div>
          
    </React.Fragment>
  )
}
