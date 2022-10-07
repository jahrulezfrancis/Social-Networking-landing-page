import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function ListTemplate(props) {
    return (
        <Box>
            <List>
                <ListItem>
                    <NavLink><Heading>{props.header}</Heading></NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>{props.item1}</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>{props.item1}</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>{props.item1}</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink>{props.item1}</NavLink>
                </ListItem>
            </List>
        </Box>
    )
}

export function Footer() {
    return (
        <Box>
<ListTemplate header='Home' />
        </Box>
    )
}