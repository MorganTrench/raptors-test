export interface RawPostMetadata extends Record<string, string> {
    title: string
    date: string
    thumbnail: string
    text_preview: string
}

export interface PostMetadata {
    title: string
    date: Date
    thumbnail: string
    text_preview: string
}

export const convertRaw = (rawMetadata: RawPostMetadata): PostMetadata => {
    const { date: rawDate, ...remainingMetadata } = rawMetadata;
    return { ...remainingMetadata, date: new Date(rawDate) }
}