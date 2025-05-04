const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const commodityRoutes = require('./routes/commodity');

dotenv.config();

const app = express();
app.use(cors());
app.use('/api/commodity', commodityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
