const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' }
];

function getUsers(req, res) {
    const role = req.query.role;
    if (role) {
        const filteredUsers = users.filter(u => u.role === role);
        return res.json(filteredUsers);
    }

    res.json(users);
}

function createUser(req, res) {
    const { name, email, role = 'user' } = req.body;

    users.push({ id: users.length + 1, name, email, role });
    res.status(201).json({ message: 'User created successfully' });
}

function getUserById(req, res) {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
}

module.exports = {
    getUsers,
    createUser,
    getUserById
};
