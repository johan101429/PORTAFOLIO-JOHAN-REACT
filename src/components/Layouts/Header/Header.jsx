import { Logo } from '../../UI/Logo/Logo'
import { Subtitle } from '../../UI/Subtitle/Subtitle'
import { Title } from '../../UI/Title/Title'
import './Header.css'
import { Footer } from '../Footer/Footer';
import header from '../../../assets/imagen/header/foto_perfil.png'


export const Header = () => {
  return (
    <header className='header-page'>
      <Logo imageUrl={header} />
      <Title />
      <Subtitle content="Perfil" />
      <Subtitle content="Proyectos" />
      <Subtitle content="Referencias" />
      <Subtitle content="Experiencia" />
      <Logo imageUrl="src\components\Layouts\Header\img\logoSena.png" />
      
      
        
      
    </header>
  )
}
