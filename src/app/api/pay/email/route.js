import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const newData = await req.json();
  console.log(newData, "this is the req");
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "https://api.smtp2go.com/v3/email/send";
  const data = {
    api_key: process.env.SMTP_API,
    to: [`${newData.email}`],
    sender: "<info@copiersutah.com>",
    subject: `This is kale's quote form. Her number is`,
    text_body: `something`,
    html_body: `<h1>something</h1>`,
    template_id: "9734011",
    template_data: {
      total: newData.total,
      order_id: newData.orderId,
      address_line_state_country: newData.addressLineState,
      address_line_name: newData.addressLineStreet,
      address_line_city: newData.addressLineCity,
      email: newData.email,
      items: newData.stuff,
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    // return NextResponse.json({ success: response.data });
  } catch (error) {
    // console.error("Error sending email:", error);
  }
  // res.status(200).json(result)
}
