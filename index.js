const express = require("express");
const app = express();

const { getFlavours } = require("./controllers/getFlavours");
const { postFlavours } = require("./controllers/postFlavours");
const { updateFlavours } = require("./controllers/updateFlavours");
const { deleteFlavours } = require("./controllers/deleteFlavours");
const { getSingleFlavour } = require("./controllers/getSingleFlavour");

app.use(express.json());

app.delete("/api/flavours/:id", deleteFlavours);
app.get("/api/flavours", getFlavours);
app.get("/api/flavours/:id", getSingleFlavour);
app.post("/api/flavours", postFlavours);
app.put("/api/flavours/:id", updateFlavours);

app.listen("8080", () => console.log("Server listening on port 8080"));
