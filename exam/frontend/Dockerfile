FROM node

WORKDIR /app/exam/frontend
COPY package.json /app/exam/frontend

RUN npm install
RUN npm init -y 
RUN npm i -D webpack webpack-cli
RUN npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties
EXPOSE 3000
CMD ["npm", "run", "dev"]