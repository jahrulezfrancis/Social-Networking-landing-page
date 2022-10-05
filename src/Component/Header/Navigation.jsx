import { Box, Flex, Image, List, ListItem, InputGroup, InputLeftElement, Input, HStack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../Images/logo.png"
import { MdSearch } from "react-icons/md"

export function NavigatonBar() {
    return (
        <Box p='1.5em'>
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
                            <NavLink>Community</NavLink>
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