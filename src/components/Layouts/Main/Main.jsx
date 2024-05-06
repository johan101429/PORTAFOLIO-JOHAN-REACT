import './Main.css'
import { Subtitle_Main } from '../../UI/Subtitle_Main/Subtitle_Main'
import { Section } from "../../Section/Section";
import { Proyectos } from '../../UI/Proyectos/Proyectos';
import { Card } from '../../UI/Card/Card';
import { Experiencias } from '../../UI/Experiencias/Experiencias';
import main from '../../../assets/imagen/main/proyectos.png';








export const Main = () => {
  return (
    <main className='main-page'>

      <Section className='Datos'>
        <Subtitle_Main content="Perfil" style={"Perfil"} />
        <p>Desarrollador con experiencia en el uso de diversos lenguajes de programación para la creación de aplicaciones web y móviles. Poseo sólidas habilidades para la solución de problemas, la colaboración y el aprendizaje continuo</p>
      </Section>

      <Section className='Proyectos' >
        <Subtitle_Main content="Proyectos" style={"Perfil"} />
        <div className='div-Card'>
        <Card image={main} title=" React" description=" lorem "/>
        <Card image={main} title=" React" description=" lorem " />
        <Card image={main} title=" React" description=" lorem " />
        <Card image={main} title=" React" description=" lorem " />
        </div>
      </Section>

      <div className='Referencias'>
       <div className='Ref'> <Subtitle_Main content="Referencias" style={"Perfils"} /> </div> 
        <div className='container-proyectos'>
        <Proyectos/>
        <Proyectos/>
        <Proyectos/>
        </div>

      </div>
      

      <Section className='Experiencias' >
       <div className='Exp'> <Subtitle_Main content="Experiencias" style={"Perfil"} /></div> 
        <div className='TiposExperiencias'>
        <Experiencias title="JAVA" description=""/>
        <Experiencias title="PHYTON"description=""/>
        <Experiencias title='JAVASCRIPT' description=''/>
        <Experiencias title='JAVASCRIPT' description=''/>
        </div>
      </Section>



    </main>
  )
}
