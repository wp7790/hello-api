# use official Node.ms LTS image 
FROM node:18 

#set working Directory 
WORKDIR /app

# Copy package files and install dependecies 
COPY package.json ./
RUN npm install --prefix package

# copy index/ ./index/ 

COPY index.js ./

#set envireonment varialbe for node 
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "index.js"]
