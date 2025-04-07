const express = require('express');
const cors = require('cors');
const db = require('./dbconnector');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serves quiz.html and script.js

// Get all questions with answers
app.get('/api/questions', async (req, res) => {
    const query = `
        SELECT q.id as question_id, q.question_text, a.id as answer_id, a.answer_text, a.is_correct
        FROM questions q
        JOIN answers a ON q.id = a.question_id
        ORDER BY q.id, a.id
    `;

    try {
        const rows = await db.query(query);
        const questions = {};

        rows.forEach(row => {
            if (!questions[row.question_id]) {
                questions[row.question_id] = {
                    id: row.question_id,
                    question_text: row.question_text,
                    answers: []
                };
            }
            questions[row.question_id].answers.push({
                id: row.answer_id,
                text: row.answer_text,
                is_correct: row.is_correct
            });
        });

        res.json(Object.values(questions));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST route to check answers
app.post('/check-answers', async (req, res) => {
    const { answers } = req.body;

    const answerIds = answers.map(a => a.answer_id);
    const query = `
        SELECT id, question_id, is_correct
        FROM answers
        WHERE id IN (?)
    `;

    try {
        const results = await db.query(query, [answerIds]);
        const correctAnswers = results.filter(a => a.is_correct === 1);
        const correctQuestionIds = correctAnswers.map(a => a.question_id);

        res.json({
            correct: correctQuestionIds,
            totalScore: correctAnswers.length
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save score to the database
app.post('/api/save-score', async (req, res) => {
  const { score } = req.body;

  if (typeof score !== 'number') {
      return res.status(400).json({ error: 'Score must be a number' });
  }

  try {
      await db.query('INSERT INTO scores (score) VALUES (?)', [score]);
      res.status(200).json({ message: 'Score saved successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Get all saved scores
app.get('/api/scores', async (req, res) => {
  try {
      const result = await db.query('SELECT * FROM scores ORDER BY id DESC');
      res.json(result);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
