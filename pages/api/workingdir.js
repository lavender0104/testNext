export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  const afterParse = JSON.parse(req);
  console.log(afterParse);
};
