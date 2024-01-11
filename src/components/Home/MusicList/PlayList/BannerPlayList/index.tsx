import axiosInstancia from "../../../../../api/axiosConfig";
import { Banner, ThumbnailPlayList, TitlePlayList } from "./style"
import { CiMusicNote1 } from "react-icons/ci";
import { useAxios } from "../../../../../hooks/useAxios";
import { sumDuration } from "../../../../../utils/SecondForMin";

export const BannerPlayList = () => {
    const [descritions, loading, error] = useAxios({
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
                    <h1>{descritions?.namePlayList}</h1>

                    <span>
                        <p>{descritions?.descritionPlaylist}</p>
                    </span>

                    <span>
                        <p>{`• ${descritions?.sumMusics} músicas, ${sumDuration(descritions?.sumDurations)}`}</p>
                    </span>
                </TitlePlayList>
            </div>
        </Banner>
    )
}
