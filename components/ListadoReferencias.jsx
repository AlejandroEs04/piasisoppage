import Referencia from './Referencia'

const ListadoReferencias = () => {

    const referencias = [
        {
            id: 1,
            autores: 'Equipo editorial, Etecé',
            fecha: '2023',
            titulo: 'Windows: historia, evolución y características. Enciclopedia Humanidades',
            link: 'https://humanidades.com/sistema-operativo-windows/#ixzz8FZ3tgRYd'
        },
        {
            id: 2,
            autores: 'Ordenador, R. T',
            fecha: '2023, 25 junio',
            titulo: 'Descubre cómo funciona el sistema operativo Windows de forma fácil y sencilla. Reparar tu Ordenador',
            link: 'https://reparartuordenador.com/como-funciona-el-sistema-operativo-windows'
        },
        {
            id: 3,
            titulo: 'Operating System and User Interface | Student’s Digital skills. (s. f.)',
            link: 'https://blogs.helsinki.fi/students-digital-skills/1-introduction-to-the-use-of-computers/1-1-computer-functionality/operating-system-and-user-interface/'
        },
        {
            id: 4,
            autores: 'campusMVP',
            titulo: 'La evolución de Windows, de Windows 1 a Windows 10 - CampusMVP.es. campusMVP.es',
            link: 'https://www.campusmvp.es/recursos/post/La-evolucion-de-Windows-de-Windows-1-a-Windows-10.aspx'
        },
        {
            id: 5,
            autores: true,
            fecha: true,
            titulo: 'Video de apoyo',
            link: 'https://www.youtube.com/watch?v=OxqijevDAEA'
        },
    ]

    return referencias?.map(referencia => (
        <Referencia 
            key={referencia.id}
            referencia={referencia}
        />
    ))
}

export default ListadoReferencias
