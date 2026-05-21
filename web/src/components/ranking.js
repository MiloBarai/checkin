export function rankMedal(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return null;
}

export function rankPodiumStyle(rank) {
  if (rank === 1) {
    return {
      bg: 'yellow.50',
      borderColor: 'yellow.300',
      badgeBg: 'yellow.100',
      badgeColor: 'yellow.800',
      accent: 'yellow.700',
    };
  }
  if (rank === 2) {
    return {
      bg: 'gray.50',
      borderColor: 'gray.300',
      badgeBg: 'gray.100',
      badgeColor: 'gray.700',
      accent: 'gray.700',
    };
  }
  if (rank === 3) {
    return {
      bg: 'orange.50',
      borderColor: 'orange.200',
      badgeBg: 'orange.100',
      badgeColor: 'orange.800',
      accent: 'orange.700',
    };
  }
  return {
    bg: 'white',
    borderColor: 'gray.100',
    badgeBg: 'teal.50',
    badgeColor: 'teal.800',
    accent: 'teal.700',
  };
}

export function displayLeaderName(entry) {
  return `${entry.firstName} ${entry.lastName}`.trim();
}

export function personalRankMessage(rank) {
  if (rank === 1) return 'Du leder klubben i år — fortsätt så!';
  if (rank === 2) return 'Silverplats — ett par träningar från toppen!';
  if (rank === 3) return 'Bronsplats — du är på pallen!';
  if (rank <= 10) return 'Du är med i årets topplista.';
  return 'Varje träning räknas — klättra i rankingen!';
}

export function personalRankLabel(rank) {
  if (rank === 1) return 'Plats 1';
  if (rank <= 3) return `Plats ${rank}`;
  if (rank <= 10) return `Top 10 · plats ${rank}`;
  return `Plats ${rank}`;
}
