<h1>Документация к тестовому заданию "mindbox-todo"</h1>

<h2>Описание проекта</h2>
<p>Проект "mindbox-todo" представляет собой простое веб-приложение для управления списком задач. Приложение разработано с использованием React и TypeScript, для сборки используется Vite. Также используются TailwindCSS для стилизации и Jest для тестирования.</p>

<h2>Установка и запуск проекта</h2>

<h3>Требования</h3>
<p>Для работы с проектом потребуется:</p>
<ul>
    <li>Node.js (рекомендуемая версия: 18.x)</li>
    <li>npm (рекомендуемая версия: 9.x)</li>
</ul>

<h3>Запуск приложения</h3>
<p>Для запуска приложения в используйте команду:</p>
<pre><code>npm start</code></pre>
<p>Эта команда выполнит предварительную установку зависимостей и запустит Vite.</p>

<h2>Тестирование</h2>
<p>Проект использует Jest для написания и выполнения тестов. Для запуска тестов используйте команду:</p>
<pre><code>npm test</code></pre>

<h2>Структура проекта</h2>
<p>Основные директории и файлы проекта:</p>
<ul>
    <li><code>src/</code> — директория с исходным кодом приложения</li>
    <li><code>public/</code> — статические файлы и HTML-шаблон</li>
    <li><code>package.json</code> — файл с конфигурацией проекта и списком зависимостей</li>
    <li><code>vite.config.ts</code> — конфигурация сборщика Vite</li>
    <li><code>tailwind.config.js</code> — конфигурация TailwindCSS</li>
    <li><code>.eslintrc.js</code> — конфигурация ESLint</li>
</ul>

<h2>Основные зависимости</h2>

<h3>Зависимости</h3>
<ul>
    <li><code>react</code> — библиотека для создания пользовательских интерфейсов</li>
    <li><code>react-dom</code> — библиотека для работы с виртуальным DOM</li>
</ul>

<h3>DevDependencies</h3>
<ul>
    <li><code>@babel/preset-env</code>, <code>@babel/preset-react</code>, <code>@babel/preset-typescript</code> — пресеты Babel для трансформации кода</li>
    <li><code>@testing-library/jest-dom</code>, <code>@testing-library/react</code> — утилиты для тестирования компонентов React</li>
    <li><code>@types/jest</code>, <code>@types/react</code>, <code>@types/react-dom</code> — типы для TypeScript</li>
    <li><code>@typescript-eslint/eslint-plugin</code>, <code>@typescript-eslint/parser</code> — плагины ESLint для TypeScript</li>
    <li><code>@vitejs/plugin-react-swc</code> — плагин Vite для поддержки React</li>
    <li><code>autoprefixer</code>, <code>postcss</code>, <code>tailwindcss</code> — инструменты для работы с CSS</li>
    <li><code>babel-jest</code>, <code>jest</code>, <code>jest-environment-jsdom</code>, <code>ts-jest</code> — инструменты для тестирования</li>
    <li><code>eslint</code>, <code>eslint-plugin-react-hooks</code>, <code>eslint-plugin-react-refresh</code> — инструменты для линтинга</li>
    <li><code>typescript</code> — язык программирования</li>
    <li><code>vite</code> — сборщик проекта</li>
</ul>

<h2>Заключение</h2>
<p>Этот проект является базовым примером приложения для управления задачами. Он демонстрирует использование современных технологий и инструментов для разработки веб-приложений.</p>
