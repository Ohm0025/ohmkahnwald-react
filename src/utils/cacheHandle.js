const CACHE_KEY = import.meta.env.VITE_CACHE_KEY;
const EXPIRATION_KEY = import.meta.env.VITE_CACHE_EXPIRE;
const EXPIRATION_EXPIRE = import.meta.env.VITE_CACHE_EXPIRE_TIME;
const USER_POSTS = import.meta.env.VITE_CACHE_USER_POSTS;
const USER_POSTS_RE_TIME = import.meta.env.VITE_CACHE_USER_POSTS_RE_TIME;
const USER_POSTS_TIME = import.meta.env.VITE_CACHE_USER_POSTS_TIME;

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
  localStorage.setItem(CACHE_KEY, JSON.stringify(userObj));
  localStorage.setItem(
    EXPIRATION_KEY,
    new Date().getTime() + Number(EXPIRATION_EXPIRE)
  );
}

export function removeStoredUserData() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(EXPIRATION_KEY);
}

export function setUserPostsCache(userPostsArr) {
  localStorage.setItem(USER_POSTS, JSON.stringify(userPostsArr));
  localStorage.setItem(
    USER_POSTS_TIME,
    new Date().getTime() + Number(USER_POSTS_RE_TIME)
  );
}

export function getUserPostsCache() {
  const expirationTime = localStorage.getItem(USER_POSTS_TIME);

  if (new Date().getTime() > parseInt(expirationTime)) {
    localStorage.removeItem(USER_POSTS);
    localStorage.removeItem(USER_POSTS_TIME);
    return [];
  }

  const userPosts = localStorage.getItem(USER_POSTS);
  if (userPosts !== "undefined") {
    return JSON.parse(userPosts);
  }
  return null;
}

export function updateUserPostsCache(newUserPostArr) {
  localStorage.setItem(USER_POSTS, JSON.stringify(newUserPostArr));
  localStorage.setItem(
    USER_POSTS_TIME,
    new Date().getTime() + Number(USER_POSTS_RE_TIME)
  );
}
