import { Box, Heading, HStack, Icon, Image, List, ListIcon, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go"
import VidImage from "../Images/vid-image.png"
import LaptopImage from "../Images/pc-on-table.png"
import DataCableImage from "../Images/cable.png"
import {AiOutlineStar} from "react-icons/ai"


export function AboutNetboks() {
    return (
        <Box pt="5em">
            <HStack justify='center' gap='5em' align='center'>
                <VStack align='start' p='3em' gap={5}>
                    <Heading color='#217BF4' fontSize='1em'>What's NetBoks?</Heading>
                    <Heading color='#0A093D' lineHeight='1.3em'>Why Join to Netbook <br />
                        Social Network?</Heading>
                    <Text lineHeight='28px' fontWeight='400' fontFamily='Inter' color='#656464'>
                        Recent surveys have indicated that small businesses <br />
                        recognise the need they have to connect with <br />
                        consumer.
                    </Text>
                    <Stack className="List-type">
                        <List _before={{ bgColor: 'red' }} spacing='.5em' alignItems='center' >
                            <ListItem >
                                <ListIcon color='#217BF4' as={GoPrimitiveDot} mb='.2em' />
                                Groups
                            </ListItem>
                            <ListItem>
                                <ListIcon color='#217BF4' as={GoPrimitiveDot} mb='.2em' />
                                Messages
                            </ListItem>
                            <ListItem>
                                <ListIcon color='#217BF4' as={GoPrimitiveDot} mb='.2em' />
                                Share
                            </ListItem>
                        </List>
                    </Stack>
                </VStack>
                <HStack gap={5}>
                    <Image src={VidImage} alt='' />
                    <VStack>
                        <Image src={LaptopImage} alt='' />
                        <Image src={DataCableImage} alt='' />
                    </VStack>
                </HStack>
            </HStack>
        </Box>
    )
}

export function AchieveMents(){
    return(
        <Box>
            <VStack>
                <HStack>
                    <Icon as={AiOutlineStar} />
                </HStack>
            </VStack>
        </Box>
    )
}