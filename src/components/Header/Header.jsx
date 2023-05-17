import React from 'react';

function Header(props) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid"> 
                <a className="navbar-brand" href="https://www.google.com/">   
                    <img src="https://www.svgrepo.com/show/442018/to-do.svg" alt="img" width="30" height="24" />     
                </a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Type..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;