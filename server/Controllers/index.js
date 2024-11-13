const shirtsList = require('../Model/shirts.json');
const bestselList = require('../Model/bestsel.json');
const mobileList = require('../Model/mobiles.json')

exports.getAllItems = (req, res) => {
    res.status(200).json({
        shirts: shirtsList,
        bestsellers: bestselList,
        mobiles: mobileList,
    });
};

exports.getAllShirts = (req, res) => {
    res.status(200).json({ list: shirtsList });
};

exports.getAllElectronics = (req, res) => {
    res.status(200).json({ list: bestselList });
};
exports.getAllMobiles = (req, res) => {
    res.status(200).json({ list: mobileList });
};

exports.shirtsByType = (req, res) => {
    const shirtsType = req.params.type.toLowerCase();
    const shirt = shirtsList.filter(item => item.type.toLowerCase() === shirtsType);

    if (shirt.length > 0) {
        res.status(200).json({ list: shirt });
    } else {
        res.status(404).json({
            message: "Please provide a valid shirt type",
        });
    }
};

exports.electronicsByType = (req, res) => {
    const electronicsType = req.params.type.toLowerCase();
    const electronicItem = bestselList.filter(item => item.type.toLowerCase() === electronicsType);

    if (electronicItem.length > 0) {
        res.status(200).json({ list: electronicItem });
    } else {
        res.status(404).json({
            message: "Please provide a valid electronics type",
        });
    }
};

exports.mobileByType = (req, res) => {
    const mobileType = req.params.type.toLowerCase();
    const mobileItem = mobileList.filter(item => item.type.toLowerCase() === mobileType);

    if (mobileItem.length > 0) {
        res.status(200).json({ list: mobileItem });
    } else {
        res.status(404).json({
            message: "Please provide a valid mobile type",
        });
    }
};