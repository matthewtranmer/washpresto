type laundryBasketSVGProps = { className?: string};

function LaundryBasketSVG({ className }: laundryBasketSVGProps){
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className} 
            style={{width: '24px', height: '24px', strokeWidth: '4px'}}
            viewBox="21.5 24.5 78 66" 
            fill="none"
        >
            <title>Laundry basket</title>
            <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
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

export default LaundryBasketSVG;