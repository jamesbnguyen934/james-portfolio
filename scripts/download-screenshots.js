const https = require('https');
const fs = require('fs');
const path = require('path');

const ACCESS_KEY = '2gyA1j2encXQxA';

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

// Different configurations to capture varied screenshots
const screenConfigs = [
  { viewport_height: 720, delay: 2 },   // Top of page
  { viewport_height: 1080, delay: 3 },  // Taller viewport (shows more content)
  { viewport_height: 900, delay: 4 },   // Medium height with longer delay
];

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (newResponse) => {
          if (newResponse.statusCode !== 200) {
            let errorData = '';
            newResponse.on('data', chunk => errorData += chunk);
            newResponse.on('end', () => {
              reject(new Error(`Failed to download: ${newResponse.statusCode} - ${errorData}`));
            });
            return;
          }
          newResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✓ Downloaded: ${path.basename(filepath)}`);
            resolve();
          });
        }).on('error', reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        let errorData = '';
        response.on('data', chunk => errorData += chunk);
        response.on('end', () => {
          reject(new Error(`Failed to download: ${response.statusCode} - ${errorData}`));
        });
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function captureScreenshots() {
  const outputDir = path.join(__dirname, '..', 'public', 'projects');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Starting screenshot downloads...\n');
  
  for (const website of websites) {
    console.log(`\nProcessing ${website.name}...`);
    
    for (let i = 0; i < screenConfigs.length; i++) {
      const config = screenConfigs[i];
      const filename = `${website.name}-${i + 1}.jpg`;
      const filepath = path.join(outputDir, filename);
      
      // Build ScreenshotOne API URL without scroll_to parameter
      const apiUrl = `https://api.screenshotone.com/take?` + 
        `access_key=${ACCESS_KEY}` +
        `&url=${encodeURIComponent(website.url)}` +
        `&viewport_width=1280` +
        `&viewport_height=${config.viewport_height}` +
        `&device_scale_factor=1` +
        `&format=jpg` +
        `&image_quality=80` +
        `&block_ads=true` +
        `&block_cookie_banners=true` +
        `&delay=${config.delay}`;
      
      try {
        await downloadImage(apiUrl, filepath);
        // Add delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(`✗ Failed to download ${filename}:`, error.message);
        // Continue with next screenshot even if one fails
      }
    }
  }
  
  console.log('\n✓ Screenshot download process completed!');
  console.log(`Screenshots saved to: ${outputDir}`);
}

// Run the script
captureScreenshots().catch(console.error);