'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(1)
    console.log(activeItem)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <>
            <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                    <Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="active menu-thumb">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    Services
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                    <li><Link href="/service">Services</Link></li>
                                    <li><Link href="/service-carousel">Service Carousel</Link></li>
                                    <li><Link href="/service-details">Service Details</Link></li>
                                </ul>
                                <button type="button" className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)} aria-expanded={activeItem === 2} aria-controls="dropdown-content" aria-label="Expand or collapse dropdown">
                                    <i className="far fa-plus" />
                                </button>
                            </li>
                            <li className="has-dropdown">
                                <Link href="/news">
                                    Pages
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 3 ? "block" : "none"}` }}>
                                    <li><Link href="/project">Project</Link></li>
                                    <li><Link href="/project-carousel">Project Carousel</Link></li>
                                    <li><Link href="/project-details">Project Details</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/team-carousel">Team Carousel</Link></li>
                                    <li><Link href="/team-details">Team Details</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/faq">Faq's</Link></li>
                                    <li><Link href="/error">404 Page</Link></li>
                                </ul>
                                <button type="button" className={`mean-expand ${activeItem === 3 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(3)}  aria-expanded={activeItem === 2} aria-controls="dropdown-content" aria-label="Expand or collapse dropdown">
                                    <i className="far fa-plus" />
                                </button>
                            </li>
                            <li>
                                <Link href="/news">
                                    Blog
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 4 ? "block" : "none"}` }}>
                                    <li><Link href="/news">Blog Grid</Link></li>
                                    <li><Link href="/news-standard">Blog Standard</Link></li>
                                    <li><Link href="/news-details">Blog Details</Link></li>
                                </ul>
                                <button type="button" className={`mean-expand ${activeItem === 4 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(4)} aria-expanded={activeItem === 2} aria-controls="dropdown-content" aria-label="Expand or collapse dropdown">
                                    <i className="far fa-plus" />
                                </button>
                            </li>
                            <li className="mean-last">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
