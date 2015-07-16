//For Bandwidth calculation

module.exports =  function(req, res) {

  console.log("req.query.h" + req.query.h);
  console.log("req.query.s" + req.query.s);
  var bandwith = req.query.h * req.query.s;
  res.json({
    "value": bandwith
  })
};
