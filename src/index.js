import "@babel/polyfill";
import app from "./server";

async function main() {
  const appPort = app.get("port");
  await app.listen(appPort);
  console.log("Server on port", appPort);
}

main();
