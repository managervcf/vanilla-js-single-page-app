const Navbar = {
  /**
   * Render the component content.
   */
  render: async () => {
    // Define a list of navbar links.
    const links = ['About', 'Register', 'Secret'];
    // Build html with navigation links.
    const navLinks = links
      .map(
        link =>
          /*html*/ `<li class="nav-item"><a class="nav-link" href="/#/${link.toLowerCase()}">${link}</a></li>`
      )
      .join('\n');
    return /*html*/ `
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <a class="navbar-brand" href="/#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" width="70" height="70" alt="Breaking Bad">
        </a>
        <ul class="navbar-nav">
          ${navLinks}
        </ul>
      </nav>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};

export default Navbar;
