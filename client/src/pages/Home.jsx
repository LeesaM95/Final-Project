import React from "react";

import styled from 'styled-components';

const Home = () => {
    const MyColStyle = styled div`
        float: left;
        width: 50%;
    `
    const MyRowStyle = styled div`
        content: "";
        display: table;
        clear: both;
    `
    return (
    <div style={MyRowStyle}>
        <div style={MyColStyle}></div>
        <div style={MyColStyle}></div>
    </div>
    )
}

export default Home;