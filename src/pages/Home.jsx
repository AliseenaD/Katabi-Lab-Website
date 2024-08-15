import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/Home.css';

export default function Home() {

    return (
        <div>
            <NavBar />
            <h1>Welcome</h1>
            <p>This is the home page</p>
            <button onClick={() => alert('Button clicked!')}>Click me</button>
        </div>
    );
}