import './Main.css'
import { Subtitle_Main } from '../../UI/Subtitle_Main/Subtitle_Main'
import { Section } from "../../Section/Section";
import { Proyectos } from '../../UI/Proyectos/Proyectos';

export const Main = () => {
  return (
    <main className='main-page'>

      <Section className='Datos'>
        <Subtitle_Main content="Perfil" style={"Perfil"} />
        <p>Desarrollador con experiencia en el uso de diversos lenguajes de programación para la creación de aplicaciones web y móviles. Poseo sólidas habilidades para la solución de problemas, la colaboración y el aprendizaje continuo</p>
      </Section>
      <Section className='Proyectos' >
        <Subtitle_Main content="Proyectos" style={"Perfil"} />
        <Proyectos content="hola" clase={"info"} />




      </Section>
      <Section className='Referencias' >
        <Subtitle_Main content="Referencias" style={"Perfil"} />
      </Section>
      <Section className='Experiencias' >
        <Subtitle_Main content="Experiencias" style={"Perfil"} />
      </Section>



    </main>
  )
}
