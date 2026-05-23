const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'Client-Dashboard', 'LandingPageManager.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Normalize line endings to \n to ensure regex and string matching works on Windows
content = content.replace(/\r\n/g, '\n');

// 1. Add onSave and saveLabel to SectionCard
const sectionCardOriginal = `function SectionCard({ id, title, description, children }) {
  return (
    <Card
      id={id}
      className="scroll-mt-24 overflow-hidden border-border/80 bg-card/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
    >
      <div className="h-1 bg-[linear-gradient(90deg,#0f4c81,#118ab2,#f4b942)]" />
      <CardHeader className="border-b border-border/60 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Section editor
        </p>
        <CardTitle className="mt-2 text-2xl text-foreground">{title}</CardTitle>
        {description && (
          <CardDescription className="mt-2 max-w-3xl text-sm leading-6">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="px-6 py-6">{children}</CardContent>
    </Card>
  );
}`;

const sectionCardNew = `function SectionCard({ id, title, description, children, onSave, saveLabel = "Save changes" }) {
  return (
    <Card
      id={id}
      className="scroll-mt-24 overflow-hidden border-border/80 bg-card/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
    >
      <div className="h-1 bg-[linear-gradient(90deg,#0f4c81,#118ab2,#f4b942)]" />
      <CardHeader className="border-b border-border/60 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Section editor
        </p>
        <CardTitle className="mt-2 text-2xl text-foreground">{title}</CardTitle>
        {description && (
          <CardDescription className="mt-2 max-w-3xl text-sm leading-6">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="px-6 py-6">
        {children}
        {onSave && (
          <div className="mt-8 flex justify-end border-t border-border/40 pt-5">
            <Button onClick={onSave} className="rounded-xl px-6 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#05c1ff] text-white hover:brightness-110 transition">
              {saveLabel}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}`;

if (!content.includes(sectionCardOriginal)) {
  console.log("Could not find the original SectionCard component. Make sure the file is clean!");
}

content = content.replace(sectionCardOriginal, sectionCardNew);

// 2. Add draftConfig global state
content = content.replace(
  'const { config, setConfig, resetConfig } = useLandingPageConfig();',
  `const { config, setConfig, resetConfig } = useLandingPageConfig();\n  const [draftConfig, setDraftConfig] = React.useState(config);\n\n  useEffect(() => {\n    setDraftConfig(config);\n  }, [config]);`
);

// 3. Change all update handlers to use setDraftConfig instead of setConfig
content = content.replace(/setConfig\(\(current\) => /g, 'setDraftConfig((current) => ');

// 4. Update the JSX bindings to use draftConfig instead of config
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
  { id: 'gallery"', key: 'gallery', label: 'Gallery' },
  { id: 'gallery-stories', key: 'galleryStories', label: 'Gallery Stories' },
  { id: 'video-section', key: 'video', label: 'Video Section' },
  { id: 'mission-vision-values', key: 'profile', label: 'Mission, Vision & Values' },
  { id: 'selected-voices', key: 'voices', label: 'Selected Voices' },
  { id: 'footer-settings', key: 'footer', label: 'Footer Settings' }
];

sections.forEach(sec => {
  const regex = new RegExp(`(<SectionCard\\s+id="${sec.id}"[\\s\\S]*?description="[^"]*")>`);
  content = content.replace(regex, `$1\n        onSave={() => {\n          setConfig((current) => ({ ...current, ${sec.key}: draftConfig.${sec.key} }));\n          toast.success("${sec.label} saved!");\n        }}\n        saveLabel="Update ${sec.label}"\n      >`);
});

// For gallery, fix the quote
content = content.replace('id="gallery""', 'id="gallery"');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ Successfully added Update buttons to LandingPageManager.jsx');
