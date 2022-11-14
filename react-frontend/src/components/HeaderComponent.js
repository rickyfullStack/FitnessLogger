import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">Frosty Fitness Logger</a></div>
                    <div><a href="/excercises" className="navbar-brand">                 |                 Excercises</a></div>
                    <div><a href="/nutrition" className="navbar-brand">                 |                 Nutrition</a></div>
                    <div><a href="/about-me" className="navbar-brand">                 |                 About Me</a></div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
