type foldedShirtSVGProps = { className?: string};

function FoldedShirtSVG({ className }: foldedShirtSVGProps){
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className} 
            style={{width: '24px', height: '24px', strokeWidth: '4px'}}
            viewBox="13 14 68 76" 
            fill="none"
        >
            <title>Folded collared shirt</title>
            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="m30 25-8 3a8 8 0 0 0-6 8v45a6 6 0 0 0 6 6h50a6 6 0 0 0 6-6V36a8 8 0 0 0-6-8l-8-3-6-8H36Z" />
                <path d="M36 17h22L47 33Z"/>
                <path d="m36 17-6 8 9 16 8-8Z" />
                <path d="m58 17 6 8-9 16-8-8Z" />
                <path d="M47 33v54"/>
            </g>
            <g fill="currentColor">
                <circle cx="55" cy="50" r="2"/>
                <circle cx="55" cy="75" r="2"/>
            </g>
        </svg>
    )
}

export default FoldedShirtSVG;