# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy only the package files first to cache dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
