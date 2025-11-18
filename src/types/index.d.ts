import type { Picture } from 'vite-imagetools'

export interface ProjectData {
    title: string,
    color: string,
    tags: string[],
    icon: string
}

export interface JobData {
    title: string
    time: string
    position: string
    description: string
    tags: string[]
}

export interface DataPoint {
    [key: string]: number
}

export interface Tags {
    [key: string]: string[]
}

export interface FactData {
    title: string
    description: string
    image: Picture
    tag: string
}
