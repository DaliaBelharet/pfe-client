import React from 'react'
import { Carousel } from 'flowbite-react'

import banner1 from "../assets/House searching-pana.png"
import banner3 from "../assets/Realtor-bro.png"
import banner2 from "../assets/Realtor-pana.png"


const MainSection = () => {
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                Bienvenue sur ProjectLy, l'application tout-en-un
                                <h2> </h2>
                                <span className='text-brandPrimary leading-snug'>
                                    Où le travail d'équipe transforme les rêves en réalité
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 '>
                                Que vous soyez un professionnel expérimenté ou que vous débutiez, 
                                nos outils intuitifs et nos processus simplifiés rendent la gestion de projet facile.
                                Rejoignez-nous dans cette aventure et libérez le plein potentiel de votre équipe.
                            </p>
                            <button className='btn-primary'>
                                S'authentifier
                            </button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                Explorez une gestion de tâches fluide, où l'efficacité rencontre la simplicité
                                <h2> </h2>
                                <span className='text-brandPrimary leading-snug'>
                                    pour une productivité sans limites.
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 '>
                                Avec notre plateforme intuitive, organiser et prioriser les tâches devient 
                                un jeu d'enfant. Dites adieu à la surcharge de tâches et bonjour à la productivité à son meilleur.
                            </p>
                            <button className='btn-primary'>
                                S'authentifier
                            </button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner3} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                Approbations clients en temps opportun avec notre plateforme collaborative,
                                <h2> </h2>
                                <span className='text-brandPrimary leading-snug'>
                                    des retours fluides et une livraison de projet ponctuelle.
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 '>
                                En invitant les clients à collaborer directement au sein de notre plateforme, vous pouvez
                                faciliter la communication claire, recueillir des retours et aborder efficacement toute préoccupation.
                            </p>
                            <button className='btn-primary'>
                                S'authentifier
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default MainSection