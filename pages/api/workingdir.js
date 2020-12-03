export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  const abc = req;
  console.log(abc);
};
