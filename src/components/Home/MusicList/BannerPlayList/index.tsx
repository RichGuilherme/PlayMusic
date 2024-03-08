import axiosInstancia from "../../../../api/axiosConfig";
import * as S from "./style"
import { CiMusicNote1 } from "react-icons/ci";
import useAxios from "../../../../hooks/useAxios";
import { sumDuration } from "../../../../utils/SecondForMin";
import { useParams } from "react-router-dom";

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

    const { data: description } = useAxios<Description>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `http://localhost:4000/playlist/list/${IdPlaylist}`
    })

    const { data: playlistDuration } = useAxios<DurationMusics>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `http://localhost:4000/playlist/duration/${IdPlaylist}`
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
