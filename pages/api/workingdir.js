export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  console.log(JSON.parse(req));
};
