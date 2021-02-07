import React from 'react';
import { Container } from '@material-ui/core';

import Header from '../components/Header';
import LastProjects from '../components/LastProjects';
import About from '../components/About';
import Footer from '../components/Footer';
import ScrollTopButton from '../components/ScrollTopButton';

function HomeScreen(props) {
    return (
        <div>
            <div id="home">
                <Header/>
            </div>
            <Container maxWidth="lg" style={{marginBottom: 20}}>
                <div id="projects">
                    <LastProjects/>
                </div>
                <div id="about">
                    <About/>
                </div>
            </Container>
            <div id="contact">
                <Footer/>
            </div>
            <ScrollTopButton/>
        </div>
    );
}

export default HomeScreen;