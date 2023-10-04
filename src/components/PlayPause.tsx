// import { HiPlay, HiPause } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Song } from '../typescript/SongType'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

interface SongType {
  song: Song
}
const PlayPause: React.FC<SongType>= ({song}): JSX.Element => {

  const {isPlaying, activeSong} = useSelector((state: RootState) => state.playerSlice)

  return (
    <div>
        {(isPlaying && activeSong.key === song.key) ? 
        <FaPauseCircle 
        size={35}
        className="text-gray-300"/> : 
        <FaPlayCircle 
        size={35}
        className="text-gray-300"/>}
    </div>
  )
}

export default PlayPause