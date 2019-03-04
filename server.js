const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", async (request, response) => {
  const filePath = path.resolve(__dirname, "build", "index.html");

  // Index.html dosyasını oku
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      response.sendFile(path.resolve(__dirname, "build", "index.html"));
    }

    // Index.html dosyasındaki stringlerin yerini doldur
    data = data.replace(/\$OG_TITLE/g, "Talentra");
    data = data.replace(/\$OG_DESCRIPTION/g, "Talentra Recruitment Agency");
    const result = data.replace(
      /\$OG_IMAGE/g,
      "https://res.cloudinary.com/recruitans/image/upload/v1551614633/524-output-onlinepngtools.png.png"
    );
    response.send(result);
  });
});

app.use(express.static("build"));

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
