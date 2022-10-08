import { Box, Text, VStack, Heading, HStack, Image, Progress, Button, Stack } from "@chakra-ui/react";
import PcImage from "../Images/pc-with-stats.png"
import GirlDad from "../Images/child-n-dad.png"
import PinImage from "../Images/office-pin.png"
import { FcRight } from "react-icons/fc"


function BlogPostTemplate(props) {
    return (
        <Box>
            <VStack align='start'>
                <Image src={props.Image} alt='featured image' />
                <HStack>
                    <hr style={{ width: '50px', fontSize: '20px', backgroundColor: '#095484' }} />
                    <Progress value={20} size='xs' colorScheme='pink' />
                    <Heading fontFamily='Inter' lineHeight='32px' fontSize='1.2em' color='#2F2C4A'>{props.HeadingText1} <br /> {props.HeadingText2}</Heading>
                </HStack>
                <Button color={props.textColor} pl='4em' textAlign='end' background='transparent' _hover={{ background: 'none' }}
                    alignItems='center' rightIcon={<FcRight color={props.iconColor} />}>
                    Continue Reading
                </Button>
            </VStack>
        </Box>
    )
}


export function BlogSection() {
    return (
        <Box mt='5em'>
            <VStack gap='2em'>
                <Stack align='center'>
                    <Text color='#217BF4' fontSize='1.1em'>Get Our Application</Text>
                    <Heading color='#0A093D' fontSize='2.2em'>Latest News</Heading>
                </Stack>
                <HStack w='100vw' gap='2em' justify='center' overflowX='auto'>
                    <BlogPostTemplate textColor='#656464' iconColor='#656464' Image={PcImage} HeadingText1='It Does Not Matter Hows' HeadingText2='Slowly go as Long' />
                    <BlogPostTemplate textColor='#217BF4' iconColor='#217BF4' Image={GirlDad} HeadingText1='Netbook Network Added' HeadingText2='New Photo Filter' />
                    <BlogPostTemplate textColor='#656464' iconColor='#656464' Image={PinImage} HeadingText1='We Optimised Netbooks' HeadingText2='Better Navigation' />
                </HStack>
            </VStack>
        </Box>
    )
}