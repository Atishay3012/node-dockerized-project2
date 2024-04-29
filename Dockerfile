FROM node:latest
WORKDIR /calculatorapp
ADD . .
RUN npm install
CMD ["node", "index.js"]
