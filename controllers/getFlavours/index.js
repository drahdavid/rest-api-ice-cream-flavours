const { data } = require("../../data");

const getFlavours = (req, res) => {
	res.json(data);
};

module.exports = {
	getFlavours,
};
