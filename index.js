const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
	  const { num1, num2, operation } = req.body;
	  let result;

	  switch (operation) {
		      case 'add':
			        result = parseFloat(num1) + parseFloat(num2);
			        break;
			      case 'subtract':
			        result = parseFloat(num1) - parseFloat(num2);
			        break;
			      case 'multiply':
			        result = parseFloat(num1) * parseFloat(num2);
			        break;
			      case 'divide':
			        result = parseFloat(num1) / parseFloat(num2);
			        break;
			      default:
			        res.status(400).send('Invalid operation');
			        return;
			    }

	  res.send(`Result: ${result}`);
});

app.listen(port, () => {
	  console.log(`Calculator app listening at http://localhost:${port}`);
});

