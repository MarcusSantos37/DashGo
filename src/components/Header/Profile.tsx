import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcus Augusto</Text>
          <Text color="gray.300" fontSize="small">
            devmarcussfm@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Marcus Augusto"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEutSUSWGHymw/profile-displayphoto-shrink_200_200/0/1646588208854?e=1652313600&v=beta&t=N-j1ceuiJZzCTlFEd39r3q96YqL-t1AQ0PABBezTxWM"
      />
    </Flex>
  );
}
