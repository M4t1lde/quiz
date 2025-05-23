CREATE quiz;
USE quiz;

CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL
);

CREATE TABLE answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT NOT NULL,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

CREATE TABLE scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO questions (id, question_text) VALUES
(1, 'Hva er hovedprinsippet bak smidig utvikling?'),
(2, 'Hvilken av disse metodene er IKKE en del av smidig utvikling?'),
(3, 'Hvorfor er samarbeid viktig i smidig utvikling?'),
(4, 'Hvilket av disse verktøyene brukes ofte i smidig utvikling?');


INSERT INTO answers (id, question_id, answer_text, is_correct) VALUES
(1, 1, 'Jobbe iterativt med tilbakemeldinger og tilpasning', 1),
(2, 1, 'Planlegge alt på forhånd og følge en fast plan', 0),
(3, 1, 'Fokusere kun på skriftlig dokumentasjon', 0),
(4, 1, 'Lage en komplett løsning før testing', 0),
(5, 2, 'Scrum', 0),
(6, 2, 'Fossefallsmetoden', 1),
(7, 2, 'Kanban', 0),
(8, 2, 'Ekstremprogrammering (XP)', 0),
(9, 3, 'Det hjelper teamet å jobbe raskere og mer effektivt', 1),
(10, 3, 'Det reduserer behovet for kommunikasjon', 0),
(11, 3, 'Det gjør det mulig å unngå planlegging', 0),
(12, 3, 'Det gir utviklere mer frihet til å jobbe individuelt', 0),
(13, 4, 'Microsoft Word', 0),
(14, 4, 'Trello', 1),
(15, 4, 'Adobe Photoshop', 0),
(16, 4, 'Teams', 0);

INSERT INTO scores (id, score, timestamp) VALUES
(1, 1, '2025-04-07 11:01:02'),
(2, 1, '2025-04-07 11:01:06'),
(3, 2, '2025-04-07 11:01:39'),
(4, 3, '2025-04-07 11:01:48'),
(5, 2, '2025-04-07 11:06:40'),
(6, 0, '2025-04-10 10:30:26'),
(7, 3, '2025-05-13 12:34:31'),
(8, 3, '2025-05-19 14:30:19'),
(9, 2, '2025-05-19 14:32:38');
