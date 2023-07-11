FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the project files to the container
COPY . .

# Copy the package.json and package-lock.json files to the container
COPY package.json ./

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Install project dependencies
RUN npm install

# Expose the necessary port
EXPOSE 3000

# Start the server
# CMD [ "node", "server.js" ]

CMD [ "npm","start" ]

