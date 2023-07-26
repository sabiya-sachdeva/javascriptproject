const mongoose = require('mongoose')
const uri = "mongodb://localhost:27017/“exams”";
const mySchema = new mongoose.Schema({ name: String,sid: String});

const quiz = mongoose.model('quiz2', mySchema);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    const data = new quiz({
        name: 'Laiba Ayyaz',
        sid: '300356623'
    })
     data.save()
});
