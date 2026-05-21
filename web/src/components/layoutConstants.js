/** Fixed bottom nav bar height (excluding safe-area inset). */
export const BOTTOM_NAV_HEIGHT = '5.5rem';

/** Home check-in dock above the nav (button + padding). */
export const CHECKIN_DOCK_HEIGHT = '5.5rem';

export function bottomNavOffset() {
  return `calc(${BOTTOM_NAV_HEIGHT} + env(safe-area-inset-bottom, 0px))`;
}

export function checkinDockBottom() {
  return bottomNavOffset();
}

/** Extra scroll padding on home; main layout already clears the nav. */
export function homeContentPaddingBottom() {
  return CHECKIN_DOCK_HEIGHT;
}
