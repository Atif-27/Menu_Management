# Menu Management Backend

This Node.js backend server manages menus divided into categories, subcategories, and items. It provides APIs to create, retrieve, update, and search for categories, subcategories, and items.

## Setup

1. Clone this repository.

   ```bash
   git clone https://github.com/Atif-27/Menu_Management.git
   ```

2. Change Directory

   ```bash
   cd Menu_Management
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Set up your MongoDB database and provide the connection URI in a `.env` file.

   ```env
   MONGODB_URI=mongodb://localhost:27017/menu_management
   ```

5. Run the server.

   ```bash
   npm start
   ```

6. You can now use Postman or any API client to interact with the server.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for storing menu data
- **Mongoose**: MongoDB object modeling for Node.js
- **Zod**: TypeScript-inspired schema validation library for JavaScript

## Models

| Model       | Description                            |
| ----------- | -------------------------------------- |
| Category    | Represents a menu category             |
| Subcategory | Represents a subcategory of a category |
| Item        | Represents an item in a subcategory    |

## Routes

### Categories

| Route                    | Method | Description                         |
| ------------------------ | ------ | ----------------------------------- |
| `/api/v1/categories`     | POST   | Create a new category               |
| `/api/v1/categories`     | GET    | Get all categories                  |
| `/api/v1/categories/:id` | GET    | Get a single category by ID or name |
| `/api/v1/categories/:id` | PUT    | Update a category by ID             |

### Subcategories

| Route                                | Method | Description                            |
| ------------------------------------ | ------ | -------------------------------------- |
| `/api/v1/subcategories`              | POST   | Create a new subcategory               |
| `/api/v1/subcategories`              | GET    | Get all subcategories                  |
| `/api/v1/subcategories/category/:id` | GET    | Get all subcategories under a category |
| `/api/v1/subcategories/:id`          | GET    | Get a single subcategory by ID or name |
| `/api/v1/subcategories/:id`          | PUT    | Update a subcategory by ID             |

### Items

| Route                           | Method | Description                       |
| ------------------------------- | ------ | --------------------------------- |
| `/api/v1/items`                 | POST   | Create a new item                 |
| `/api/v1/items`                 | GET    | Get all items                     |
| `/api/v1/items/category/:id`    | GET    | Get all items under a category    |
| `/api/v1/items/subcategory/:id` | GET    | Get all items under a subcategory |
| `/api/v1/items/:id`             | GET    | Get a single item by ID or name   |
| `/api/v1/items/:id`             | PUT    | Update an item by ID              |
| `/api/v1/items/search/:name`    | GET    | Search items by name              |

## Short Answers

- **Which database have you chosen and why?**
  I have chosen MongoDB because of its flexibility with JSON-like documents, scalability, and ease of use, which aligns well with the dynamic nature of menu management data.

- **3 things that you learned from this assignment?**

  - Enhanced my understanding of building RESTful APIs with Express.js.
  - Gained experience in schema validation using Zod.
  - Learned more about managing relationships between MongoDB collections.

- **What was the most difficult part of the assignment?**
  Designing and implementing the database schema to handle the relationships between categories, subcategories, and items efficiently.

- **What would you have done differently given more time?**
  Given more time, I would have integrated multer for image uploads, used Cloudinary for image storage, implemented pagination for limiting API responses, and added sorting capabilities for better data organization and scalability.