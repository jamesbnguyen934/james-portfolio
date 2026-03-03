// Script to capture portfolio website screenshots
// Run with: node scripts/capture-screenshots.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const websites = [
  { name: 'butterflies', url: 'https://www.butterflies.ai' },
  { name: 'yolohealth', url: 'https://yolohealth.app/' },
  { name: 'fellow', url: 'https://fellow.app/' },
  { name: 'taostats', url: 'https://taostats.io/' },
  { name: 'wavel', url: 'https://wavel.ai/' },
  { name: 'beam', url: 'https://beam.ai' },
  { name: 'vhsfunding', url: 'https://vhsfunding.com/' },
  { name: 'fulgent', url: 'https://fulgentai.com/' },
  { name: 'talkie', url: 'https://www.talkie-ai.com/' },
];

// Using a free screenshot service (you can replace with your preferred service)
async function captureScreenshot(website) {
  const apiUrl = `https://api.screenshotone.com/take?access_key=YOUR_API_KEY&url=${encodeURIComponent(website.url)}&viewport_width=1280&viewport_height=720&device_scale_factor=1&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=true&delay=3&timeout=60`;
  
  const outputPath = path.join(__dirname, '..', 'public', 'projects', `${website.name}.jpg`);
  
  console.log(`Capturing ${website.name}...`);
  
  // You can implement the actual API call here
  // For now, this is a template
  console.log(`Would save to: ${outputPath}`);
}

// Alternative: Instructions for manual capture
console.log('\n=== MANUAL SCREENSHOT INSTRUCTIONS ===\n');
console.log('To manually capture screenshots:\n');

websites.forEach((website, index) => {
  console.log(`${index + 1}. Visit ${website.url}`);
  console.log(`   - Take a screenshot (1280x720px recommended)`);
  console.log(`   - Save as: public/projects/${website.name}.jpg\n`);
});

console.log('\n=== ALTERNATIVE: Use Screenshot Services ===\n');
console.log('Free online tools:');
console.log('- https://www.screenshotone.com/');
console.log('- https://screenshotapi.net/');
console.log('- https://www.screenshotmachine.com/');
console.log('\nOr browser extensions like "GoFullPage" or "Awesome Screenshot"');