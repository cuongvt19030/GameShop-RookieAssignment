import React, { Component } from 'react';
import logo from '../../images/logo.png';
import searchIcon from '../../images/icon-search.png';
import { Link, NavLink } from 'react-router-dom';
import { GAME, GENRE } from '../../Constants/pages';


export default class index extends Component {
    render() {
        return (
            <>
                <div class="site-header">
                    <div class="container">
                        <NavLink id="branding" to="/">
                            <img src={logo} alt="logo" class="logo" />
                            <div class="logo-text">
                                <h1 class="site-title">Game Shop</h1>
                            </div>
                        </NavLink>

                        <div class="right-section pull-right">
                            <a class="cart"><i class="icon-cart"></i> Your Cart</a>
                            <a class="login-button">Login/Register</a>
                        </div>

                        <div class="main-navigation">
                            <button class="toggle-menu"><i class="fa fa-bars"></i></button>
                            <ul class="menu">
                                <li class="menu-item home current-menu-item">
                                    <NavLink to="/">
                                        <i class="icon-home"></i>
                                    </NavLink>
                                </li>
                                <li class="menu-item">
                                    <NavLink to={GAME}>
                                        All Games
                                    </NavLink>
                                </li>
                                <li class="menu-item">
                                    <NavLink to={GENRE}>
                                        Genres
                                    </NavLink>
                                </li>
                                <li class="menu-item"><a >Privacy</a></li>
                            </ul>
                            <div class="search-form">
                                <label><img src={searchIcon} /></label>
                                <input type="text" placeholder="Search..." />
                            </div>
                            <div class="mobile-navigation"></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
