# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install ALL dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install additional necessary packages
RUN npm install -D autoprefixer postcss tailwindcss

# Build the Next.js app
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]