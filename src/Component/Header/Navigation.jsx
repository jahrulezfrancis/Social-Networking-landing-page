import { Box, Image, List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../Images/logo.png"

 export function NavigatonBar() {
    return(
        <Box>
            <List>
                <ListItem>
                    <NavLink><Image src={HeaderLogo} alt='header Logo' /></NavLink>
                </ListItem>
            </List>
        </Box>
    )
 }