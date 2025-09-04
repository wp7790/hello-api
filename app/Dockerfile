# Build a tiny Node image
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --only=production
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
