# ADR 003: Use Redis for Caching and Temporary Data Storage

## Context
Some data remains relatively stable, changes infrequently, or is requested repeatedly. Caching this data can reduce unnecessary API requests, improve response times, and help manage API rate limits.

## Decision
Redis was selected as the caching system and temporary data store for the project.

## Alternatives Considered
- Django's Local Memory Cache

## Reasons
- Fast data access and retrieval.
- Reduces repeated requests to external APIs.
- Helps improve application performance.
- Seamless integration with Django.

## Consequences
- Reduces API requests and improves response times.
- Requires Redis configuration and management.
- Cached data may become outdated and requires an expiration strategy.