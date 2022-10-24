import { Box, Flex, Image, List, ListItem, InputGroup, InputLeftElement, Input, HStack, Button, useMediaQuery, Stack, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../Images/logo.png"
import { MdSearch } from "react-icons/md"
import { BiChevronDown } from "react-icons/bi"
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { CgMenuGridO } from "react-icons/cg"


export function NavigatonBar() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box display={mobileDevice ? 'none' : 'block'} p='1.5em' position='fixed' top='0' left='0' right='0' bg='#ffffff' zIndex='10' w='100vw'>
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
                            <NavLink exact activeStyle={{ color: 'red' }}>Blog</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink>Events</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to='/home-2'>Home V2</NavLink>
                        </ListItem>
                    </Flex>
                    <Flex>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<MdSearch color='gray.300' />}
                            />
                            <Input pl='2em' w='8em' type='tel' placeholder='Search' />
                        </InputGroup>
                        <Button bgColor='#217BF4' w='7em'>Login</Button>
                    </Flex>
                </HStack>
            </List>
        </Box>
    )
}


export function MobileNav() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box display={mobileDevice ? 'block' : 'none'} zIndex='10' background='white' p='1em' position='fixed' top='0' right='0' left='0'>
            <HStack >
                <Stack>
                    <Image src={HeaderLogo} alt='header logo' />
                </Stack>
                <Spacer />
                <Menu>
                    <MenuButton
                        bg='transparent'
                        as={IconButton}
                        aria-label='Options'
                        icon={<CgMenuGridO />}
                        fontSize='3em'
                        variant='none'
                    />
                    <MenuList>
                        <MenuItem>
                            <NavLink>Events</NavLink>
                        </MenuItem>
                        <MenuItem >
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
                        </MenuItem>
                        <MenuItem>
                            <NavLink>Events</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>Events</NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}