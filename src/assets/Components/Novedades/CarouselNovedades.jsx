import { useState } from 'react'


export default function CarouselNovedades() {
    const [page, setPage] = useState(1);


    return (
        <div className=' col-12 md-4 d-flex flex-column align-items-center' >
            {page === 1 && (
                <div className="c-content " style={{
                    backgroundColor: '#BDD2D6',
                    backgroundImage: `url('https://previews.123rf.com/images/karenr/karenr1603/karenr160300065/53466268-la-pata-de-perro-azul-la-impresi%C3%B3n-del-modelo-del-azulejo-de-repetici%C3%B3n-de-fondo-que-se-repite-sin.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    opacity: 0.5
                }}>
                    <div className=' sombra d-flex'>
                        <div className='imagen'>
                            <img onClick={() => setPage(page + 1)} src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/CC600FC1-2637-4139-9A06-45697A688810.png" alt="" />
                        </div>
                        <div className='d-flex flex-column'>

                            <h2>Estado de la adopcion</h2>
                            <p>Revisa el proceso de tus adopciones en curso</p>
                        </div>

                    </div>
                </div>
            )}
            {page === 2 && (
                <div className="c-content " style={{
                    backgroundColor: '#BDD2D6',
                    backgroundImage: `url('https://previews.123rf.com/images/karenr/karenr1603/karenr160300065/53466268-la-pata-de-perro-azul-la-impresi%C3%B3n-del-modelo-del-azulejo-de-repetici%C3%B3n-de-fondo-que-se-repite-sin.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    opacity: 0.5
                }}>
                    <div className='sombra d-flex'>
                        <div className='imagen'>
                            <img onClick={() => setPage(page + 1)} src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/F01C2434-2928-4732-824B-3F1A69442BBC.png" alt="" />
                        </div>
                        <div className='d-flex flex-column'>

                            <h2>Apadrinar</h2>
                            <p>Revisa el proceso de tus apadrinados en curso</p>
                        </div>

                    </div>
                </div>
            )}
            {page === 3 && (
                <div className="c-content" style={{
                    backgroundColor: '#BDD2D6',
                    backgroundImage: `url('https://previews.123rf.com/images/karenr/karenr1603/karenr160300065/53466268-la-pata-de-perro-azul-la-impresi%C3%B3n-del-modelo-del-azulejo-de-repetici%C3%B3n-de-fondo-que-se-repite-sin.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    opacity: 0.5
                }}>
                    <div className='sombra d-flex'>

                        <div className='imagen'>
                            <img onClick={() => setPage(1)} src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/E3B3BC30-6328-4724-8E7A-3B95FDA579C4.png" alt="" />
                        </div>
                        <div className='d-flex flex-column'>

                            <h2>Estado de la adopcion</h2>
                            <p>Revisa el proceso de tus adopciones en curso</p>
                        </div>

                    </div>

                </div>
            )}
            <div className='boton d-flex justify-content-center ' >
                <div className='boton-indiv' style={{ backgroundColor: page === 1 ? 'salmon' : 'white', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid salmon' }} onClick={() => setPage(1)}>

                </div>

                <div className='boton-indiv' style={{ backgroundColor: page === 2 ? 'salmon' : 'white', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid salmon' }} onClick={() => setPage(2)}></div>

                <div className='boton-indiv' style={{ backgroundColor: page === 3 ? 'salmon' : 'white', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid salmon' }} onClick={() => setPage(3)}></div>
            </div>

        </div>
    )
}
