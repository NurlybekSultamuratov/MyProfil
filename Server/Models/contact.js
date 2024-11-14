"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const contactSchema = new Schema({
    Name: String,
    Email: String,
    ContactNumber: Number
}, {
    collection: "contacts"
});
const Contact = mongoose_1.default.model("Contact", contactSchema);
exports.default = Contact;
//# sourceMappingURL=contact.js.map