# Testform App

![logo](https://chiga2030.github.io/testform/favicon.svg)

Форма заказа каких либо продуктов.

- Можно изменять количество выбранных продуктов (добавлять / удалять).
- При отсутствии продуктов, кнопка "Оплатить" становится не активной.
- Окончательная цена изменяется в зависимости от кол-ва добавленных продуктов.
- По нажатию на кнопку "Оплатить" форма имитирует успешную или неудачную отправку данных.
- После оплаты можно вернуться к первоначальному экрану.

Посмотреть проект - __[Ссылка на GitHub pages](https://chiga2030.github.io/testform/#/)__ 

или: 
```
  git clone
  npm start
```

Техническое задание - __[Figma template](https://www.figma.com/file/dAMFGXTa8nF3mniNdr69wE/testform?node-id=0%3A1)__

---

Технология: __React.js__

Цель - практика в React: использование компонентов, разделение, именование, структурирование.

---

Выводы и полученный опыт:
- не стоит передавать стили дочерним компонентам через пропсы.
- единицы vw - обманчивы, но выяснится это не сразу.
- имеет смысл группировать компоненты по их семантике или по их родитель-дочерней принадлежности.
- попытка реализовать самодельный кастомный scrollBar (спойлер: В следующем проекта она удалась).
- деплой приложения прошел не гладко, возникли проблемы с роутами на github pages, прошлось заменить react roter на react hash router.
