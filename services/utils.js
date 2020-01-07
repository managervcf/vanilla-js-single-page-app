const utils = {
  // Parse a url and break it into resource, id and verb.
  parseRequestUrl: () => {
    // Print current location to console.
    console.log(`(App) Current location: ${location.hash || '/'}`);
    // Convert location.hash into an url.
    let url = location.hash.slice(2).toLowerCase() || '/';

    // Split url into params array :[resource, id, verb].
    let params = url.split('/');

    // Create request variable.
    let request = {
      resource: params[0] || null,
      id: params[1] || null,
      verb: params[2] || null
    };

    return request;
  }
};

export default utils;
