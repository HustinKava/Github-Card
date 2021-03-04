import React from 'react';
import './Card.css';

const style = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
};

// Passing props so we can use the exported props from Main.js
function Card(props) {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="card">
                <div className="card-body">
                    <div className="search--box d-flex justify-content-center">
                    
                    <form onSubmit={props.onSubmit}>
                    <label>
                        <input 
                        value={props.getSearch}
                        onChange={props.onChange}
                        type="text" 
                        className='form-control text-center'
                        placeholder="Type Username + Enter"
                        />
                    </label>
                    </form>
                    </div>
        
                    <img style={style} src={props.getImg} alt={props.getName}/>
                    <h5 className="card-title text-center"><b>{props.getName}</b></h5>
                    <p className="text-center cardLocation">{props.getLocation}</p>

                    <div class="container text-center cardResults">
                    <div class="row">
                        <div class="col-sm">
                            <p className="card-text cardStats"><b>{props.getFollowers}</b></p>
                            <p className='cardAttributes'><b>Followers</b></p>
                        </div>
                        <div class="col-sm">
                            <p className="card-text cardStats"><b>{props.getRepos}</b></p>
                            <p className='cardAttributes'><b>Repositories</b></p>
                        </div>
                        <div class="col-sm">
                            <p className="card-text cardStats"><b>{props.getFollowing}</b></p>
                            <p className='cardAttributes'><b>Following</b></p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}; 

export default Card;