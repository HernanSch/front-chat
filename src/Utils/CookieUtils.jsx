import Cookies from 'js-cookie';

export function saveEmailToCookie(email) {
  Cookies.set('email', email, { expires: 30 });
}

export function getEmailFromCookie() {
  return Cookies.get('email');
}