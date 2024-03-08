import { LuHeart } from "react-icons/lu";
import * as S from "./style"
import { Play } from "./Play";
import { useEffect, useState } from "react";
import { SlVolume1, SlVolume2, SlVolumeOff} from "react-icons/sl";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";


export const PlayComponent = () => {
  const [volume, setVolume] = useState(50)
  const [mute, setMute] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const {
    activeSong,
    currentIndex,
    currentSongs,
    isActive,
    isPlaying } = useSelector((state: RootState) => state.player)


  useEffect(() => {
    if (activeSong && activeSong.thumbnail) {
      setImageUrl(activeSong.thumbnail)

    }
  }, [activeSong, currentSongs])


  const handleMute = () => {
    if (!mute) {
      setMute(true)
      setVolume(0)
    } else {

      setMute(false)
      setVolume(50)
    }
  }

  return (
    <S.ContainerControlles>
      {activeSong !== null && isActive ?
        <S.MusicDetails>
          <img src={imageUrl} alt="image" />

          <div>
            <h1>{activeSong?.title}</h1>
            <p>{activeSong?.artist}</p>
          </div>

          <LuHeart size={21} />
        </S.MusicDetails>
        :
        <S.VoidDetails></S.VoidDetails>
      }

      <Play
        volumeProps={volume}
        muted={mute}
        isPlaying={isPlaying}
        currentIndex={currentIndex}
        currentSongs={currentSongs}
        music={activeSong?.storage_url}
        duration={activeSong?.duration} />

      <S.Volume>
        <div onClick={() => handleMute()}>
          {mute ?
            <SlVolumeOff size={25} /> :
            volume >= 50 ?
              <SlVolume2 size={25} /> 
              :
              <SlVolume1 size={25}/>
          }
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </S.Volume>
    </S.ContainerControlles>
  )
}
