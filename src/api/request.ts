export const request = async (url: string) => {
  console.log("request fired");

  return await fetch(`https://api.rawg.io/api/${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.log(error));
};
