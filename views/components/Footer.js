const Footer = {
  render: async () => {
    return /*html*/ `
      <p class="text-center mt-4"><em>Single Page App template build with Vanilla JavaScript.</em></p>  
      <p class="text-center"><em><a href="https://github.com/managervcf">Mateusz Pyzowski</a></em></p>  
      <p class="text-center "><em id="time"></em></p>  
    `;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted.
  after_render: async () => {
    let time = document.querySelector('#time');
    let updateTime = () => {
      // Get current time.
      let newDate = new Date();
      let clock = newDate.toTimeString().slice(0, 8);
      let date = newDate.toLocaleDateString().slice(0, 8);
      // Insert formatted clock and date into footer inner html.
      time.innerHTML = `${clock} ${date}`;
    };
    // Update footer at load and every 1000 ms.
    updateTime();
    setInterval(updateTime, 1000);
  }
};

export default Footer;
