Features:
    Separation of Concerns: Code is divided into configs, services, and controllers for better organization.
    Data Mapping: Transforms complex API responses into simple, flat objects.
    Global Error Handling: One central place to handle all server errors and log them.
    Unit Tests: Includes tests for successful data fetching and common API errors like 401 or 500.
    Graceful Shutdown: Server stops safely without losing data when turned off.

Project Structure:
    src/controllers - Handles HTTP requests.
    src/services - Contains the main logic and API calls.
    src/middleware - Handles errors.
    src/types - TypeScript interfaces.
    tests - Jest test files.
