import type { Track } from '../types/track'
import './index.css'
type TrackItemProps = {
  track: Track
  selectedTrack: Track | null
  onTrackSelected: (track: Track) => void
}

export function TrackItem({
  track,
  selectedTrack,
  onTrackSelected,
}: TrackItemProps) {
  return (
    <li className='track'
      style={{
        borderColor: track.id == selectedTrack?.id ? 'orange' : '#c084fc',
      }}
    >
      <div
        onClick={() => onTrackSelected(track)}
        style={{ cursor: 'pointer' }}
      >
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls />
    </li>
  )
}
