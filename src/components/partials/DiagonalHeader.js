import React from 'react';

// Non-Rectangular Headers - uses css in index.css

const DiagonalHeader = () => {
    return(
        <div>
            <h3>Diagonal Header</h3>
            <div className="demo plain">
                    <section>
                        <header></header>
                        <div className="separator"></div>
                        <footer></footer>
                    </section>

                    {/* <section>
                        <header></header>
                        <div class="separator reverse"></div>
                        <footer></footer>
                    </section> */}
            </div>
        </div>
        
           
    )
}

export default DiagonalHeader;