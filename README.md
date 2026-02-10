# 🌈 Pastel Rainbow Color Scheme

Your portfolio now features a beautiful, accessible pastel rainbow color palette!

## Color Palette

### The 7 Rainbow Colors (Accessibility Improved!)

**Light Mode:**
- 🌸 **Rose** - `#FF85C0` - Vibrant pastel pink
- 🍑 **Coral** - `#FF9980` - Vibrant pastel coral
- ☀️ **Sunny** - `#FFC947` - Vibrant pastel yellow
- 🌿 **Mint** - `#5DD6A5` - Vibrant pastel mint
- 🌤️ **Sky** - `#66B8FF` - Vibrant pastel sky blue
- 💜 **Lavender** - `#A380FF` - Vibrant pastel lavender
- 🦄 **Violet** - `#D966FF` - Vibrant pastel violet

**Dark Mode:**
- 🌸 **Rose** - `#FFB0DC`
- 🍑 **Coral** - `#FFBBA8`
- ☀️ **Sunny** - `#FFD875`
- 🌿 **Mint** - `#7FE8C0`
- 🌤️ **Sky** - `#8FCCFF`
- 💜 **Lavender** - `#BFA8FF`
- 🦄 **Violet** - `#E68FFF`

## What's Been Updated

### ✨ Core Color System
- **Holographic Gradient**: Now flows through all 7 rainbow colors (rose → coral → sunny → mint → sky → lavender → violet)
- **Subtle Gradients**: Updated to use pastel rainbow at low opacity
- **Accent Colors**: Primary accent is mint, secondary is rose

### 🎨 Component Updates

1. **Tech Stack Badges** - Automatically cycle through rainbow colors
2. **Badge Component** - 7 new color variants (rose, coral, sunny, mint, sky, lavender, violet)
3. **Flip Card Icons** - Gradient backgrounds using adjacent rainbow colors
4. **Semantic Colors** - Error (rose), Warning (sunny), Success (mint)

### 🌟 Where You'll See Rainbow Colors

- **Hero Name**: Holographic rainbow gradient text
- **Section Labels**: Rainbow gradient text
- **Tech Badges**: Each technology gets a different pastel color
- **Flip Cards**: Icon backgrounds blend two adjacent rainbow colors
- **Buttons**: Holographic borders with full rainbow spectrum
- **Hero Badge**: Subtle rainbow gradient background

## Usage

### Using Rainbow Badge Colors

```tsx
<Badge variant="rose">Pink Badge</Badge>
<Badge variant="coral">Peach Badge</Badge>
<Badge variant="sunny">Yellow Badge</Badge>
<Badge variant="mint">Mint Badge</Badge>
<Badge variant="sky">Sky Badge</Badge>
<Badge variant="lavender">Lavender Badge</Badge>
<Badge variant="violet">Violet Badge</Badge>
```

### Tech Stack with Rainbow Colors

```tsx
<TechStack 
  technologies={['React', 'TypeScript', 'SCSS']}
  rainbowColors={true}  // default: true
/>
```

### Flip Card Icon Colors

Available icon tone variants:
- `iconTone="rose"`
- `iconTone="coral"`
- `iconTone="sunny"`
- `iconTone="mint"`
- `iconTone="sky"`
- `iconTone="lavender"`
- `iconTone="violet"`

## Color Variables

All colors are available as SCSS variables:

```scss
// Light mode
$color-rose: #FF85C0;
$color-coral: #FF9980;
$color-sunny: #FFC947;
$color-mint: #5DD6A5;
$color-sky: #66B8FF;
$color-lavender: #A380FF;
$color-violet: #D966FF;

// Dark mode
$color-rose-dark: #FFB0DC;
$color-coral-dark: #FFBBA8;
// ... etc
```

## Gradients

```scss
// Full rainbow spectrum
$gradient-holographic: linear-gradient(
  135deg,
  $color-rose 0%,
  $color-coral 16.66%,
  $color-sunny 33.33%,
  $color-mint 50%,
  $color-sky 66.66%,
  $color-lavender 83.33%,
  $color-violet 100%
);
```

---

✨ Enjoy your beautiful pastel rainbow portfolio! ✨
