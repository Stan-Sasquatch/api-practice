import React from 'react';

const SearchBar = (props) => {
    return (<form onSubmit={props.onSubmit}> Search Here!<input type="text" onChange={props.onChange} />
        <input type="submit" value="Submit" />
    </form>);
}

export default SearchBar;