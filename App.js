import React from "react";
import ReactDOM from "react-dom/client";

/******* REACT ELEMENT(OBJRXT) ***** */
/*const head=React.createElement(
    "h1",
    {
        id:"head1"
    },
    "Hello React"
)
*/

/***************JSX**************** */

/*

*head=React Object 
*(....)->jsx expression


const head = (
    <div id="header">
        <h1> hello react </h1>
        <h2> this id rohit</h2>
    </div>
)

*/


/****Functional Component (Imp)**/

/**
 * Note 
 * 1.always starts with capital letter
 * 2.Act as a function 
 * 3.writen < />
 */
//const comp = (
//    <h1>React Element</h1>
//);

const Comp= ()=>{
    return (
        <h1>Functional Component</h1>
    )
}
const Head = () =>{
    return (
        <div>
            <Comp />

        </div>
       
        //<h1>I am learning a new framework called React</h1>
    );
};



const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Head />);