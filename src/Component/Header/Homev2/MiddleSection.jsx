import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";

export function MiddleSection() {
    return (
        <Box>
            <Heading bgColor='linearGradient(96.46deg, #C87C00 3.72%, #8B3208 31.05%, rgba(83, 32, 15, 0.82) 68.54%, #010420 100%)'>
                Tell a better <br />
                brand story
            </Heading>
            <Text color='#425466'>
                Automate the way you search through hashtags and suggested <br />
                profiles to find results 100x faster.
            </Text>
            <Button rightIcon={<BiRightArrowAlt />} w='204px' borderRadius='24px' textAlign='center' fontSize='15px' bg='#231A36' color='white'>Request Demo</Button>
        </Box>
    )
}