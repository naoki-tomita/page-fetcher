const fetch = require("node-fetch");
module.exports = async (event, response) => {
  const { url } = event.query;
  const fetchedResponse = await fetch(url);
  const body = await fetchedResponse.text();
  response.status(200).headers({ "content-type": "text/plain" }).succeed(body);
};
