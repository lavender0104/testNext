export default (req, res) => {
  res.statusCode = 200;
  res.end("hi");
  if (req) {
    res.json(req);
  }
};
