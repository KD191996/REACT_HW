Ось завдання для практики роботи з RTK Query на базі JSONPlaceholder:

### Завдання:

1. **Ініціалізація проекту**:

    - Створи новий проект з використанням Create React App або іншого інструменту за бажанням.

    - Додай залежності: `@reduxjs/toolkit`, `react-redux`, та `@rtk-incubator/rtk-query`.

2. **Налаштування RTK Query**:

    - Створи API slice для роботи з JSONPlaceholder API.

    - Налаштуй базовий URL для запитів: `https://jsonplaceholder.typicode.com/`.

    - Визнач endpoints для CRUD операцій з ресурсом `posts`.

3. **Отримання даних**:

    - Реалізуй компонент, який відображає список постів. Використай RTK Query для отримання списку постів (`GET /posts`).

    - Додай функціонал для рефетчингу даних.

4. **Створення нового поста**:

    - Створи форму для додавання нового поста (`POST /posts`).

    - Реалізуй відправку даних через RTK Query та оновлення списку постів після успішного додавання.

5. **Редагування поста**:

    - Додай можливість редагування поста (`PUT /posts/:id`).

    - Створи форму, яка буде передзаповнена даними поста. Після редагування оновлюй список постів.

6. **Видалення поста**:

    - Додай можливість видалення поста (`DELETE /posts/:id`).

    - Реалізуй оновлення списку після успішного видалення.

### Додатково:

- Реалізуй обробку помилок та сповіщення про успішні/невдалі операції.

- Додай можливість фільтрації постів за автором або іншими критеріями.

Це завдання допоможе тобі прокачати навички роботи з RTK Query в реальних сценаріях.

Що таке круд ?

CRUD — це абревіатура, яка означає чотири основні операції, які можна виконувати з даними в будь-якій базі даних або системі управління ресурсами:

1. **Create (Створення)**: Операція створення нових записів або даних у базі. Наприклад, додавання нового користувача, створення нового поста, тощо.

2. **Read (Читання)**: Операція отримання даних з бази. Це може бути перегляд списку всіх постів, пошук інформації про конкретного користувача, тощо.

3. **Update (Оновлення)**: Операція оновлення або модифікації існуючих даних. Наприклад, зміна інформації про користувача або редагування вмісту поста.

4. **Delete (Видалення)**: Операція видалення записів з бази даних. Наприклад, видалення поста або користувача з системи.

Ці операції є базовими для роботи з будь-якими даними, тому їх називають CRUD-операціями.
