# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend application code to the container
COPY frontend/ .

# Build the frontend
RUN npm run build

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
