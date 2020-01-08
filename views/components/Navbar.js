const Navbar = {
  render: async () => {
    let links = ['About', 'Register', 'Secret'];
    // Build html with navigation links.
    let navLinks = links
      .map(
        link =>
          /*html*/ `<li class="nav-item"><a class="nav-link" href="/#${link.toLowerCase()}">${link}</a></li>`
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
  after_render: async () => {}
};

export default Navbar;
