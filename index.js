// 'use strict';

import Home from './views/pages/Home.js';
import Error404 from './views/pages/Error404.js';

import Navbar from './views/components/Navbar.js';
import Footer from './views/components/Footer.js';

import utils from './services/utils.js';

// List of supported routes. Any url other than these routes will throw a 404 error.
const routes = {
  '/': Home
};

// The router code. Takes a URL, checks against the list of
// supported routes and then renders the corresponding content page.
const router = async () => {
  // App has 3 main elements: header, content and footer.
  // Lazy load view element:
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');
  const footer = null || document.getElementById('footer_container');

  // Render the header and footer of the page.
  header.innerHTML = await Navbar.render();
  footer.innerHTML = await Footer.render();

  // Get the parsed URl from the addressbar.
  let request = utils.parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id".
  let parsedUrl =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? '/' + request.verb : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead.
  let page = routes[parsedUrl] ? routes[parsedUrl] : Error404;
  content.innerHTML = await page.render();
};

// Listen on hash change.
window.addEventListener('hashchange', router);

// Listen on page load.
window.addEventListener('load', router);
