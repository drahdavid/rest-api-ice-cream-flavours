const { data } = require("../../data");

const deleteFlavours = (req, res) => {
	const id = Number(req.params.id);

	const deletedFlavourIndex = data.findIndex((flavour) => flavour.id === id);

	if (deletedFlavourIndex === -1) {
		res.end("The given id doesn't exists");
	}

	if (deletedFlavourIndex >= 0) {
		data.splice(deletedFlavourIndex, 1);
		res.send(data);
	}
};

module.exports = {
	deleteFlavours,
};
