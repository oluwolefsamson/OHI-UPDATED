/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'Client-Dashboard', 'LandingPageManager.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Revert my previous localTheme hack
content = content.replace(
  /const \[localTheme, setLocalTheme\] = React\.useState\(config\.theme\);\n\s*const location = useLocation\(\);\n\n\s*useEffect\(\(\) => \{\n\s*setLocalTheme\(config\.theme\);\n\s*\}, \[config\.theme\]\);/,
  'const location = useLocation();'
);
content = content.replace(
  /const updateTheme = \(key, value\) => \{\n\s*setLocalTheme\(\(current\) => \(\{\n\s*\.\.\.current,\n\s*\[key\]: value,\n\s*\}\)\);\n\s*\};/,
  `const updateTheme = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      theme: {
        ...current.theme,
        [key]: value,
      },
    }));
  };`
);

// Remove the theme onSave that we previously added
content = content.replace(
  /onSave=\{\(\) => \{\n\s*setConfig\(\(current\) => \(\{ \.\.\.current, theme: localTheme \}\)\);\n\s*toast\.success\("Theme settings saved!"\);\n\s*\}\}\n\s*saveLabel="Update Theme Settings"/,
  ''
);

// Replace localTheme with config (so we can do a global replace after)
content = content.replace(/localTheme/g, 'config.theme');

// 2. Add draftConfig global state
content = content.replace(
  'const { config, setConfig, resetConfig } = useLandingPageConfig();',
  `const { config, setConfig, resetConfig } = useLandingPageConfig();
  const [draftConfig, setDraftConfig] = React.useState(config);

  useEffect(() => {
    setDraftConfig(config);
  }, [config]);`
);

// 3. Change all update handlers to use setDraftConfig instead of setConfig
content = content.replace(/setConfig\(\(current\) => /g, 'setDraftConfig((current) => ');

// 4. Update the JSX bindings to use draftConfig instead of config
// We only want to replace config. inside the JSX/return block. 
// The return block starts around line 418 `return (`
const returnIndex = content.indexOf('return (');
const beforeReturn = content.slice(0, returnIndex);
let afterReturn = content.slice(returnIndex);

afterReturn = afterReturn.replace(/config\./g, 'draftConfig.');
content = beforeReturn + afterReturn;

// 5. Inject onSave for each SectionCard
const sections = [
  { id: 'theme-settings', key: 'theme', label: 'Theme Settings' },
  { id: 'hero-content', key: 'hero', label: 'Hero Content' },
  { id: 'about-ohi', key: 'about', label: 'About Section' },
  { id: 'why-ohi', key: 'whyChoose', label: 'Why OHI Section' },
  { id: 'who-we-serve', key: 'services', label: 'Who We Serve' },
  { id: 'gallery"', key: 'gallery', label: 'Gallery' }, // quote is there to distinguish from gallery-stories
  { id: 'gallery-stories', key: 'galleryStories', label: 'Gallery Stories' },
  { id: 'video-section', key: 'video', label: 'Video Section' },
  { id: 'mission-vision-values', key: 'profile', label: 'Mission, Vision & Values' },
  { id: 'selected-voices', key: 'voices', label: 'Selected Voices' },
  { id: 'footer-settings', key: 'footer', label: 'Footer Settings' }
];

sections.forEach(sec => {
  const target = `id="${sec.id}"`;
  const regex = new RegExp(`(<SectionCard\\s+id="${sec.id}"[\\s\\S]*?description="[^"]*")>`);
  
  content = content.replace(regex, `$1\n        onSave={() => {\n          setConfig((current) => ({ ...current, ${sec.key}: draftConfig.${sec.key} }));\n          toast.success("${sec.label} saved!");\n        }}\n        saveLabel="Update ${sec.label}"\n      >`);
});

// For gallery, fix the quote
content = content.replace('id="gallery""', 'id="gallery"');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully refactored LandingPageManager.jsx');
