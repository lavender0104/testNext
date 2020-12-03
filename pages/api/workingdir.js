export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  const { id, title } = req.body;
  console.log(id, title);
};
