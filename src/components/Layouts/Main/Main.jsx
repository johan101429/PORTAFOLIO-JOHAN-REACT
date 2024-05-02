import './Main.css'
import { Subtitle_Main } from '../../UI/Subtitle_Main/Subtitle_Main'
import { Section } from "../../Section/Section";

export const Main = () => {
  return (
    <main className='main-page'>
      
      <section className='Perfil'>
        <Subtitle_Main content="Perfil" style={"Perfil"} />
      </section>
      <section className='Proyectos' >
        <Subtitle_Main content="Proyectos" style={"Perfil"} />
      </section>
      <section className='Referencias' >
        <Subtitle_Main content="Referencias" style={"Perfil"} />
      </section>
      <section className='Experiencias' >
        <Subtitle_Main content="Experiencias" style={"Perfil"} />
      </section>



    </main>
  )
}
