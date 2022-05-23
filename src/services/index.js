export const getBeers = async (URLParams, callback) => {
  let request = "";
  for (const key in URLParams) {
    if (URLParams[key] && URLParams[key] !== "") {
      request = `${request}${key}=${URLParams[key]}&`;
    }
  }
  console.log(request);
  fetch(`https://api.punkapi.com/v2/beers?${request}`)
    .then((response) => response.json())
    .then((response) => {
      callback(response);
      console.log("fetch");
    });
};
