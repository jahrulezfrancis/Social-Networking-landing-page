import { Box, Flex, Image, List, ListItem, HStack, Button, useMediaQuery, } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../Images/Besnik.png"
import { BiChevronDown } from "react-icons/bi"
import { Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'
// import { CgMenuGridO } from "react-icons/cg"

export function NavigatonBarV2() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box display={mobileDevice ? 'none' : 'block'} p='1.5em' position='fixed' top='0' left='0' right='0' bg='tranparent' zIndex='10' w='100vw'>
            <List listStyleType='none'>
                <HStack justify='space-around'>
                    <Flex alignItems='center' p='2' columnGap='2em'>
                        <ListItem>
                            <NavLink><Image src={HeaderLogo} alt='header Logo' /></NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink>
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton color='#FFFFFF' isActive={isOpen} style={{ background: 'transparent' }} as={Button} rightIcon={<BiChevronDown />}>
                                                Solution
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>Forum</MenuItem>
                                                <MenuItem>Friends</MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </NavLink>
                        </ListItem>
                        <ListItem color='#FFFFFF'>
                            <NavLink>Plans</NavLink>
                        </ListItem>
                        <ListItem color='#FFFFFF'>
                            <NavLink>Resource</NavLink>
                        </ListItem>
                        <ListItem color='#FFFFFF'>
                            <NavLink>Blog</NavLink>
                        </ListItem>
                    </Flex>
                    <Flex>
                        <Button color='#FFFAF9' backdropFilter='24px' bgColor='rgba(255, 255, 255, 0.2)' w='9.6em'>Request Demo</Button>
                    </Flex>
                </HStack>
            </List>
        </Box>
    )
}
