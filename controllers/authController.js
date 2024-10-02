import User from '../models/User.js';

// Register function
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ id: user._id, username: user.username, email: user.email });
  } catch (error) {
    res.status(400).json({ message: 'Failed to register user', error });
  }
};

// Login function
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ id: user._id, username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Failed to login', error });
  }
};
