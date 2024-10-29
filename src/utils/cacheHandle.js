const CACHE_KEY = import.meta.env.VITE_CACHE_KEY;
const EXPIRATION_KEY = import.meta.env.VITE_CACHE_EXPIRE;
const EXPIRATION_EXPIRE = import.meta.env.VITE_CACHE_EXPIRE_TIME;
const USER_POSTS = import.meta.env.VITE_CACHE_USER_POSTS;
const USER_POSTS_RE_TIME = import.meta.env.VITE_CACHE_USER_POSTS_RE_TIME;
const USER_POSTS_TIME = import.meta.env.VITE_CACHE_USER_POSTS_TIME;
const STOREDLOGIN = import.meta.env.VITE_CACHE_STORED_LOGIN;

export function getStoredUserData() {
  const storedUser = sessionStorage.getItem(CACHE_KEY);
  const expirationTime = sessionStorage.getItem(EXPIRATION_KEY);

  if (!storedUser || !expirationTime) {
    return null;
  }

  if (new Date().getTime() > parseInt(expirationTime)) {
    sessionStorage.removeItem(CACHE_KEY);
    sessionStorage.removeItem(EXPIRATION_KEY);
    throw new Error("Session Timeout");
  }

  return JSON.parse(storedUser);
}

export function getExpiredTime() {
  return sessionStorage.getItem(EXPIRATION_KEY);
}

export function saveStoredUserData(userObj) {
  sessionStorage.setItem(CACHE_KEY, JSON.stringify(userObj));
  sessionStorage.setItem(
    EXPIRATION_KEY,
    new Date().getTime() + Number(EXPIRATION_EXPIRE)
  );
}

export function updateUserProfile(updatedData) {
  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ...updatedData }));
  sessionStorage.setItem(
    EXPIRATION_KEY,
    new Date().getTime() + Number(EXPIRATION_EXPIRE)
  );
}

export function removeStoredUserData() {
  sessionStorage.removeItem(CACHE_KEY);
  sessionStorage.removeItem(EXPIRATION_KEY);
}

export function setUserPostsCache(userPostsArr) {
  sessionStorage.setItem(USER_POSTS, JSON.stringify(userPostsArr));
  sessionStorage.setItem(
    USER_POSTS_TIME,
    new Date().getTime() + Number(USER_POSTS_RE_TIME)
  );
}

export function getUserPostsCache() {
  const userPosts = sessionStorage.getItem(USER_POSTS);
  const expirationTime = sessionStorage.getItem(USER_POSTS_TIME);

  if (!userPosts || !expirationTime) {
    return null;
  }

  if (new Date().getTime() > parseInt(expirationTime)) {
    sessionStorage.removeItem(USER_POSTS);
    sessionStorage.removeItem(USER_POSTS_TIME);
  }

  return JSON.parse(userPosts);
}

export function updateUserPostsCache(newUserPost) {
  const userPosts = sessionStorage.getItem(USER_POSTS);
  const updatedPosts = JSON.parse(userPosts).map((item) => {
    if (item.postBlogId === newUserPost.postBlogId) {
      return newUserPost;
    }
    return item;
  });
  sessionStorage.setItem(USER_POSTS, JSON.stringify(updatedPosts));
  sessionStorage.setItem(
    USER_POSTS_TIME,
    new Date().getTime() + Number(USER_POSTS_RE_TIME)
  );
}

export function removeUserPostCache() {
  sessionStorage.removeItem(USER_POSTS);
  sessionStorage.removeItem(USER_POSTS_TIME);
  sessionStorage.removeItem(USER_POSTS_RE_TIME);
}

export function getRememberLogin() {
  const storedLogin = localStorage.getItem(STOREDLOGIN);
  if (!storedLogin) {
    return null;
  }
  return JSON.parse(storedLogin);
}

export function removeLogin() {
  localStorage.removeItem(STOREDLOGIN);
}

export function setLogin(loginObj) {
  localStorage.setItem(STOREDLOGIN, JSON.stringify(loginObj));
}
