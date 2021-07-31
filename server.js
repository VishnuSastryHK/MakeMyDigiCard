const express=require('express');
const app=express();
var path = require('path');

//bring in mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/DCMS", 
{ useNewUrlParser: true,
    useUnifiedTopology: true  });

//bring in method override
const methodOverride=require('method-override');

//set template engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

//set folder for data in public
app.use(express.static(__dirname + '/public'));

//methodOverride for edits
app.use(methodOverride('_method'));

//Linking routes
const cardRouter=require('./routes/cards');
const newCardRouter=require('./routes/newCard');
const formSubmissionsRouter=require('./routes/formSubmissions');
const previewRouter=require('./routes/preview');

app.use('/cards', cardRouter);
app.use('/newCard', newCardRouter);
app.use('/formSubmissions', formSubmissionsRouter);
app.use('/preview', previewRouter);


//route for index
app.get('/', (req, res) => {
    const cards = [
        {
            title: 'The information we do not need',
            snippet: 'You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly',
            author: 'Somtea Codes',
            createdAt: new Date,
            img: 'placeholder.jpg'
        },
        {
            title: 'The information we do not need2',
            snippet: 'You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly',
            author: 'Somtea Codes',
            createdAt: new Date,
            img: 'placeholder.jpg'
        },
        {
            title: 'The information we do not need3',
            snippet: 'You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly',
            author: 'Somtea Codes',
            createdAt: new Date,
            img: 'placeholder.jpg'
        },

    ]
    res.render('index', { cards: cards })
});



//listen port
app.listen(5000);

