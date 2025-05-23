# Kurs nettside med en quiz
Målet vårt er å tilby en enkel og interaktiv læringsplattform hvor brukere kan gjennomføre et kort kurs og teste kunnskapen sin med en quiz, med lagring av resultater for videre evaluering.
### Hvordan systemet funker
Dette er en enkel kurs nettside med en interaktiv quiz på slutten. Prosjektet er kodet i **HTML**, **CSS** og **JavaScript**, med en **MariaDB**-database koblet til via en **Node.js** backend.

## Funksjonaliteter
Kursinnhold vises i en enkel og responsiv UI.\
En quiz med flervalgsspørsmål til slutt.\
Resultater lagres i databasen.\
Backend-server håndterer databaseforespørsler og validering.

## Teknologier
Frontend: HTML, CSS, JavaScript\
Backend: Node.js (Express)\
Database: MariaDB\
Andre verktøy: Homebrew

### Forutsettninger, hva du trenger:
Visual Studio Code(eller annen tekseditor)\
En terminal\
Et sted å lagre filer\
Git
## Hvordan installere og kjøre prosjektet lokalt

1. Klon repoen
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
Logg inn som root brukeren
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

Åpne filen kalt dbconnector.js i prosjektmappen, og endre "user" og "password" til ditt eget(la passordet være blangt om du ikke har et).


```bash
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quiz',
    connectionLimit: 5
});
```


## Starte serveren
```bash
node app.js
```
Standardporten er http://localhost:3000


## Pushe endringer i git
Om du gjør endinger kan du pushe de med disse kommandoene i terminalen:
```bash 
git add *
git commit -m "hva_endret_jeg"

git push origin master
```
## Teste applikasjonen
Les kurset.

Ta quizen.

Resultatet ditt lagres i databasen. Se det på /api/scores

## Feilsøking
Database connection refused: Sjekk at MariaDB kjører.

"Cannot find module 'mariadb'": Kjør npm install mariadb.

Port in use: Endre port i app.js hvis 3000 er opptatt.

### Lisens
Dette prosjektet er åpent og kan brukes fritt.