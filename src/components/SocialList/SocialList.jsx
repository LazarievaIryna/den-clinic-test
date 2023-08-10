import instagramIcon from '../../img/ant-design_instagram-filled.svg'
import telegramIcon from '../../img/akar-icons_telegram-fill.svg'
import youtubeIcon from '../../img/ri_youtube-fill.svg'
import { SochialList, SocialLink } from './SocialList.styled'


export const SocialList=()=>{
    return (
        <SochialList>
                    <li>
                    <a  href="https://www.instagram.com/" target="_blank"
                  rel="noopener noreferrer nofollow"> 
                    <SocialLink src={instagramIcon} alt="instagramIcon" fill/>
                  </a>
                    </li>
                    <li>
                    <a  href="https://desktop.telegram.org/?setln=en" target="_blank"
                  rel="noopener noreferrer nofollow"> 
                    <img src={telegramIcon} alt="telegramIcon"/>
                  </a>
                    </li>
                    <li>
                    <a  href="https://www.youtube.com/" target="_blank"
                  rel="noopener noreferrer nofollow"> 
                    <img src={youtubeIcon} alt="youtubeIcon"/>
                  </a>
                    </li>
                  </SochialList>
    )
}