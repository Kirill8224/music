const API_KEY = 'fd817c12-1857-4bc3-9299-bedb266aad8c'

export function GetTrackDetail(trackId: string) {
  return fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    { headers: { 'api-key': API_KEY } },
  ).then((res) => res.json())
}

export function GetTrackList() {
  return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: { 'api-key': API_KEY },
  }).then((res) => res.json())
}
