const CACHE_KEY = import.meta.env.VITE_CACHE_KEY;
const EXPIRATION_KEY = import.meta.env.VITE_CACHE_EXPIRE;
const EXPIRATION_EXPIRE = import.meta.env.VITE_CACHE_EXPIRE_TIME;

export function getStoredUserData() {
  const storedUser = localStorage.getItem(CACHE_KEY);
  const expirationTime = localStorage.getItem(EXPIRATION_KEY);

  if (!storedUser || !expirationTime) {
    return null;
  }

  if (new Date().getTime() > parseInt(expirationTime)) {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
  }

  return JSON.parse(storedUser);
}

export function saveStoredUserData(userObj) {
  console.log(userObj);
  localStorage.setItem(CACHE_KEY, JSON.stringify(userObj));
  localStorage.setItem(
    EXPIRATION_KEY,
    new Date().getTime() + EXPIRATION_EXPIRE
  );
}

export function removeStoredUserData() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(EXPIRATION_KEY);
}
