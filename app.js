const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");
const appPort = 3000;
const appUrl = `http://localhost: ${appPort}`;

// File statici
app.use(express.static("public"));

// Router
app.use("/posts", postsRouter);

// web server listening
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
