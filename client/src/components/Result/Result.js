import React from "react";
import "./Result.css";

const Result = props => (
    <div className="result row z-depth-4">
        <div className="col s12">

            <div className="row">

                <div className="col s4 center-align">
                    <h5>{props.title}</h5>
                    <h6>{props.author}</h6>
                </div>
                <div className="col s8">
                     <button className="btn waves-effect waves-light blue darken-4 buttons" onClick={() => props.saveBook(props.result)}>Save
                        <i className="material-icons right">save</i>
                    </button>               
                    <a href={props.link} target="_blank"><button className="btn waves-effect waves-light blue darken-4 buttons">View
                        <i className="material-icons right">launch</i>
                    </button> </a>
                </div>

            </div>

            <div className="row">

                <div className="col s4">
                    <img className="resultImg responsive-img" src={props.image} alt={props.title}/>
                </div>
                <div className="col s8">
                    <p>{props.description}</p>
                </div>

            </div>

        </div>
    </div>
)

export default Result;