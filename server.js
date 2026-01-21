const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/myapp', {})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/blogs', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
