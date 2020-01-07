// Import utils to extract id from url.
import utils from '../../services/utils.js';

// Define data fetching function.
const getItem = async id => {
  try {
    let apiUrl = `https://www.breakingbadapi.com/api/characters/${id}`;
    let options = { cache: 'force-cache' };
    let response = await fetch(apiUrl, options);
    let [data] = await response.json();
    console.log('(App) Data fetched from API:', data);
    return data;
  } catch (error) {
    console.log('(App) Error occured while getting data.', error);
  }
};

const ItemShow = {
  render: async () => {
    let params = utils.parseRequestUrl();
    let { name, nickname, img, birthday, portrayed } = await getItem(params.id);
    return /*html*/ `
      <section class="container-md" style="width: 20rem;">
        <div class="card">
          <img src=${img} class="card-img-top" alt=${name} id="characterImage">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Known as ${nickname}.</p>
            <p class="card-text">Birthday ${birthday}.</p>
            <p class="card-text">Played by ${portrayed}.</p>
            <a href="/" class="btn btn-dark">Go Back</a>
          </div>
        </div>
      </section>
    `;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted.
  after_render: async () => {
    document
      .querySelector('#characterImage')
      .addEventListener('click', () => alert('You have clicked on the photo!'));
  }
};

export default ItemShow;
