import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../style.css";

class Header extends Component{
render(){
        return (
            <div className="header">
                <Link to="/home" className="fun">Home</Link>
                <Link to="/students" className="fun">Students</Link>
                <Link to="/contact" className="fun">Contact US</Link>
            </div>
        );
    };
};

export default Header;