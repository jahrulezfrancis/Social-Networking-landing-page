import { Box, Button, Flex, Heading, HStack, Image, Input, InputGroup, InputRightElement, useMediaQuery, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import FaceBook from "../Images/facebook.png"
import Twitter from "../Images/Twitter.png"
import Linkedin from "../Images/Linkedin.png"
import Instagram from "../Images/instagram.png"
import HeaderLogo from "../Images/footer-logo.png"

export function ListTemplate(props) {
    return (
        <Box>
            <List spacing='1.5em'>
                <Box mb='1em'>
                    <ListItem color='#E7E7E7' fontSize='1.6em' fontWeight='600'>
                        <NavLink><Heading fontSize='1em' color='white'>{props.header}</Heading></NavLink>
                    </ListItem>
                </Box>
                <ListItem color='#E7E7E7' fontSize='1em' fontWeight='400'>
                    <NavLink>{props.item1} <br /> {props.secondLine}</NavLink>
                </ListItem>
                <ListItem color='#E7E7E7' fontSize='1em' fontWeight='400'>
                    <NavLink>{props.item2}</NavLink>
                </ListItem>
                <ListItem color='#E7E7E7' fontSize='1em' fontWeight='400'>
                    <NavLink>{props.item3}</NavLink>
                </ListItem>
                <ListItem color='#E7E7E7' fontSize='1em' fontWeight='400'>
                    <NavLink>{props.item4}</NavLink>
                </ListItem>
            </List>
        </Box>
    )
}

export function Footer() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box bgColor='#2B2B39' mt='5em'>
            <Flex direction={mobileDevice ? 'column' : 'row'} rowGap='3em' justify='space-around' p='2em' align='start'>
                <ListTemplate header='Home' item1='Home' item2='Community' item3='Events' item4='Contact' />
                <ListTemplate header='Resources' item1='Blog' item2='News' item3='Guide' item4='Help Center' />
                <ListTemplate header='Community' item1='NewsFeed' item2='Profile' item3='Friends' item4='Forums' />
                <ListTemplate header='Main Link' item1='Members' item2='Activity' item3='Group' item4='Private Group' />
                <Stack>
                    <ListTemplate header='Home' item1='Subscribe to be the first one to know' secondLine='about updates. Enter your email' />
                    <InputGroup>
                        <Input type='email' placeholder="Email Address" w='20em' />
                        <InputRightElement justifyContent='flex-end' w='10em' children={<Button justifyContent='flex-end' alignItems='center' w='7em'>Subscribe</Button>} />
                    </InputGroup>
                </Stack>
            </Flex>
            <Flex direction={mobileDevice ? "column" : 'row'} bgColor='#20202D' h={mobileDevice ? '13em' : '5em'} align='center' justify='space-around'>
                <Text color='white'>Besnik Creative Agency.</Text>
                <Image src={HeaderLogo} alt='footer logo' />
                <HStack>
                    <Image src={Twitter} alt='social Icons' />
                    <Image src={Instagram} alt='social Icons' />
                    <Image src={FaceBook} alt='social Icons' />
                    <Image src={Linkedin} alt='social Icons' />
                </HStack>
            </Flex>
        </Box>
    )
}