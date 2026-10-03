import './BookLayout.css'

import { ChevronLeft } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function BookLayout(){
    const navigate = useNavigate();
    const location = useLocation();

    const isFirstStep = location.pathname === "/book/service";


    return (
        <main className="booklayout">
            <div className="booklayout-heading-container">

                <div 
                    className='booklayout-back-button'
                    onClick={() => isFirstStep ? navigate('/') : navigate(-1)}
                >
                    <ChevronLeft/>
                </div>

                <h1>Book a collection</h1>
            </div>

            <div className="booklayout-content">
                <Outlet></Outlet>
            </div>
        </main>
    )
}

export default BookLayout;