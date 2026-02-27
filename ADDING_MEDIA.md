# Adding Media Files (Videos, Images, GIFs) to AXON Website

## 📁 Directory Structure

Create a `public` folder in your project root if it doesn't exist:

```
axon-website/
├── public/
│   ├── videos/
│   │   ├── hero-demo.mp4
│   │   ├── platform-overview.mp4
│   │   ├── analytics-demo.mp4
│   │   └── ...
│   ├── images/
│   │   ├── thumbnails/
│   │   │   ├── platform-overview.jpg
│   │   │   └── ...
│   │   ├── screenshots/
│   │   │   ├── dashboard.png
│   │   │   └── ...
│   │   └── ...
│   └── gifs/
│       ├── real-time-processing.gif
│       ├── predictive-analytics.gif
│       └── ...
```

## 🎬 Video Files

### Where Videos Are Used:

1. **HeroSection** (`src/components/sections/HeroSection.tsx`)
   - Location: Line ~54
   - Currently: `src={undefined}`
   - Update to: `src="/videos/hero-demo.mp4"`
   - Type: MP4 video
   - Recommended size: 1920x1080, max 10MB
   - Features: Auto-plays, loops, muted

2. **TabbedPlatform** (`src/components/sections/TabbedPlatform.tsx`)
   - **Analytics Tab**: Line ~36
     - Update: `mediaSrc: "/videos/analytics-demo.mp4"`
   - **Visualization Tab**: Line ~50
     - Update: `mediaSrc: "/videos/visualization-demo.mp4"`
   - **AI Agents Tab**: Line ~64
     - Update: `mediaSrc: "/videos/ai-agents-demo.mp4"`
   - **Development Tab**: Line ~78
     - Update: `mediaSrc: "/videos/app-development-demo.mp4"`

3. **VideoGallery** (`src/components/sections/VideoGallery.tsx`)
   - 4 video placeholders (lines ~17-52)
   - Update each `videoSrc: undefined` to actual paths
   - Example: `videoSrc: "/videos/platform-overview.mp4"`

### Video Format Requirements:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **File Size**: Under 10MB recommended
- **Duration**: 30 seconds to 5 minutes
- **FPS**: 30fps or 60fps

### Compression Tips:
```bash
# Using ffmpeg to compress video
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M -b:a 128k output.mp4
```

## 🖼️ Image Files

### Where Images Are Used:

1. **Industry Cards** - Could add background images
2. **Resource Cards** - Could add preview thumbnails
3. **Product Screenshots** - Development tab in TabbedPlatform

### Image Format Requirements:
- **Format**: WebP (best), PNG, or JPEG
- **Resolution**: 1200x900 minimum
- **File Size**: Under 500KB
- **Optimization**: Use Next.js Image component for automatic optimization

### Converting to WebP:
```bash
# Using ffmpeg
ffmpeg -i input.png -c:v libwebp -quality 85 output.webp
```

## 🎞️ GIF Files

### Where GIFs Are Used:

1. **AnimatedFeatures** (`src/components/sections/AnimatedFeatures.tsx`)
   - **Real-Time Processing**: Line ~18
     - Update: `gifSrc: "/gifs/real-time-processing.gif"`
   - **Predictive Analytics**: Line ~24
     - Update: `gifSrc: "/gifs/predictive-analytics.gif"`
   - **Precision Mapping**: Line ~30
     - Update: `gifSrc: "/gifs/precision-mapping.gif"`

### GIF Format Requirements:
- **Format**: GIF or animated WebP
- **Resolution**: 800x600 to 1280x720
- **File Size**: Under 5MB (use compression)
- **Duration**: 3-10 seconds loop
- **FPS**: 15-24fps

### GIF Optimization:
```bash
# Using gifsicle
gifsicle -O3 --colors 256 input.gif -o output.gif

# Or convert to animated WebP (better compression)
ffmpeg -i input.gif -c:v libwebp -quality 85 output.webp
```

## 🔧 How to Add Your Media

### Step 1: Add files to public folder
```bash
# Create directories
mkdir -p public/videos public/images public/gifs

# Copy your files
cp ~/Downloads/demo.mp4 public/videos/hero-demo.mp4
```

### Step 2: Update component files

**Example: Updating HeroSection video**
```tsx
// Find this line in src/components/sections/HeroSection.tsx
<MediaPlaceholder
  type="video"
  aspectRatio="video"
  src="/videos/hero-demo.mp4"  // Add your path here
  autoPlay={true}
/>
```

**Example: Updating TabbedPlatform analytics video**
```tsx
// Find tabContent in src/components/sections/TabbedPlatform.tsx
analytics: {
  // ...
  mediaType: 'gif',
  mediaSrc: "/videos/analytics-demo.mp4", // Add your path here
},
```

### Step 3: Test locally
```bash
npm run dev
```
Visit http://localhost:3000 and verify media loads correctly.

## 📊 Media Placeholder Component

The `MediaPlaceholder` component (`src/components/ui/MediaPlaceholder.tsx`) handles:

- ✅ **Graceful fallbacks**: Shows styled placeholder if no media provided
- ✅ **Auto-play**: Videos/GIFs auto-play when specified
- ✅ **Responsive**: Adapts to different aspect ratios
- ✅ **Performance**: Only loads media when visible (lazy loading)
- ✅ **Styled**: Matches your dark theme with yellow accents

### Props:
```tsx
<MediaPlaceholder
  type="video"        // 'image' | 'video' | 'gif'
  src="/path/to/file" // undefined shows placeholder
  aspectRatio="video" // 'square' | 'video' | 'wide'
  autoPlay={true}     // Auto-play videos/gifs
  alt="Description"   // Alt text for accessibility
  className="..."     // Additional CSS classes
/>
```

## 🎨 Creating Demo Videos/GIFs

### Screen Recording Tools:
- **Windows**: OBS Studio, ShareX, Windows Game Bar
- **Mac**: QuickTime, ScreenFlow, Kap
- **Linux**: SimpleScreenRecorder, Peek (GIF)

### Recommended Content:
1. **Hero Video**: Platform dashboard overview (15-30 sec)
2. **Analytics Demo**: Drag-and-drop workflow (20-30 sec)
3. **Visualization Demo**: Interactive map manipulation (20-30 sec)
4. **AI Agents Demo**: AI query and response (20-30 sec)
5. **Development Demo**: Code editor or app preview (20-30 sec)

## 🚀 Production Optimization

### Before Deployment:
1. Compress all videos (target 1-3MB each)
2. Convert images to WebP format
3. Optimize GIFs or convert to animated WebP
4. Test loading times on slow connections
5. Add proper alt text for accessibility

### CDN Hosting (Advanced):
For better performance, host large media files on a CDN:

```tsx
// Instead of:
src="/videos/large-demo.mp4"

// Use CDN:
src="https://cdn.yourdomain.com/videos/large-demo.mp4"
```

## ✅ Checklist

- [ ] Create `/public/videos` folder
- [ ] Create `/public/images` folder
- [ ] Create `/public/gifs` folder
- [ ] Add hero demo video
- [ ] Add 4 platform tab videos/gifs
- [ ] Add 4 video gallery demos
- [ ] Add 3 animated feature GIFs
- [ ] Update all `src` props in components
- [ ] Compress all media files
- [ ] Test on localhost
- [ ] Verify accessibility (alt text)
- [ ] Test loading performance
- [ ] Deploy and verify on production

## 📝 Current Files to Update

1. `src/components/sections/HeroSection.tsx` - Line ~54
2. `src/components/sections/TabbedPlatform.tsx` - Lines 36, 50, 64, 78
3. `src/components/sections/VideoGallery.tsx` - Lines 17-52 (4 videos)
4. `src/components/sections/AnimatedFeatures.tsx` - Lines 18, 24, 30

Total media files needed: **12 videos/GIFs** to fill all placeholders.

---

**Need help?** The MediaPlaceholder component will show a styled placeholder until you add real media, so your site looks professional even without files yet!
