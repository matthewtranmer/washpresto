import './Home.css'

function Home(){
    return (
        <div className='content'>
            <div className="title-section">
                <p className='title-section-upper-text'>LAUNDRY. OFF YOUR LIST.</p>
             
                <div className='title-section-main'>
                    <h1 className='title-section-main-1'>Less laundry.</h1>
                    <h1 className='title-section-main-2'>More living.</h1>
                </div>

                <p className='title-section-lower-text'>Collect. clean. delivered.</p>
            </div>

            <div className='separator'>

            </div>

            <div className="content-section">
                <h2>What can we take off your hands?</h2>
                <p>Choose a service</p>
            </div>
            
            <div>
                <button>Book a collection</button>
            </div>
        </div>
    )
}

export default Home;