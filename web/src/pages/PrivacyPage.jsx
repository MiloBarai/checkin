import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  CLUB_DISPLAY_NAME,
  PRIVACY_CONTACT_EMAIL,
} from '../content/privacy.js';
import { PageShell } from '../components/PageShell.jsx';

export default function PrivacyPage() {
  return (
    <PageShell>
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="lg">
          Integritetspolicy
        </Heading>

        <Text fontSize="sm" color="gray.700">
          {CLUB_DISPLAY_NAME} ({' '}
          <Link href={`mailto:${PRIVACY_CONTACT_EMAIL}`} color="teal.600">
            {PRIVACY_CONTACT_EMAIL}
          </Link>
          ) är personuppgiftsansvarig för incheckningsappen Check-in.
        </Text>

        <Box fontSize="sm" color="gray.700">
          <Text fontWeight="semibold" mb={1}>
            Vilka uppgifter?
          </Text>
          <Text>
            Förnamn, efternamn, intern medlems-ID, incheckningsdatum och
            visningsnamn vid incheckning lagras i ett Google Kalkylark som
            klubben driver.
          </Text>
        </Box>

        <Box fontSize="sm" color="gray.700">
          <Text fontWeight="semibold" mb={1}>
            Varför?
          </Text>
          <Text>
            För att dokumentera närvaro på träning och visa statistik (t.ex.
            årlig ranking) inom klubben.
          </Text>
        </Box>

        <Box fontSize="sm" color="gray.700">
          <Text fontWeight="semibold" mb={1}>
            Lagring
          </Text>
          <Text>
            Uppgifterna finns i klubbens Google Kalkylark. En kopia av ditt
            medlems-ID och namn kan sparas lokalt i webbläsaren på din telefon
            för snabb incheckning.
          </Text>
        </Box>

        <Box fontSize="sm" color="gray.700">
          <Text fontWeight="semibold" mb={1}>
            Spårning
          </Text>
          <Text>
            Appen använder inga marknadsförings- eller analyscookies i den här
            versionen. Klubbens PIN skyddas med en teknisk sessionskaka på
            servern.
          </Text>
        </Box>

        <Box fontSize="sm" color="gray.700">
          <Text fontWeight="semibold" mb={1}>
            Dina rättigheter
          </Text>
          <Text>
            Kontakta klubben på e-postadressen ovan om du vill veta mer, rätta
            uppgifter eller begära radering enligt GDPR.
          </Text>
        </Box>

        <Button as={RouterLink} to="/" variant="outline" size="md">
          Tillbaka
        </Button>
      </VStack>
    </PageShell>
  );
}
