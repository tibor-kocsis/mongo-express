
export default function getCsrfToken() {
  let csrfToken;
  try {
    const cookies = document.cookie;
    const cookieFound = cookies.split(';').find(elem => elem.indexOf('XSRF-TOKEN') !== -1);
    csrfToken = cookieFound.split('=')[1];
  } catch (e) {
    csrfToken = 'local';
  }

  return csrfToken;
}

