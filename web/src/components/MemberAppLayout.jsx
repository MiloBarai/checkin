import { Outlet } from 'react-router-dom';
import { Container, Flex } from '@chakra-ui/react';
import BottomNav from './BottomNav.jsx';
import { bottomNavOffset } from './layoutConstants.js';

export default function MemberAppLayout({ onRequireOnboarding }) {
  return (
    <Flex
      direction="column"
      minH="100dvh"
      bgGradient="linear(to-b, gray.50, gray.100)"
    >
      <Container
        as="main"
        flex="1"
        display="flex"
        flexDirection="column"
        minH={0}
        maxW="container.sm"
        px={4}
        pt="max(1.5rem, env(safe-area-inset-top))"
        pb={bottomNavOffset()}
        w="full"
      >
        <Outlet context={{ onRequireOnboarding }} />
      </Container>
      <BottomNav />
    </Flex>
  );
}
