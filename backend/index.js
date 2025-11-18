const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "just_a_trial_id_it_is_for_class";

app.get('/', (req,res)=>{
  res.status(200).send('server is running')
})

// SIGNUP
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Invalid Credentials" });

  try {
    const present = await prisma.user.findUnique({
      where: { email }
    });

    if (present)
      return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const created = await prisma.user.create({
      data: { 
        name,
        email,
        password: hashed
      }
    });

    return res.status(201).json(created);
  } catch (er) {
    console.log(er);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Invalid Credentials" });

  try {
    const present = await prisma.user.findUnique({
      where: { email }
    });

    if (!present)
      return res.status(404).json({ message: "User not found" });

    const isValid = await bcrypt.compare(password, present.password);

    if (!isValid)
      return res.status(401).json({ error: "Incorrect Password" });

    const token = jwt.sign(
      { id: present.id, email: present.email },
      SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ user: present, token });
  } catch (er) {
    console.log(er);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// VERIFY TOKEN MIDDLEWARE
function verifyToken(req, res, next) {
  const header = req.headers.authorization;

  if (!header)
    return res.status(401).json({ message: "No token provided" });

  const [prefix, token] = header.split(" ");

  if (prefix !== "Bearer")
    return res.status(400).json({ message: "Invalid token format" });

  jwt.verify(token, SECRET, (err, decode) => {
    if (err)
      return res.status(401).json({ message: "Invalid or expired token" });

    req.user = decode;
    next();
  });
}

// PROTECTED ROUTE
app.post("/update", verifyToken, (req, res) => {
  return res.status(200).json({ message: "Logged in successfully" });
});

// SERVER START
app.listen(3000, () => console.log("Server is running on http://localhost:3000/"));
