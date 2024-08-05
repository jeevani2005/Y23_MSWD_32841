import React from 'react'

const Faculty = (props) => {
  return (
    <div class="Faculty">
         <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>DEPARTMENT</th>
        <th>DESIGNATION</th>
      </tr>
      <tr>
      <h1>Welcome {props.name} logged in as {props.type} at {props.branch} </h1>

        
       </tr>
      </table>
    </div>
  )
}

export default Faculty
