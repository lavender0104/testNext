export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  const { id } = req;
  console.log(id);
};
