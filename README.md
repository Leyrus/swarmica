# Тестовое задание: Поиск статей базы знаний

## Стек технологий

- React
- TypeScript
- Vite
- Recoil (для глобального состояния)
- MUI (для визуальных компонентов)
- Axios (для работы с API)
- localStorage (для хранения просмотренных статей)

---

## Цель

Создать веб-приложение, которое:

- Выполняет **поиск статей базы знаний** по ключевому слову
- Поддерживает **фильтрацию** по:
  - Категория
  - Локали
- Отображает результаты поиска
- Сохраняет **просмотренные статьи** в `localStorage`
- Подсвечивает **просмотренные статьи** в выдаче (например, иконкой или стилем)

---

## API

- **Поиск статей:**
  - `GET /api/search/articles/`  
  Документация: https://support.swarmica.com/api/schema/doc/#get-/api/search/articles/

- **Список категорий:**
  - `GET /api/categories/`  
  Документация: https://support.swarmica.com/api/schema/doc/#get-/api/categories/

- **Информация об инстансе (для локалей):**
  - `GET /api/instance/`  
  Документация: https://support.swarmica.com/api/schema/doc/#get-/api/instance/

---

## Результат

- Исходный код проекта должен быть размещён в публичном репозитории:
  - GitHub / GitLab / Bitbucket
- Доступ по ссылке: `git clone <repo-url>`

