import React from 'react'
import Image from "next/image";
import Link from "next/link";

import './styles/footer.css'

const Footer = () => {
  return (
        <div>
            <footer id="colophon" className="site-footer">
                <div className="footer-overlay"></div>
                <div className="top-footer">
                    <div className="container">
                        <div className="flex">
                            <div className="lg:w-1/4 md:w-1/2">
                                <aside className="widget widget_text img-textwidget">
                                    <div className="footer-logo">
                                        <Link href="index.html"><Image src="/logo.png" className="logo-img" alt="logo" width={100} height={100}/></Link>
                                    </div>
                                    <div className="textwidget widget-text">
                                        Favoured Pearls school, is a top-rated private school located in Lagos, Nigeria. We offer a variety of academic programs designed to get your child(ren) the best.
                                    </div>
                                </aside>
                                <div className="footer-social-links">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className="fab fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i className="fab fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2">
                                <aside className="widget">
                                    <h5 className="widget-title">Quick LInks</h5>
                                    <ul>
                                        <li>
                                            <a href="about.html">About us</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Help Center</a>
                                        </li>

                                    </ul>
                                </aside>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2">
                                <aside className="widget">
                                    <h5 className="widget-title">Support</h5>
                                    <ul>

                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="about.html">Parent Community</a>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2">
                                <aside className="widget widget_text school-time">
                                    <h5 className="widget-title">School Hours</h5>
                                    <span>
                                        <i aria-hidden="true" className="far fa-clock"></i>
                                        8 AM - 2:30 PM , Monday - Friday
                                    </span>
                                    <p>Favoured Pearls School, A place to be. A choice to Excel is our Motto .</p>
                                    <a href="contact.html" className="button-round-secondary ">JOIN US NOW</a>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="copy-right">Copyright &copy; 2023 Fvaoured Pearls. All rights reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer