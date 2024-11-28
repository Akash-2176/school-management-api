const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const addSchool = require('./routes/addSchool');
const listSchools = require('./routes/listSchools');

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use('/addSchool', addSchool);
app.use('/listSchools', listSchools);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));