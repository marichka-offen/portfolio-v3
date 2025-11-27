import ProfessionalSummary from '../components/about/ProfessionalSummary'
import WhatIDoBest from '../components/about/WhatIDoBest'
import TechnicalApproach from '../components/about/TechnicalApproach'
import ProfessionalBackground from '../components/about/ProfessionalBackground'
import BeyondTheCode from '../components/about/BeyondTheCode'
import CurrentlyExploring from '../components/about/CurrentlyExploring'
import Connect from '../components/about/Connect'
import PageTransition from '@/components/layout/PageTransition/PageTransition'

export default function AboutPage() {
    const competencies = [
        {
            skill: '[COMPETENCY_1]',
            context: '[OPTIONAL_CONTEXT_1]'
        },
        {
            skill: '[COMPETENCY_2]'
        },
        {
            skill: '[COMPETENCY_3]',
            context: '[OPTIONAL_CONTEXT_3]'
        }
    ]

    const roles = [
        {
            company: '[COMPANY_1]',
            role: '[ROLE_1]',
            period: '[TIME_PERIOD_1]',
            technologies: ['[TECH_1]', '[TECH_2]'],
            achievements: ['[ACHIEVEMENT_1]', '[ACHIEVEMENT_2]']
        }
    ]

    const activities = [
        {
            type: '[ACTIVITY_TYPE]',
            title: '[ACTIVITY_TITLE]',
            url: '[ACTIVITY_URL]'
        }
    ]

    const explorations = [
        {
            technology: '[TECH]',
            purpose: '[PURPOSE]'
        }
    ]

    return (
        <PageTransition>
            <h1>[PAGE_TITLE]</h1>
            <ProfessionalSummary />
            <WhatIDoBest competencies={competencies} />
            <TechnicalApproach />
            <ProfessionalBackground roles={roles} />
            <BeyondTheCode activities={activities} />
            <CurrentlyExploring explorations={explorations} />
            <Connect />
        </PageTransition>
    )
}