import React from 'react';

// Passing props so we can use the exported props from Main.js
function Card(props) {
    return (
        <section className="container" id="sectionBody">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                    <div className="search--box">
                    
                    <form>
                    <label>
                        <input 
                        // value={props.search}
                        value={props.getSearch}
                        onChange={props.handleInputChange}
                        name='term'
                        list='term'
                        type="text" 
                        className='form-control'
                        placeholder="Type Username + Enter"
                        id='term'
                        />
                    </label>
                    </form>
                    </div>
                    </div>

                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}; 

export default Card;