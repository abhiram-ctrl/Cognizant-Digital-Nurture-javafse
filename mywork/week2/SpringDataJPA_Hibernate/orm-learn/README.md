# ORM Learn - Spring Data JPA with Hibernate

## Week 2 - Spring Data JPA and Hibernate

### Objectives

- Configure Spring Boot with MySQL
- Use Spring Data JPA
- Create an Entity class
- Create a Repository interface
- Create a Service layer
- Fetch data from MySQL database

---

## Technologies Used

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL 8
- Maven

---

## Project Structure

```
orm-learn
│
├── model
│     Country.java
│
├── repository
│     CountryRepository.java
│
├── service
│     CountryService.java
│
├── OrmLearnApplication.java
│
└── application.properties
```

---

## Database

Database: ormlearn

Table:

country

Sample Data:

| Code | Name |
|------|------|
| IN | India |
| US | United States of America |

---

## Output

- Successfully connected to MySQL.
- Retrieved all countries using Spring Data JPA.
- Displayed results using SLF4J logging.