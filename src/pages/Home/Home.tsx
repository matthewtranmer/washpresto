import './Home.css'
import LaundryBasketSVG from '@/components/SVG/LaundryBasketSVG';
import FoldedShirtSVG from '@/components/SVG/FoldedShirtSVG';

import { CalendarDays, Handbag, Sparkles, Truck } from "lucide-react";
import { Link } from 'react-router-dom';

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

type serviceProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    subTitle: string,
    pricePerKG: string,
    className?: string
};

function Service({Icon, title, subTitle, pricePerKG, className}: serviceProps){
    return (
        <div className={`home-service ${className ?? ""}`}>
            <div className='home-service-button'>
                <ArrowSVG></ArrowSVG>
            </div>

            <div className='home-service-icon-container'>
                <Icon className='home-service-icon'></Icon>
            </div>

            <div>
                <h3 className='home-service-title'>{title}</h3>   
                <p className='home-service-subtitle'>{subTitle}</p>
            </div>
            
            <div>
                <p className='home-service-price'>
                    From <span className="home-service-price-amount">£{pricePerKG}</span>/ kg
                </p>
            </div>
            
        </div>
    )
}

function Home(){
    return (
        <div>
            <div className='home-content'>                
                <div className='home-title-section'>
                    <p className='home-title-section-upper-text'>LAUNDRY. OFF YOUR LIST.</p>
                    
                    <div className='home-title-section-main'>
                        <h1 className='home-title-section-main-1'>Less laundry.</h1>
                        <h1 className='home-title-section-main-2'>More living.</h1>
                    </div>

                    <p className='home-title-section-lower-text'>Collect. cleaned. delivered.</p>
                </div>

                <div className='home-separator'>
                    <div className='home-separator-content'>
                        <div className='home-separator-explanation-group'>
                            <CalendarDays></CalendarDays>
                            <div>You book</div>
                        </div>

                        <ArrowSVG></ArrowSVG>

                        <div className='home-separator-explanation-group'>
                            <Handbag></Handbag>
                            <div>We collect</div>
                        </div>

                        <ArrowSVG></ArrowSVG>

                        <div className='home-separator-explanation-group'>
                            <Sparkles></Sparkles>
                            <div>We clean</div>
                        </div>

                        <ArrowSVG></ArrowSVG>

                        <div className='home-separator-explanation-group'>
                            <Truck></Truck>
                            <div>We deliver</div>
                        </div>
                        {/* Fresh clothes. More free time. */}
                        {/* Calendar       Bag         Sparkle        Van     */}
                        {/* You book  -> We collect -> We clean -> We deliver */}
                    </div>
                </div>

                <div className='home-lower-content-section'>
                    <div className='home-lower-content-title-group'>
                        <h2 className='home-lower-content-title'>What can we take off your hands?</h2>
                        <p>Choose a service</p>
                    </div>

                    <div className='home-services-list'>
                        <Service Icon={LaundryBasketSVG} title='Wash & Fold' subTitle='Everyday laundry, sorted.' pricePerKG='2.20'/>
                        <Service Icon={FoldedShirtSVG} title='Wash & Iron' subTitle='Fresh, pressed and ready to wear.' pricePerKG='3.00'/>
                    </div>

                    <Link to='/book'>  
                        <button className='standard-button home-collection-button'>
                            <span className='home-collection-button-arrow'>
                                <ArrowSVG></ArrowSVG>
                            </span>

                            <span>Book a collection</span>
                        </button>
                    </Link>
                </div>
            </div>

            
        </div>

       
    )
}

export default Home;