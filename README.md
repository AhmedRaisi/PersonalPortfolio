
# Personal Portfolio Web Application

## Overview
This repository contains the code for my personal portfolio web application. It showcases my full-stack development projects and highlights my skills in modern web and software technologies.

## Running the Application with Docker Compose

### Prerequisites
- Docker: Ensure you have Docker installed on your machine. You can download it from [Docker's official website](https://docs.docker.com/get-docker/).
- Docker Compose: Docker Compose should be installed along with Docker. If not, follow the instructions on [Docker Compose's official website](https://docs.docker.com/compose/install/).

### Steps to Run

1. **Clone the Repository**
   Begin by cloning this repository to your local machine.
   ```bash
   git clone https://github.com/AhmedRaisi/PersonalPortfolio.git
   cd PersonalPortfolio
   ```

2. **Build the Docker Images**
   Use Docker Compose to build the images for the frontend and backend services.
   ```bash
   docker-compose build
   ```

3. **Run the Application**
   Once the build process is complete, you can start the application by running:
   ```bash
   docker-compose up
   ```
   This command will start all services defined in your `docker-compose.yml` file.

4. **Accessing the Application**
   - The frontend can be accessed at `http://localhost:3000`.
   - The backend is available at `http://localhost:5000`.

### Shutting Down

To stop and remove the containers, networks, and volumes created by `up`, you can use:
```bash
docker-compose down
```

## Feedback and Contributions
Feel free to provide feedback or contribute to this project. Any contributions are welcome!

