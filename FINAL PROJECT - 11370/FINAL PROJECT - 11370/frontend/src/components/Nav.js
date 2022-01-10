import React from 'react'
import "../nav.css"
import {
    Link
  } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/customers">Customer</Link></li>
                <li><Link to="/">Employees</Link></li>
                <li><Link to="/invoice">Invoice</Link></li>
                <li><Link to="/recruitment">Recruitment</Link></li>
                <li><Link to="/jobs">Job</Link></li>
                <li><Link to="/leaves">Leaves</Link></li>
            </ul>
        </div>
    )
}
