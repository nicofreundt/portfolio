# Use the official Node.js image as the base image
FROM node:16-alpine

# Set env variable
ENV VITE_API_TOKEN=${VITE_API_TOKEN}

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve the production build
RUN npm install -g serve

# Set the environment to production
ENV NODE_ENV=production

# Expose the port on which the app will run
EXPOSE 3000

# Command to serve the app using HTTP server
CMD ["serve", "-s", "dist", "-l", "3000"]
