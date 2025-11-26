import type { Project } from "@/types/project"

export const projects: Project[] = [
    {
        id: '1',
        name: '[PROJECT_NAME]',
        slug: 'project-slug',
        summary: '[ONE_LINE_SUMMARY]',
        role: '[YOUR_ROLE]',
        timeline: '[TIMELINE]',
        technologies: ['[TECH_1]', '[TECH_2]', '[TECH_3]'],
        featured: true,
        problem: '[PROBLEM_DESCRIPTION]',
        approach: [
            {
                decision: '[DECISION_1]',
                reasoning: '[REASONING_1]'
            }
        ],
        implementation: [
            {
                achievement: '[ACHIEVEMENT_1]',
                description: '[DESCRIPTION_1]'
            }
        ],
        outcomes: {
            metrics: ['[METRIC_1]'],
            learnings: ['[LEARNING_1]']
        },
        demoUrl: 'https://example.com',
        repoUrl: 'https://github.com/username/repo',
        isPrivate: false,
        technologiesByCategory: [
            {
                category: 'Frontend',
                technologies: ['[TECH_1]', '[TECH_2]']
            }
        ]
    }
    // Add more placeholder projects
]