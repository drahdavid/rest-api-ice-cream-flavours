const { data } = require("../../data");

const getSingleFlavour = (req, res) => {
	const id = Number(req.params.id);

	const singleFlavour = data.find((flavour) => flavour.id === id);

	if (!singleFlavour) {
		res.end("The given id doesn't exists");
	}

	if (singleFlavour) {
		res.send(singleFlavour);
	}
};

module.exports = {
	getSingleFlavour,
};
