import { Box } from "@chakra-ui/react";
import { NavigatonBarV2 } from "../Header/Homev2/Navigation";


function PageV2Header() {
    return (
        <Box style={{
           background:  "linear-gradient(#8b00ff, #e91d1d, #8b00ff)"
        }} h='10em'>
            <NavigatonBarV2 />
        </Box>
    )
}


export function HomePageV2() {
    return (
        <Box>
            <PageV2Header />
        </Box>
    )
}