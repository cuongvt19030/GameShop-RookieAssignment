import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <>
                <div class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="widget">
                                    <h3 class="widget-title">Information</h3>
                                    <ul class="no-bullet">
                                        <li>Site map</li>
                                        <li>About us</li>
                                        <li>FAQ</li>
                                        <li>Privacy Policy</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="widget">
                                    <h3 class="widget-title">Consumer Service</h3>
                                    <ul class="no-bullet">
                                        <li>Secure</li>
                                        <li>Shipping &amp; Returns</li>
                                        <li>Shipping</li>
                                        <li>Orders &amp; Returns</li>
                                        <li>Group Sales</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="widget">
                                    <h3 class="widget-title">My Account</h3>
                                    <ul class="no-bullet">
                                        <li>Login/Register</li>
                                        <li>Settings</li>
                                        <li>Cart</li>
                                        <li>Order Tracking</li>
                                        <li>Logout</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="widget">
                                    <h3 class="widget-title">Join our newsletter</h3>
                                    <form action="#" class="newsletter-form">
                                        <input type="text" placeholder="Enter your email..." />
                                        <input type="submit" value="Subsribe" />
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="colophon">
                            <div class="copy">Copyright 2014 Company name. Designed by Themezy. All rights reserved.</div>
                            <div class="social-links square">
                                <a ><i class="fa fa-facebook"></i></a>
                                <a ><i class="fa fa-twitter"></i></a>
                                <a ><i class="fa fa-google-plus"></i></a>
                                <a ><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
