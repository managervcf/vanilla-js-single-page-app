// Import pages, components and helper functions.
import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import ItemShow from './views/pages/ItemShow.js';
import Register from './views/pages/Register.js';
import Error404 from './views/pages/Error404.js';

import Navbar from './views/components/Navbar.js';
import Footer from './views/components/Footer.js';

import utils from './services/utils.js';

// List of supported routes. Any url other than these routes will throw a 404 error.
const routes = {
  '/': Home,
  '/about': About,
  '/i/:id': ItemShow,
  '/register': Register
};

// The router code. Takes a URL, checks against the list of
// supported routes and then renders the corresponding content page.
const router = async () => {
  // App has 3 main elements: header, content and footer.
  // Lazy load view element:
  let header = null || document.getElementById('header_container');
  let content = null || document.getElementById('page_container');
  let footer = null || document.getElementById('footer_container');

  // Render the header and footer of the page. After_render function takes
  // care of other JScode, because they cannot be added to innerHTML.
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Get the parsed URl from the addressbar.
  let { resource, id, verb } = utils.parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id".
  let parsedUrl =
    (resource ? '/' + resource : '/') +
    (id ? '/:id' : '') +
    (verb ? '/' + verb : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, render 404 page instead.
  let page = routes[parsedUrl] || Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change.
window.addEventListener('hashchange', router);

// Listen on page load.
window.addEventListener('load', router);
