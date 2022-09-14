export const queryBeers = (URLParams: any, callback: any) => {
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
    })
    .catch((error) => {
      console.log(error);
      callback(undefined);
    });
};

export const getBeer = (id: any, callback: any) => {
  fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then((response) => response.json())
    .then((response) => {
      callback(response[0]);
      console.log("fetch");
    })
    .catch((error) => {
      console.log(error);
      callback(undefined);
    });
};

export const getBeers = (ids: any, callback: any) => {
  let request = ids.join("|");

  fetch(`https://api.punkapi.com/v2/beers?&ids=${request}`)
    .then((response) => response.json())
    .then((response) => {
      callback(response);
      console.log("fetch");
    })
    .catch((error) => {
      console.log(error);
      callback(undefined);
    });
};
