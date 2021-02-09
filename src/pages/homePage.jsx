import React from 'react'
import { Container } from 'react-bootstrap'
import ControlledCarousel from '../components/Home/carousel/carousel'
import LatestMangaSection from '../components/Home/latest-manga-section/latestMangaSection'

function HomePage() {
    return (
        <Container>
            <ControlledCarousel/>
            <LatestMangaSection/>
        </Container>
    )
}

export default HomePage
