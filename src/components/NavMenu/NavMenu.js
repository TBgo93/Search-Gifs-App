import React from 'react'
import {Link} from 'wouter'
import 'assets/css/NavMenu.css'
import LazyTrendingSearches from '../TrendingSearches/TrendingSearches'

export default function NavMenu(){

    const eventMenu = () => {
        document.getElementById('nav-icon').classList.toggle('open')
        document.querySelector('.navbar').classList.toggle('open')
    }

    return(
        <nav>
            <div id="nav-icon" onClick={eventMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navbar">
                <ul className="navbar-link">
                    <Link to="/">
                        Inicio
                    </Link>
                    <Link to="/top10gifs">
                        Top10 Gifs Trendigs
                    </Link>
                    <div className="TrendingSearches">
                        <li className="list-title">
                            Lo mas buscado:
                        </li>
                        <LazyTrendingSearches />
                    </div>
                </ul>
            </div>
        </nav>
    )
}