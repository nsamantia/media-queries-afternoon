import React, {Component} from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    constructor(){
        super()

        this.state ={
            display: false
        }
        this.handleSlide = this.handleSlide.bind(this)
    }
    handleSlide(){
        this.setState({
            display: !this.state.display
        })
    }

    render(){
        return(
            <div>
                <div className='navbar'> 
                    <h1 className='app-name'>Start Bootstrap</h1>
                    
                    <div className='navbar-icon' onClick={this.handleSlide}>&#9776; Menu</div>
                    <div className='navbar-button-container'>
                        <button className='navbar-button'>Home</button>
                        <button className='navbar-button'>Projects</button>
                        <button className='navbar-button'>Contact</button>
                    </div>

                    <div className={this.state.display ? 'dropdown' : 'hidden'}>
                        <button className='navbar-button'>Home</button>
                        <button className='navbar-button'>Projects</button>
                        <button className='navbar-button'>Contact</button>
                    </div>
                </div>
            </div>
        )
    }
}