import React from "react";

const SearchForm = props => (
    <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <textarea 
                    id="searchInput" 
                    className="materialize-textarea"
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text">
                    </textarea>
                    <label htmlFor="searchInput">Enter a title</label>
                    <button onClick={props.handleFormSubmit} className="btn waves-effect waves-light blue darken-4" type="submit" name="action">Search
                        <i className="material-icons right">search</i>
                    </button>                    
                </div>

            </div>
        </form>
    </div>
)

export default SearchForm;