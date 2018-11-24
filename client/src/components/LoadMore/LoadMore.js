import React from "react";

const LoadMore = props => (
    <div>
        <button className="btn waves-effect waves-light blue darken-4 buttons" onClick={() => props.loadMore(props.saveSearch)}>Load More
            <i className="material-icons right">more</i>
        </button>  
    </div> 
)

export default LoadMore;