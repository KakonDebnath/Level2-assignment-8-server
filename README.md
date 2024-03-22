# **Assignment 5:**

## gitHub Repository Link: [https://github.com/programming-hero-web-course1/l2-b2-assignment-5-simple-backend-KakonDebnath](https://github.com/programming-hero-web-course1/l2-b2-assignment-5-simple-backend-KakonDebnath)

## vercel Server live api Link: [https://assignment-5-backend-two.vercel.app/](https://assignment-5-backend-two.vercel.app/)

### **Technology Stack:**

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Object Data Modeling (ODM) and Validation Library:** Mongoose for MongoDB

## **Models:**

### **1. Services Management Model:**

### **2. Event Management Model:**



## **Error Response Object:**

- **success:** false
- **message:** 
- **errorMessage**: 
- **errorDetails:**: Detailed information about the error

## **Endpoints:**

### **1. Create a Service**

- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/services](https://assignment-5-backend-two.vercel.app/api/services)
- **Method:** **POST**
- **Request Body:**
    
```json
{
  "title": "Web Development",
  "description": "Professional web development services for businesses and individuals.",
  "imageLink": "https://i.ibb.co/gZHfKxq/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg",
  "details": "Test, text2, dslfkjjs, sdlkfjska"
}
```
    
### **2. Get all Service**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/services](https://assignment-5-backend-two.vercel.app/api/services)
- **Method:** **GET**

### **3. Get Single Service**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/services/:serviceId](https://assignment-5-backend-two.vercel.app/api/services/:serviceId)
- **Method:** **GET**

### **4. Update Service**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/services/:serviceId](https://assignment-5-backend-two.vercel.app/api/services/:serviceId)
- **Method:** **Patch**
  
### **5. Delete Service**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/services/:serviceId](https://assignment-5-backend-two.vercel.app/api/services/:serviceId)
- **Method:** **Delete**
  


  
### **6. Create a Event**

- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/events](https://assignment-5-backend-two.vercel.app/api/events)
- **Method:** **POST**
- **Request Body:**
    
```json
{
  "title": "Web Development",
  "description": "Professional web development services for businesses and individuals.",
  "imageLink": "https://i.ibb.co/gZHfKxq/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg",
}
```
    
### **7. Get all Event**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/events](https://assignment-5-backend-two.vercel.app/api/events)
- **Method:** **GET**

### **8. Get Single Event**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/events/:eventId](https://assignment-5-backend-two.vercel.app/api/events/:eventId)
- **Method:** **GET**

### **9. Update Event**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/events/:eventId](https://assignment-5-backend-two.vercel.app/api/events/:eventId)
- **Method:** **Patch**
  
### **10. Delete Event**
- **Endpoint:** **[https://assignment-5-backend-two.vercel.app/api/events/:eventId](https://assignment-5-backend-two.vercel.app/api/events/:eventId)
- **Method:** **Delete**
  