import './Subtitle_Main.css'
import { GrAd } from "react-icons/gr";

export const Subtitle_Main = ({content, style}) => <li><GrAd className='Perfil'/><a className={style} href="">{content}</a></li>