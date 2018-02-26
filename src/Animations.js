import React, { Component } from 'react';
import './Animations.css';

export default class Animations extends Component {
    constructor(props){
        super(props);

        this.state={
            slide:false
        }
    }
    render() {
        return (
            <div>
                <nav className='nav'>
                    <div className='logo'>PORT-A-POTTY EMPORIUM</div>
                    <div className='links'>calls aboot contact</div>
                    <div onClick={()=>this.setState({slide:!this.state.slide})}
                    className='ham'>HAM</div>
                </nav>
                <div className={this.state.slide?'slide menu':'menu'}></div>
            </div>
        );
    }
}