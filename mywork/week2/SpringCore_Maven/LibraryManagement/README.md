# Library Management - Spring Core & Maven

## Week 2 - Spring Core & Maven Exercises

This project contains the implementation of the following Cognizant Digital Nurture exercises.

### Exercise 1 - Configuring a Basic Spring Application

- Created a Maven project named LibraryManagement.
- Added Spring Core dependencies.
- Configured beans using applicationContext.xml.
- Created BookService and BookRepository classes.
- Loaded the Spring Application Context.

---

### Exercise 2 - Implementing Dependency Injection

- Used Spring IoC Container.
- Injected BookRepository into BookService using Setter Injection.
- Configured dependency injection through XML.

---

### Exercise 4 - Creating and Configuring a Maven Project

- Created a Maven project.
- Added dependencies:
    - Spring Context
    - Spring AOP
    - Spring WebMVC
- Configured Maven Compiler Plugin.

---

## Technologies Used

- Java 21
- Maven
- Spring Core
- Spring IoC
- XML Configuration

---

## Project Structure

```
LibraryManagement
│
├── pom.xml
├── README.md
│
└── src
    └── main
        ├── java
        │   └── com.library
        │       ├── LibraryManagementApplication.java
        │       ├── service
        │       │      BookService.java
        │       ├── repository
        │       │      BookRepository.java
        │       └── config
        │
        └── resources
               applicationContext.xml
```

---

## Output

Application started successfully.

BookService bean loaded successfully.

BookRepository bean injected successfully.

Library Management Application executed without errors.