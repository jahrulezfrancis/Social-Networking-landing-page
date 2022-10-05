import { Box, Button, Heading, HStack, Text, Image, VStack, Stack } from "@chakra-ui/react";
import People from "../Images/Iamge.png"

export function HeaderSec() {
    return (
        <Box p='1em'>
            <HStack justify='space-around'>
                <VStack align='start' gap='2em'>
                    <Button color='#217BF4'>Netbook community</Button>
                    <Stack>
                        <Heading color='#0A093D'>
                            Your Solutions For <br />
                            Community!
                        </Heading>
                        <Text>
                            More than 2 billion people in over countries use socibook <br />
                            to stay in touch with friends & family.
                        </Text>
                    </Stack>
                    <HStack>
                        <Button _hover={{ color: '#0A093D' }} fontSize='.8em' color='white' bgColor='#217BF4'>About More</Button>
                        <Button border='2px solid #217BF4' variant='outline' fontSize='.8em' color='#217BF4'>Invite Friend</Button>
                    </HStack>
                </VStack>
                <Box>
                    <Image src={People} alt="" />
                </Box>
            </HStack>
        </Box>
    )
}