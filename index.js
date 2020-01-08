// Import pages, components and helper functions.
import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import ItemShow from './views/pages/ItemShow.js';
import Register from './views/pages/Register.js';
import Error404 from './views/pages/Error404.js';

import Navbar from './views/components/Navbar.js';
import Footer from './views/components/Footer.js';

import { parseRequestUrl } from './services/utils.js';

// List of supported routes. Any url other than these will render 404 page.
const routes = {
  '/': Home,
  '/about': About,
  '/i/:id': ItemShow,
  '/register': Register
};

/**
 * The router code. Takes a URL, checks against the list of
 * supported routes and then renders the corresponding content page.
 */
const router = async () => {
  // Lazy load view element:
  let header = null || document.getElementById('header_root');
  let content = null || document.getElementById('page_root');
  let footer = null || document.getElementById('footer_root');

  // Render the header and footer of the page.
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Destructure the parsed URl from the addressbar.
  let { resource, id, verb } = parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id".
  let parsedUrl =
    (resource ? '/' + resource : '/') +
    (id ? '/:id' : '') +
    (verb ? '/' + verb : '');

  // Render the page from map of supported routes or render 404 page.
  let page = routes[parsedUrl] || Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

/**
 * Add event listeners
 */

// Listen on hash change.
window.addEventListener('hashchange', router);

// Listen on page load.
window.addEventListener('load', router);
