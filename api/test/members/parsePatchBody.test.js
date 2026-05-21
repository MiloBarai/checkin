import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parsePatchMemberBody } from '../../src/members/parsePatchBody.js';

describe('parsePatchMemberBody', () => {
  it('requires memberId and at least one field', () => {
    assert.equal(parsePatchMemberBody({}).error, 'invalid_format');
    assert.equal(
      parsePatchMemberBody({ memberId: 'abc' }).error,
      'invalid_format',
    );
  });

  it('allows opt-out only', () => {
    const parsed = parsePatchMemberBody({
      memberId: 'id-1',
      optOutRanking: true,
    });
    assert.deepEqual(parsed.patch, {
      memberId: 'id-1',
      optOutRanking: true,
    });
  });

  it('requires both names when either is sent', () => {
    assert.equal(
      parsePatchMemberBody({
        memberId: 'id-1',
        firstName: 'Anna',
      }).error,
      'invalid_format',
    );
  });

  it('trims names on patch', () => {
    const parsed = parsePatchMemberBody({
      memberId: 'id-1',
      firstName: ' Anna ',
      lastName: ' Svensson ',
    });
    assert.equal(parsed.patch.firstName, 'Anna');
    assert.equal(parsed.patch.lastName, 'Svensson');
  });
});
