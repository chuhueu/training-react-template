import { LandingPage } from './components/landing-page';
import { ServicePage } from './components/service-page';
import { AboutPage } from './components/about-page';
import { ProFessionalTeams } from './components/professional-teams';
import {ContactPage} from './components/contact-page';
import { FooterPage } from './components/footer-page';

const Home = () => {
    return (
        <>
            <LandingPage />
            <ServicePage />
            <AboutPage />
            <ProFessionalTeams />
            <ContactPage />
            <FooterPage />
        </>
    );
};

export default Home;
