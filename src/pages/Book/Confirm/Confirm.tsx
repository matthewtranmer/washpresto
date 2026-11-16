import { ChevronRight, CreditCard, CreditCardPlus, Flower, House, MapPin, Milk, Thermometer, Wind } from 'lucide-react';
import './Confirm.css'
import LaundryBasketSVG from '@/components/SVG/LaundryBasketSVG';
import { Link } from 'react-router-dom';
import Checkbox from '@/components/Checkbox/Checkbox';

function ApplePayPaymentMethod(){
    return (
        <div className='confirm-payment-method standard-box'>
            <div className='confirm-payment-method-icon'>
                <CreditCard/>
            </div>

            <div className='confirm-payment-method-details'>
                <p>Apple Pay</p>
            </div>

            <div className='confirm-payment-method-right'>
                <Checkbox
                    checked={false}
                />
            </div>
        </div>
    )
}

function CardPaymentMethod(){
    return (
        <div className='confirm-payment-method standard-box'>
            <div className='confirm-payment-method-icon'>
                <CreditCard/>
            </div>

            <div className='confirm-payment-method-details'>
                <p>Card</p>
            </div>

            <div className='confirm-payment-method-right'>
                <Checkbox
                    checked={false}
                />
            </div>
        </div>
    )
}



function Confirm(){
    return (
        <>
            <div className='confirm-pickdrop-info-container'>
                <h2 className='booklayout-comment'>Pickup & delivery</h2>

                <div className="timeline standard-box">
                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <House size={20} />
                        </div>

                        <div>
                            <strong>Wed 29 May, 12:00 - 14:00</strong>
                            <p>Collection</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <MapPin size={20} />
                        </div>

                        <div>
                            <strong>Thu 30 May, Evening</strong>
                            <p>Delivery</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='confirm-service-container'>
                <h2 className='booklayout-comment'>Service</h2>

                <div className='confirm-service  standard-box'>
                    <div className='confirm-service-icon'>
                        <LaundryBasketSVG/>
                    </div>

                    <div className='confirm-service-info'>
                        <strong>Wash, dry & fold</strong>
                        <p>Standard bag (Up to 10kg)</p>
                    </div>

                    <strong className='confirm-service-price'>£15.00</strong>
                </div>

            </div>

            <div className='confirm-preferences-container'>
                <h2 className='booklayout-comment'>Preferences</h2>

                <div className='confirm-preferences-list standard-box'>
                    <div className='confirm-preferences-all-button'>
                        <strong>Manage</strong>
                    </div>

                    <div className='confirm-preference'>
                        <Milk className='confirm-preference-icon'></Milk>

                        <div className='confirm-preference-info'>
                            <strong>Detergent</strong>
                            <p>Non-bio detergent</p>
                        </div>
                    </div>

                    <div className='confirm-preference'>
                        <Thermometer className='confirm-preference-icon'></Thermometer>

                        <div className='confirm-preference-info'>
                            <strong>Temperature</strong>
                            <p>Medium heat</p>
                        </div>
                    </div>

                    <div className='confirm-preference'>
                        <Wind className='confirm-preference-icon'></Wind>

                        <div className='confirm-preference-info'>
                            <strong>Drying</strong>
                            <p>Normal dry</p>
                        </div>
                    </div>

                    <div className='confirm-preference'>
                        <Flower className='confirm-preference-icon'></Flower>

                        <div className='confirm-preference-info'>
                            <strong>Fabric softener</strong>
                            <p>No fabric softener</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='confirm-cost-breakdown-container'>
                <h2 className='booklayout-comment'>Cost breakdown</h2>

                <div className='confirm-cost-breakdown-list standard-box'>
                    <div className='confirm-cost-breakdown-item'>
                        <p>Service (Wash, dry & fold)</p>
                        <p className='confirm-cost-breakdown-item-price'>£15.00</p>
                    </div>

                    <div className='confirm-cost-breakdown-item'>
                        <p>Service (Wash, dry & fold)</p>
                        <p className='confirm-cost-breakdown-item-price'>£15.00</p>
                    </div>

                    <div className='confirm-cost-breakdown-item'>
                        <p>Service (Wash, dry & fold)</p>
                        <p className='confirm-cost-breakdown-item-price'>£15.00</p>
                    </div>

                    <div className='confirm-cost-breakdown-separator'></div>

                    <div className='confirm-cost-breakdown-total'>
                        <p className='confirm-cost-breakdown-total-heading'>Total</p>
                        <p className='confirm-cost-breakdown-total-price'>£20.00</p>
                    </div>
                </div>
            </div>

            <div className='confirm-cost-breakdown-container'>
                <div className='booklayout-comment confirm-payment-method-top-container'>
                    <h2>Payment method</h2>
                    <p className='confirm-payment-method-manage'>Manage</p>
                </div>

                <div className='confirm-payment-methods-list'>
                    <ApplePayPaymentMethod/>
                    
                    <CardPaymentMethod/>

                    <div className='confirm-payment-method confirm-add-new-card standard-box'>
                        <div className='confirm-payment-method-icon'>
                            <CreditCardPlus/>
                        </div>

                        <div className='confirm-payment-method-details'>
                            <p>Add new card</p>
                        </div>

                        <div className='confirm-payment-method-right'>
                            <ChevronRight/>
                        </div>
                    </div>


                </div>     
            </div>
       

            <div className='confirm-booking-section'>
                <button className='confirm-booking-button standard-button'>
                    Confirm & Pay
                </button>

                <div className='confirm-terms'>
                    <p>
                        By confirming, you agree to our <Link to=''>Terms & Conditions</Link>
                    </p>
                </div>
            </div>
            
        </>
    )
}

export default Confirm;