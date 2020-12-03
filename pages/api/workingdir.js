export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  //const { product_id, id, title } = req.body;
  //console.log(product_id, id, title);
  console.log(req.body, req.body.id);
};
