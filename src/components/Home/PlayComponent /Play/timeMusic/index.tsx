import { RefObject, useEffect, useRef, useState } from "react"
import * as S from "./style";
import { SecondForMin } from "../../../../../utils/SecondForMin";

type TimeMusicProps = {
    audioPlayRef: RefObject<HTMLAudioElement>
    durationAudio: number
}

export const TimeMusic = ({ audioPlayRef, durationAudio }: TimeMusicProps) => {
    const [progress, setProgress] = useState<number>(1)
    const [startTime, setStartTime] = useState<string>("0:00")

    const progressBarRef = useRef<HTMLDivElement>(null)

    // Com um clique na barra de progresso da música, alterar o progresso da música.
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

            setStartTime(SecondForMin(currentTime))
        }, 1000)


        return () => clearInterval(interval)
    }, [audioPlayRef])

    useEffect(() => {
        setProgress(0)
        setStartTime("0:00")
    }, [durationAudio])


    return (
        <S.ContainerTimeMusic>
            <S.Times>
                <span >{startTime ? startTime : "0:00"}</span>

                <S.ProgressBar
                    ref={progressBarRef}
                    onClick={handleProgressBarClick}>

                    <div style={{ width: `${progress + "%"}` }} ></div>
                </S.ProgressBar>

                <span >{SecondForMin(Math.floor(durationAudio || 0))}</span>
            </S.Times>
        </S.ContainerTimeMusic>

    )
}
