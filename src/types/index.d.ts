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
}

export interface DataPoint {
    [key: string]: number
}

export interface Tags {
    [key: string]: string[]
}