const express = requrie("express")
const mongoose = require("mongoose")
const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
