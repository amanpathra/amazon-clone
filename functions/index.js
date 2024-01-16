const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51N4klNSJJkULapk4buM5xKZQpN4D7" +
"rq3ISIm9jhCfeWZZ868Y9hLPI2dpOTSqPwIlG0whCurJbGG3roBosx6tODh00fYDzO2bb");

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROOTS
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment request received for amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "usd",
        description: "Software development services",
        shipping: {
            name: "Jenny Rosen",
            address: {
                line1: "510 Townsend St",
                postal_code: "98140",
                city: "San Francisco",
                state: "CA",
                country: "US",
            },
        },
    });

    res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// LISTEN
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/challenge-65246/us-central1/api
