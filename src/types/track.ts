export type Track = {
  id: string
  attributes: {
    title: string
    attachments: Array<{ url: string }>
  }
}

export type TrackDetail = {
  id: string
  attributes: {
    lyrics: string | null
    title: string
  }
}
