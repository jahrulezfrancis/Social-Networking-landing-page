import { Box } from "@chakra-ui/react";
import { HeaderSec } from "../Header/HeaderSection";
import { NavigatonBar } from "../Header/Navigation";

export default function HomePage() {
    return (
        <Box>
            <NavigatonBar />
            <HeaderSec />
        </Box>

    )
}