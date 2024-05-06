import './Subtitle_Main.css'
import { GrAd } from "react-icons/gr";
import logo_Sena from '../../../assets/imagen/logo_Sena/logoSena.png'

export const Subtitle_Main = ({content, style,}) => <li><img src={logo_Sena}/><a className={style} href="">{content}</a></li>