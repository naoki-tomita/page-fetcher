const fetch = require("node-fetch");
module.exports = async (event, response) => {
  const { url } = event.query;
  const response = await fetch(url);
  const body = await response.text();
  response.status(200).succeed(body);
};
