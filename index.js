const express = require("express");
const app = express();

// const stripe = require("stripe")(

//   "sk_test_xxx"
// );

// app.get("/api", (req, res) => {
//   const apiKey = req.query.apiKey;

//   res.send({ data: "success" });
// });

// app.get("/checkout", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     mode: "subscription",
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price: "price_yyy",
//       },
//     ],
//     success_url:
//       "http://localhost:5000/success?session_id={CHECKOUT_SEESION_ID}",
//     cancel_url: "http://localhost:5000/error",
//   })

//   res.send(session);
// });

const path = require('path');

app.use(express.static('dist'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(8080, () => console.log("listen to port 8080"));
