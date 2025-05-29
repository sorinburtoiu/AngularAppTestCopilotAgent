# Configuring a Model Context Protocol (MCP) Server for GitHub in Visual Studio Code

This guide explains how to configure and run an MCP Server for GitHub using Visual Studio Code. The MCP Server enables advanced code context and AI-powered features for GitHub repositories.

## Prerequisites
- Visual Studio Code (latest version recommended)
- .NET 8 SDK (for building/running the server)
- Node.js & npm (for frontend, if needed)
- [MCP Server source code for GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/github)

## Steps to Configure MCP Server for GitHub

1. **Clone the MCP Server Repository**
   ```sh
   git clone https://github.com/modelcontextprotocol/servers.git
   cd servers/src/github
   ```

2. **Open in Visual Studio Code**
   - Launch VS Code and open the `servers/src/github` folder.

3. **Restore .NET Dependencies**
   ```sh
   dotnet restore
   ```

4. **Build the MCP Server**
   ```sh
   dotnet build
   ```

5. **Configure Environment Variables**
   - Create a `.env` file or set environment variables as required by the MCP GitHub server (see project documentation for details).
   - Common variables may include GitHub tokens or server configuration settings.

6. **Run the MCP Server**
   ```sh
   dotnet run
   ```
   - The server will start and listen on the configured port (default is usually 5000 or 5001).

7. **Connect Your Client or Tool**
   - Use the MCP endpoint in your client, extension, or tool as needed.

## Useful Links
- [MCP Server for GitHub (Source)](https://github.com/modelcontextprotocol/servers/tree/main/src/github)
- [Model Context Protocol Documentation](https://github.com/modelcontextprotocol/servers)
- [Visual Studio MCP Servers Documentation](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022)

## Example .env File
```
GITHUB_TOKEN=your_github_token_here
MCP_SERVER_PORT=5000
```

> **Note:** Never commit secrets or tokens to your repository. Use `.gitignore` to exclude `.env` files.

---

Add these steps to your main `README.md` or reference this file for onboarding and configuration instructions.
