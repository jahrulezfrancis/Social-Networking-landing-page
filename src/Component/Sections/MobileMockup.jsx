import { Box, HStack, VStack, Text, Heading, Image } from "@chakra-ui/react";
import AppStore from "../Images/app-store.png"
import PlayStore from "../Images/play-store.png"
import MobileScreen from "../Images/mobile-muckup.png"



export function MobileMockUp() {
    return (
        <Box w='100%' bgColor='#E5F0FD' mt='5em'>
            <HStack justify='space-around'>
                <VStack align='start'>
                    <Text color='#217BF4' fontSize='1.2em' fontWeight='500'>Get Our Aplication</Text>
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
            </HStack>
        </Box>
    )
}