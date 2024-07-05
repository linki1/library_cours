import { Myheader } from "../components/myheader/myheader";
import style from '../style/Page.module.css'

function Auth() {
    return (
      <div className="App">
      <Myheader logo='Courses' href='http://localhost:3000/' isauht={true}></Myheader>
      <div className={style.divcurs}>

       <p className={style.textcurs}>
       Введение в JavaScript
Давайте посмотрим, что такого особенного в JavaScript, чего можно достичь с его помощью и какие другие технологии хорошо с ним работают.

Что такое JavaScript?
Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми».

Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.

Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.

Это отличает JavaScript от другого языка – Java.
       </p>
       <a className={style.link} href="https://learn.javascript.ru/intro">
         начало
       </a>
       <p className={style.textcurs}>
       Привет, мир!
В этой части учебника мы изучаем собственно JavaScript, сам язык.

Но нам нужна рабочая среда для запуска наших скриптов, и, поскольку это онлайн-книга, то браузер будет хорошим выбором. В этой главе мы сократим количество специфичных для браузера команд (например, alert) до минимума, чтобы вы не тратили на них время, если планируете сосредоточиться на другой среде (например, Node.js). А на использовании JavaScript в браузере мы сосредоточимся в следующей части учебника.

Итак, сначала давайте посмотрим, как выполнить скрипт на странице. Для серверных сред (например, Node.js), вы можете выполнить скрипт с помощью команды типа "node my.js". Для браузера всё немного иначе.
       </p>
       <a className={style.link} href="https://learn.javascript.ru/hello-world">
         Приве мир
       </a>
       <p className={style.textcurs}>
       Структура кода
Начнём изучение языка с рассмотрения основных «строительных блоков» кода.

Инструкции
Инструкции – это синтаксические конструкции и команды, которые выполняют действия.

Мы уже видели инструкцию alert('Привет, мир!'), которая отображает сообщение «Привет, мир!».

В нашем коде может быть столько инструкций, сколько мы захотим. Инструкции могут отделяться точкой с запятой.
       </p>
       <a className={style.link} href="https://learn.javascript.ru/structure">
         структура
       </a>
       <p className={style.textcurs}>
       Строгий режим — "use strict"
На протяжении долгого времени JavaScript развивался без проблем с обратной совместимостью. Новые функции добавлялись в язык, в то время как старая функциональность не менялась.

Преимуществом данного подхода было то, что существующий код продолжал работать. А недостатком – что любая ошибка или несовершенное решение, принятое создателями JavaScript, застревали в языке навсегда.

Так было до 2009 года, когда появился ECMAScript 5 (ES5). Он добавил новые возможности в язык и изменил некоторые из существующих. Чтобы устаревший код работал, как и раньше, по умолчанию подобные изменения не применяются. Поэтому нам нужно явно их активировать с помощью специальной директивы: "use strict".
        </p>
        <a className={style.link} href="https://learn.javascript.ru/strict-mode">
         строгий режим
        </a>
        <p className={style.textcurs}>
        Переменные
JavaScript-приложению обычно нужно работать с информацией. Например:

Интернет-магазин – информация может включать продаваемые товары и корзину покупок.
Чат – информация может включать пользователей, сообщения и многое другое.
Переменные используются для хранения этой информации.

Переменная
Переменная – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.

Для создания переменной в JavaScript используйте ключевое слово let.

Приведённая ниже инструкция создаёт (другими словами, объявляет) переменную с именем «message»:
        </p>
        <a className={style.link} href="https://learn.javascript.ru/variables">
        Переменная
        </a>
      </div>
     </div>
    );
  }
  
  export default Auth;