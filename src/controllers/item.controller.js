import asyncWrapper from "../utils/asyncWrapper.js";
import ExpressResponse from "../utils/ExpressResponse.js";
import ExpressError from "../utils/ExpressError.js";
import Item from "../models/item.model.js";
import { z } from "zod";

// @ desc Create a new item
// @route POST /api/v1/items
const itemVal = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string(),
  taxApplicability: z.boolean(),
  tax: z.number(),
  baseAmount: z.number(),
  discount: z.number(),
  onModel: z.enum(["Category", "Subcategory"]),
  modelId: z.string(),
});
export const createItem = asyncWrapper(async (req, res) => {
  const {
    name,
    image,
    description,
    taxApplicability,
    tax,
    baseAmount,
    discount,
    onModel,
    modelId,
  } = itemVal.parse(req.body);
  const item = await Item.create({
    name,
    image,
    description,
    taxApplicability,
    tax,
    baseAmount,
    discount,
    totalAmount: baseAmount - discount,
    onModel,
    modelId,
  });
  res
    .status(201)
    .json(new ExpressResponse(201, "Item created successfully", item));
});

// @ desc Get all items
// @route GET /api/v1/items
export const getAllItems = asyncWrapper(async (req, res) => {
  const items = await Item.find({});
  if (!items) {
    throw new ExpressError(404, "No items found. Please add some items.");
  }
  res
    .status(200)
    .json(new ExpressResponse(200, "Items found successfully", items));
});

// @ desc Get all items under a category
// @route GET /api/v1/items/category/:id
export const getItemsByCategoryId = asyncWrapper(async (req, res) => {
  const items = await Item.find({
    onModel: "Category",
    modelId: req.params.id,
  });
  if (!items) {
    throw new ExpressError(
      404,
      "No items found under this category. Please add some items."
    );
  }
  res
    .status(200)
    .json(new ExpressResponse(200, "Items found successfully", items));
});

// @ desc Get all items under a subcategory
// @route GET /api/v1/items/subcategory/:id
export const getItemsBySubcategoryId = asyncWrapper(async (req, res) => {
  const items = await Item.find({
    onModel: "Subcategory",
    modelId: req.params.id,
  });
  if (!items) {
    throw new ExpressError(
      404,
      "No items found under this subcategory. Please add some items."
    );
  }
  res
    .status(200)
    .json(new ExpressResponse(200, "Items found successfully", items));
});

// @ desc Get single item by id or name
// @route GET /api/v1/items/:id
export const getItem = asyncWrapper(async (req, res) => {
  const item = await Item.findOne({
    $or: [{ _id: req.params.id }, { name: req.params.id }],
  });
  if (!item) {
    throw new ExpressError(404, "Item not found.");
  }
  res
    .status(200)
    .json(new ExpressResponse(200, "Item found successfully", item));
});

// @ desc Update an item by id
// @route PUT /api/v1/items/:id
const updateItemVal = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
  taxApplicability: z.boolean().optional(),
  tax: z.number().optional(),
  baseAmount: z.number().optional(),
  discount: z.number().optional(),
});
// TODO : IF baseamt not provided, calculate total amount
export const updateItem = asyncWrapper(async (req, res) => {
  const {
    name,
    image,
    description,
    taxApplicability,
    tax,
    baseAmount,
    discount,
  } = updateItemVal.parse(req.body);
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    {
      name,
      image,
      description,
      taxApplicability,
      tax,
      baseAmount,
      discount,
      totalAmount: baseAmount - discount,
    },
    { new: true, runValidators: false }
  );
  if (!item) {
    throw new ExpressError(404, "Item not found.");
  }
  res
    .status(200)
    .json(new ExpressResponse(200, "Item updated successfully", item));
});

// @ Search items by name
// @route GET /api/v1/items/search/:name

export const searchItemByName = async (req, res, next) => {
  try {
    const regex = new RegExp(req.query.name, "i");
    const items = await Item.find({ name: regex });
    res.json(items);
  } catch (error) {
    next(new ExpressError(500, error.message));
  }
};
// export const searchItems = asyncWrapper(async (req, res) => {
//   const items = await Item.find({
//     name: { $regex: req.params.name, $options: "i" },
//   });
//   if (!items) {
//     throw new ExpressError(404, "No items found.");
//   }
//   res
//     .status(200)
//     .json(new ExpressResponse(200, "Items found successfully", items));
// });
