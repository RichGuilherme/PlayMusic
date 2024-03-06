import axiosInstancia from "../../../../api/axiosConfig";
import { Banner, ThumbnailPlayList, TitlePlayList } from "./style"
import { CiMusicNote1 } from "react-icons/ci";
import useAxios from "../../../../hooks/useAxios";
import { sumDuration } from "../../../../utils/SecondForMin";

interface Description {
    namePlayList: string
    descriptionPlaylist: string
    sumMusics: number
    sumDurations: number

}

export const BannerPlayList = () => {
    const { data: description } = useAxios<Description>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "http://localhost:4000/user/getDescritionPlaylist"
    })

    return (
        <Banner>
            <div></div>

            <div>
                <ThumbnailPlayList>
                    <button>
                        <CiMusicNote1 />
                    </button>
                </ThumbnailPlayList>

                <TitlePlayList>
                    <h1>{description?.namePlayList}</h1>

                    <span>
                        <p>{description?.descriptionPlaylist}</p>
                    </span>

                    <span>
                        <p>{`• ${description?.sumMusics} músicas, ${sumDuration(description?.sumDurations)}`}</p>
                    </span>
                </TitlePlayList>
            </div>
        </Banner>
    )
}
