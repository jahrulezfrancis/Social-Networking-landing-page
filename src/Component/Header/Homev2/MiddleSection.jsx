import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import Card1 from "../../Images/card1.png"
import Card2 from "../../Images/card3.png"
import Card3 from "../../Images/Card2.png"


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
            <Stack>

                <HStack>
                    <Image src={Card1} alt='' />
                    <Image src={Card2} alt='' />
                </HStack>
                <HStack>
                    <Image src={Card3} alt='' />

                </HStack>
            </Stack>
        </Box>
    )
}