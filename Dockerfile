FROM ubuntu/apache2:latest
WORKDIR /index
EXPOSE 80
CMD [ "index.html" ]