// //domain/.netlify/functions/create-payment-intent

// const stripe = require('stripe')(import.meta.env.VITE_STRIPE_SECRET_KEY)

// exports.handler = async function (event, context) {
//   const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

//   const calculateOrderAmount = () => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return shipping_fee + total_amount
//   }
//   try {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(),
//       currency: 'usd',
//     })
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       body:"payment World",

//     }
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     }
//   }
// }


 const dotenv = require('dotenv')
dotenv.config()

const stripe=require('stripe')(process.env.VITE_STRIPE_SECRET_KEY)

//domain/.netlify/functions/create-payment-intent
exports.handler=async function(event, context){
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)
    if(event.body){

    const calculateOrderAmount=()=>{
        return shipping_fee + total_amount
    }

    try {
        const paymentIntent=await stripe.paymentIntents.create({
            amount:calculateOrderAmount(), currency:'usd'})
            return{
                statusCode:200,
                body:JSON.stringify({clientSecret:paymentIntent.client_secret})
            }
    } catch (error) {
        return{
            statusCode:500,
            body:JSON.stringify({error:error.message})
        }
    }
    return{
        statusCode:200,
        body:JSON.stringify(cart),
    }
}
return {
    statusCode:200,
    body:'create payment intent'
}
}