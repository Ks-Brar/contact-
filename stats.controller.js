const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;

exports.calculate = async (req, res) => {
    try {
        const totalContacts = await db.contacts.count();
        const totalPhones = await db.phones.count();
        const latestContact = await db.contacts.findOne({
            order: [['createdAt', 'DESC']]
        });
        const oldestContact = await db.contacts.findOne({
            order: [['createdAt', 'ASC']]
        });

        res.json({
            totalContacts,
            totalPhones,
            latestContactTime: latestContact ? latestContact.createdAt : null,
            oldestContactTime: oldestContact ? oldestContact.createdAt : null
        });
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving stats"
        });
    }
};
