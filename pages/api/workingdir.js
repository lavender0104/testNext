export default (req, res) => {
  res.statusCode = 200;
  res.end("hi");
  console.log(req);
};
