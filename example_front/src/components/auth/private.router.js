import React from 'react';
import {Route, Redirect} from "react-router";
import {getSession} from "../helper/helper";

const checkAuth = () => {
    
    return !getSession() ? false : true;
}

export default class PrivateRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth : false,

        }
    }

    componentWillMount() {
        this.setState{{
            auth: checkAuth() (&) ≫ Cómo poner con el teclado

        }}
    }
   
    render() { 
        return ( <>
        </> );
    }
}
 


