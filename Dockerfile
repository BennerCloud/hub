# Use a imagem oficial do Apache como base
FROM httpd:latest

# Copie a pasta Index (HTML e CSS) e a pasta Images para o diretório correto do Apache
COPY ./HUB/src/Index/ /usr/local/apache2/htdocs/
COPY ./HUB/src/Images/ /usr/local/apache2/htdocs/Images/
