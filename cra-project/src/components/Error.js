import React from 'react'

const Error = (prop) =>{
    const style = {
        fontSize:'48px',
        color:'white'
    }
    const highlight = {
        backgroundColor:'lightblue',
        color:'black'
    }
    return(
        <>
        <h1 style={style}>404:Your ghost couldn't find <span style={highlight}>http://68.183.143.81{[prop.location.pathname]}</span></h1>
        </>
    )
}
export default Error;
