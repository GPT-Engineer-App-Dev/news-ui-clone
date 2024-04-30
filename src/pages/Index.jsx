import { Box, Flex, Text, Heading, VStack, Link } from "@chakra-ui/react";
import { FaUser, FaComments } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Introducing the Next Generation of AI",
    author: "Jane Doe",
    comments: 15
  },
  {
    id: 2,
    title: "Exploring the Depths of the Mariana Trench",
    author: "John Smith",
    comments: 8
  },
  {
    id: 3,
    title: "The Future of Renewable Energy",
    author: "Alice Johnson",
    comments: 22
  }
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Hacker News Clone</Heading>
      <VStack spacing={4} align="stretch">
        {newsItems.map(item => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">
              <Link color="teal.500" href="#">{item.title}</Link>
            </Heading>
            <Text mt={2}>
              <FaUser /> {item.author}
            </Text>
            <Text mt={1}>
              <FaComments /> {item.comments} Comments
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;