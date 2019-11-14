FROM node:12-alpine
ENV PORT 80
ENV API_ADDRESS http://api
EXPOSE 80

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm prune --production
COPY . .

CMD ["npm", "run", "start"]
