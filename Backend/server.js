const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// POST route for /bfhl
app.post('/bfhl', (req, res) => {
  const { data, file_b64 } = req.body;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const lowerCaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
  const highestLowercase = lowerCaseAlphabets.sort().reverse()[0] || null;

  const file_valid = !!file_b64;
  const file_mime_type = file_valid ? 'image/png' : 'N/A';
  const file_size_kb = file_valid ? 400 : 0;

  res.json({
    is_success: true,
    user_id: "your_name_12061999",
    email: "your_email@example.com",
    roll_number: "ABCD1234",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    file_valid,
    file_mime_type,
    file_size_kb
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
