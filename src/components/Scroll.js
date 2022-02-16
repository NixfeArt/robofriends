import React from 'react';

const Scroll = (props) => {
    return(
        // we can use inline style as an object {{}} where inside of that object we return styles.. however styles needs to be CamelCase
        //for exmp background-color to backgroundColor
        <div style={{overflow: 'scroll', height: '800px'}}>
            {props.children}
        </div>
        // We can pass children since this is self closing tag / component inside of App component and we pass children as {props.children}
    )
}

export default Scroll;