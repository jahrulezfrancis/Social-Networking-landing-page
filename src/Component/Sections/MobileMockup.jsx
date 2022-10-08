import { Box, HStack, VStack, Text, Heading, Image, Flex, useMediaQuery } from "@chakra-ui/react";
import AppStore from "../Images/app-store.png"
import PlayStore from "../Images/play-store.png"
import MobileScreen from "../Images/mobile-muckup.png"



export function MobileMockUp() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box w='100%' bgColor='#E5F0FD' mt='5em'>
            <Flex direction={mobileDevice ? 'column' : 'row'} align={mobileDevice ? 'center' : 'space-around'} justify={mobileDevice ? 'center' : 'space-around'}>
                <VStack textAlign={mobileDevice ? 'center' : 'left'} align={mobileDevice ? 'center' : 'start'}>
                    <Text textAlign={mobileDevice ? 'center' : 'left'} color='#217BF4' fontSize='1.2em' fontWeight='500'>Get Our Aplication</Text>
                    <Heading color='#2F2C4A' fontSize='2.2em'>
                        You Can Easily Find <br />
                        This App…!
                    </Heading>
                    <Text color='#656464' fontWeight='500' fontSize='.9em'>
                        I say chap that’s suing lavatory chip shop <br />
                        gosh off his smashing boot are you taking <br />
                        the piss posh loo brilliant.
                    </Text>
                    <HStack gap={1}>
                        <Image borderRadius='.5em' src={AppStore} alt='app store image' />
                        <Image src={PlayStore} alt='app store image' />
                    </HStack>
                </VStack>
                <Image h='28em' src={MobileScreen} alt='' />
            </Flex>
        </Box>
    )
}