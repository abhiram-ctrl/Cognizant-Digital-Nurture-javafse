# Week 4 - Microservices

## Creating Microservices for Account and Loan

This exercise demonstrates the creation of two independent Spring Boot RESTful microservices for a banking application.

The application is divided into:

- Account Microservice
- Loan Microservice

Each microservice is an independent Maven project with its own `pom.xml` file and runs as a separate Spring Boot application.

## Technologies Used

- Java 21
- Spring Boot
- Spring Web
- Spring Boot DevTools
- Maven
- IntelliJ IDEA

## Project Structure

```text
week4
└── Microservices
    ├── account
    │   ├── src
    │   └── pom.xml
    │
    └── loan
        ├── src
        └── pom.xml
```

## Account Microservice

The Account Microservice provides account details based on an account number.

This service returns dummy account information without using a database or backend connectivity.

### Endpoint

```text
GET /accounts/{number}
```

### Sample Request

```text
http://localhost:8080/accounts/00987987973432
```

### Sample Response

```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343.0
}
```

The Account Microservice runs on port `8080`.

## Loan Microservice

The Loan Microservice provides loan details based on a loan number.

This service also returns dummy loan information without using a database or backend connectivity.

### Endpoint

```text
GET /loans/{number}
```

### Sample Request

```text
http://localhost:8081/loans/H00987987972342
```

### Sample Response

```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000.0,
  "emi": 3258.0,
  "tenure": 18
}
```

The Loan Microservice runs on port `8081`.

## Port Conflict and Resolution

By default, Spring Boot applications run on port `8080`.

The Account Microservice was started first and occupied port `8080`.

When the Loan Microservice was started, it also attempted to use port `8080`. This caused a port conflict because two applications cannot use the same port at the same time.

The Loan Microservice was configured to run on port `8081`.

The following configuration was added to the Loan Microservice `application.properties` file:

```properties
server.port=8081
```

After changing the port, both microservices were able to run simultaneously.

## Running the Applications

### Account Microservice

Run the `AccountApplication` class.

The service starts on:

```text
http://localhost:8080
```

### Loan Microservice

Run the `LoanApplication` class.

The service starts on:

```text
http://localhost:8081
```

## Conclusion

The Account and Loan functionalities were implemented as two independent Spring Boot microservices.

Each microservice:

- Is an independent Maven project
- Has its own `pom.xml`
- Runs as a separate Spring Boot application
- Exposes its own REST API
- Runs on a separate port

This exercise demonstrates the basic concept of splitting application functionalities into independent microservices.