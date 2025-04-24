# Example LoadFocus CLI Client

This is a sample Node.js project that demonstrates how to integrate LoadFocus performance testing into a CI/CD workflow.

## Project Structure

- `index.js` - Simple Express.js API with CRUD operations
- `tests/api.test.js` - Unit tests for the API endpoints
- `tests/performance/test-script.jmx` - JMeter test script for performance testing
- `bitbucket-pipelines.yml` - Bitbucket Pipeline configuration
- `.circleci/config.yml` - CircleCI configuration
- `azure-pipelines.yml` - Azure DevOps Pipeline configuration
- `.gitlab-ci.yml` - GitLab CI/CD configuration
- `.github/workflows/main.yml` - GitHub Actions workflow

## API Endpoints

The sample API includes the following endpoints:

- `GET /` - Welcome message
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user

## Local Development

### Prerequisites

- Node.js 16 or higher
- npm

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The server will start on port 3000 by default.

### Running Tests

```bash
npm test
```

## CI/CD Pipelines

### Bitbucket Pipeline

The project includes a Bitbucket Pipeline configuration that:

1. Builds and tests the application
2. Runs performance tests using LoadFocus API Client
3. Deploys the application (manual trigger)

### CircleCI Pipeline

The project also includes a CircleCI configuration that:

1. Builds and tests the application
2. Runs performance tests using LoadFocus API Client
3. Requires manual approval before deployment
4. Deploys the application

### Azure DevOps Pipeline

The project includes an Azure DevOps pipeline configuration that:

1. Builds and tests the application
2. Runs performance tests using LoadFocus API Client
3. Deploys the application to a production environment

### GitLab CI/CD Pipeline

The project includes a GitLab CI/CD configuration that:

1. Builds and tests the application
2. Runs performance tests using LoadFocus API Client
3. Deploys the application to a production environment (manual trigger)

### GitHub Actions Workflow

The project includes a GitHub Actions workflow that:

1. Builds and tests the application
2. Runs performance tests using LoadFocus API Client
3. Deploys the application to a production environment (only on main branch)

### Required Variables

To run the pipelines successfully, you need to set the following variables:

- `LOADFOCUS_API_KEY` - Your LoadFocus API key
- `LOADFOCUS_TEAM_ID` - Your LoadFocus team ID

For CircleCI, it's recommended to store these variables in a context named `loadfocus-context`.

For Azure DevOps, these variables should be configured as pipeline variables or in a variable group.

For GitLab, these variables should be configured as CI/CD variables in your project or group settings.

For GitHub Actions, these variables should be stored as repository secrets.

## License

MIT
