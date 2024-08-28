import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log(process.env.NEXT_PUBLIC_SMTP_API, 'api test')
  const newData = await req.json();
  console.log(newData, "this is the req");

  const headers = {
    'Content-Type': 'application/json',
  };

  const url = 'https://api.smtp2go.com/v3/email/send';
  const data = {
    api_key: process.env.NEXT_PUBLIC_SMTP_API, // Ensure this environment variable is set correctly
    to: ['info@copiersutah.com'],
    sender: 'info@copiersutah.com',
    subject: `This is kale's quote form. Her number is`,
    text_body: 'something',
    html_body: '<h1>something</h1>',
    template_id: '5120871',
    template_data: {
      name: newData.name,
      from: newData.from,
      number: newData.number,
      Email: newData.email,
      message: newData.message,
    },
  };

  try {
    console.log('Sending request to:', url);
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Parse the response body for additional error details
      const errorBody = await response.text(); // or response.json() if it's JSON
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}. Response body: ${errorBody}`);
    }

    const responseData = await response.json();
    return NextResponse.json({ success: responseData });
  } catch (error) {
    // Detailed logging of the error
    console.error('Error sending email:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json({ success: false, error: error.message });
  }
}
