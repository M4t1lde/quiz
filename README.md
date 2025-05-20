# Kurs nettside med en quiz


Dette er en enkel kurs nettside med en interaktiv quiz på slutten. Prosjektet er kodet i **HTML**, **CSS** og **JavaScript**, med en **MariaDB**-database koblet til via en **Node.js** backend.

## Teknologier
node.js\
mariadb\
HTML, CSS, JavaScript

## Hvordan installere og kjøre prosjektet lokalt

1. Klon repositoriet
```bash
git clone https://github.com/M4t1lde/quiz.git
cd quiz/
```

Installer **homebrew** om du ikke har det
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Installer **mariadb**
```bash
brew install mariadb
mysql.server start
brew services start mariadb
```
**Logg inn** som root brukeren
```bash
sudo mysql -u root
```
Installer nødvendige npm-pakker og MariaDB-klienten for Node.js:
```bash
npm install
npm install mariadb
```
Når du er logget inn i MariaDB, kjør følgende kommandoer:
```bash
CREATE DATABASE quiz;
USE quiz;
```
placeholder for database setup

Gå inn i filen kalt dbconnector.js i prosjektmappen, og endre "user" og "password" til ditt eget(la passordet være blangt om du ikke har et).


```bash
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quiz',
    connectionLimit: 5
});
```