export default (req, res) => {
  res.statusCode = 200;
  res.end("hi");
  res.json(req);
};
