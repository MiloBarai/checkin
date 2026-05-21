import { parseMemberNames } from './validateNames.js';

export function parsePatchMemberBody(body) {
  if (!body || typeof body !== 'object') {
    return { error: 'invalid_format' };
  }

  const memberId =
    typeof body.memberId === 'string' ? body.memberId.trim() : '';
  if (!memberId) {
    return { error: 'invalid_format' };
  }

  const hasFirst = Object.hasOwn(body, 'firstName');
  const hasLast = Object.hasOwn(body, 'lastName');
  const hasOptOut = Object.hasOwn(body, 'optOutRanking');

  if (!hasFirst && !hasLast && !hasOptOut) {
    return { error: 'invalid_format' };
  }

  if (hasFirst !== hasLast) {
    return { error: 'invalid_format' };
  }

  const patch = { memberId };

  if (hasFirst) {
    const names = parseMemberNames({
      firstName: body.firstName,
      lastName: body.lastName,
    });
    if (names.error) {
      return names;
    }
    patch.firstName = names.firstName;
    patch.lastName = names.lastName;
  }

  if (hasOptOut) {
    if (typeof body.optOutRanking !== 'boolean') {
      return { error: 'invalid_format' };
    }
    patch.optOutRanking = body.optOutRanking;
  }

  return { patch };
}
