const Footer = {
  render: async () => {
    return /*html*/ `
      <p class="text-center mt-4"><em>Single Page App template build with VanillaJS by <a href="https://github.com/managervcf">Mateusz Pyzowski</a></em></p>  
      <p class="text-center "><em id="time"></em></p>  
    `;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted.
  after_render: async () => {
    let time = document.querySelector('#time');
    let updateTime = () => {
      let clock = new Date().toTimeString().slice(0, 8);
      let date = new Date().toLocaleDateString().slice(0, 8);
      time.innerHTML = `${clock} ${date}`;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }
};

export default Footer;
