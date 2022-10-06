import { Box, Button, Heading, HStack, Text, VStack, Image } from "@chakra-ui/react";
import AbstractImg from "../Images/Abstrack.png"
import Person1 from "../Images/pers1.png"
import Person2 from "../Images/pers2.png"
import Person3 from "../Images/pers3.png"
import Person4 from "../Images/pers4.png"


function MembersTemplate(props) {
    return (
        <Box>
            <Image align='center' justifyContent='center' src={AbstractImg} alt='user image' position='absolute' />
            <Image pl='.9em' pt='.7em' align='center' justifyContent='center' src={props.Image} alt='user image' position='relative' />
            <Heading fontSize='1.5em' fontColor='#2F2C4A' textAlign='center' pt='1em'>{props.name}</Heading>
            <Text textAlign='center'>{`@${props.username}`}</Text>
        </Box>
    )
}

export function TeamMembers() {
    return (
        <Box>
            <VStack>
                <Text>Valuable Team</Text>
                <Heading>Our Active Members</Heading>
                <Text>
                    when an unknown printer took a galley of type and meeting <br />
                    fari scrambled it.
                </Text>
                <HStack align='center' justify='space-around' w='25em' p='.5em' bgColor='rgba(127, 127, 127, 0.13)'>
                    <Button>Newest</Button>
                    <Button>Popular</Button>
                    <Button size='md' bgColor='#217BF4'>Active</Button>
                </HStack>
                <HStack pt='5em' w='80%' align='start' justify='space-around' spacing={5}>
                    <MembersTemplate Image={Person1} username='Rajman' name='Fahim Rahman' />
                    <MembersTemplate Image={Person2} username='Rahman' name='Kazi Rahman' />
                    <MembersTemplate Image={Person3} username='Master' name='Masterero Ali' />
                    <MembersTemplate Image={Person4} username='alia' name='Alia Karon' />
                </HStack>
            </VStack>
        </Box>
    )
}