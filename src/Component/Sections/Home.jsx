import { Avatar, Box, Button, Flex, Heading, HStack, Icon, Image, List, ListIcon, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go"
import VidImage from "../Images/vid-image.png"
import LaptopImage from "../Images/pc-on-table.png"
import DataCableImage from "../Images/cable.png"
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai"
import { BsTrophy, BsGithub } from "react-icons/bs"
import { BiRightArrowAlt } from "react-icons/bi"
import React from "react";


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

export function AchieveMentsTemp(props) {
    return (
        <Box>
            <VStack align='start' justify='center' w='21em' p='1em' gap='1em'>
                <HStack align='center'>
                    {props.headingIcon}
                    <Text color='#0A093D'>{props.heading}</Text>
                </HStack>
                <HStack>
                    <Flex>
                        {props.Avatar1}
                        {props.Avatar2}
                        {props.Avatar3}
                    </Flex>
                    <Heading color='#5D5B70' fontSize='1em'>{props.leftText}<span style={{ color: "#217BF4" }}>{props.coloredText}</span> {props.rightText}</Heading>
                </HStack>
                <Text color='#8C8C8C' fontSize='1em'>
                    More than 2 billion we people over <br />
                    countries use socibooks we to stay <br />
                    in touch with friends.
                </Text>
                <Button bgColor={props.btnBgColor} color={props.btnColor} rightIcon={<AiOutlineRight />}>{props.buttonText}</Button>
            </VStack>
        </Box>
    )
}

export function AchieveMents() {
    return (
        <React.Fragment>
            <Box mt='5em'>
                <HStack justify='center'>
                    <AchieveMentsTemp headingIcon={<Icon color='#217BF4' fontSize='1.75em' as={AiOutlineStar} />}
                        heading='4.8 Rating' Avatar1={<Avatar size='xs' />} Avatar2={<Avatar size='xs' />}
                        Avatar3={<Avatar size='xs' />} coloredText='+836' rightText='members' buttonText='Join Community' btnColor='#217BF4'
                    />
                    <AchieveMentsTemp headingIcon={<Icon color='#217BF4' fontSize='1.75em' as={BsTrophy} />}
                        heading='Awwwards' Avatar1={<Icon fontSize='2em' color='red' as={BsGithub} />} leftText='Best of ' coloredText='2021'
                        rightText='on github' buttonText='Go to awards'
                    />
                    <VStack align='start' gap='2em'>
                        <Stack>
                            <Text fontWeight='500' color='#217BF4' fontSize='1.5em'>Our Achievement</Text>
                            <Heading color='#0A093D' fontFamily='Inter' fontWeight='600' fontSize='3em'>
                                We are Connecting <br />
                                You The Digital Life.
                            </Heading>
                        </Stack>
                        <Text>
                            The scope the Social Media becomes crucial Is <br />
                            helps the business to directly engage with their <br />
                            needs and wants.
                        </Text>
                        <Button h='3em' p='1em' alignItems='center' color='white' _hover={{ bgColor: 'teal' }} bgColor='#217BF4' rightIcon={<BiRightArrowAlt />}>Discover Me</Button>
                    </VStack>
                </HStack>
            </Box>
        </React.Fragment>

    )
}