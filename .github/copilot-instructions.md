# ????? Copilot Instructions for Angular & C# Projects

Welcome to this repository! This document provides guidelines for using GitHub Copilot with Angular (frontend) and C#/.NET (backend) codebases. Please follow these instructions to ensure high-quality, maintainable, and secure code contributions.

---

## ?? General Guidelines
- **Write clear, concise, and well-documented code.**
- **Prefer built-in and framework features** over custom implementations when possible.
- **Follow project-specific conventions** for file structure, naming, and formatting.
- **Write and update tests** for all new features and bug fixes.

---

## ??? Angular (Frontend)
- Use [Angular CLI](https://angular.io/cli) for generating components, services, and modules.
- Prefer [RxJS](https://rxjs.dev/) for async operations and state management.
- Use [TypeScript strict mode](https://www.typescriptlang.org/tsconfig#strict) and type everything explicitly.
- Follow [Angular Style Guide](https://angular.io/guide/styleguide).
- Use [HttpClient](https://angular.io/guide/http) for API calls.
- Place shared logic in services, not components.
- Write unit tests with [Karma](https://karma-runner.github.io/) and [Jasmine](https://jasmine.github.io/).
- Use [Angular Forms](https://angular.io/guide/forms-overview) for user input.
- Keep components small and focused.
- Use [Angular Routing](https://angular.io/guide/router) for navigation.

---

## ?? C# / .NET (Backend)
- Use [ASP.NET Core](https://learn.microsoft.com/aspnet/core) conventions for controllers, services, and dependency injection.
- Prefer [async/await](https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/async/) for I/O operations.
- Use [Entity Framework Core](https://learn.microsoft.com/ef/core/) for data access.
- Follow [C# coding conventions](https://learn.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions).
- Write unit and integration tests with [xUnit](https://xunit.net/) or [NUnit](https://nunit.org/).
- Use [Swagger](https://swagger.io/tools/swagger-ui/) for API documentation.
- Validate all incoming data (model validation attributes).
- Use dependency injection for all services.
- Keep controllers thin; move business logic to services.
- Handle errors with middleware and proper exception handling.

---

## ?? Testing
- All code must include or update relevant tests.
- Frontend: Use `ng test` for unit tests and `ng e2e` for end-to-end tests.
- Backend: Use `dotnet test` for running tests.

---

## ?? Security & Best Practices
- Never commit secrets or credentials.
- Sanitize and validate all user input.
- Use HTTPS for all API endpoints.
- Keep dependencies up to date.

---

## ?? Copilot Usage Tips
- Use Copilot to suggest code, but always review and refactor as needed.
- Do not accept large code suggestions without understanding them.
- Add comments to clarify complex logic.
- Use Copilot for boilerplate, but write business logic yourself.

---

## ?? References
- [Angular Documentation](https://angular.io/docs)
- [ASP.NET Core Documentation](https://learn.microsoft.com/aspnet/core)
- [C# Coding Conventions](https://learn.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [RxJS Documentation](https://rxjs.dev/)
- [Visual Studio MCP Servers Documentation](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022)
- [YouTube: GitHub Copilot for .NET and Angular](https://www.youtube.com/watch?v=dutyOc_cAEU)
- [Sample Copilot Instructions (GitHub)](https://github.com/burkeholland/the-urlist-web/blob/main/.github/copilot-instructions.md)

---

Thank you for contributing! ??
