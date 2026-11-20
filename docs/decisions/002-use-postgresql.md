# ADR 002: Use PostgreSQL as the Primary Database

## Context
The project requires a reliable and scalable database to support more advanced cryptocurrency-related data storage, user authentication, and future application updates and enhancements.

## Decision
PostgreSQL was selected as the primary relational database for the project.

## Alternatives Considered
- SQLite

## Reasons
- Support for complex queries and relationships.
- Scalability for future development.
- Seamless integration with Django.

## Consequences
- Provides a reliable foundation for application data.
- Supports future application growth and scalability.
- Requires database configuration and management.
- May involve more setup than SQLite during development.