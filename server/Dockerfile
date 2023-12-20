# Use an official Node.js runtime as the base image
FROM node:18.17.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend application code to the container
COPY . .

# Expose port 5000 for the backend
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
