import React, { Component } from 'react'
import formats from './spacer.module.css'
class FooterComponent extends Component {
  

    render() {
        return (
            <div className={formats.footerContainer}>
                <footer className = {formats.footer}>
                    A work by Rick Frausto
                </footer>
            </div>
        )
    }
}

export default FooterComponent
