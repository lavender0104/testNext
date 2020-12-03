export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  const a = JSON.stringify(req);
  console.log(a);
};
