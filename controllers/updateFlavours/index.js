const { data } = require("../../data");

const updateFlavours = (req, res, exit) => {
	const id = Number(req.params.id);

	const updatedFlavourIndex = data.findIndex((flavour) => flavour.id === id);

	if (updatedFlavourIndex === -1) {
		res.end("The given id doesn't exists");
	}

	if (updatedFlavourIndex >= 0) {
		data[updatedFlavourIndex].flavour = req.body.flavour;
		res.send(data);
	}
};

module.exports = {
	updateFlavours,
};
