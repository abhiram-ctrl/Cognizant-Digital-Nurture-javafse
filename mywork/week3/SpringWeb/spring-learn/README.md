# Spring Learn - Week 3

## Overview

This project contains the Week 3 Spring Web and REST hands-on exercises from the Cognizant Java FSE Deep Skilling program.

## Technologies Used

- Java 21
- Spring Boot
- Spring Web
- Spring Core
- Spring Security
- JWT
- Maven
- SLF4J

## Exercises Implemented

### 1. Spring Web Project

Created a Spring Boot Maven project using Spring Web and Spring Boot DevTools.

### 2. Load Country from Spring XML Configuration

Configured country details using `country.xml`.

The Spring ApplicationContext loads the Country bean from the XML configuration.

### 3. Hello World REST Service

Endpoint:

GET /hello

Response:

Hello World!!

### 4. Country REST Service

Endpoint:

GET /country

Sample Response:

{
  "code": "IN",
  "name": "India"
}

### 5. Get Country by Country Code

Endpoint:

GET /countries/{code}

The country code comparison is case-insensitive.

Example:

GET /countries/in

### 6. JWT Authentication Service

Endpoint:

GET /authenticate

The authentication endpoint uses HTTP Basic Authentication.

Credentials:

Username: user
Password: pwd

After successful authentication, the service generates and returns a JWT token.

Sample Response:

{
  "token": "eyJ..."
}

## Security Configuration

The `/authenticate` endpoint requires authentication.

Other REST endpoints are publicly accessible.

## Concepts Covered

- Spring Boot
- Spring ApplicationContext
- XML Bean Configuration
- Dependency Injection
- REST Controllers
- Path Variables
- JSON Serialization
- Spring Security
- HTTP Basic Authentication
- JWT Token Generation
- SLF4J Logging