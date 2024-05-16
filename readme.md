# Menu Management Backend

This Node.js backend server manages menus divided into categories, subcategories, and items. It provides APIs to create, retrieve, update, and search for categories, subcategories, and items.

[Loom Video](https://www.loom.com/share/d5268c8f9e774de9bd2cc397cc38fcaf)

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

4. Set Up your env file

   ```env
   DB_URI=mongodb+srv://atif276ali:RTQUh20M6QdlSkWG@cluster0.xjcl9wz.mongodb.net/menu?retryWrites=true&w=majority&appName=Cluster0

   PORT=9000
   ```

5. Run the server.

   ```bash
   npm start
   ```

6. You can now use Postman or any API client to interact with the server. Here is my postman collection [Link](https://app.getpostman.com/join-team?invite_code=243ce1bcf4a198f655bad4324874a90f&target_code=80fd480c58fa876f93f95f64a3d21231)
7. Imp Note - Select the New environment mode otherwise routes wont be working
   
   ![image](https://github.com/Atif-27/Menu_Management/assets/116288316/e8619ec4-99cb-444d-b9f1-4f30923ae02d)

8. Paste the URL in initial and current value of the environment in case of error
```bash
menu-management-three.vercel.app/api/v1
```

![image](https://github.com/Atif-27/Menu_Management/assets/116288316/5a2044bb-22e9-4343-97d5-2dbdf72023dd)


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

![image](https://github.com/Atif-27/Menu_Management/assets/116288316/4bd844be-4a32-438b-a2ae-4c0a984004d3)

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
