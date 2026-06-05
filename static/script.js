const API_BASE = 'http://127.0.0.1:8000/api';

// Курс материалы (10 разделов с полным содержанием)
const COURSE_SECTIONS = {
    1: {
        id: 1,
        title: "Раздел 1. Введение в информационную безопасность",
        content: `# Введение в информационную безопасность

## Что такое информационная безопасность?

Информационная безопасность (Information Security) — это практика защиты информации от несанкционированного доступа, использования, раскрытия, искажения, изменения, исследования, записи или уничтожения.

## Почему информационная безопасность важна?

В современном цифровом мире информация — это самый ценный ресурс. Утечка данных может привести к:
- Финансовым потерям
- Репутационному ущербу
- Юридическим последствиям
- Потере конкурентных преимуществ

## Триада CIA (конфиденциальность, целостность, доступность)

### 1. Конфиденциальность (Confidentiality)
Обеспечение того, что информация доступна только авторизованным лицам. Методы:
- Шифрование данных
- Контроль доступа
- Аутентификация пользователей

### 2. Целостность (Integrity)
Гарантия того, что данные не были изменены непреднамеренно или злонамеренно. Методы:
- Хэширование
- Цифровые подписи
- Контрольные суммы

### 3. Доступность (Availability)
Уверенность в том, что информация доступна авторизованным пользователям, когда она им нужна. Методы:
- Резервное копирование
- Избыточность систем
- Защита от DDoS-атак

## История развития информационной безопасности

- **1940-е**: Взлом шифров во время Второй мировой войны
- **1970-е**: Появление первых компьютерных вирусов (Creeper, Reaper)
- **1980-е**: Первые антивирусы, закон о компьютерном мошенничестве
- **1990-е**: Расцвет интернета, первые взломы веб-сайтов
- **2000-е**: Киберпреступность как бизнес, фишинг, ботнеты
- **2010-е**: Крупные утечки данных (Target, Equifax, Yahoo)
- **2020-е**: Атаки на цепочки поставок, ransomware как услуга

## Современные угрозы

### Вредоносное программное обеспечение (Malware)
- **Вирусы** — самовоспроизводящиеся программы
- **Трояны** — маскируются под полезное ПО
- **Черви** — распространяются по сети
- **Ransomware** — шифруют данные и требуют выкуп
- **Шпионское ПО** — собирает информацию

### Сетевые атаки
- **DDoS** — перегрузка сервера запросами
- **Man-in-the-Middle** — перехват трафика
- **Сниффинг** — прослушивание сети

### Социальная инженерия
- **Фишинг** — поддельные письма
- **Претекстинг** — использование легенды
- **Кви про кво** — предложение помощи

## Основные принципы защиты

1. **Защита в глубину** — многоуровневая защита
2. **Принцип наименьших привилегий** — минимальный доступ
3. **Разделение обязанностей** — распределение ответственности
4. **Безопасность по умолчанию** — безопасные настройки
5. **Регулярные обновления** — патчи безопасности

## Ключевые термины

 Термин - Определение 

Уязвимость - Слабое место в системе 
Угроза - Потенциальная опасность 
Риск - Вероятность реализации угрозы 
Атака - Попытка нарушения безопасности 
Инцидент - Факт нарушения безопасности 

## Вопросы для самопроверки

1. Какие три компонента образуют триаду CIA?
2. Чем отличается вирус от червя?
3. Что такое фишинг и как от него защититься?
4. Назовите 5 основных принципов защиты информации.`,
        test: [
            { question: "Что из перечисленного входит в триаду информационной безопасности (CIA)?", options: ["Конфиденциальность, Целостность, Доступность", "Шифрование, Аутентификация, Авторизация", "Антивирус, Фаервол, VPN", "Хэширование, Подпись, Сертификат"], correct: 0 },
            { question: "Что означает принцип целостности данных?", options: ["Данные доступны всем", "Данные не были изменены несанкционированно", "Данные шифруются", "Данные хранятся долго"], correct: 1 },
            { question: "Какой вид атаки перегружает сервер запросами?", options: ["Фишинг", "DDoS", "Сниффинг", "Вирус"], correct: 1 },
            { question: "Что такое фишинг?", options: ["Вид антивируса", "Поддельные письма для кражи данных", "Сетевой протокол", "Метод шифрования"], correct: 1 }
        ]
    },
    2: {
        id: 2,
        title: "Раздел 2. Управление безопасностью информации",
        content: `# Управление безопасностью информации

## Нормативно-правовое регулирование

### Международные стандарты

### ISO/IEC 27001
Это международный стандарт, который описывает требования к системе менеджмента информационной безопасности (СМИБ).

**Основные компоненты ISO 27001:**
1. Контекст организации
2. Лидерство и политика
3. Планирование
4. Поддержка и функционирование
5. Оценка эффективности
6. Улучшение

### GDPR (General Data Protection Regulation)
Регламент ЕС о защите персональных данных (вступил в силу 25 мая 2018).

**Ключевые принципы GDPR:**
- Законность, справедливость, прозрачность
- Целевое ограничение
- Минимизация данных
- Точность
- Ограничение хранения
- Целостность и конфиденциальность
- Подотчётность

**Штрафы:** до 20 млн евро или 4% глобального годового оборота.

### Российское законодательство
1. **Федеральный закон №149-ФЗ** «Об информации...»
2. **Федеральный закон №152-ФЗ** «О персональных данных»

## Оценка и управление рисками

### Что такое риск информационной безопасности?

**Риск = Угроза × Уязвимость × Последствия**

### Этапы управления рисками
1. Идентификация рисков
2. Анализ рисков
3. Оценка рисков
4. Обработка рисков
5. Мониторинг и пересмотр

## Политики и процедуры безопасности

### Иерархия документов ИБ
1. Политика информационной безопасности (верхний уровень)
2. Частные политики (по направлениям)
3. Процедуры и регламенты
4. Инструкции для пользователей

## Вопросы для самопроверки
1. Какой стандарт описывает СМИБ?
2. Какие 7 принципов GDPR вы знаете?
3. Как рассчитывается риск информационной безопасности?`,
        test: [
            { question: "Какой стандарт описывает систему менеджмента информационной безопасности?", options: ["ISO 9001", "ISO 27001", "ISO 14001", "ISO 45001"], correct: 1 },
            { question: "Какой максимальный штраф по GDPR?", options: ["5 млн евро", "10 млн евро", "20 млн евро", "50 млн евро"], correct: 2 },
            { question: "Формула риска: Риск = Угроза × ? × Последствия", options: ["Защита", "Уязвимость", "Актив", "Вероятность"], correct: 1 },
            { question: "Что означает принцип 'законность, справедливость, прозрачность' в GDPR?", options: ["Техническая защита", "Принцип обработки данных", "Шифрование", "Аутентификация"], correct: 1 }
        ]
    },
    3: {
        id: 3,
        title: "Раздел 3. Криптография и шифрование",
        content: `# Криптография и шифрование

## Введение в криптографию
Криптография — это наука о методах обеспечения конфиденциальности и целостности информации.

## Симметричное шифрование
При симметричном шифровании используется один и тот же ключ для шифрования и расшифровки.

**Популярные алгоритмы:** AES, DES, 3DES, ChaCha20

## Асимметричное шифрование
Используется пара ключей: открытый (публичный) и закрытый (приватный).

**Алгоритмы:** RSA, ECC, DSA, Diffie-Hellman

## Хэширование
Хэш-функция преобразует данные произвольной длины в фиксированную строку.

**Алгоритмы:** MD5 (устарел), SHA-1 (скомпрометирован), SHA-256, bcrypt

## Цифровая подпись
Обеспечивает аутентификацию автора, целостность сообщения и неотказуемость.

## PKI (Public Key Infrastructure)
Компоненты: CA, RA, CRL, OCSP

## Вопросы
1. В чём разница между симметричным и асимметричным шифрованием?
2. Что такое хэш-функция?
3. Как работает цифровая подпись?`,
        test: [
            { question: "Какой алгоритм является симметричным?", options: ["RSA", "AES", "ECC", "DSA"], correct: 1 },
            { question: "Что такое хэширование?", options: ["Шифрование", "Одностороннее преобразование", "Сжатие", "Архивация"], correct: 1 },
            { question: "Для чего нужна цифровая подпись?", options: ["Шифрование файлов", "Подтверждение авторства", "Сжатие данных", "Ускорение передачи"], correct: 1 },
            { question: "Что такое PKI?", options: ["Инфраструктура открытых ключей", "Программа шифрования", "Сетевой протокол", "База данных"], correct: 0 }
        ]
    },
    4: {
        id: 4,
        title: "Раздел 4. Сетевая безопасность",
        content: `# Сетевая безопасность

## Типы сетевых атак

### Пассивные атаки
- Сниффинг — прослушивание трафика
- Анализ трафика — изучение паттернов

### Активные атаки
- DDoS — перегрузка сервера
- MITM — человек посередине
- IP Spoofing — подмена IP-адреса
- ARP Spoofing — подмена ARP таблиц
- Session Hijacking — захват сессии

## Средства защиты

### Межсетевые экраны (Firewall)
Типы: пакетные фильтры, Stateful inspection, Proxy, NGFW

### IDS/IPS
- IDS — только обнаружение
- IPS — блокировка атак

### VPN (Virtual Private Network)
Протоколы: IPsec, SSL/TLS (OpenVPN, WireGuard)

## Безопасность Wi-Fi
Протоколы: WEP (небезопасен), WPA (устарел), WPA2, WPA3

## Вопросы
1. Чем отличается IDS от IPS?
2. Как защититься от MITM-атаки?
3. Какой протокол Wi-Fi самый безопасный?`,
        test: [
            { question: "Что такое DDoS-атака?", options: ["Подбор пароля", "Перегрузка сервера", "Перехват сессии", "Шифрование"], correct: 1 },
            { question: "Какой протокол Wi-Fi самый безопасный?", options: ["WEP", "WPA", "WPA2", "WPA3"], correct: 3 },
            { question: "Чем отличается IPS от IDS?", options: ["IPS блокирует атаки", "IDS блокирует атаки", "Нет разницы", "IPS обнаруживает"], correct: 0 },
            { question: "Что такое MITM?", options: ["Антивирус", "Атака 'человек посередине'", "Протокол VPN", "Тип фаервола"], correct: 1 }
        ]
    },
    5: {
        id: 5,
        title: "Раздел 5. Безопасность приложений",
        content: `# Безопасность приложений

## OWASP Top 10 (2021)

1. A01:2021 — Нарушение контроля доступа
2. A02:2021 — Криптографические сбои
3. A03:2021 — Инъекции (SQL, NoSQL, LDAP)
4. A04:2021 — Небезопасный дизайн
5. A05:2021 — Ошибки конфигурации
6. A06:2021 — Уязвимые компоненты
7. A07:2021 — Сбои аутентификации
8. A08:2021 — Сбои целостности
9. A09:2021 — Мониторинг и логирование
10. A10:2021 — Подделка запросов

## SQL-инъекции
Пример уязвимости: ' OR '1'='1
Защита: параметризованные запросы, экранирование ввода

## XSS (Cross-Site Scripting)
Типы: Reflected, Stored, DOM-based
Защита: экранирование вывода, CSP

## CSRF (Cross-Site Request Forgery)
Защита: Anti-CSRF токены, SameSite cookies

## Безопасное программирование
- Никогда не доверяйте вводу
- Принцип наименьших привилегий
- Валидация всех данных

## Вопросы
1. Какие уязвимости входят в OWASP Top 10?
2. Как защититься от SQL-инъекций?
3. Что такое XSS?`,
        test: [
            { question: "Что такое SQL-инъекция?", options: ["Внедрение кода в запрос", "Перехват сессии", "DDoS", "Подбор пароля"], correct: 0 },
            { question: "Что означает XSS?", options: ["SQL инъекция", "Межсайтовый скриптинг", "DDoS атака", "Перехват сессии"], correct: 1 },
            { question: "Как защититься от CSRF?", options: ["Anti-CSRF токены", "Сложный пароль", "Шифрование", "VPN"], correct: 0 },
            { question: "OWASP — это...", options: ["Антивирус", "Проект безопасности веб-приложений", "Протокол VPN", "Стандарт шифрования"], correct: 1 }
        ]
    },
    6: {
        id: 6,
        title: "Раздел 6. Защита данных",
        content: `# Защита данных

## Шифрование данных

### В покое (at rest)
- Дисковое шифрование (BitLocker, LUKS)
- Файловое шифрование (VeraCrypt)
- Базы данных (TDE)

### В транзите (in transit)
- TLS/SSL
- HTTPS
- VPN

## Резервное копирование

### Правило 3-2-1
- 3 копии данных
- 2 разных носителя
- 1 офлайн-копия

### Типы бэкапов
- Полный
- Инкрементальный
- Дифференциальный

## Управление доступом

### Модели
- DAC (дискреционное)
- MAC (мандатное)
- RBAC (ролевое)
- ABAC (атрибутное)

## DLP (Data Loss Prevention)
Контроль передачи данных, защита от утечек

## Вопросы
1. Что такое правило 3-2-1?
2. Чем отличается DAC от MAC?
3. Что такое DLP?`,
        test: [
            { question: "Что означает правило 3-2-1 в бэкапах?", options: ["3 копии, 2 носителя, 1 офлайн", "3 дня, 2 ночи, 1 час", "3 сервера, 2 сети, 1 пароль"], correct: 0 },
            { question: "BitLocker шифрует...", options: ["Трафик", "Диск", "Пароли", "Логи"], correct: 1 },
            { question: "Что такое RBAC?", options: ["Ролевая модель доступа", "Шифрование", "Бэкап", "Антивирус"], correct: 0 },
            { question: "Что означает DLP?", options: ["Защита от утечек", "Шифрование", "Антивирус", "Бэкап"], correct: 0 }
        ]
    },
    7: {
        id: 7,
        title: "Раздел 7. Облачная безопасность",
        content: `# Облачная безопасность

## Модели услуг
- **IaaS** (Infrastructure as a Service) — виртуальные серверы
- **PaaS** (Platform as a Service) — среда разработки
- **SaaS** (Software as a Service) — готовые приложения

## Модели развёртывания
- Публичное облако
- Приватное облако
- Гибридное облако

## Модель разделения ответственности

### IaaS
Клиент отвечает за: ОС, приложения, данные
Провайдер: гипервизор, сеть, хранилище

### PaaS
Клиент: приложения, данные
Провайдер: ОС, middleware, среда

### SaaS
Клиент: только данные и конфигурация
Провайдер: всё остальное

## CASB (Cloud Access Security Broker)

## Основные угрозы облаков
- Утечка данных
- Небезопасные API
- Внутренние угрозы

## Вопросы
1. Чем отличается IaaS от PaaS?
2. Кто отвечает за безопасность данных в облаке?`,
        test: [
            { question: "Что означает IaaS?", options: ["Инфраструктура как услуга", "Платформа как услуга", "ПО как услуга"], correct: 0 },
            { question: "В модели SaaS кто отвечает за ОС?", options: ["Клиент", "Провайдер", "Совместно"], correct: 1 },
            { question: "Что такое CASB?", options: ["Брокер безопасности облака", "Антивирус", "Протокол VPN"], correct: 0 },
            { question: "Какая модель облака наиболее безопасна?", options: ["Публичное", "Приватное", "Гибридное", "Все одинаковы"], correct: 1 }
        ]
    },
    8: {
        id: 8,
        title: "Раздел 8. Инциденты и форензика",
        content: `# Инциденты и форензика

## Жизненный цикл инцидента
1. Обнаружение
2. Анализ
3. Локализация
4. Устранение
5. Восстановление
6. Уроки

## Форензика (цифровая криминалистика)

### Цели
- Сбор доказательств
- Сохранение цепочки хранения
- Анализ
- Подготовка отчёта

### Области
- Дисковая форензика
- Сетевая форензика
- Память (RAM)
- Мобильные устройства

## OSINT (Open Source Intelligence)
Сбор информации из открытых источников: соцсети, WhoIS, Google dorks, Shodan

## Промышленный шпионаж
Незаконный сбор коммерческой тайны

## Вопросы
1. Какие этапы жизненного цикла инцидента?
2. Что изучает форензика?
3. Что такое OSINT?`,
        test: [
            { question: "Что изучает форензика?", options: ["Шифрование", "Цифровые доказательства", "Сеть", "Облака"], correct: 1 },
            { question: "Что такое OSINT?", options: ["Разведка по открытым источникам", "Антивирус", "Протокол"], correct: 0 },
            { question: "Какой первый шаг при инциденте?", options: ["Обнаружение", "Восстановление", "Отчёт"], correct: 0 },
            { question: "Что такое промышленный шпионаж?", options: ["Сбор коммерческой тайны", "Защита данных", "Шифрование", "Антивирус"], correct: 0 }
        ]
    },
    9: {
        id: 9,
        title: "Раздел 9. Социальная инженерия",
        content: `# Социальная инженерия и человеческий фактор

## Методы социальной инженерии
- **Фишинг** — поддельные письма/сайты
- **Претекстинг** — легенда для обмана
- **Кви про кво** — предложение помощи в обмен на данные
- **Тейлгейтинг** — проход за сотрудником
- **Baiting** — приманка (заражённая флешка)

## Человеческий фактор
- 95% утечек связаны с человеком
- Основная слабая точка в ИБ

## Защита от социальной инженерии
- Обучение сотрудников
- Имитационные фишинговые атаки
- Многофакторная аутентификация
- Проверка запросов по второму каналу
- Политика информационной безопасности

## Вопросы
1. Что такое фишинг?
2. Как защититься от социальной инженерии?
3. Какой процент утечек связан с человеком?`,
        test: [
            { question: "Что такое фишинг?", options: ["Шифрование", "Поддельные письма", "Антивирус", "VPN"], correct: 1 },
            { question: "Какой процент утечек связан с человеком?", options: ["50%", "75%", "95%", "100%"], correct: 2 },
            { question: "Что такое претекстинг?", options: ["Использование легенды", "Шифрование", "Бэкап"], correct: 0 },
            { question: "Как лучше всего защититься от социальной инженерии?", options: ["Сложные пароли", "Обучение сотрудников", "Шифрование", "VPN"], correct: 1 }
        ]
    },
    10: {
        id: 10,
        title: "Раздел 10. Будущее информационной безопасности",
        content: `# Будущее информационной безопасности

## AI и ML в ИБ
- Обнаружение аномалий
- Автоматическая реакция на угрозы
- Анализ вредоносного ПО
- Предсказание атак

## Zero Trust (нулевое доверие)
Девиз: "Никогда не доверяй, всегда проверяй"

### Компоненты Zero Trust
- Микросегментация сети
- Многофакторная аутентификация
- Постоянный мониторинг
- Наименьшие привилегии

## Блокчейн в ИБ
- Неизменяемость данных
- Децентрализованное хранение
- Смарт-контракты
- Защита цепочек поставок

## Квантовая криптография
- Квантовое распределение ключей (QKD)
- Постквантовая криптография (устойчивая к квантовым компьютерам)

## Этические аспекты ИБ
- Баланс между безопасностью и приватностью
- Массовая слежка
- Этика багхантеров и исследователей
- Государственный надзор vs права граждан

## Вопросы
1. Что такое Zero Trust?
2. Как AI помогает в ИБ?
3. Что такое постквантовая криптография?`,
        test: [
            { question: "Что означает Zero Trust?", options: ["Доверять всем", "Никогда не доверяй, всегда проверяй", "Только доверенным"], correct: 1 },
            { question: "Как AI помогает в ИБ?", options: ["Обнаружение аномалий", "Шифрование", "Бэкап"], correct: 0 },
            { question: "Что использует квантовая криптография?", options: ["Принципы квантовой механики", "RSA", "AES"], correct: 0 },
            { question: "Что из перечисленного относится к Zero Trust?", options: ["Микросегментация", "Один пароль", "Один фактор", "Доверие к сети"], correct: 0 }
        ]
    }
};

let currentUser = null;

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = show ? 'flex' : 'none';
    }
}

function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.background = isError ? '#dc2626' : '#10b981';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function saveSession(user) {
    localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        login: user.login,
        name: user.name,
        role: user.role
    }));
}

function getSession() {
    const session = localStorage.getItem('currentUser');
    return session ? JSON.parse(session) : null;
}

async function apiRequest(endpoint, method, body = null) {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' }
    };
    if (body) options.body = JSON.stringify(body);
    
    const response = await fetch(`${API_BASE}${endpoint}`, options);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Ошибка запроса');
    }
    return response.json();
}

// Логин
async function login() {
    const login = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!login || !password) {
        showToast('Введите логин и пароль', true);
        return;
    }
    
    showLoading(true);
    try {
        const user = await apiRequest('/login', 'POST', { login, password, role: '' });
        currentUser = user;
        saveSession(user);
        showToast(`Добро пожаловать, ${user.name}!`);
        
        if (user.role === 'student') {
            await loadStudentData(user);
        } else if (user.role === 'teacher') {
            await showTeacherPanel(user);
        } else if (user.role === 'admin') {
            await showAdminPanel(user);
        }
    } catch (error) {
        showToast(error.message, true);
    } finally {
        showLoading(false);
    }
}

// Регистрация - только студент
async function register() {
    const name = document.getElementById('regName').value.trim();
    const login = document.getElementById('regLogin').value.trim();
    const password = document.getElementById('regPassword').value;
    
    if (!name || !login || !password) {
        showToast('Заполните все поля', true);
        return;
    }
    
    showLoading(true);
    try {
        const user = await apiRequest('/register', 'POST', { login, password, name });
        showToast(`Регистрация успешна! Вы зарегистрированы как студент.`);
        document.querySelector('.tab-btn[data-tab="login"]').click();
        document.getElementById('loginUsername').value = login;
    } catch (error) {
        showToast(error.message, true);
    } finally {
        showLoading(false);
    }
}

async function loadStudentData(user) {
    const fullUser = await apiRequest(`/user/${user.id}`, 'GET');
    currentUser = { ...user, progress: fullUser.progress };
    showStudentPanel(currentUser);
}

function showStudentPanel(user) {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('studentPanel').style.display = 'block';
    document.getElementById('studentName').innerText = user.name;
    updateStudentProgress(user);
    renderSectionsGrid(user);
}

function updateStudentProgress(user) {
    const progress = user.progress || {};
    let completed = Object.values(progress).filter(v => v === true).length;
    let percent = Math.round((completed / 10) * 100);
    document.getElementById('studentProgress').style.width = percent + '%';
    document.getElementById('studentStats').innerHTML = `✅ Пройдено ${completed} из 10 разделов (${percent}%)`;
}

function isSectionUnlocked(progress, id) {
    if (id === 1) return true;
    return progress && progress[id - 1] === true;
}

async function updateProgress(sectionId) {
    if (!currentUser) return;
    showLoading(true);
    try {
        await apiRequest(`/progress/${currentUser.id}`, 'PUT', {
            section_id: sectionId,
            completed: true
        });
        if (!currentUser.progress) currentUser.progress = {};
        currentUser.progress[sectionId] = true;
        updateStudentProgress(currentUser);
        renderSectionsGrid(currentUser);
        showToast('Прогресс сохранён!');
    } catch (error) {
        showToast('Ошибка сохранения прогресса', true);
    } finally {
        showLoading(false);
    }
}

function renderSectionsGrid(user) {
    const grid = document.getElementById('sectionsGrid');
    grid.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const sec = COURSE_SECTIONS[i];
        const unlocked = isSectionUnlocked(user.progress || {}, i);
        const passed = user.progress && user.progress[i] === true;
        
        const card = document.createElement('div');
        card.className = `section-card ${!unlocked ? 'locked' : ''} ${passed ? 'passed' : ''}`;
        card.innerHTML = `
            <div class="section-header">
                <span class="section-number">${i}</span>
                <span class="status">${!unlocked ? '🔒 Заблокирован' : passed ? '✅ Пройден' : '📖 Доступен'}</span>
            </div>
            <div style="font-weight: bold;">${sec.title}</div>
            <button class="open-btn" ${(!unlocked || passed) ? 'disabled' : ''}>
                ${passed ? '✓ Пройдено' : unlocked ? '📖 Открыть' : '🔒 Закрыто'}
            </button>
        `;
        
        const btn = card.querySelector('.open-btn');
        if (btn && !btn.disabled) {
            btn.addEventListener('click', () => openSectionWindow(sec));
        }
        grid.appendChild(card);
    }
}

function openSectionWindow(section) {
    // Форматируем контент с Markdown-подобным форматированием
    let formattedContent = section.content;
    
    // Заменяем заголовки
    formattedContent = formattedContent.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    formattedContent = formattedContent.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    formattedContent = formattedContent.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    
    // Заменяем жирный текст
    formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Заменяем маркированные списки
    formattedContent = formattedContent.replace(/^- (.*?)$/gm, '<li>$1</li>');
    formattedContent = formattedContent.replace(/(<li>.*?<\/li>\n?)+/gs, (match) => `<ul class="beautiful-list">${match}</ul>`);
    
    // Заменяем нумерованные списки
    formattedContent = formattedContent.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');
    formattedContent = formattedContent.replace(/(<li>.*?<\/li>\n?)+(?=<h|<p|$)/gs, (match) => {
        if (!match.includes('<ul')) {
            return `<ol class="beautiful-list">${match}</ol>`;
        }
        return match;
    });
    
    // Заменяем таблицы
    formattedContent = formattedContent.replace(/\|(.+)\|/g, (match) => {
        const cells = match.split('|').filter(cell => cell.trim());
        if (cells.some(cell => cell.includes('---'))) return '';
        return `<tr>${cells.map(cell => `<td>${cell.trim()}</td>`).join('')}</tr>`;
    });
    
    // Оборачиваем абзацы
    const paragraphs = formattedContent.split('\n\n');
    formattedContent = paragraphs.map(p => {
        if (!p.startsWith('<h') && !p.startsWith('<ul') && !p.startsWith('<ol') && !p.startsWith('<table') && p.trim()) {
            return `<p class="beautiful-paragraph">${p.replace(/\n/g, '<br>')}</p>`;
        }
        return p;
    }).join('');
    
    // Создаём HTML для тестов
    let testHTML = '';
    if (section.test && section.test.length > 0) {
        testHTML = `
            <div class="modern-test">
                <div class="test-header">
                    <div class="test-icon">📋</div>
                    <h2>Проверка знаний</h2>
                    <p>Ответьте на вопросы, чтобы завершить раздел</p>
                </div>
                <div class="questions-container">
                    ${section.test.map((q, idx) => `
                        <div class="test-question-card" data-qidx="${idx}">
                            <div class="question-header">
                                <span class="question-number">${idx + 1}</span>
                                <span class="question-text">${q.question}</span>
                            </div>
                            <div class="options-grid">
                                ${q.options.map((opt, oidx) => `
                                    <label class="option-item">
                                        <input type="radio" name="q${idx}" value="${oidx}" class="option-radio">
                                        <span class="option-marker">${String.fromCharCode(65 + oidx)}</span>
                                        <span class="option-text">${opt}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="test-actions">
                    <button id="submitTest" class="btn-submit">
                        <span class="btn-icon">✅</span>
                        <span>Проверить тест</span>
                    </button>
                </div>
                <div id="result" class="test-result"></div>
            </div>
        `;
    }
    
    const win = window.open('', `section_${section.id}`, 'width=1300,height=900,scrollbars=yes,resizable=yes');
    
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${section.title} | Учебная платформа</title>
            <meta charset="UTF-8">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', 'Inter', system-ui, -apple-system, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    padding: 40px 20px;
                }
                
                .lesson-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 32px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    overflow: hidden;
                    animation: slideIn 0.5s ease-out;
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Шапка раздела */
                .lesson-header {
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    color: white;
                    padding: 35px 45px;
                }
                
                .lesson-header .section-badge {
                    display: inline-block;
                    background: rgba(255,255,255,0.2);
                    padding: 6px 14px;
                    border-radius: 30px;
                    font-size: 0.85rem;
                    margin-bottom: 15px;
                }
                
                .lesson-header h1 {
                    font-size: 2rem;
                    margin-bottom: 10px;
                    font-weight: 700;
                }
                
                /* Основной контент */
                .lesson-content {
                    padding: 45px;
                    line-height: 1.8;
                    color: #1e293b;
                    font-size: 1.05rem;
                    background: #ffffff;
                }
                
                /* Стили для заголовков */
                .lesson-content h1 {
                    font-size: 2rem;
                    margin: 30px 0 20px 0;
                    color: #0f172a;
                    border-left: 5px solid #3b82f6;
                    padding-left: 25px;
                    font-weight: 700;
                }
                
                .lesson-content h1:first-of-type {
                    margin-top: 0;
                }
                
                .lesson-content h2 {
                    font-size: 1.6rem;
                    margin: 30px 0 15px 0;
                    color: #1e293b;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #e2e8f0;
                    font-weight: 600;
                }
                
                .lesson-content h3 {
                    font-size: 1.3rem;
                    margin: 25px 0 12px 0;
                    color: #334155;
                    font-weight: 600;
                }
                
                /* Параграфы */
                .beautiful-paragraph {
                    margin-bottom: 18px;
                    line-height: 1.8;
                    color: #334155;
                }
                
                /* Списки */
                .beautiful-list {
                    margin: 15px 0 20px 30px;
                    list-style-type: none;
                }
                
                .beautiful-list li {
                    margin: 10px 0;
                    padding-left: 25px;
                    position: relative;
                    line-height: 1.6;
                }
                
                .beautiful-list li::before {
                    content: "▹";
                    position: absolute;
                    left: 0;
                    color: #3b82f6;
                    font-weight: bold;
                }
                
                ol.beautiful-list {
                    counter-reset: item;
                }
                
                ol.beautiful-list li {
                    counter-increment: item;
                    padding-left: 30px;
                }
                
                ol.beautiful-list li::before {
                    content: counter(item) ".";
                    color: #3b82f6;
                    font-weight: bold;
                }
                
                /* Таблицы */
                .lesson-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 25px 0;
                    background: #f8fafc;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                
                .lesson-content tr {
                    border-bottom: 1px solid #e2e8f0;
                }
                
                .lesson-content tr:last-child {
                    border-bottom: none;
                }
                
                .lesson-content td {
                    padding: 14px 18px;
                    text-align: left;
                    color: #334155;
                }
                
                .lesson-content tr td:first-child {
                    font-weight: 600;
                    background: #f1f5f9;
                    width: 30%;
                }
                
                /* Выделение важной информации */
                .lesson-content strong {
                    color: #2563eb;
                    font-weight: 600;
                }
                
                /* Цитаты */
                .lesson-content blockquote {
                    margin: 20px 0;
                    padding: 15px 25px;
                    background: #f1f5f9;
                    border-left: 4px solid #3b82f6;
                    border-radius: 12px;
                    font-style: italic;
                    color: #475569;
                }
                
                /* Код */
                .lesson-content code {
                    background: #f1f5f9;
                    padding: 3px 8px;
                    border-radius: 8px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.9rem;
                    color: #d946ef;
                }
                
                /* Стили тестов */
                .modern-test {
                    background: #f8fafc;
                    border-radius: 24px;
                    margin-top: 30px;
                    overflow: hidden;
                }
                
                .test-header {
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white;
                    padding: 30px 35px;
                    text-align: center;
                }
                
                .test-header .test-icon {
                    font-size: 3.5rem;
                    margin-bottom: 10px;
                }
                
                .test-header h2 {
                    font-size: 1.6rem;
                    margin-bottom: 8px;
                    color: white;
                    border: none;
                    padding: 0;
                }
                
                .test-header p {
                    opacity: 0.9;
                    font-size: 0.95rem;
                }
                
                .questions-container {
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }
                
                .test-question-card {
                    background: white;
                    border-radius: 20px;
                    padding: 25px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    transition: transform 0.2s, box-shadow 0.2s;
                    border: 1px solid #e2e8f0;
                }
                
                .test-question-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .question-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                    padding-bottom: 15px;
                    border-bottom: 2px solid #e2e8f0;
                }
                
                .question-number {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    color: white;
                    border-radius: 14px;
                    font-weight: bold;
                    font-size: 1rem;
                }
                
                .question-text {
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: #1e293b;
                    flex: 1;
                }
                
                .options-grid {
                    display: grid;
                    gap: 12px;
                }
                
                .option-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    background: #f8fafc;
                    border-radius: 14px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 2px solid transparent;
                }
                
                .option-item:hover {
                    background: #eef2ff;
                    transform: translateX(5px);
                }
                
                .option-radio {
                    display: none;
                }
                
                .option-marker {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    background: #e2e8f0;
                    border-radius: 10px;
                    font-weight: bold;
                    color: #475569;
                    transition: all 0.2s;
                }
                
                .option-radio:checked + .option-marker {
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    color: white;
                    box-shadow: 0 4px 12px rgba(59,130,246,0.3);
                }
                
                .option-text {
                    color: #334155;
                    font-size: 0.95rem;
                }
                
                .option-radio:checked ~ .option-text {
                    color: #1e293b;
                    font-weight: 500;
                }
                
                .test-actions {
                    padding: 25px 30px 30px;
                    text-align: center;
                    background: white;
                    border-top: 1px solid #e2e8f0;
                }
                
                .btn-submit {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    border: none;
                    padding: 14px 36px;
                    border-radius: 50px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(16,185,129,0.3);
                }
                
                .btn-submit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(16,185,129,0.4);
                }
                
                .btn-submit .btn-icon {
                    font-size: 1.2rem;
                }
                
                .btn-submit:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .test-result {
                    padding: 0 30px 30px;
                }
                
                .test-result.success {
                    background: #d1fae5;
                    color: #065f46;
                    padding: 16px 24px;
                    border-radius: 16px;
                    margin: 0 30px 30px;
                    text-align: center;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    font-size: 1rem;
                }
                
                .test-result.fail {
                    background: #fee2e2;
                    color: #991b1b;
                    padding: 16px 24px;
                    border-radius: 16px;
                    margin: 0 30px 30px;
                    text-align: center;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    font-size: 1rem;
                }
                
                .btn-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #475569;
                    color: white;
                    border: none;
                    padding: 12px 28px;
                    border-radius: 50px;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    margin: 25px 45px 45px;
                }
                
                .btn-back:hover {
                    background: #334155;
                    transform: translateY(-2px);
                }
                
                hr {
                    margin: 30px 0;
                    border: none;
                    border-top: 2px solid #e2e8f0;
                }
                
                /* Скроллбар */
                ::-webkit-scrollbar {
                    width: 10px;
                }
                
                ::-webkit-scrollbar-track {
                    background: #f1f5f9;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
                
                /* Адаптив */
                @media (max-width: 768px) {
                    .lesson-header, .lesson-content {
                        padding: 25px;
                    }
                    .lesson-header h1 {
                        font-size: 1.5rem;
                    }
                    .options-grid {
                        grid-template-columns: 1fr;
                    }
                    .questions-container {
                        padding: 20px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="lesson-container">
                <div class="lesson-header">
                    <span class="section-badge">📚 Раздел ${section.id} из 10</span>
                    <h1>📖 ${section.title}</h1>
                </div>
                <div class="lesson-content">
                    ${formattedContent}
                </div>
                ${section.test ? testHTML : ''}
                <div style="text-align: center;">
                    <button id="backBtn" class="btn-back">
                        <span>📚</span>
                        <span>Вернуться к списку уроков</span>
                    </button>
                </div>
            </div>
            
            <script>
                const sectionId = ${section.id};
                const testData = ${JSON.stringify(section.test || [])};
                
                if (document.getElementById('submitTest')) {
                    document.getElementById('submitTest').addEventListener('click', () => {
                        let allCorrect = true;
                        let correctCount = 0;
                        
                        for(let i = 0; i < testData.length; i++) {
                            let selected = null;
                            document.getElementsByName('q'+i).forEach(r => { 
                                if(r.checked) selected = parseInt(r.value); 
                            });
                            if(selected === testData[i].correct) {
                                correctCount++;
                            } else {
                                allCorrect = false;
                            }
                        }
                        
                        const resultDiv = document.getElementById('result');
                        if(allCorrect && testData.length > 0) {
                            resultDiv.innerHTML = '<div class="test-result success">🎉 Отлично! Вы успешно прошли тест! Закройте это окно, чтобы сохранить прогресс.</div>';
                            localStorage.setItem('section_passed_' + sectionId, 'true');
                            if(window.opener && !window.opener.closed) {
                                window.opener.postMessage({ type: 'testPassed', sectionId: sectionId }, '*');
                            }
                            
                            const btn = document.getElementById('submitTest');
                            btn.style.background = 'linear-gradient(135deg, #059669, #047857)';
                            btn.innerHTML = '<span class="btn-icon">🎉</span><span>Поздравляю!</span>';
                            btn.disabled = true;
                        } else {
                            resultDiv.innerHTML = '<div class="test-result fail">❌ Правильных ответов: ' + correctCount + ' из ' + testData.length + '. Попробуйте ещё раз внимательнее!</div>';
                            
                            for(let i = 0; i < testData.length; i++) {
                                let selected = null;
                                document.getElementsByName('q'+i).forEach(r => { 
                                    if(r.checked) selected = parseInt(r.value); 
                                });
                                if(selected !== testData[i].correct) {
                                    const card = document.querySelector('.test-question-card[data-qidx="' + i + '"]');
                                    if(card) {
                                        card.style.border = '2px solid #ef4444';
                                        setTimeout(() => {
                                            card.style.border = '';
                                        }, 1500);
                                    }
                                }
                            }
                        }
                    });
                }
                
                document.getElementById('backBtn').addEventListener('click', () => window.close());
                
                window.addEventListener('beforeunload', () => {
                    if(localStorage.getItem('section_passed_' + sectionId) === 'true') {
                        localStorage.removeItem('section_passed_' + sectionId);
                    }
                });
            <\/script>
        </body>
        </html>
    `);
}

// Панель преподавателя - только просмотр
async function showTeacherPanel(user) {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('teacherPanel').style.display = 'block';
    document.getElementById('teacherName').innerText = user.name;
    await loadTeacherData();
}

async function loadTeacherData() {
    showLoading(true);
    try {
        const students = await apiRequest('/students', 'GET');
        document.getElementById('totalStudents').innerText = students.length;
        
        if (students.length === 0) {
            document.getElementById('studentsTable').innerHTML = `
                <div style="text-align: center; padding: 40px; background: #f8fafc; border-radius: 20px;">
                    <p style="color: #64748b;">📭 Нет зарегистрированных студентов</p>
                </div>
            `;
            showLoading(false);
            return;
        }
        
        let html = `
            <table class="students-table">
                <thead>
                    <tr>
                        <th>👨‍🎓 Студент</th>
                        <th>🔑 Логин</th>
                        <th>📊 Прогресс</th>
                        <th>⚡ Действия</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        students.forEach(s => {
            let completed = Object.values(s.progress || {}).filter(v => v === true).length;
            let percent = Math.round((completed / 10) * 100);
            
            // Цвет прогресса в зависимости от процента
            let progressColor = '#2563eb';
            if (percent >= 80) progressColor = '#10b981';
            else if (percent >= 50) progressColor = '#f59e0b';
            else if (percent > 0) progressColor = '#3b82f6';
            
            html += `
                <tr class="student-row">
                    <td class="student-name">
                        <div class="student-avatar">${s.name.charAt(0)}</div>
                        <div class="student-info">
                            <strong>${escapeHtml(s.name)}</strong>
                        </div>
                    </td>
                    <td class="student-login">${escapeHtml(s.login)}</td>
                    <td class="progress-cell">
                        <div class="progress-wrapper">
                            <div class="progress-stats">
                                <span class="progress-percent">${percent}%</span>
                                <span class="progress-count">(${completed}/10)</span>
                            </div>
                            <div class="progress-bar-mini">
                                <div class="progress-fill-mini" style="width: ${percent}%; background: ${progressColor};"></div>
                            </div>
                        </div>
                    </td>
                    <td class="actions-cell">
                        <button class="detail-btn" data-login="${escapeHtml(s.login)}" data-name="${escapeHtml(s.name)}">
                            📋 Детали
                        </button>
                    </td>
                </tr>
            `;
        });
        
        html += `
                </tbody>
            </table>
        `;
        
        document.getElementById('studentsTable').innerHTML = html;
        
        // Добавляем обработчики для кнопок "Детали"
        document.querySelectorAll('.detail-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const login = btn.getAttribute('data-login');
                const name = btn.getAttribute('data-name');
                const student = students.find(s => s.login === login);
                
                if (student) {
                    let completedSections = [];
                    let notCompletedSections = [];
                    
                    for (let i = 1; i <= 10; i++) {
                        const passed = student.progress && student.progress[i] === true;
                        const title = COURSE_SECTIONS[i]?.title || `Раздел ${i}`;
                        if (passed) {
                            completedSections.push(`✅ ${title}`);
                        } else {
                            notCompletedSections.push(`❌ ${title}`);
                        }
                    }
                    
                    let detailsHtml = `
                        <div style="font-family: 'Segoe UI', system-ui;">
                            <div style="background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 20px; border-radius: 16px 16px 0 0; margin: -15px -15px 0 -15px;">
                                <h3 style="margin: 0;">📊 Прогресс студента</h3>
                                <p style="margin: 5px 0 0; opacity: 0.9;">${escapeHtml(name)} (${escapeHtml(login)})</p>
                            </div>
                            <div style="padding: 15px;">
                                <div style="background: #f1f5f9; border-radius: 12px; padding: 15px; margin-bottom: 15px;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                        <span>✅ Пройдено:</span>
                                        <strong style="color: #10b981;">${completedSections.length} из 10</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <span>❌ Осталось:</span>
                                        <strong style="color: #ef4444;">${notCompletedSections.length} из 10</strong>
                                    </div>
                                </div>
                                <div style="max-height: 300px; overflow-y: auto;">
                                    <div style="margin-bottom: 10px;">
                                        <strong style="color: #10b981;">✅ Пройденные разделы:</strong>
                                        <ul style="margin: 8px 0 15px 20px; color: #065f46;">
                                            ${completedSections.map(s => `<li>${s}</li>`).join('') || '<li style="color: #64748b;">Нет пройденных разделов</li>'}
                                        </ul>
                                    </div>
                                    <div>
                                        <strong style="color: #ef4444;">❌ Непройденные разделы:</strong>
                                        <ul style="margin: 8px 0 0 20px; color: #991b1b;">
                                            ${notCompletedSections.map(s => `<li>${s}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    const modal = document.createElement('div');
                    modal.style.cssText = `
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 10000;
                        animation: fadeIn 0.2s ease;
                    `;
                    
                    const modalContent = document.createElement('div');
                    modalContent.style.cssText = `
                        background: white;
                        border-radius: 20px;
                        padding: 15px;
                        max-width: 500px;
                        width: 90%;
                        max-height: 80vh;
                        overflow-y: auto;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                        animation: slideUp 0.2s ease;
                    `;
                    
                    modalContent.innerHTML = detailsHtml;
                    
                    const closeBtn = document.createElement('button');
                    closeBtn.innerHTML = '✖ Закрыть';
                    closeBtn.style.cssText = `
                        background: #475569;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 40px;
                        cursor: pointer;
                        font-size: 0.9rem;
                        margin-top: 15px;
                        width: 100%;
                        transition: all 0.2s;
                    `;
                    closeBtn.onmouseover = () => closeBtn.style.background = '#334155';
                    closeBtn.onmouseout = () => closeBtn.style.background = '#475569';
                    closeBtn.onclick = () => modal.remove();
                    
                    modalContent.appendChild(closeBtn);
                    modal.appendChild(modalContent);
                    document.body.appendChild(modal);
                    
                    modal.onclick = (e) => {
                        if (e.target === modal) modal.remove();
                    };
                }
            });
        });
        
    } catch (error) {
        showToast(error.message, true);
    } finally {
        showLoading(false);
    }
}

// Вспомогательная функция для экранирования HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Панель администратора
async function showAdminPanel(user) {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    document.getElementById('adminName').innerText = user.name;
    await loadAdminData();
}

async function loadAdminData() {
    showLoading(true);
    try {
        const [teachers, students] = await Promise.all([
            apiRequest('/teachers', 'GET'),
            apiRequest('/students', 'GET')
        ]);
        
        let teachersHtml = '<ul style="list-style:none;">';
        teachers.forEach(t => {
            teachersHtml += `<li style="background:#f1f5f9;margin:8px 0;padding:10px;border-radius:20px;">👩‍🏫 ${t.name} (${t.login})</li>`;
        });
        teachersHtml += '</ul>';
        document.getElementById('teachersList').innerHTML = teachersHtml || '<p>Нет преподавателей</p>';
        
        let studentsHtml = '<table><thead><tr><th>Имя</th><th>Логин</th><th>Пройдено разделов</th></tr></thead><tbody>';
        students.forEach(s => {
            let completed = Object.values(s.progress || {}).filter(v => v === true).length;
            studentsHtml += `<tr><td>${s.name}</td><td>${s.login}</td><td>${completed}/10</td></tr>`;
        });
        studentsHtml += '</tbody></table>';
        document.getElementById('adminStudentsList').innerHTML = studentsHtml;
    } catch (error) {
        showToast(error.message, true);
    } finally {
        showLoading(false);
    }
}

async function createTeacher() {
    const name = document.getElementById('newTeacherName').value.trim();
    const login = document.getElementById('newTeacherLogin').value.trim();
    const password = document.getElementById('newTeacherPass').value;
    
    if (!name || !login || !password) {
        showToast('Заполните все поля', true);
        return;
    }
    
    showLoading(true);
    try {
        await apiRequest('/teachers', 'POST', { login, password, name });
        showToast('Преподаватель создан!');
        document.getElementById('newTeacherName').value = '';
        document.getElementById('newTeacherLogin').value = '';
        document.getElementById('newTeacherPass').value = '';
        document.getElementById('createTeacherSection').style.display = 'none';
        await loadAdminData();
    } catch (error) {
        showToast(error.message, true);
    } finally {
        showLoading(false);
    }
}

// Обработчики событий
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'testPassed' && currentUser && currentUser.role === 'student') {
        updateProgress(event.data.sectionId);
    }
});

document.getElementById('doLoginBtn')?.addEventListener('click', login);
document.getElementById('doRegisterBtn')?.addEventListener('click', register);
document.getElementById('showCreateTeacherBtn')?.addEventListener('click', () => {
    const div = document.getElementById('createTeacherSection');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('confirmCreateTeacher')?.addEventListener('click', createTeacher);

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('authContainer').style.display = 'block';
    document.getElementById('studentPanel').style.display = 'none';
    document.getElementById('teacherPanel').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

document.getElementById('logoutStudent')?.addEventListener('click', logout);
document.getElementById('logoutTeacher')?.addEventListener('click', logout);
document.getElementById('logoutAdmin')?.addEventListener('click', logout);

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        document.getElementById('loginFormBlock').style.display = tab === 'login' ? 'block' : 'none';
        document.getElementById('registerFormBlock').style.display = tab === 'register' ? 'block' : 'none';
    });
});

// Восстановление сессии
async function restoreSession() {
    const session = getSession();
    if (session) {
        try {
            const user = await apiRequest(`/user/${session.id}`, 'GET');
            currentUser = user;
            if (user.role === 'student') {
                await loadStudentData(user);
            } else if (user.role === 'teacher') {
                await showTeacherPanel(user);
            } else if (user.role === 'admin') {
                await showAdminPanel(user);
            }
        } catch (error) {
            localStorage.removeItem('currentUser');
            document.getElementById('authContainer').style.display = 'block';
        }
    } else {
        document.getElementById('authContainer').style.display = 'block';
    }
}

// Запуск восстановления сессии
restoreSession();