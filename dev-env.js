// Development environment loader
// This script helps you load environment variables for local development

const fs = require('fs');
const path = require('path');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  console.log('⚠️  .env.local file not found!');
  console.log('📝 Please create a .env.local file with your environment variables:');
  console.log('');
  console.log('NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here');
  console.log('');
  console.log('🔗 Get your values from: https://dashboard.render.com/web/srv-ck9je2ldgahc73d91v6g');
  console.log('   Click on "Environment" tab');
  process.exit(1);
}

console.log('✅ .env.local file found');
console.log('🚀 Starting development server...');
