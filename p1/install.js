
const express =require('express');
const exphbs = require('express-handlebars');
const app = express();

//registro del handlebars, view engine
// este template es template.hbs no utilizo un link porque estoy utilizando express
app.engine('.hbs', exphbs({
  defaultLayout: 'template',
  extname: '.hbs',
  partialsDir: ['views/partials/']
}));

//use handldebars view engine
app.set('view engine', '.hbs');

app.use(express.static('stylesheets'));
//defino que cargue el index, hago el request
app.get('/',(req,res) => {
  res.render('index');
});

app.listen(3000, () => {
	console.log( 'funciona');
});
