import { useEffect, useRef, useState } from "react"
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiPauseCircle } from "react-icons/hi2";
import { MdPlayCircleFilled } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";

// import musica from "../../../../assets/a-ha - Take On Me (Official Video) [Remastered in 4K]_256k.mp3"

import { TimeMusic } from "./timeMusic"
import { ContainerPlay, ControlButtons } from "./style"

type PlayProps = {
    volumeProps: number
    muted: boolean
    music: string
}

export const Play = ({volumeProps, muted, music}: PlayProps) => {
    const audioPlayRef = useRef<HTMLAudioElement>(null)
    const [playing, setPlaying] = useState(false)
    const [loop, setLoop] = useState(false)
    const [musica, setMusica] = useState(`${music}`)

    useEffect(() => {
        if (audioPlayRef.current) {
            
          audioPlayRef.current.volume = volumeProps / 100  
        }
      }, [audioPlayRef, volumeProps]);
        

    useEffect(() => {
        if (playing) {
            audioPlayRef.current?.play()
        } else {
            audioPlayRef.current?.pause()
        }
    }, [playing])

    useEffect(() => {
        setMusica(music)
    },[music])

    return (
        <ContainerPlay>
            <ControlButtons>
                <button>
                    <HiOutlineSwitchHorizontal size={23} />
                </button>

                <button>
                    <FiChevronLeft size={23} />
                </button>

                <button onClick={() => setPlaying(!playing)}>
                    {playing ?
                        <HiPauseCircle

                            size={41} />
                        :
                        <MdPlayCircleFilled
                            size={41} />
                    }
                </button>

                <button>
                    <FiChevronRight size={23} />
                </button>

                <button
                    onClick={() => setLoop(!loop)}
                    style={{ color: `${loop ? "#ffff" : ""}` }}
                >

                    <LuRefreshCcw size={23} />
                </button>
            </ControlButtons>

            <TimeMusic audioPlayRef={audioPlayRef} />

            <audio
                src={musica}
                ref={audioPlayRef}
                loop={loop}
                muted={muted}>
            </audio>
        </ContainerPlay>

    )
}
