
import "../styles/Searchbar.css";

function Searchbar(props) {
    return (

        <div className="Searchbar">
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for name here.."
                id="search" />
            <input onClick={props.handleFormSubmit} type="submit" />
        </div>
    );
}

export default Searchbar;