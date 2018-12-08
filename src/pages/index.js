import React from "react"
import Helmet from "react-helmet"
import "../assets/sass/styles.sass"
import koalabear from '../assets/images/koalabear.png'

export default () =>
    <div>
        <Helmet>
            <title>Embrace The Future For Your Business Website Development</title>
            <meta name='description'
                  content="Thousands of businesses are graduating from typical CMS, and making more money by building a Stronger, Faster, and Intelligent Web Presence using Koala Bear Co."/>
        </Helmet>
        <section className="hero is-primary is-fullheight is-bold">
            <div className="hero-body">
                <div className="container">
                    <img src={koalabear} alt='koala-bear-co' height="100" width="100"/>
                    <h1 className="title">
                        Koala Bear Co.
                    </h1>
                    <h2 className="subtitle">
                        Thousands of businesses are graduating from typical CMS, and making more money by
                        building a Stronger, Faster, and Intelligent Web Presence. We make solutions that scale, along
                        with your business’ growth,
                        designed for your special needs.
                        We’ll provide a quick, no pressure, free evaluation.
                        You’ll learn how making you digital presence with today’s technology will help you engage more
                        leads and grow your image stronger.
                    </h2>
                    <a href="mailto:contact@koalabear.co" className='button is-outlined is-white'>Drop Us A Mail</a>
                </div>
            </div>
        </section>
    </div>
