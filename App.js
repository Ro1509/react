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

//const Comp= ()=>{
//    return (
//        <h1>Functional Component</h1>
//    )
//}
const Logo=()=>(
    <a href="/">
        <img
        alt="logo png"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxSF3YnbGO83lkANWkY8nkwLKv7DFiLi88A&usqp=CAU"
        />
    </a>
);

const HeaderComponents= ()=>{
    return (
        <div className="top-component" style={top}>
            <Logo/>   
            <div className="list-item">
                <ol className="item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </div>
        </div>
        
        );
};


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponents />);