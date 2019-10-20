import React from 'react';
import './Nav.css';


const NavBar = (props) => {

    const pageComponents = []
    for (let i = 0; i < props.numPages; i++) {
        const className = props.currentPage == i ? "active" : ""
        pageComponents.push(<li key={i} onClick={() => props.onClick(i)} className={className}>{i + 1}</li>)

    }

    return (<ul className={"nav"}>{pageComponents}</ul>);
}

export default NavBar;