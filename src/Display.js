// Function based component
import React from "react";

const Display = (props) => {
    // props = {
    //     data: {

    //     }
    // }

    console.log(props);//is always a object

    // destructuring of objects
    const { data } = props;

    return (
        //JSX
        <div>
            My name is {data.firstName} and age is {data.age}
        </div>
    )
}

export default Display;


// function add(x) {

//     (function() {
//        console.log(x);
//     })()
// }

// add(10);


// React.createElement(Display, );

