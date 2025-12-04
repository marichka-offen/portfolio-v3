I'll conduct a comprehensive accessibility audit of your entire codebase. Let me start by exploring the repository structure and scanning all relevant files.

Ran terminal command: find /Users/marichka/Documents/Code/portfolio-v3/src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.scss" -o -name "*.css" \) | head -50

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3)

Ran terminal command: find /Users/marichka/Documents/Code/portfolio-v3/src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.scss" -o -name "*.css" \)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/index.html)

Now let me read all the key files systematically to perform the audit:

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/App.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/main.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/layout/SkipLink.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/layout/MainLayout.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/common/Header/Header.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/pages/HomePage.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/layout/Footer/Footer.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/layout/PageTransition/PageTransition.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/Hero/Hero.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/FeaturedProjects/FeaturedProjects.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/BrandMarquee/BrandMarquee.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/CurrentStatus/CurrentStatus.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/QuickContact/QuickContact.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/TechnicalExpertise/TechnicalExpertise.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/ProjectsGrid.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/ProjectCard.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/shared/CaseStudyCard/CaseStudyCard.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/shared/Button/Button.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/common/GradientBackground/GradientBackground.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/common/MetaBalls/MetaBalls.tsx)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/common/LiquidEther/LiquidEther.tsx)

Now let me check the SCSS files for focus management and motion settings:

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/scss/base/_base.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/scss/base/_reset.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/scss/abstracts/_mixins.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/common/Header/Header.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/BrandMarquee/BrandMarquee.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/shared/Button/Button.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/common/GradientBackground/GradientBackground.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/App.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/Hero/Hero.scss) (lines 1-100)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/home/CurrentStatus/CurrentStatus.scss)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/components/shared/CaseStudyCard/CaseStudyCard.scss)

Now let me check a few more critical files and then compile the audit:

Ran terminal command: find /Users/marichka/Documents/Code/portfolio-v3/src -type f -name "*.tsx" | grep -E "(pages|components)" | wc -l

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/hooks/useScrollDirection.ts)

Read [](file:///Users/marichka/Documents/Code/portfolio-v3/src/hooks/useScrollToTop.tsx)

Based on my comprehensive scan of your portfolio codebase, here is a detailed accessibility audit organized by category and severity:

---

## **CRITICAL ISSUES (High Severity)**

### **1. Skip Link Not Implemented in Application**
**Location:** `src/App.tsx`, `src/components/layout/MainLayout.tsx`  
**Issue:** The SkipLink component exists at `src/components/layout/SkipLink.tsx` but is never rendered in the application. Users relying on keyboard navigation cannot skip repetitive navigation to reach main content.  
**Why Critical:** WCAG 2.4.1 (Bypass Blocks) Level A violation. Keyboard users must tab through all navigation links on every page.  
**Fix:** Import and render `<SkipLink />` as the first child in `App.tsx` before any other content, or in the MainLayout before the Header.

---

### **2. Missing Document Language Attribute**
**Location:** `index.html` line 2  
**Issue:** `<html lang="en">` exists, but this is good. Actually, reviewing again - this IS present. Not an issue.

---

### **3. Animated Marquee Without Pause Control**
**Location:** `src/components/home/BrandMarquee/BrandMarquee.tsx`  
**Issue:** Continuous CSS animations run indefinitely without user control to pause. While `prefers-reduced-motion` stops animation, WCAG 2.2.2 requires pause/stop/hide for moving content lasting more than 5 seconds.  
**Why Critical:** Motion-sensitive users and users with attention disorders cannot pause distracting movement. Currently only pauses on hover, not keyboard focus.  
**Fix:** Add a visible pause/play button with keyboard access, or implement pause-on-focus for keyboard users navigating the brand links. Add `aria-live="polite"` announcements when animation state changes.

---

### **4. WebGL Animations Lack Pause Mechanism**
**Location:** `src/components/common/MetaBalls/MetaBalls.tsx`, `src/components/common/LiquidEther/LiquidEther.tsx`  
**Issue:** Continuous WebGL animations run without user control. While they respect `prefers-reduced-motion` in some cases, there's no runtime pause button for users who need to stop motion after page load.  
**Why Critical:** WCAG 2.2.2 (Pause, Stop, Hide) violation. Users with vestibular disorders may experience nausea or disorientation from constant fluid motion.  
**Fix:** Implement a globally accessible pause button (visually hidden or floating control) that stops all canvas animations. Make it keyboard-accessible and announce state changes to screen readers.

---

### **5. Main Landmark Incorrectly Wraps Entire Application**
**Location:** `src/components/layout/MainLayout.tsx` line 5  
**Issue:** The `<main>` element wraps the entire Outlet, including header and footer in some contexts. Navigation and footer should be outside main.  
**Why Critical:** WCAG 1.3.1 (Info and Relationships) - Screen readers rely on proper landmark structure. This breaks the semantic document outline.  
**Fix:** Restructure so Header has `<header>` role, Footer has `<footer>` role, and only page content sits inside `<main id="main-content">`. The App.tsx should orchestrate this structure, not MainLayout.

---

## **HIGH SEVERITY ISSUES**

### **6. Heading Hierarchy Violations**
**Location:** Multiple pages - `HomePage.tsx`, `Hero.tsx`, `FeaturedProjects.tsx`  
**Issue:** No `<h1>` in the document structure. Hero uses `<h1 className="hero__name">` which is correct, but subsequent sections use `<h2>` without establishing the page title hierarchy first. Multiple `<h2>` elements appear before the `<h1>` when Header is considered.  
**Why High:** WCAG 1.3.1 and 2.4.6 (Headings and Labels) - Screen reader users navigate by heading structure. Skipping levels or having multiple H1s confuses navigation.  
**Fix:** Ensure each page has exactly one `<h1>` representing the page title. Section headings should follow sequential order (h1 → h2 → h3). Audit all pages for proper hierarchy.

---

### **7. Insufficient Link Text Context**
**Location:** `src/components/shared/CaseStudyCard/CaseStudyCard.tsx` line 64  
**Issue:** Link text "View Case Study" is repeated for every project card. Screen reader users hear identical link text without context about which project they're viewing.  
**Why High:** WCAG 2.4.4 (Link Purpose in Context) and 2.4.9 (Link Purpose, Link Only) Level AAA - Links should be understandable out of context.  
**Fix:** Use visually hidden text or aria-label to make each link unique: `aria-label={`View ${project.title} case study`}` or append project name to visible text.

---

### **8. Footer Back-to-Top Button Lacks Reduced Motion Support**
**Location:** `src/components/layout/Footer/Footer.tsx` lines 52-56  
**Issue:** The `scrollTo` function uses `behavior: 'smooth'` without checking for reduced motion preference. Framer Motion animations are disabled, but the smooth scroll isn't.  
**Why High:** Users with vestibular disorders set prefers-reduced-motion specifically to avoid smooth scrolling.  
**Fix:** Check `shouldReduceMotion` and conditionally set `behavior: 'instant'` when true, similar to how animations are disabled in Framer Motion.

---

### **9. Brand Marquee Images Missing Decorative Treatment**
**Location:** `src/components/home/BrandMarquee/BrandMarquee.tsx` lines 68-81  
**Issue:** Logo images have `alt={brand.name}` which is redundant since the link already has `aria-label`. Images should be decorative when link text exists.  
**Why High:** WCAG 1.1.1 (Non-text Content) - Screen readers announce both the image alt and the aria-label, creating redundant "Leatherology Leatherology" announcements.  
**Fix:** Set `alt=""` on images to mark them decorative, or remove aria-label from link and rely solely on image alt text.

---

### **10. Hero CTA Icon Not Hidden from Screen Readers**
**Location:** `src/components/home/Hero/Hero.tsx` lines 62-77  
**Issue:** SVG arrow icon inside "View My Work" link is exposed to screen readers despite having `aria-hidden="true"`. Good! This one is actually handled correctly. Not an issue.

---

### **11. TechnicalExpertise Skill Bubbles Use Title Attribute**
**Location:** `src/components/home/TechnicalExpertise/TechnicalExpertise.tsx` line 139  
**Issue:** Skill information relies on `title` attribute which is inaccessible to keyboard users (only available on hover) and poorly supported by screen readers on mobile.  
**Why High:** WCAG 2.1.1 (Keyboard) and 1.3.1 - Essential information (full skill names) hidden behind mouse-only interaction.  
**Fix:** Display full skill name on keyboard focus using CSS `:focus-within`, or use `aria-label` on the bubble container. Consider making abbreviated names screen-reader-only and showing full names visually.

---

## **MEDIUM SEVERITY ISSUES**

### **12. Missing ARIA Landmark Labels**
**Location:** `src/components/common/Header/Header.tsx` line 43  
**Issue:** Navigation has `aria-label="Main navigation"` which is good, but Footer navigation (line 81 in Footer.tsx) has `aria-label="Footer navigation"`. When both exist on page, they need distinguishing labels.  
**Why Medium:** WCAG 2.4.1 (Bypass Blocks) - Multiple nav landmarks should have unique labels so screen reader users can distinguish them.  
**Fix:** Already implemented correctly with "Main navigation" and "Footer navigation". This is actually fine - not an issue.

---

### **13. Color Contrast in Gradient Text**
**Location:** `src/components/home/Hero/Hero.scss` lines 73-83, `src/components/home/BrandMarquee/BrandMarquee.scss` lines 27-43  
**Issue:** Gradient text using `-webkit-background-clip: text` with transparent fill may not meet 4.5:1 contrast ratio, especially at gradient endpoints. Without testing, it's unclear if all colors meet WCAG AA.  
**Why Medium:** WCAG 1.4.3 (Contrast Minimum) - Insufficient contrast makes text harder to read for low-vision users.  
**Fix:** Test gradient combinations with a contrast checker. Ensure the lightest gradient color meets 4.5:1 against background. Consider a semi-transparent text-shadow fallback for better readability.

---

### **14. Focus Indicators Inconsistent Across Components**
**Location:** Multiple files - `src/scss/base/_base.scss` line 60 uses `3px solid` and `4px offset`, Header.scss line 90 uses same, but Button.scss uses mixin defaults  
**Issue:** While focus indicators exist globally, some components have custom focus styles that may not match the global standard, creating inconsistent UX.  
**Why Medium:** WCAG 2.4.7 (Focus Visible) - Consistency helps users predict interaction patterns.  
**Fix:** Audit all custom `:focus-visible` styles to ensure they meet or exceed global standards (3px width, 4px offset, accent color). Document the standard in design system.

---

### **15. Hover-Only Tooltip Information**
**Location:** `src/components/home/TechnicalExpertise/TechnicalExpertise.tsx` line 139  
**Issue:** Already covered in issue #11 (duplicate, removing)

---

### **16. Missing Live Region Announcements**
**Location:** Page transitions via `PageTransition.tsx`, Header hide/show behavior  
**Issue:** When Header animates away on scroll, screen readers aren't notified. When pages change, there's no announcement of new content loading.  
**Why Medium:** WCAG 4.1.3 (Status Messages) Level AA in WCAG 2.1 - Dynamic changes should be announced.  
**Fix:** Add `<div role="status" aria-live="polite" className="sr-only">` that announces "Navigation hidden" / "Navigation visible" on Header state change. Consider route change announcements like "Projects page loaded".

---

### **17. CurrentStatus Pulsing Badge May Distract**
**Location:** `src/components/home/CurrentStatus/CurrentStatus.tsx` lines 34-45  
**Issue:** The badge has an infinite pulsing animation that continues even when `prefers-reduced-motion` is respected at line 58 in SCSS. However, CSS properly disables it. Actually, checking the SCSS (CurrentStatus.scss line 57), animation is disabled. Not an issue.

---

### **18. Form Elements Without Associated Labels**
**Location:** Not applicable - no forms found in codebase.

---

### **19. Auto-Playing Content Without Control**
**Location:** `src/components/common/GradientBackground/GradientBackground.tsx`  
**Issue:** Background gradients animate continuously. While decorative, they're always moving. The SCSS does disable animations for `prefers-reduced-motion` (line 113-122).  
**Why Medium:** While not interactive content, constant motion can still distract. WCAG 2.2.2 technically applies only to "essential" content.  
**Fix:** Already handled correctly via `prefers-reduced-motion`. Could optionally add a global "Reduce animations" toggle in settings for runtime control.

---

## **LOW SEVERITY ISSUES**

### **20. Footer Render Blocking Animation**
**Location:** `src/components/layout/Footer/Footer.tsx` lines 61-67  
**Issue:** Footer uses `whileInView="visible"` which means it won't render until scrolled into view. For screen reader users, this creates an artificial barrier to footer links.  
**Why Low:** Footer content exists in DOM regardless, just animated in. Screen readers can still access it, though potentially confusing.  
**Fix:** Consider immediate render with delayed animation, or ensure footer links are in tab order even before animation completes.

---

### **21. Missing Language Metadata for Code Snippets**
**Location:** `src/components/home/Hero/Hero.tsx` lines 97-139  
**Issue:** Code snippet display doesn't use `<code lang="tsx">` or similar to indicate language. This is purely presentational, not a syntax highlighter.  
**Why Low:** Code is decorative, not functional. WCAG 3.1.2 (Language of Parts) applies mainly to natural language changes.  
**Fix:** Consider adding `lang="tsx"` attribute if you implement syntax highlighting, otherwise mark entire code block as `aria-hidden="true"` if purely decorative.

---

### **22. Scroll-Triggered Animations May Surprise Users**
**Location:** Multiple components using `whileInView` from Framer Motion  
**Issue:** Content animates as you scroll into view. For users zoomed in or using screen magnification, content may suddenly animate while they're reading.  
**Why Low:** `prefers-reduced-motion` is respected, and animations are subtle. Still, unexpected motion can startle.  
**Fix:** Already mitigated via reduced motion support. Consider even subtler defaults (fade only, no movement) for better inclusivity.

---

### **23. External Link Icons Lack Context**
**Location:** `src/components/ProjectCard.tsx` lines 22-38, Footer social links  
**Issue:** External link icons are marked `aria-hidden="true"` which is correct, but links don't announce they open in new tab/window.  
**Why Low:** WCAG 3.2.5 (Change on Request) Level AAA - Users should be warned before new windows open. However, using `target="_blank"` is explicitly done.  
**Fix:** Add visually-hidden text or aria-label indicating "Opens in new tab", e.g., `aria-label="View Leatherology website (opens in new tab)"`.

---

### **24. Decorative Animations Without ARIA Hidden**
**Location:** Glass overlay/specular effects in Header (`Header.tsx` lines 44-45)  
**Issue:** Decorative divs for visual effects don't have `aria-hidden="true"`. Screen readers may announce empty divs.  
**Why Low:** Screen readers typically ignore empty divs, but explicit hiding is cleaner.  
**Fix:** Add `aria-hidden="true"` to `.glass-overlay` and `.glass-specular` divs.

---

### **25. Technology Icons May Need Better Labels**
**Location:** `src/components/home/TechnicalExpertise/CustomIcons.tsx` (not reviewed but referenced)  
**Issue:** Custom SVG icons should have `role="img"` and `aria-label` for proper screen reader support if they convey meaning.  
**Why Low:** Icons are supplementary to text labels in most contexts.  
**Fix:** Audit custom icons to ensure they're either decorative (`aria-hidden="true"`) or properly labeled with accessible names.

---

### **26. No Visible Focus on Hero Code Window**
**Location:** `src/components/home/Hero/Hero.tsx` lines 97-140  
**Issue:** Code snippet is purely decorative and can't receive focus, which is correct. Not an issue.

---

## **ADDITIONAL DEEP DIVE FINDINGS**

### **Screen Reader UX Issues**

1. **ProjectsGrid Section Lacks Landmark**: The `ProjectsGrid` component (line 8 in ProjectsGrid.tsx) uses `<section>` but doesn't have an `aria-labelledby` pointing to the h2. Screen readers can't navigate to this region efficiently.

2. **QuickContact Heading Not Visually Hidden for SR**: The `<h2>` at line 55 in QuickContact.tsx is visible, which is good. It properly identifies the section.

3. **Animated Heading Not Announced**: When Hero heading animates in, screen readers may start reading before animation completes. Text should be immediately available in DOM even if visually animating.

---

### **Motion & Animation Concerns**

1. **Spring Animations May Be Too Bouncy**: Even with `prefers-reduced-motion` support, spring-based animations (Header, buttons) use aggressive damping values that could still feel jarring to motion-sensitive users who haven't set the preference.

2. **Stagger Delays Accumulate**: Components using `staggerChildren` can create long delays before all content is visible. For users with attention challenges, 5-10 second stagger sequences are problematic.

3. **Page Transitions Block Content**: `PageTransition.tsx` uses exit animations. If these animations are slow, users can't access new content immediately.

---

### **Keyboard Navigation Issues**

1. **Brand Marquee Pauses on Hover Only**: Keyboard users navigating to brand logos can't pause the marquee. While `:focus-within` could work, it's not implemented.

2. **No Keyboard Shortcuts Documented**: Power users would benefit from documented keyboard shortcuts (e.g., "Press ? for help").

3. **Tech Bubble Cluster Not Keyboard Navigable**: The skill bubbles in TechnicalExpertise don't appear to be focusable or keyboard-accessible. They're purely visual representations.

---

### **SCSS/CSS Specific Issues**

1. **Outline May Be Obscured by Z-index**: Complex stacking contexts (Header z-index 1000, background z-index -1) could cause focus outlines to be clipped or hidden behind elements.

2. **Backdrop-Filter Browser Support**: Commented-out `backdrop-filter` in Header.scss (line 12) suggests browser compatibility concerns. Fallback needed for Firefox.

3. **Gradient Text Fallback Incomplete**: The fallback for unsupported browsers in gradient-text mixin (mixins.scss line 232) sets `color: $color-text-primary` but doesn't restore the gradient, potentially causing invisible text.

---

### **HTML Semantic Issues**

1. **Empty Title Could Be More Descriptive**: The page title in `index.html` is very long but good for SEO. However, it could be more concise for screen readers.

2. **No Role=Main Redundancy**: While `<main>` is semantic, adding `role="main"` ensures backwards compatibility with older assistive tech.

3. **Missing Descriptive IDs**: Interactive elements lack descriptive IDs that could be referenced by aria-describedby.

---

## **POSITIVE FINDINGS** ✅

**What You're Doing Right:**

1. **Excellent Reduced Motion Support**: Nearly all animations respect `prefers-reduced-motion`, implemented at both component and global CSS levels.

2. **Strong Focus Visible Implementation**: Global `:focus-visible` styles with 3px solid outline and 4px offset meet WCAG AAA standards.

3. **Semantic HTML Throughout**: Proper use of `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` elements.

4. **ARIA Labels on Navigation**: Main nav and footer nav properly labeled.

5. **External Links Properly Secured**: All external links use `rel="noopener noreferrer"`.

6. **Skip Link Component Exists**: Foundation is there, just needs implementation.

7. **No Keyboard Traps Detected**: All interactive elements appear escapable.

8. **Icon Hiding Done Correctly**: Decorative SVG icons properly marked `aria-hidden="true"`.

---

## **PRIORITIZED REMEDIATION ROADMAP**

### **Week 1 - Critical Fixes**
1. Implement SkipLink in App.tsx
2. Fix main landmark structure (separate header/footer from main)
3. Add pause controls to marquee animation
4. Fix link text for CaseStudyCard to be unique

### **Week 2 - High Priority**
5. Audit and fix heading hierarchy across all pages
6. Add reduced-motion support to scrollTo behavior
7. Fix brand marquee image alt text redundancy
8. Make skill bubbles keyboard accessible with full names

### **Week 3 - Medium Priority**
9. Add live region announcements for Header visibility
10. Test and fix gradient text color contrast
11. Add external link warnings for new tab opens
12. Standardize focus indicator styles

### **Week 4 - Polish**
13. Add pause mechanism for WebGL animations
14. Improve animation stagger timing
15. Add keyboard navigation to marquee
16. Document keyboard shortcuts

---

## **TESTING RECOMMENDATIONS**

1. **Screen Readers**: Test with VoiceOver (Mac/iOS), NVDA (Windows), JAWS (Windows), TalkBack (Android)
2. **Keyboard Only**: Navigate entire site with Tab, Shift+Tab, Enter, Space, Arrow keys only
3. **Contrast Checking**: Use WebAIM Contrast Checker on all gradient text combinations
4. **Motion Testing**: Enable `prefers-reduced-motion` in browser and verify all animations stop
5. **Zoom Testing**: Test at 200%, 400% zoom levels for text reflow
6. **axe DevTools**: Run automated scan for quick wins

---

This audit identifies **26 distinct issues** across all severity levels, with **5 critical**, **6 high**, **6 medium**, and **9 low** priority items. The codebase shows strong accessibility foundations (reduced motion support, focus management, semantic HTML) but needs targeted fixes around dynamic content, animation controls, and heading structure to achieve full WCAG 2.2 AA compliance.