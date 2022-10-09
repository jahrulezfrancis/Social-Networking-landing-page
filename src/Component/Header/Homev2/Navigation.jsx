import { Box, Flex, Image, List, ListItem, InputGroup, InputLeftElement, Input, HStack, Button, useMediaQuery, } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../Images/Besnik.png"
import { MdSearch } from "react-icons/md"
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
                            <NavLink>Home</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink>
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton isActive={isOpen} style={{ background: 'transparent' }} as={Button} rightIcon={<BiChevronDown />}>
                                                Community
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
                        <ListItem>
                            <NavLink>Blog</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink>Events</NavLink>
                        </ListItem>
                    </Flex>
                    <Flex>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<MdSearch color='gray.300' />}
                            />
                            <Input w='8em' type='tel' placeholder='Search' />
                        </InputGroup>
                        <Button bgColor='#217BF4' w='7em'>Login</Button>
                    </Flex>
                </HStack>
            </List>
        </Box>
    )
}
