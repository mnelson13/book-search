import React from "react";

const SavedResult = props => (
    <div className="row result">
        <div className="col s12">

            <div className="row">

                <div className="col s8">
                    <h5>{props.title}</h5>
                    <h6>{props.author}</h6>
                </div>
                <div className="col s4">
                    <button className="btn waves-effect waves-light blue darken-4 buttons" onClick={() => props.deleteBook(props.id)}>Delete
                        <i className="material-icons right">delete</i>
                    </button>                
                    <a href={props.link} target="_blank"><button className="btn waves-effect waves-light blue darken-4 buttons">View
                        <i className="material-icons right">launch</i>
                    </button> </a>
                </div>

            </div>

            <div className="row">

                <div className="col s4">
                    <img className="responsive-img resultImg" src={props.image} alt={props.title}/>
                </div>
                <div className="col s8">
                    <p>{props.description}</p>
                </div>

            </div>

        </div>
    </div>
)

export default SavedResult;