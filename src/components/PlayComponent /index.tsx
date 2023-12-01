import { LuHeart } from "react-icons/lu";
import { ContainerControlles, MusicDetails, Volume } from "./style"
import { Play } from "./Play";
import { useState } from "react";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import imag from "../../assets/imageProfile.jpeg"

export const PlayComponent = () => {
  const [volume, setVolume] = useState(50)
  const [mute, setMute] = useState(false)

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
    <ContainerControlles>
      <MusicDetails>
        <img src={imag} alt="image" />

        <div>
          <h1>Arde Outra Vez</h1>
          <p>Thalles Roberto</p>
        </div>

        <LuHeart size={21}/>
      </MusicDetails>

      <Play volumeProps={volume} muted={mute} />

      <Volume>
        <div onClick={() => handleMute()}>
          {mute ?
            <SlVolumeOff
              size={25} />
            :
            <SlVolume2
              size={25} />
          }
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </Volume>
    </ContainerControlles>
  )
}
