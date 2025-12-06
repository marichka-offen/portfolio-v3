interface JobData {
    title: string
    time: string
    position: string
    description: string
    tags: string[]
}

export const jobData: JobData[] = [
    {
        title: "Nova Ukraine",
        time: "May 2025 - Present",
        position: "Web Team Volunteer",
        description: "<p>At Nova Ukraine, I’m diving into the world of non-profits, building and maintaining web applications that help streamline operations and enhance user engagement.</p><p>It's been a rewarding experience to apply my front-end skills to support such a meaningful cause, ensuring that our digital presence effectively communicates our mission and facilitates donations and volunteer efforts.</p>",
        tags: ["WordPress", "PHP", "JavaScript", "Wix", "Figma"]
    },
    {
        title: "SDG",
        time: "June 2023 - October 2025",
        position: "Front End Developer",
        description: "<p>At SDG I basically lived in the world of Shopify, Vue, and “why is this Liquid code doing that?” I spent most days building components, fixing weird production bugs no one else could track down, and turning Figma files into real, responsive UI without making the designers cry.</p><p>I was also the person who would say, “hold on, something feels off,” then dig three layers deep through Liquid → JS → SCSS to find the real root of the problem. And because agency life is chaos, I also jumped in on QA, accessibility checks, and writing hand-off notes so the next engineer wouldn’t want to hunt me down.</p>",
        tags: ["Shopify", "Liquid", "JavaScript", 'React', 'Remix', "Typescript", "Vue 3", "SCSS", "Figma"]
    },
    {
        title: "Prefect",
        time: "November 2021 - March 2023",
        position: "Front End Developer",
        description: "<p>Prefect was a whole different vibe. I spent my days building actual product: reusable Vue 3 components, pages, workflows, and helping shape an in-house design system that people actually used.</p><p>A lot of my role was translating “complex data orchestration idea” into “a UI that doesn't scare users away.” I teamed up constantly with designers and PMs, wrote onboarding docs that made new hires sigh with relief, and somehow became the person who could deliver work twice as fast because I asked good questions up front instead of drowning later.</p><p>I also interviewed candidates, which taught me that engineers can be brilliant and panic at the same time.</p>",
        tags: ["Vue 3", "TypeScript", "SCSS", "Tailwind CSS", "Storybook", "Jest", "D3", "Figma"]
    },
    {
        title: "Carahsoft",
        time: "June 2020 - October 2021",
        position: "Software Engineer",
        description: "<p>Here I worked on internal tools used by more than a thousand people, so if I broke something, everyone knew instantly. I built pages, fixed performance issues, cleaned up old code, and generally tried to make the internal workflow apps less painful for employees.</p><p>This job taught me a lot about listening to non-technical teammates. Someone would say, “this workflow makes no sense,” and I’d dig in, make it cleaner, and ship something that made their daily life easier. I also contributed to their little in-house UI library, reusable components, consistent styling, all that good stuff.</p>",
        tags: ["C#", "ASP.NET", "PHP", "MySQL", "jQuery"]
    },
    {
        title: "National Academy of Sciences",
        time: "2020",
        position: "Data Associate (Temp)",
        description: "<p>This was part front-end work, part very serious data-caretaking. I updated their websites, built small tools, created HTML email templates, and managed a huge membership database that had to stay spotless.</p><p>Basically, it was my job to make sure everything looked right, worked right, and that nobody was missing from the directory because I fat-fingered a record. It taught me patience and attention to detail on a whole different level.</p>",
        tags: ["HTML", "CSS", "JavaScript", "SQL"]
    },
    {
        title: "Freelance Nomad",
        time: "2019",
        position: "Web Developer",
        description: "<p>Freelancing was my crash course in “do everything.” I coded small sites, talked directly with clients, translated their aesthetic preferences into actual UI, and wrote docs so they could maintain things after I handed it off.</p><p>It pushed me to develop my own taste, my own workflow, and honestly a lot of my independence as an engineer.</p>",
        tags: ["HTML", "CSS", "JavaScript", "React", "Vue"]
    },
    {
        title: "General Assembly",
        time: "2018",
        position: "Web Developer (Student)",
        description: "<p>This was the all-in sprint where I learned full-stack dev from scratch. Long days, lots of projects, hundreds of “why is this broken” moments. It gave me the foundation for everything I do now, from UI architecture to thinking about user experience.</p>",
        tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Python"]
    }
]
