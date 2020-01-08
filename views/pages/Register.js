const Register = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section>
        <h1 class="text-center">This can be a register form.</h1>
      </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};
export default Register;
