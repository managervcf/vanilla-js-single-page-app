// Define data source.
const getItems = async () => {
  try {
    let apiUrl = `https://www.breakingbadapi.com/api/characters`;
    let options = { cache: 'force-cache' };
    let response = await fetch(apiUrl, options);
    let data = await response.json();
    console.log('(App) Data fetched from API:', data);
    return data;
  } catch (error) {
    console.log('(App) Error occured while getting data.', error);
  }
};

const Home = {
  render: async () => {
    let items = await getItems();
    let itemList = items
      .map(
        ({ name, img, char_id }) => /*html*/ `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-3" style="width: 13rem;">
            <a href="#/i/${char_id}">
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
  after_render: async () => {}
};

export default Home;
