import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { PageShell } from './PageShell.jsx';
import { setGdprAccepted } from '../storage/gdpr.js';

export default function ConsentScreen({ onAccepted, onDeclined }) {
  function handleAccept() {
    setGdprAccepted();
    onAccepted();
  }

  return (
    <PageShell>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="lg">
            Check-in
          </Heading>
          <Text mt={2} color="gray.600" fontSize="md">
            Samtycke till behandling av personuppgifter
          </Text>
        </Box>

        <Box fontSize="sm" color="gray.700">
          <UnorderedList spacing={2} pl={4}>
            <ListItem>
              Klubben sparar ditt namn och närvaro i Google Kalkylark för
              träningsstatistik.
            </ListItem>
            <ListItem>
              Uppgifterna används för incheckning och statistik i klubben — inte
              för marknadsföring.
            </ListItem>
            <ListItem>
              Vi använder inga marknadsförings- eller analyscookies i den här
              versionen av appen.
            </ListItem>
          </UnorderedList>
        </Box>

        <Link
          as={RouterLink}
          to="/privacy"
          fontSize="sm"
          color="teal.600"
          textAlign="center"
        >
          Läs integritetspolicyn
        </Link>

        <Button
          size="lg"
          colorScheme="teal"
          height="3.5rem"
          onClick={handleAccept}
        >
          Godkänn
        </Button>
        <Button
          size="lg"
          variant="outline"
          height="3.5rem"
          onClick={onDeclined}
        >
          Neka
        </Button>
      </VStack>
    </PageShell>
  );
}
