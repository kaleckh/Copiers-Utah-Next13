// import { Client } from "square"
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// export async function POST() {
//   return NextResponse.json({ "asdf": "adwf" })
// }

export async function GET(req, res) {
  const headers = {
    'Square-Version': '2023-07-20',
    'Authorization': 'Bearer EAAAEOBAWpWqMYtQnL6yMPRZZkl3ne8zZGGDli2HBC8pAivmZaGNoyOOtM-Uo7Ci',
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.get(`https://connect.squareupsandbox.com/v2/orders/QB44qsSEG6VUNdEPzeevuiUk71RZY`, { headers })
    // console.log(response, "order data");
    return NextResponse.json({ "kale": response.data.order.fulfillments.shipment_details })
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
    console.log(response)

    return NextResponse.json({ "paymentId": response.data.payment_link.id, "orderId": response.data.payment_link.order_id })
  } catch (error) {
    console.error('Error creating payment link:', error);
  }
  // res.status(200).json(result)



}
