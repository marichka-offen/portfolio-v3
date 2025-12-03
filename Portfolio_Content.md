# Portfolio Content - Marichka Offen

## About Me

I'm a front-end engineer who figures things out.

When something breaks in production — a filter that won't sync, a price that's calculating wrong, a third-party integration behaving unpredictably — I'm the person who traces it back through Liquid, JavaScript, and SCSS until I find the source. I reverse-engineer existing code, whiteboard it out, dig through past tickets, and piece together a solution. Colleagues have called me the "detective" when something puzzling surfaces. I take that as a compliment.

I've spent the last 2.5 years building e-commerce experiences on Shopify — redesigning product pages, migrating content systems, integrating subscriptions, fixing accessibility gaps. Before that, I worked in Vue, React, and full-stack .NET. I'm comfortable across the front-end stack and learn what I need to learn when I need to learn it.

I care about writing code that's easy to understand, broken into reusable pieces, and fails gracefully when something unexpected comes through. I also care about the people using it — whether that's the customer trying to check out or the next developer who has to maintain what I built.

I'm good at explaining technical tradeoffs to non-technical people. When a designer hands me something that won't work — a timeline issue, an accessibility problem, a feature that'll break on mobile — I don't just say no. I come back with an alternative and walk through the reasoning. We figure it out together.

Right now, I'm looking for a role where I can contribute without needing constant oversight. If I don't know something, I'll go find the answer. If something's broken, I'll fix it. If a project is waiting on a blocker, I'll move to the next piece of work instead of sitting idle. I work fast, I work clean, and I care about getting it right.

I also volunteer as a developer and project manager for Nova Ukraine, a nonprofit supporting humanitarian relief during the war. It's my responsibility, and I show up.

If you need someone reliable, collaborative, and genuinely invested in the work — let's talk.

---

## Featured Projects (Full Case Studies)

### 1. Stumptown Coffee Roasters

**Role:** Front-End Engineer (contract via SDG)

**Timeline:** 2024–2025 (~80 hours for PLP redesign alone; additional work on PDP, footer, blog)

**Technologies:** Vue 3, Vanilla JS, Liquid, SCSS, Shopify APIs, Shopify Search & Discovery

**Status:** Live at [stumptown.com](https://www.stumptowncoffee.com)

---

#### The Problem

Stumptown came to us with a full site redesign in Figma and a migration in progress: they were moving from Contentful (a headless CMS) to managing all content directly in Shopify. The existing storefront had a Vue-powered product listing page, but it was wired to Searchspring, a third-party search tool they were discontinuing.

The goals were:
- Redesign the product listing page, product detail page, footer, and blog to match the new visual direction
- Replace Searchspring with Shopify's native Search & Discovery system
- Migrate structured content from Contentful into Shopify in a way that non-technical users could maintain going forward

I was responsible for everything except the header.

---

#### What Made This Hard

**1. Learning Shopify's native filtering on the fly**

I'd never integrated Shopify's Search & Discovery before. The previous setup used Searchspring, which had a totally different API and data structure. I spent a day reading documentation, reverse-engineering similar projects, and troubleshooting how to feed Shopify's filter data into the existing Vue app without breaking the layout or interactions.

**2. Syncing product state across multiple UI elements — especially for gift subscriptions**

On the product detail page, the price and selected variant had to stay in sync across:
- The main product info (under the title)
- The add-to-cart button
- The sticky bar that appears when you scroll past the ATC button

Each of those had different conditions affecting the price: quantity, variant selection, one-time purchase vs. subscription.

The trickiest case was the **gift subscription template**. Unlike a normal subscription (where users pay monthly for recurring deliveries), gift subscriptions were structured as products: customers paid the full price upfront for 3, 6, or 12 months of coffee.

But within each subscription product, users also selected:
- Which coffee bundle (configured as variants)
- How many bags per month

So a "3-month subscription" wasn't just a product — it was a product *and* a subscription configuration at the same time. The final price was `bag price × bags per month × number of months`, and all of those values had to stay synced across the UI as the user made selections.

I extended the existing PDP template to handle this, using session storage to persist user selections across page reloads. The logic was complicated enough that I had to work closely with the client to troubleshoot their OrderGroove setup, which was initially configured incorrectly and blocking my progress.

**3. Making the Contentful migration maintainable**

In Contentful, the client had been working with user-friendly inputs — clean fields for text, images, and structured data. In Shopify, that same data came through as a giant JSON object in a metafield.

Other clients were fine editing JSON directly. Stumptown wasn't. So instead of dumping everything into a single metafield, I broke it into Shopify metaobjects — individual, labeled fields that could be edited through Shopify's admin UI without touching code.

This created friction with our backend engineer, who would've had an easier time migrating one big JSON blob. I documented the entire mapping for him (which JSON value went to which metaobject/metafield) and wrote onboarding docs for the client so they'd know how to update content going forward.

**4. Collaborating around constraints**

The designs included a custom calendar component. I pushed back — it wasn't feasible in the timeline and would've been a nightmare for accessibility. We agreed on the browser-native date picker instead.

I also coordinated closely with another developer working on the search page, which shared the same layout as the product listing page. We sequenced our work to avoid merge conflicts.

---

#### What I Built

- **Redesigned product listing page** with Shopify-native filtering and sorting, replacing Searchspring entirely
- **Rebuilt product detail page** with synced pricing, variant selection, and sticky add-to-cart behavior
- **Extended PDP template for gift subscriptions** with complex multi-variant pricing logic
- **Refactored the Vue app** into cleaner, more maintainable components
- **Migrated Contentful data structure** into Shopify metaobjects with full documentation for the client and backend team
- **Redesigned footer and blog templates** to match new brand direction

---

#### What I'd Do Differently

Better component naming and file organization from the start. I cleaned things up as I went, but I could've been more intentional about structure early on.

---

#### What You Can See

The site is live at [stumptown.com](https://www.stumptowncoffee.com). The product listing, product detail, and footer are all work I contributed to.

---

### 2. Prefect — UI Library, Design System, and Data Visualization

**Role:** Front-End Engineer

**Timeline:** November 2021 – March 2023

**Technologies:** Vue 3 (Composition API), TypeScript, D3.js, Tailwind CSS, Vite

**Status:** Live and open source

---

#### The Problem

Prefect was building version 2.0 of their workflow orchestration platform — a complete rebuild, not just an update. They were also spinning up Prefect Cloud, a team-based version of the tool that would run online instead of locally.

Both products needed a frontend built from scratch. The existing design system from version 1 wasn't going to work. A few months before launch, leadership decided to start over entirely with a new design system and UI library.

I was brought on to help build the UI from the ground up alongside a small team of engineers and designers. We had tight deadlines, shifting requirements, and no existing component library to lean on. We had to invent the system as we built the product.

---

#### What Made This Hard

**1. Building a data visualization component with no design**

One of the early asks was a scatter plot to visualize workflow runs — when they started, how long they ran, what their status was. There was no Figma file. The CEO sketched an idea on paper and showed us a few reference screenshots from the web.

I'd never worked with D3 before. I had to figure out how to:
- Position dots based on time and duration
- Color them by status
- Make the component data-agnostic, so it could handle any input (Prefect's workflow data or completely unrelated datasets)

I spent time reading D3 docs, experimenting, breaking things, and eventually built a working scatter plot that became part of the Vue Charts library.

**2. Starting the design system from scratch, late**

Originally, we were using design tokens from Prefect's old design system. A few months before launch, leadership decided it wasn't working and greenlit a full redesign.

We built **Prefect Design** (the token system) and **Prefect UI Library** (the Vue components) in parallel, under deadline pressure. We had to coordinate across the team to make sure tokens, components, and product features all aligned without blocking each other's work.

**3. Writing TypeScript interfaces from scratch**

This was my first fully TypeScript project from the ground up. We had the freedom to define our own interfaces and types, which meant we also had the responsibility to make sure they worked together cleanly across components, props, and API responses.

**4. Working with shifting priorities**

Startup life. Features changed. Designs evolved mid-sprint. We adapted and kept shipping.

---

#### What I Built

- **Scatter plot component** in Vue Charts, integrating D3 to visualize workflow timing and status
- **Toast notification system** — designed through team discussion, implemented and refined based on feedback
- **Layout components** and various UI primitives for the component library
- **TypeScript types and interfaces** to support prop validation and developer experience
- **Onboarding guide for new engineers** explaining how to set up Prefect locally, run test flows, spawn mock data, and understand core concepts (flows, tasks, runs, states) without needing to read the entire official documentation first

I also contributed to establishing the component structure and coding patterns the team used going forward.

---

#### What Happened

Prefect 2.0 and Prefect Cloud launched on schedule. The UI library, design system, and charts library are all still live, public, and actively maintained. The product being sold today is built on the foundation we created.

I consistently completed sprint work faster than expected — often finishing features 2-3x ahead of the estimated timeline without cutting corners.

---

#### What I Learned

Building a design system and component library from scratch taught me how to think in systems, not just features. You can't just solve the problem in front of you — you have to solve it in a way that works for the next ten problems too.

I also learned how to work with ambiguity. When you don't have a clear spec or a finished design, you have to make decisions, communicate tradeoffs, and ship something that works well enough to iterate on.

---

#### What You Can See

- [Prefect UI Library](https://prefect-ui-library.netlify.app/) (live, public)
- [Prefect Design](https://prefect-design.netlify.app/) (design system documentation)
- [Vue Charts](https://prefect-vue-charts.netlify.app/scatter-plot) (scatter plot demo)
- [Prefect on GitHub](https://github.com/PrefectHQ) (open source)

---

## Lightweight Project Descriptions

### Framebridge

**Summary:**  
Built a new Shopify storefront from Figma designs as part of a full site launch. Created reusable, animated sections for product pages, collections, and marketing content. This was my first Shopify project — I learned the platform while implementing interactive designs with custom animations.

**Role:** Front-End Engineer, Shopify  
**Timeline:** 2023 (3 months intensive, then ongoing maintenance)  
**Status:** Live  
**Technologies:** Shopify, Liquid, JavaScript, SCSS, Vue  
**Categories:** E-Commerce, Shopify Development  
**Demo URL:** https://www.framebridge.com/

---

### Paper Source

**Summary:**  
Migrated Paper Source's site from a legacy platform to Shopify, recreating existing functionality while implementing client-requested updates. Integrated Swym wishlist functionality and configured it to match brand styling. Built flexible sections aligned with their seasonal merchandising calendar.

**Role:** Shopify Front-End Developer  
**Timeline:** 2025 (~6 months, shared focus)  
**Status:** Live  
**Technologies:** Shopify, Liquid, JavaScript, SCSS  
**Categories:** E-Commerce, Platform Migration, Third-Party Integration  
**Demo URL:** https://www.papersource.com

---

### Rare Beauty

**Summary:**  
Built campaign landing pages from design files for product launches. Led accessibility remediation work based on Level Access audit findings, implementing WCAG compliance updates across the site to achieve accessibility certification.

**Role:** Front-End Engineer, Shopify  
**Timeline:** 2024-2025 (campaign work + 3 accessibility sprints, ~16 hours each)  
**Status:** Live  
**Technologies:** Shopify, Liquid, JavaScript, SCSS  
**Categories:** E-Commerce, Accessibility, Campaign Development  
**Demo URL:** https://www.rarebeauty.com

---

### Haus Labs

**Summary:**  
Diagnosed and resolved major performance issues on the product detail page, improving Lighthouse scores by identifying inefficient shade loading (51 variants loading simultaneously above the fold). Built new sections including cross-sell carousels and award displays. Created template variations to support A/B testing workflows.

**Role:** Front-End Engineer  
**Timeline:** 2024 (ongoing throughout SDG tenure)  
**Status:** Live  
**Technologies:** Shopify, Liquid, JavaScript, SCSS, Shopify API  
**Categories:** Performance Optimization, E-Commerce  
**Demo URL:** https://www.hauslabs.com/

---

### Peet's Coffee

**Summary:**  
Rebuilt the navigation system with an accessible mega menu and integrated search functionality. Configured Shopify's admin (metafields, metaobjects, navigation settings) to make menu updates intuitive for non-technical users. Ensured full keyboard navigation and screen reader compatibility.

**Role:** Front-End Engineer  
**Timeline:** 2024-2025 (~1 week intensive, plus ongoing fixes)  
**Status:** Live  
**Technologies:** Shopify, Liquid, JavaScript, SCSS, Shopify Admin  
**Categories:** Accessibility, Navigation Systems, E-Commerce  
**Demo URL:** https://www.peets.com

---

### Nova Ukraine

**Summary:**  
Volunteer web developer and project manager for a nonprofit supporting humanitarian relief during the war in Ukraine. Built employee portal (Wix) and collaborative project site (WordPress). Currently leading content audit and site redesign planning, coordinating with volunteer designers to preserve essential information while modernizing the experience.

**Role:** Volunteer Front-End Developer & Project Manager  
**Timeline:** January 2025 – Present  
**Status:** Ongoing  
**Technologies:** Wix, WordPress, Figma, Asana  
**Categories:** Nonprofit, Project Management, Content Strategy  
**Demo URL:** https://www.novaukraine.org

---

## Client Logo Strip

### Companies I've Worked With:

- Leatherology x
- Elizabeth Arden x
- Dermaflash x
- Filson x
- Shinola x
- Barnes & Noble x
- Indigo x
- Coverstore --
- BR Home x
- Glossier x
- Birdies x
- Magic Spoon x
- Psycho Bunny x
- MoMA x 
- Intelligentsia x
- Baublebar x

*Each logo links to the live company website*

---

## Notes on Project Documentation

**For all projects mentioned:**
- Thorough QA documentation provided in staging and production environments
- Clear hand-off documentation for clients and team members
- Testing across devices and browsers before deployment

**Portfolio Strategy:**
- Featured case studies (Stumptown, Prefect) show depth of thinking and problem-solving
- Lightweight descriptions show breadth of experience
- Client logo strip demonstrates volume of professional work without forcing detailed documentation of every project
