import { Banner, ThumbnailPlayList, TitlePlayList } from "./style"
import { CiMusicNote1 } from "react-icons/ci";

export const BannerPlayList = () => {
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
                    <h1>Minha Playlist n°1</h1>

                    <span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consequuntur sed natus eum deserunt beatae sequi quas dolore sapiente doloremque quae ipsam.</p>
                    </span>

                    <span>
                        <p>• 8 músicas, 23min 32s</p>
                    </span>
                </TitlePlayList>
            </div>
        </Banner>
    )
}
