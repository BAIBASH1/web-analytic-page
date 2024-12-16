# 1. Используем Node.js для сборки приложения
FROM node:16 as build

# 2. Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь код проекта
COPY . .

# 6. Собираем React-приложение
RUN npm run build

# 7. Используем Nginx для продакшен-сервинга
FROM nginx:stable

# 8. Копируем собранное приложение из предыдущего контейнера в папку Nginx
COPY --from=build /app/build /usr/share/nginx/html

# 9. Копируем пользовательский конфиг Nginx (опционально)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 10. Экспонируем порт
EXPOSE 3000

# 11. Стартуем Nginx
CMD ["nginx", "-g", "daemon off;"]
