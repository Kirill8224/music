import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/index.css'
import { Headers } from './ui/Headers.tsx'
import { TrackList } from './ui/TrackList.tsx'
import { TrackDetails } from './ui/TrackDetails.tsx'
import type { Track } from './types/track.ts'

const rootEl = document.getElementById('root')
const ReactRoot = createRoot(rootEl!)
ReactRoot.render(<Baza />)

function Baza() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

  return (
    <div className='main'>
      <h1>музыкальный плеер</h1>
      <Headers />
      <button onClick={() => setSelectedTrack(null)}>reset selection</button>
      <div style={{ display: 'flex' }}>
        <TrackList
          selectedTrack={selectedTrack}
          onTrackSelected={setSelectedTrack}
        />
        <TrackDetails track={selectedTrack} />
      </div>
    </div>
  )
}
