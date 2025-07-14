const express = require('express');
const fs = require('fs/promises');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

const JWT_SECRET = 'секретный_ключ';

async function readUsers() {
    const data = await fs.readFile('./data/users.json', 'utf8');
    return JSON.parse(data);
}

async function writeUsers(users) {
    await fs.writeFile('./data/users.json', JSON.stringify(users, null, 2));
}


app.post('/auth/register', async (req, res) => {
    const { username, password } = req.body;
    const users = await readUsers();

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Юзер уже есть' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), username, password: hashedPassword };
    users.push(newUser);
    await writeUsers(users);

    res.json({ message: 'Регистрация успешна' });
});


app.post('/auth/login', async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    const users = await readUsers();
    const user = users.find(u => u.username == email);

    if (!user) return res.status(400).json({ message: 'Не нашел' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Неверный логин или пароль' });

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Вход успешен', token });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));