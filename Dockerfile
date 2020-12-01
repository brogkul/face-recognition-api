FROM node:14.15.1

WORKDIR /usr/src/face-recognition-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]