# Use official Node.js image from Docker Hub
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your app is running on (3030)
EXPOSE 3030

# Command to run the server when the container starts
CMD ["node", "server.js"]
