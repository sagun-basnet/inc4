export const getUser = (req, res) => {
  res.send({ email: "jhon@gmail.com", password: "1234567890" });
};

export const postUser = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  res.send(`Your email: ${email} and password: ${password}`);
};
