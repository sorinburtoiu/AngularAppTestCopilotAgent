# Using MCP Agent Mode in Visual Studio 2022

This guide explains how to enable and configure Agent Mode with a Model Context Protocol (MCP) server (such as the GitHub MCP server) in Visual Studio 2022.

## Prerequisites
- Visual Studio 2022 version 17.14 or later
- GitHub Copilot access (sign in with your GitHub account)
- (Optional) [GitHub Copilot for Free](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-free-plan?view=vs-2022)

## Steps
1. **Enable Agent Mode**
   - In Visual Studio, go to `Tools > Options > GitHub > Copilot > Copilot Chat`.
   - Set **Enable agent mode** in the chat pane.

2. **Sign in to Visual Studio with your GitHub account**
   - Ensure you have Copilot access.

3. **Create MCP Configuration**
   - In your solution directory, create a file named `.mcp.json` (or use `%USERPROFILE%\.mcp.json` for global config).
   - Example `.mcp.json` for the GitHub MCP server:
     ```json
     {
       "inputs": [
         {
           "id": "github_pat",
           "description": "GitHub personal access token",
           "type": "promptString",
           "password": true
         }
       ],
       "servers": {
         "github": {
           "type": "stdio",
           "command": "docker",
           "args": [
             "run",
             "-i",
             "--rm",
             "-e",
             "GITHUB_PERSONAL_ACCESS_TOKEN",
             "ghcr.io/github/github-mcp-server"
           ],
           "env": {
             "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_pat}"
           }
         }
       }
     }
     ```
   - Add this file to Solution Items in Solution Explorer if you want to track it in source control.

4. **Get a GitHub Personal Access Token**
   - [Create a token here](https://github.com/settings/personal-access-tokens) and copy it for use in the next step.

5. **Start Agent Mode in Copilot Chat**
   - In Visual Studio, open the Copilot Chat window.
   - Click the `Ask` dropdown and select `Agent`.
   - When prompted, paste your GitHub personal access token.
   - Select the tools you'd like to use (e.g., `list_issues`).
   - Try a sample prompt, such as: `list issues assigned to me on GitHub`.
   - When Copilot asks for permission to use a tool, select **Allow** with the desired scope.

## Additional Notes
- MCP configuration files can be placed in several locations for different scopes (global, solution, VS Code, etc.).
- Visual Studio supports local (`stdio`), server-sent events (`sse`), and HTTP (`http`) transports for MCP servers.
- You can manage tool approvals and reset them in `Tools > Options > GitHub > Copilot > Tools`.

For more details, see the [official documentation](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022).
