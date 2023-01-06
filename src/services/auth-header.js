/**
 * Helper function for protected resorces.
 * The code above checks Local Storage for user item.
 * If there is a logged in user with accessToken (JWT),
 * return HTTP Authorization header. Otherwise, return an empty object.
 * @returns
 */
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // return { 'x-access-token': user.accessToken }; // TODO:check how validation is done in backed
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
