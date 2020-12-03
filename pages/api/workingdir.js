export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  const { id, quantity } = req.body;
  console.log(id, quantity);
};
