# Spring Learn

## Week 3 - Spring Web and Spring Core XML Configuration

### Objectives

- Create a Spring Boot Web project using Maven
- Configure Spring beans using XML
- Load beans using ApplicationContext
- Read bean properties
- Display bean details using logging

---

## Technologies

- Java 21
- Spring Boot
- Spring Web
- Spring Context
- Maven

---

## Project Structure

```
spring-learn
│
├── Country.java
├── SpringLearnApplication.java
├── resources
│     ├── application.properties
│     └── country.xml
└── pom.xml
```

---

## XML Bean

```xml
<bean id="country"
      class="com.cognizant.springlearn.Country">

    <property name="code" value="IN"/>
    <property name="name" value="India"/>

</bean>
```

---

## Output

- Spring Boot application started successfully.
- Country bean loaded from XML configuration.
- Country details displayed using SLF4J logging.