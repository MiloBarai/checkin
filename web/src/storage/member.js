const KEYS = ['memberId', 'firstName', 'lastName'];

export function hasMemberIdentity() {
  return KEYS.every((key) => {
    const value = localStorage.getItem(key);
    return typeof value === 'string' && value.length > 0;
  });
}

export function getMemberIdentity() {
  if (!hasMemberIdentity()) {
    return null;
  }
  return {
    memberId: localStorage.getItem('memberId'),
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
  };
}

export function setMemberIdentity({ memberId, firstName, lastName }) {
  localStorage.setItem('memberId', memberId);
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
}

export function clearMemberIdentity() {
  for (const key of KEYS) {
    localStorage.removeItem(key);
  }
}

/** @param {{ memberId: string, firstName: string, lastName: string }} sheet */
export function syncMemberIdentityFromStatus(sheet) {
  const local = getMemberIdentity();
  if (!local || local.memberId !== sheet.memberId) {
    return;
  }
  if (
    local.firstName === sheet.firstName &&
    local.lastName === sheet.lastName
  ) {
    return;
  }
  setMemberIdentity({
    memberId: sheet.memberId,
    firstName: sheet.firstName,
    lastName: sheet.lastName,
  });
}
