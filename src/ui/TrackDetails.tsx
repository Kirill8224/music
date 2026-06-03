import { useState, useEffect } from 'react'
import { GetTrackDetail } from '../dal/api'
import './TrackDetail.css'
import type { Track, TrackDetail } from '../types/track'

type TrackDetailsProps = {
  track: Track | null
}

export function TrackDetails({ track: selectedTrack }: TrackDetailsProps) {
  const [track, setTrack] = useState<TrackDetail | null>(null)

  useEffect(() => {
    if (!selectedTrack) {
      setTrack(null)
      return
    }

    GetTrackDetail(selectedTrack.id).then((res) => setTrack(res.data))
  }, [selectedTrack])

  return (
    <div className='trackDetail'>
      <div>
        <h3>details</h3>
        <p>
          {selectedTrack === null
            ? 'no traks'
            : `номер трека: ${selectedTrack.id}`}
        </p>
        <p>
          {selectedTrack === null
            ? ''
            : `название трека: ${track?.attributes.title || 'загрузка...'}`}
        </p>
        <div>
          <h4>Lyrics</h4>
          <p>{track?.attributes.lyrics ?? 'текста нет '}</p>
        </div>
      </div>
    </div>
  )
}
