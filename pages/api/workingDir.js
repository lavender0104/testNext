export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
  //   res.statusCode = 200;
  //   res.end("hi");
  //   console.log(req);
};
