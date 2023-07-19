<?php
// stripe_request.php

// Stripe API endpoint for creating a new customer
$stripeApiUrl = 'https://api.stripe.com/v1/customers';

// Replace 'your_stripe_secret_key' with your actual Stripe secret key
$stripeSecretKey = 'sk_test_your_stripe_secret_key';

// Data to be sent in the request (in this case, creating a new customer)
$customerData = array(
    'email' => 'customer@example.com',
    'name' => 'John Doe',
);

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $stripeApiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($customerData));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $stripeSecretKey,
));

// Execute cURL session and get the response
$response = curl_exec($ch);

// Check if cURL request was successful
if ($response === false) {
    echo 'cURL Error: ' . curl_error($ch);
    // Handle error appropriately (e.g., log, display a friendly message)
    exit;
}

// Close cURL session
curl_close($ch);

// Decode the JSON response into a PHP array
$data = json_decode($response, true);

// Output the response (you can process this data further as needed)
echo '<pre>';
print_r($data);
echo '</pre>';