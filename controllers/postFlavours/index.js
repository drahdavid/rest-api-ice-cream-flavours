const { data } = require("../../data");

const postFlavours = (req, res) => {
	const id = data[data.length - 1].id + 1;
	const newFlavour = { id, flavour: req.body };
	data.push(newFlavour);
	res.send(data);
};

module.exports = {
	postFlavours,
};
