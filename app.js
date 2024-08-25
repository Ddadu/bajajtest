const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userId = 'john_doe_17091999';
const email = 'john@xyz.com';
const rollNumber = 'ABCD123';

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = '';

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (item.match(/[a-z]/i)) {
      alphabets.push(item);
      if (item.toLowerCase() > highestLowercaseAlphabet) {
        highestLowercaseAlphabet = item.toLowerCase();
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: [highestLowercaseAlphabet],
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
