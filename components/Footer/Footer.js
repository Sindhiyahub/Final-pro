import React from 'react'
import "./Footer.css"

const Footer = () => {
   
    const scroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="footer">
            <button onClick={scroll}>Back to top</button>
            <div className="footer__container">
                <div className="footer__stuff">
                    <div className="footer__one">
                        <div className="footer__title">
                            <h2>Get to Know Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Careers</h4>
                            <h4>Blog</h4>
                            <h4>About</h4>
                            
                        </div>
                    </div>
                    <div className="footer__two">
                        <div className="footer__title">
                            <h2>Make Money with Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Sell products</h4>
                            <h4>› See More Make Money with Us</h4>
                        </div>
                    </div>
                    
                    <div className="footer__three">
                        <div className="footer__title">
                            <h2>Let Us Help You</h2>
                        </div>
                        <div className="footer__text">
                            
                            <h4>Your Account</h4>
                            <h4>Your Orders</h4>
                            
                            <h4>Help</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Footer
