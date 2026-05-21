const STORAGE_KEY = 'gdprAccepted';

export function hasGdprAccepted() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setGdprAccepted() {
  localStorage.setItem(STORAGE_KEY, 'true');
}
