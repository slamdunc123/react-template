import React from 'react';


// const title = "Home title";
// const heroText = "Home hero text";
const pageData = require("./PageData.json"); // import pageText from '../data/PageData';

const PageData = () => {
    return(
        <div>
            <h3>{console.log(pageData)}</h3>
            {pageData.map((pageData) => {
         return(
           <p>{pageData.title}</p>
         )
       })}
        </div>
    )
}

export default PageData;