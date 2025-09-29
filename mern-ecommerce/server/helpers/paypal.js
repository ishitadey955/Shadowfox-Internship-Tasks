const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWu0vzDJqju-zpIHXGjvEUbJriSdb0xzxsugJQMWiUfTHkR0Hjailc0DMlnhFP-hLOnCwWaBJTWh5hgh",
  client_secret: "EJFv_defMzkL8zhY_qYrjJaislGiouDo6mD6fMHybZ4FhiOQVWcZtp1qaCUCqqZjDVYjiAVdAX1c_yN_",
});

module.exports = paypal;
