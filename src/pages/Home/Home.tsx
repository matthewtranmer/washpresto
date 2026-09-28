import './Home.css'

import { Sparkles } from "lucide-react";


function ArrowSVG(){
    return (
        <svg width="26" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true">

            <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
    )
}

type foldedShirtSVGProps = { className?: string};

function FoldedShirtSVG({ className }: foldedShirtSVGProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="13 14 68 76" fill="none">
            <title>Folded collared shirt</title>
            <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <path d="m30 25-8 3a8 8 0 0 0-6 8v45a6 6 0 0 0 6 6h50a6 6 0 0 0 6-6V36a8 8 0 0 0-6-8l-8-3-6-8H36Z" />
                <path d="M36 17h22L47 33Z"/>
                <path d="m36 17-6 8 9 16 8-8Z" />
                <path d="m58 17 6 8-9 16-8-8Z" />
                <path d="M47 33v54"/>
            </g>
            <g fill="currentColor">
                <circle cx="52" cy="50" r="2"/>
                <circle cx="52" cy="75" r="2"/>
            </g>
        </svg>
    )
}

type laundryBasketSVGProps = { className?: string};

function LaundryBasketSVG({ className }: laundryBasketSVGProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="21.5 24.5 78 66" fill="none">
            <title>Laundry basket</title>
            <g stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M37 38V33a7 7 0 0 1 7-7h33a7 7 0 0 1 7 7v6" />
                <path d="M44 32h29M68 38h9"/>
                <path d="M57 38h25a7 7 0 0 1 7 7v5H57Z" />
                <path d="M31 49v-4a7 7 0 0 1 7-7h16a9 9 0 0 1 9 9v3" />
                <path d="M39 44h12"/>
                <path d="m28 57 6 27a6 6 0 0 0 6 5h40a6 6 0 0 0 6-5l6-27Z" />
                <rect x="23" y="49" width="75" height="9" rx="4.5" />
            </g>
            <g fill="currentColor">
                <rect x="41" y="65" width="5" height="7" rx="2.5"/>
                <rect x="49" y="65" width="5" height="7" rx="2.5"/>
                <rect x="57" y="65" width="5" height="7" rx="2.5"/>
                <rect x="65" y="65" width="5" height="7" rx="2.5"/>
                <rect x="73" y="65" width="5" height="7" rx="2.5"/>
                <rect x="41" y="75" width="5" height="6" rx="2.5"/>
                <rect x="49" y="75" width="5" height="6" rx="2.5"/>
                <rect x="57" y="75" width="5" height="6" rx="2.5"/>
                <rect x="65" y="75" width="5" height="6" rx="2.5"/>
                <rect x="73" y="75" width="5" height="6" rx="2.5"/>
            </g>
        </svg>
    )
}

type serviceProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    subTitle: string,
    pricePerKG: string,
    className?: string
};

function Service({Icon, title, subTitle, pricePerKG, className}: serviceProps){
    return (
        <div className={`service ${className ?? ""}`}>
            <div className='service-button'>
                <ArrowSVG></ArrowSVG>
            </div>

            <div>
                <Icon className='service-icon'></Icon>
            </div>

            <div>
                <h3 className='service-title'>{title}</h3>   
                <p>{subTitle}</p>
            </div>
            
            <div>
                <p className='service-price'>From <b>£{pricePerKG}</b>/ kg</p>
            </div>
            
        </div>
    )
}

function Home(){
    return (
        <div className='content'>
            <div className='title-section'>
                <p className='title-section-upper-text'>LAUNDRY. OFF YOUR LIST.</p>
             
                <div className='title-section-main'>
                    <h1 className='title-section-main-1'>Less laundry.</h1>
                    <h1 className='title-section-main-2'>More living.</h1>
                </div>

                <p className='title-section-lower-text'>Collect. cleaned. delivered.</p>
            </div>

            <div className='separator'>
                <div className='separator-content'>
                    <div>
                        <Sparkles strokeWidth={1} width={30} height={30}></Sparkles>
                    </div>
                    <div className='separator-text'>
                        Fresh clothes. Less Mess. More free time.
                    </div>
                </div>
            </div>

                <div className='lower-content-section'>
                    <div className='lower-content-title-group'>
                        <h2 className='lower-content-title'>What can we take off your hands?</h2>
                        <p>Choose a service</p>
                    </div>

                    <div className='services-list'>
                        <Service Icon={FoldedShirtSVG} title='Wash & Fold' subTitle='Everyday laundry, sorted.' pricePerKG='2.20'/>
                        <Service Icon={LaundryBasketSVG} title='Wash & Iron' subTitle='Fresh, pressed and ready to wear.' pricePerKG='3.00'/>
                    </div>

                    <button className='collection-button'>
                        <div className='collection-button-arrow'>
                            <ArrowSVG></ArrowSVG>
                        </div>

                        <p>Book a collection</p>

                    </button>
                </div>
            

        </div>
    )
}

export default Home;