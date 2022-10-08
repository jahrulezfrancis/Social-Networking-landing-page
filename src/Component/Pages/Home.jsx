import { Box } from "@chakra-ui/react";
import { HeaderSec } from "../Header/HeaderSection";
import { MobileNav, NavigatonBar } from "../Header/Navigation";
import { BlogSection } from "../Sections/Blog";
import { Features } from "../Sections/Features";
import { Footer } from "../Sections/Footer";
import { AboutNetboks, AchieveMents } from "../Sections/Home";
import { MobileMockUp } from "../Sections/MobileMockup";
import { TeamMembers } from "../Sections/Team";


export default function HomePage() {
    return (
        <Box>
            <NavigatonBar />
            <MobileNav />
            <HeaderSec />
            <AboutNetboks />
            <AchieveMents />
            <Features />
            <TeamMembers />
            <MobileMockUp />
            <BlogSection />
            <Footer />
        </Box>

    )
}