// Import utils to extract id from url.
import { parseRequestUrl } from '../../services/utils.js';

/**
 * Fetch data from external API.
 * @param  {String} id Item's id.
 * @return {Object}    Data fetched.
 */
const getItem = async id => {
  try {
    // Set API url.
    let apiUrl = `https://www.breakingbadapi.com/api/characters/${id}`;
    // Create options for the fetch function.
    let options = { cache: 'force-cache' };
    // Get a response from the API.
    let response = await fetch(apiUrl, options);
    // Parse and destructure response into JSON.
    let [data] = await response.json();
    // Print fetched data to the console.
    console.log('(App) Data fetched from API:', data);
    // Return fetched data.
    return data;
  } catch (error) {
    // Print catched error to the console.
    console.log('(App) Error occured while getting data.', error);
  }
};

const ItemShow = {
  /**
   * Render the page content.
   */
  render: async () => {
    let params = parseRequestUrl();
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
            <a href="/#/items" class="btn btn-dark">Go Back</a>
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
