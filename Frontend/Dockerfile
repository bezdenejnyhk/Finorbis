FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy built app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Replace default nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80
# Run nginx
CMD ["nginx", "-g", "daemon off;"]




# FROM node:13.12.0-alpine as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent
# COPY . ./
# RUN npm run build

# # Production environment
# FROM nginx:stable-alpine

# # Copy built app from previous stage
# COPY --from=build /app/build /usr/share/nginx/html

# # Copy SSL certificates and keys
# COPY nginx/ssl/private.key /etc/ssl/private/private.key
# COPY nginx/ssl/STAR_africa-payments_com.crt /etc/ssl/certs/STAR_africa-payments_com.crt
# COPY nginx/ssl/My_CA_Bundle.ca-bundle /etc/ssl/certs/My_CA_Bundle.ca-bundle

# # Replace default nginx configuration
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# # Expose ports
# EXPOSE 80
# EXPOSE 443

# # Run nginx
# CMD ["nginx", "-g", "daemon off;"]

