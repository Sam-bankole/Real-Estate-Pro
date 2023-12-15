/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./homepage.css";
import logo from "../icons/RealEstateLogo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className=" bg-slate-600">
        <img src={logo} alt="" className=" bg-slate-900"/>
        <ul>
          <li className=" bg-black">
            <Link to="/" className=" font-bold">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/listing">LISTINGS</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div>
          <FaPhoneAlt />
        </div>
      </div>
    </div>
  );
}
