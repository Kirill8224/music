import { useState, useEffect } from 'react'
import { TrackItem } from './TrackItem'
//import { useTracks } from './bll/useTracks'
import { GetTrackList } from '../dal/api'
import type { Track } from '../types/track'
type TrackListProps = {
  selectedTrack: Track | null
  onTrackSelected: (track: Track) => void
}

export function TrackList({ selectedTrack, onTrackSelected }: TrackListProps) {
  const [tracks, setTracks] = useState<Track[] | null>(null) // Добавили типизацию для TypeScript

  useEffect(() => {
    GetTrackList().then((res) => setTracks(res.data))
  }, [])

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>No tracks</span>
      </div>
    )
  }

  return (
    <div>
      <h1>Musicfun</h1>
      <div style={{ display: 'flex' }}>
        <ul>
          {tracks.map((t) => (
            <TrackItem
              key={t.id}
              track={t}
              selectedTrack={selectedTrack}
              onTrackSelected={onTrackSelected}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
