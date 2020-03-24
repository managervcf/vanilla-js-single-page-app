/**
 * Parse current url and break it into resource, id and verb.
 * @return {Object} Path params.
 */
export const parseRequestUrl = () => {
  // Convert location hash into an url.
  const path = location.hash.slice(2).toLowerCase() || '/';

  // Split url into params array: [resource, id, verb].
  const params = path.split('/');

  // Build request variable.
  const request = {
    resource: params[0] || null,
    id: params[1] || null,
    verb: params[2] || null
  };

  // Print it in the console.
  console.log('(App) Parsed url:', request);

  // Return and object with params.
  return request;
};
