import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import ExpressResponse from "./src/utils/ExpressResponse.js";

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
  console.log(err);
  res
    .status(err.statusCode || 500)
    .json(
      new ExpressResponse(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
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
