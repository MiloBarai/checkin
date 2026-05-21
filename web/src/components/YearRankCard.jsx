import { Box, Flex, Text } from '@chakra-ui/react';
import {
  personalRankLabel,
  personalRankMessage,
  rankMedal,
  rankPodiumStyle,
} from './ranking.js';

export default function YearRankCard({ rank }) {
  const medal = rankMedal(rank);
  const podium = rankPodiumStyle(rank);
  const isPodium = rank <= 3;
  const inTopTen = rank <= 10;

  return (
    <Box
      py={3}
      px={4}
      borderRadius="xl"
      bg={isPodium ? podium.bg : inTopTen ? 'teal.50' : 'gray.50'}
      borderWidth="1px"
      borderColor={
        isPodium ? podium.borderColor : inTopTen ? 'teal.200' : 'gray.200'
      }
    >
      <Flex align="center" gap={3}>
        <Flex
          align="center"
          justify="center"
          minW="3.25rem"
          h="3.25rem"
          borderRadius="full"
          bg={isPodium ? 'white' : inTopTen ? 'teal.100' : 'gray.100'}
          boxShadow={isPodium ? 'sm' : undefined}
          flexShrink={0}
        >
          {medal ? (
            <Text fontSize="2xl" lineHeight="1" aria-hidden>
              {medal}
            </Text>
          ) : (
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={inTopTen ? 'teal.700' : 'gray.600'}
              aria-hidden
            >
              #
            </Text>
          )}
        </Flex>
        <Box flex="1" minW={0}>
          <Text
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wider"
            color={isPodium ? podium.accent : inTopTen ? 'teal.700' : 'gray.600'}
          >
            Din placering i år
          </Text>
          <Text
            mt={0.5}
            fontSize="xl"
            fontWeight="bold"
            color={isPodium ? podium.accent : inTopTen ? 'teal.800' : 'gray.800'}
          >
            {personalRankLabel(rank)}
          </Text>
          <Text mt={1} fontSize="sm" color="gray.600" lineHeight="short">
            {personalRankMessage(rank)}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
