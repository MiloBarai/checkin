import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PageShell } from './PageShell.jsx';

export default function ConsentDeclineScreen({ onReviewConsent }) {
  return (
    <PageShell>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="lg">
            Check-in
          </Heading>
          <Text mt={4} color="gray.700" fontSize="md">
            Utan samtycke kan du inte checka in eller använda appen. Du kan läsa
            vår integritetspolicy eller stänga sidan och prata med en tränare om
            du har frågor.
          </Text>
        </Box>

        <Link
          as={RouterLink}
          to="/privacy"
          fontSize="sm"
          color="teal.600"
          textAlign="center"
        >
          Integritetspolicy
        </Link>

        <Button size="lg" variant="outline" onClick={onReviewConsent}>
          Tillbaka till samtycke
        </Button>
      </VStack>
    </PageShell>
  );
}
