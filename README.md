**Architecture**

In my full stack project, I used Express HTML, JavaScript, and an Angular single-page application. The Express HTML pages supported the customer-facing side of Travlr Getaways and used server-rendered pages. JavaScript added interactivity, while the Angular SPA supported the admin side with a more dynamic interface. Unlike the Express pages, the SPA could update parts of the page without fully reloading, making actions like viewing, adding, and editing trips smoother.

The backend used MongoDB because the trip data fit well into a flexible, document-based NoSQL database. Trip records included fields like name, resort, length, price, image, and description, which worked naturally as JSON-like documents.

**Functionality**

JSON is a data format, while JavaScript is a programming language. JSON uses key-value pairs to transfer data between the frontend and backend. In my project, the backend returned trip data as JSON, and Angular used that data to display trip cards and fill forms.

I refactored code by creating reusable Angular components and separating API calls into a trip data service. This reduced duplicated code and made the project easier to update. Reusable UI components also improved consistency because one component could be used in multiple places.

**Testing**

API testing involves checking methods, endpoints, and security. Methods include GET to retrieve data, POST to create data, PUT to update data, and DELETE to remove data. Endpoints are the routes that receive those requests, such as `/api/trips` or `/api/trips/:tripCode`.

Testing confirmed that the frontend and backend communicated correctly. Tools like Postman helped verify responses, status codes, and errors. Security made testing more complex because protected routes required a valid JWT token. Without the correct token, the API returned errors such as 401 Unauthorized.

**Reflection**

This course helped me build practical full stack development skills that support my career goals in application development, AI, and defense systems. I gained experience with Angular, Express, MongoDB, RESTful APIs, authentication, and troubleshooting.

The course also made me more marketable because I can now explain how a complete application works from the database to the frontend. I improved my ability to debug problems, organize code, reuse components, and understand how security fits into a full stack application.
