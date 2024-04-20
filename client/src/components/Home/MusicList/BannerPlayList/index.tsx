import axiosInstancia from "../../../../api/axiosConfig";
import * as S from "./style"
import { CiMusicNote1 } from "react-icons/ci";

import { sumDuration } from "../../../../utils/SecondForMin";
import { useParams } from "react-router-dom";
import useApiHook from "../../../../hooks/useAxios";


interface Description {
    title: string
    descriptionPlaylist: string
    thumbnailUrl: string
}

interface DurationMusics {
    sumMusics: number
    sumDurations: number
}

export const BannerPlayList = () => {
    const { IdPlaylist } = useParams()

    const { data: description } = useApiHook <Description>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `playlist/list/${IdPlaylist}`
    })

    const { data: playlistDuration } = useApiHook <DurationMusics>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `playlist/duration/${IdPlaylist}`
    })


    return (
        <S.Banner>
            <div></div>

            <S.BannerContainer>
                <S.ThumbnailPlayList>
                    <button>
                        <CiMusicNote1 />
                    </button>
                </S.ThumbnailPlayList>

                <S.TitlePlayList>
                    <h1>{description?.title}</h1>

                    <span>
                        <p>{description?.descriptionPlaylist}</p>
                    </span>

                    <span>
                        <p>{`• ${playlistDuration?.sumMusics} músicas, ${sumDuration(playlistDuration?.sumDurations)}`}</p>
                    </span>
                </S.TitlePlayList>
            </S.BannerContainer>
        </S.Banner>
    )
}
