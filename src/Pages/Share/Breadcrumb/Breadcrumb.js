import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';
const Breadcrumb = ({children}) => {
    return (
        <div className="breadcrumb-container">
           <ul className="container">
               <li> <Link to="/">Home</Link></li>
               <li>/</li>
               <li>{children}</li>
           </ul>
        </div>
    );
};

export default Breadcrumb;