# Step 1 — Start with Node.js already installed
FROM node:18

# Step 2 — Create a folder for the app inside the container
WORKDIR /app

# Step 3 — Copy package.json first
COPY package*.json ./

# Step 4 — Install dependencies
RUN npm install

# Step 5 — Copy the rest of the project files
COPY . .

# Step 6 — Start the server
CMD ["node", "server.js"]