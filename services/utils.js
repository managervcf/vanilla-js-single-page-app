/**
 * Parse current url and break it into resource, id and verb.
 * @return {Object} Path params.
 */
export const parseRequestUrl = () => {
  // Convert location hash into an url.
  let path = location.hash.slice(2).toLowerCase() || '/';

  // Split url into params array: [resource, id, verb].
  let params = path.split('/');

  // Build request variable.
  let request = {
    resource: params[0] || null,
    id: params[1] || null,
    verb: params[2] || null
  };

  // Print it in the console.
  console.log('(App) Parsed url:', request);

  // Return and object with params.
  return request;
};
