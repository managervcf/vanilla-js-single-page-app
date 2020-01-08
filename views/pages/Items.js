/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */
const getItems = async () => {
  try {
    // Set API url.
    let apiUrl = `https://www.breakingbadapi.com/api/characters`;
    // Create options for the fetch function.
    let options = { cache: 'force-cache' };
    // Get a response from the API.
    let response = await fetch(apiUrl, options);
    // Parse response into JSON.
    let data = await response.json();
    // Print fetched data to the console.
    console.log('(App) Data fetched from API:', data);
    // Return fetched data.
    return data;
  } catch (error) {
    // Print catched error to the console.
    console.log('(App) Error occured while getting data.', error);
  }
};

const Items = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Get items data.
    let items = await getItems();
    // Map over items and build card components.
    let itemList = items
      .map(
        ({ name, img, char_id }) => /*html*/ `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-3" style="width: 13rem;">
            <a href="/#/items/${char_id}">
              <img src=${img} class="card-img-top" alt=${name}>
            </a>
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
            </div>
          </div>
        </div>
      `
      )
      .join('\n');
    return /*html*/ `
      <section class="container-md">
        <h1 class="text-center">List of characters:</h1>
        <div class="row m-4">
          ${itemList}
        </div>
      </section>  
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};

export default Items;
