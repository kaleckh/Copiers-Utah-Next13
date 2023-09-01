// import { Client } from "square"
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


export async function GET(req, res) {

  const { searchParams } = new URL(req.url)
  // const id = searchParams.get('id')
  const headers = {
    'Square-Version': '2023-07-20',
    'Authorization': 'Bearer EAAAEJcEj6P1DuNXNYG-YdPfOS983WP7pikIsRjcWQPAXoYTseUkcXxkT3piWOMH',
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.get(`https://connect.squareup.com/v2/orders/vOuUoVwHBrpJ0f6Cfmr87nhbiQdZY`, { headers })
    // console.log(response.data)
    return NextResponse.json({ "data": response.data })
  } catch (error) {
    console.log(error);
  }

}



export async function POST(req, res) {

  const url = 'https://connect.squareupsandbox.com/v2/online-checkout/payment-links';

  const headers = {
    'Square-Version': '2023-07-20',
    'Authorization': 'Bearer EAAAEOBAWpWqMYtQnL6yMPRZZkl3ne8zZGGDli2HBC8pAivmZaGNoyOOtM-Uo7Ci',
    'Content-Type': 'application/json',
  };

  const data = {
    "idempotency_key": uuidv4(),
    "order": {
      "location_id": "LDMMSQDX5M7ZP",
      "line_items": [
        {
          "quantity": "1",
          "base_price_money": {
            "amount": 1,
            "currency": "USD"
          },
          "name": "toner",
          "note": "llkj"
        }
      ]
    },
    "checkout_options": {
      "ask_for_shipping_address": true
    },
    "description": "asdfdfkdjf"
  };

  try {
    const response = await axios.post(url, data, { headers })


    return NextResponse.json({ "paymentId": response.data.payment_link.id, "orderId": response.data.payment_link.order_id, "redirect": response.data.payment_link.long_url })
  } catch (error) {
    console.error('Error creating payment link:', error);
  }
  // res.status(200).json(result)



}
