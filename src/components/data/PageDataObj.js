import React from 'react';


// const title = "Home title";
// const heroText = "Home hero text";
const pageDataObj = require("./PageDataObj.json"); // import pageText from '../data/PageData';


        const PageDataObj = () => {
            return(
                <div>
                    {/* <h3>{console.log(pageDataObj)}</h3> */}
                    {Object.keys(pageDataObj).map(key => {
                        console.log('key name = ', key);
                        pageDataObj[key].map(el => {
                            console.log(el.title);
                        
                    
                 return(
                   <p>{el.title}</p>
                 )
                })}
                )}
                </div>
           
                    
                    )}
           

           
export default PageDataObj;
