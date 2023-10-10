import IndividuoContainer from '@/components/IndividuoContainer'
import React from 'react'

export const metadata = {
  title: 'Nosotros',
  description: 'Informacion sobre los miembros del equipo',
}

const NosotrosPage = () => {
  return (
    <div className='container flex flex-col gap-5'>
      <h1 className='text-blue-600 font-bold text-3xl'>Nosotros</h1>
      <div className='flex flex-col gap-10'>
        <IndividuoContainer 
          nombre={'Alejandro Raphael Estrada Lopez'}
          matricula={2004353}
          carrera={'IAS'}
          correo={'2004.estrada.lopez@gmail.com'}
          conclusion={'En conclusión, Windows es el sistema operativo más usado en todo el mundo, su interfaz y su interactividad con el usuario, además de su amplia compatibilidad, lo convierte en un sistema operativo para casi todos los usuarios, fue interesante ver cómo ha evolucionado con el tiempo y como se ha ido adaptando a las nuevas necesidades de la sociedad, asi como al avance de las tecnologías. Sin duda un sistema operativo que nos ha acompañado desde hace tiempo, y seguirá con nosotros al menos unos años más.'}
        />

        <IndividuoContainer 
          nombre={'César Gael García Macías'}
          matricula={2000412}
          carrera={'ITS'}
          correo={'cesar.garciamcs@gmail.com'}
          conclusion={'En resumen, Windows es un sistema operativo ampliamente reconocido y utilizado en todo el mundo debido a su versatilidad y accesibilidad. Ha evolucionado a lo largo de los años, adaptándose a las cambiantes necesidades tecnológicas y ofreciendo a los usuarios una interfaz amigable y funcional. Con una amplia gama de aplicaciones, herramientas y características innovadoras, Windows permite a los usuarios realizar multiples tareas de manera eficiente y efectiva. Este sistema operativo ha logrado trascender barreras, contribuyendo de manera significativa al desarrollo y la integración de tecnología en nuestra vida cotidiana'}
        />

        <IndividuoContainer 
          nombre={'Karen Yazmín Cardona Hernández'}
          matricula={1959942}
          carrera={'ITS'}
          correo={'karen_cardona05@hotmail.com'} 
          conclusion={'En conclusión, lo que es Microsoft Windows ha recorrido un largo camino desde su lanzamiento desde los años 1985 y este ha evolucionado hasta convertirse en un sistema operativo más importantes que satisface a una amplia gama de usuarios. Su interfaz fácil de usar, sus aplicaciones imprescindibles y sus sólidas funciones de seguridad lo convierten en una opción popular para la informática personal. A medida que nosotros continuamos explorando más la tecnología en constante cambio, Windows sigue siendo la base que da forma a nuestras experiencias digitales. '}
        />

        <IndividuoContainer 
          nombre={'Carlos Daniel Aguayo Reyes'}
          matricula={2000179}
          carrera={'ITS'}
          correo={'Aguayocarlos32@gmail.com'} 
          conclusion={''}
        />

        <IndividuoContainer 
          nombre={'Eduardo Israel Alejo Hernandez'}
          matricula={1952371}
          carrera={'ITS'}
          correo={'eddyalejo113@hotmail.com'}
          conclusion={'En conclusión, el sistema operativo Microsoft se convirtió en uno de los más utilizados en el mundo gracias a que se popularizo en sus inicios por su interfaz gráfica llamativa basada en ventanas, este sistema ha sido el mas utilizado y se ha mantenido lanzando versiones mas actualizadas del mismo adaptándose a las necesidades de los usuarios y añadiendo nuevas características a lo largo de los años.'}
        />

        <IndividuoContainer 
          groupConclusion={true}
          conclusion={'En conjunto, Windows se destaca como una familia de sistemas operativos que ha sido crucial en la informática moderna. Su versatilidad y adaptabilidad han permitido que millones de usuarios puedan acceder a la tecnología de manera eficiente y productiva. Windows ha contribuido al avance de la informática en su historia, consolidándose como parte esencial de nuestro entorno tecnológico. Además de la amplia base de usuarios y la comunidad de desarrolladores han contribuido a crear distintos ecosistemas de aplicaciones y herramientas que potencian la productividad y funcionalidad de los usuarios. La compatibilidad que tiene con una gran variedad de hardware y la adaptación que tiene para adaptarse a diferentes necesidades hacen que Windows sea una elección común en el ámbito educativo, personal y empresarial. '}
        />
      </div>
    </div>
  )
}

export default NosotrosPage
