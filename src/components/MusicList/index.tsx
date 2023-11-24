import { BannerPlayList, MainViewContainer, ThumbnailPlayList } from "./style"
import { IoMusicalNotesOutline } from "react-icons/io5";

export const MusicList = () => {
  return (
    <MainViewContainer>
      <BannerPlayList>
        <div></div>
        <ThumbnailPlayList>
          <button>
            <IoMusicalNotesOutline />
          </button>
        </ThumbnailPlayList>

        <div>
          <h1>Minha Playlist n°1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consequuntur sed natus eum deserunt beatae sequi quas dolore sapiente doloremque quae ipsam.</p>
        </div>
      </BannerPlayList>


    </MainViewContainer>

  )
}
