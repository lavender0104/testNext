export default (req, res) => {
  res.status(200).json({ name: "next.js" });
  //const { total_price, currency } = req; 
  //console.log(currency, total_price);
  //console.log(req.query, req.body);
  console.log(req.body);
};
