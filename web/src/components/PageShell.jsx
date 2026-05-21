import { Container, Flex } from '@chakra-ui/react';

export function PageShell({ children, centered = false }) {
  return (
    <Flex
      direction="column"
      minH="100dvh"
      bg="gray.50"
      align={centered ? 'center' : 'stretch'}
      justify={centered ? 'center' : 'flex-start'}
    >
      <Container maxW="container.sm" px={4} py={8} w="full">
        {children}
      </Container>
    </Flex>
  );
}
