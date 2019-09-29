//@ts-check
const nodeFetch = require("node-fetch");
const fetch = nodeFetch.default;


/**
 * @param {import("./Handler").FunctionEvent} event
 * @param {import("./Handler").FunctionContext} response
 */
module.exports = async function handle(event, response) {
  const { url } = event.query;
  const fetchedResponse = await fetch(url);
  const body = await fetchedResponse.text();
  response.status(200)
    .headers({
      "content-type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    })
    .succeed(body);
};
