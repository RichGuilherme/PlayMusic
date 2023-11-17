import { RefObject, useEffect, useRef, useState } from "react"
import { ContainerTimeMusic, ProgressBar, Times } from "./style";

type TimeMusicProps = {
    audioPlayRef: RefObject<HTMLAudioElement>;
}

export const TimeMusic = ({ audioPlayRef }: TimeMusicProps) => {
    const [progress, setProgress] = useState<number | undefined>(1)
    const [startTime, setStartTime] = useState<string>("0:00")
    const [durationAudio, setDurationAudio] = useState<string>("0:00")


    const progressBarRef = useRef<HTMLDivElement>(null)

    const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current) {
          const clickedPosition = event.nativeEvent.offsetX

          const progressBarWidth = progressBarRef.current.clientWidth
          const clickedPercentage = (clickedPosition / progressBarWidth) * 100
    
          setProgress(clickedPercentage) 

          if (audioPlayRef.current) {
            const newTime = (clickedPercentage / 100) * audioPlayRef.current.duration
            audioPlayRef.current.currentTime = newTime
          }
        }
      }
    

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(Math.floor(((audioPlayRef.current?.currentTime || 0) / (audioPlayRef.current?.duration || 0)) * 100))

            const currentTime = Math.floor(audioPlayRef?.current?.currentTime || 0)
            const duration = Math.floor(audioPlayRef?.current?.duration || 0)

            const secondForMin = (second = 0) => {
                const campoMinutos = String(Math.floor(second / 60))
                let campoSegundos = String(second % 60)
                
                if (Number(campoSegundos) < 10) {
                    campoSegundos = '0' + campoSegundos
                }

                return campoMinutos + ':' + campoSegundos
            }

            setDurationAudio(secondForMin(duration))
            setStartTime(secondForMin(currentTime))
        }, 1000)


        return () => clearInterval(interval)
    }, [audioPlayRef])


    return (
        <ContainerTimeMusic>
            <Times>
                <span >{startTime ? startTime : "0:00"}</span>

                <ProgressBar
                 ref={progressBarRef}
                 onClick={handleProgressBarClick}
                >
                    <div style={{ width: `${progress + "%"}` }} ></div>
                </ProgressBar>

                <span >{durationAudio}</span>
            </Times>
        </ContainerTimeMusic>

    )
}
