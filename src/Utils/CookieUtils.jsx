import Cookies from 'js-cookie';

export function saveEmailToCookie(email) {
  Cookies.set('email', email, { expires: 30 });
}

export function getEmailFromCookie() {
  return Cookies.get('email');
}

export function saveUserToCookie(user) {
  Cookies.set('user', user, { expires: 30 });
}

export function getUserFromCookie() {
  return Cookies.get('user');
}

export function savePhotoToCookie(photo) {
  Cookies.set('photo', photo, { expires: 30 });
}

export function getPhotoFromCookie() {
  return Cookies.get('photo');
}

export function removeTokenCookie() {
  Cookies.remove("token");
}

export function saveTokenCookie(token) {
  Cookies.set('token', token, { expires: 30 });
}

export function getTokenFromCookie() {
  return Cookies.get('token');
}

export function saveIdToCookie(_id) {
  Cookies.set('_id', _id, { expires: 30 });
}

export function getIDFromCookie() {
  return Cookies.get('_id');
}