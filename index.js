import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import ExpressError from "./src/utils/ExpressError.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import categoryRoutes from "./src/routes/category.route.js";
import subcategoryRoutes from "./src/routes/subcategory.route.js";
import itemRoutes from "./src/routes/item.route.js";

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/subcategories", subcategoryRoutes);
app.use("/api/v1/items", itemRoutes);

// ! Error Handler Middleware
app.use((err, req, res, next) => {
  if (err) {
    const { statusCode = 500, message = "Something went wrong" } = err;
    console.log(err.message);
    res.status(statusCode).json({ message });
    next();
  }
});
// ! DB and Server Connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
