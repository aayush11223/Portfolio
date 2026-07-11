import Contact from "../models/Contact.js";

// POST /api/contact
export const createContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json(contact);

    } catch (error) {
        next(error);
    }
};

// GET /api/contact
export const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
};
