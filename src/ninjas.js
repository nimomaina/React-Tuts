import React from 'react';

//Ui component
//doesn't have its own state
//we can pass in the functional components props as parameters
// for class/container components we access the state of the parent using this.state
// we don't need to destructure by creating a variable. We can already destructure what we get on the parameters

const Tutorial = ({ ninjas, deleteNinja }) => {
  //we don't need the render method anymore
  //its a function we will just return
  const ninjaList = ninjas.map(ninja => {
    return ninja.company == "Jenga" ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Company: {ninja.company}</div>
        {/* we dont want to envoke the function */}
        {/* so we create an anonymous function to surround it */}
        {/* we envoke functions when we add paranthesis after the function */}
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        <hr></hr>
      </div>
    )
      : (
        <div className="ninja" key={ninja.id}>
          <div>Not our ninja</div>
          <hr></hr>
        </div>

      )
  });

  return (
    <div className="ninja-list">
      {ninjaList}
    </div>
  )

}

export default Tutorial