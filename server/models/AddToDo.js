var mongoose = require('mongoose');

var AddToDoSchema = new mongoose.Schema({
    title: { type: String },
    place: { type: String },
    notes: { type: String }
});

mongoose.model('AddToDo', AddToDoSchema);

module.exports = mongoose.model('AddToDo', AddToDoSchema);

