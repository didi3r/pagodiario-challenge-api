/*
 * Example of middleware to handle authentication.
 * Currently this only checks the existence of a cookie named 'auth' and just prints a log
 * but this can be extended to check fot a JWT / Bearer token etc.
 */
export default (req, res, next) => {
  console.log('Cookies: ', req.cookies);
  if (req.cookies && req.cookies.auth) {
    console.log(`Auth cookie is present with the value: ${req.cookies.auth}`);
  }
  next();
};
