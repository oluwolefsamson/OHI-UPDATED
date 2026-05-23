const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'Client-Dashboard', 'LandingPageManager.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Normalize line endings
content = content.replace(/\r\n/g, '\n');

const sections = [
  { id: 'theme-settings', key: 'theme', label: 'Theme Settings' },
  { id: 'hero-content', key: 'hero', label: 'Hero Content' },
  { id: 'about-ohi', key: 'about', label: 'About Section' },
  { id: 'why-ohi', key: 'whyChoose', label: 'Why OHI Section' },
  { id: 'who-we-serve', key: 'services', label: 'Who We Serve' },
  { id: 'gallery"', key: 'gallery', label: 'Gallery' },
  { id: 'gallery-stories', key: 'galleryStories', label: 'Gallery Stories' },
  { id: 'video-section', key: 'video', label: 'Video Section' },
  { id: 'mission-vision-values', key: 'profile', label: 'Mission, Vision & Values' },
  { id: 'selected-voices', key: 'voices', label: 'Selected Voices' },
  { id: 'footer-settings', key: 'footer', label: 'Footer Settings' }
];

let injectedCount = 0;

sections.forEach(sec => {
  // Skip if already injected
  if (content.includes(`saveLabel="Update ${sec.label}"`)) return;
  
  // Notice the \s*> at the end to handle newlines before the closing bracket
  const regex = new RegExp(`(<SectionCard\\s+id="${sec.id}"[\\s\\S]*?description="[^"]*")\\s*>`);
  
  if (regex.test(content)) {
    content = content.replace(regex, `$1\n        onSave={() => {\n          setConfig((current) => ({ ...current, ${sec.key}: draftConfig.${sec.key} }));\n          toast.success("${sec.label} saved!");\n        }}\n        saveLabel="Update ${sec.label}"\n      >`);
    injectedCount++;
  }
});

content = content.replace('id="gallery""', 'id="gallery"');

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`✅ Injected ${injectedCount} Update buttons into the dashboard!`);
