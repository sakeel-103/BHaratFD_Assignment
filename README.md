# BharatFD - Backend

## Project Overview

**BharatFD** is a backend system for a FAQ (Frequently Asked Questions) platform. This project utilizes various technologies and services like MongoDB for data storage, Redis for caching, and Google Cloud's Translation API for auto-translation of FAQ content into multiple languages. The backend serves APIs for fetching and creating FAQs while supporting dynamic language translation.

## Core Functionality

- **FAQ Management**: Allows for storing, fetching, and creating FAQs.
- **Multi-Language Support**: Auto-translate FAQs to multiple languages using Google Cloud Translation API.
- **Caching**: Uses Redis to cache the frequently accessed FAQ data, enhancing performance.
- **REST API**: Provides a RESTful API for accessing FAQs, with support for different languages.

---

## Technologies Used

- **Node.js**: JavaScript runtime used to build the backend.
- **Express.js**: Framework for building the API endpoints.
- **MongoDB**: NoSQL database for storing FAQs data.
- **Redis**: Caching layer for better performance on frequently requested data.
- **Google Cloud Translation API**: Used to translate FAQs into various languages.
- **Docker**: Containerization to ensure the application runs consistently across different environments.
- **Mocha & Chai**: Testing framework and assertion library for unit and integration tests.
- **ESLint**: Code linter to maintain code quality.
- **Nodemon**: Development tool for automatically restarting the server during code changes.

---

## Dependencies

### **Server Dependencies:**

- **express**: Web framework for Node.js used to build the API.
- **mongoose**: MongoDB object modeling for Node.js, used for managing the database schema and interacting with MongoDB.
- **redis**: Node.js client for Redis to manage caching.
- **google-translate-api**: A package to interact with the Google Cloud Translation API to translate FAQ content dynamically.
- **cors**: Package for enabling Cross-Origin Request Sharing (CORS) to allow cross-origin requests to the API.
- **dotenv**: Loads environment variables from a `.env` file.
- **helmet**: Security middleware for setting various HTTP headers to secure your Express app.
- **morgan**: HTTP request logger middleware for node.js.
- **quill**: Rich text editor used for formatting FAQ content.
- **winston**: Logging library for better error tracking and debugging.

### **Development Dependencies:**

- **chai**: Assertion library for BDD/TDD testing.
- **eslint**: A linter for JavaScript to ensure consistent code style.
- **mocha**: Testing framework for running unit and integration tests.
- **nodemon**: Utility for automatically restarting the server during development.
- **supertest**: Library to test HTTP assertions in an Express app.

---

## Installation Steps

Follow these steps to set up and run the **BharatFD Backend** on your local machine.

### 1. Clone the Repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/<your-github-username>/bharatfd-backend.git
cd bharatfd-backend
```

### 2. Move to the folder

```install
npm install
```

### 3. Setup Environment Variables

```create .env file 

Example ==

MONGO_URI=mongodb://localhost:_____/BharatFD   # Your MongoDB connection string 
REDIS_URL=redis://localhost:____   # Your Redis Connection URL
GOOGLE_API_KEY=your-google-api-key   # Google Cloud Translation API Key
PORT=3000  # Server Port (optional, defaults to 3000)

```

### 4. Run the Development Server

```run the server
npm run dev

```
# The Server will run at port 3000

#####################################################################################

### 5. Running the Application with Docker

```
1.Build the Docker image:
run - npm run build

2. Start the application:
docker-compose up

== This will start the application, MongoDB, and Redis in containers, with the app running on port 3000.

```

### 6. API Endpoints

```
1. GET /api/faqs
GET http://localhost:3000/api/faqs?lang=en

2. POST /api/faqs

This endpoint allows user to create a new FAQ (Frequently Asked Question) in the database. The request should include both the question and the answer, and can support multiple languages.

= Example - 
-In this questions BharatFD is name of the peoject.

{
  "question": {
    "en": "What is BharatFD?",
    "hi": "भारतFD क्या है?"
  },
  "answer": {
    "en": "BharatFD is a FAQ platform designed to provide answers to common questions.",
    "hi": "भारतFD एक FAQ प्लेटफ़ॉर्म है जिसे सामान्य प्रश्नों के उत्तर देने के लिए डिज़ाइन किया गया है।"
  }
}

= Response Format - 

{
  "message": "FAQ successfully created.",
  "faq": {
    "_id": "abc123",
    "question": {
      "en": "What is BharatFD?",
      "hi": "भारतFD क्या है?"
    },
    "answer": {
      "en": "BharatFD is a FAQ platform designed to provide answers to common questions.",
      "hi": "भारतFD एक FAQ प्लेटफ़ॉर्म है जिसे सामान्य प्रश्नों के उत्तर देने के लिए डिज़ाइन किया गया है।"
    },
    "createdAt": "2025-02-01T10:00:00.000Z",
    "updatedAt": "2025-02-01T10:00:00.000Z"
  }
}

= Otherwise if any error come occured then - 

{
  "error": "Question and answer must be provided in at least one language."
}

```
## 👀 API Endpoints

| Method  | Endpoint        | Description         | Auth Required |
|---------|----------------|---------------------|--------------|
| `GET`   | `/api/faqs`     | Fetch all FAQs      | ❌ No        |
| `POST`  | `/api/faqs`     | Add a new FAQ       | ✅ Yes       |
| `PUT`   | `/api/faqs/:id` | Update an FAQ       | ✅ Yes       |
| `DELETE`| `/api/faqs/:id` | Delete an FAQ       | ✅ Yes       |


#### 📌 Update an FAQ  
```http
PUT /api/faqs/:id
```
📌 **Request Body:**  
```json
{
  "question": "Updated question?",
  "answer": "Updated answer."
}
```

#### 📌 Delete an FAQ  
```http
DELETE /api/faqs/:id
```
📌 **Response:**  
```json
{
  "message": "FAQ deleted successfully."
}
```

### API Request Using Postman or cURL

```
curl -X POST http://localhost:3000/api/faqs \
-H "Content-Type: application/json" \
-d '{
  "question": {
    "en": "What is BharatFD?",
    "hi": "भारतFD क्या है?"
  },
  "answer": {
    "en": "BharatFD is a FAQ platform designed to provide answers to common questions.",
    "hi": "भारतFD एक FAQ प्लेटफ़ॉर्म है जिसे सामान्य प्रश्नों के उत्तर देने के लिए डिज़ाइन किया गया है।"
  }
}'

= Using Postman:-

- Set the method to POST.
- Set the URL to http://localhost:3000/api/faqs.
- In the Headers section, set:
  .Content-Type: application/json
- In the Body section, select raw and paste the following JSON:-

{
  "question": {
    "en": "What is BharatFD?",
    "hi": "भारतFD क्या है?"
  },
  "answer": {
    "en": "BharatFD is a FAQ platform designed to provide answers to common questions.",
    "hi": "भारतFD एक FAQ प्लेटफ़ॉर्म है जिसे सामान्य प्रश्नों के उत्तर देने के लिए डिज़ाइन किया गया है।"
  }
}

```

## 🤝 Contributing  

1. **Fork** the repository  
2. Create a new branch:  
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit** your changes:  
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push** to your branch:  
   ```bash
   git push origin feature-branch
   ```
5. **Open a Pull Request** 

### -------------  The End ------------- ####
