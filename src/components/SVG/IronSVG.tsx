type IronSVGProps = {
    className?: string;
};

function IronSVG({ className }: IronSVGProps) {
    return (
       <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{
                width: '24px',
                height: '24px',
            }}
            viewBox="0 0 100 80"
            fill="none"
        >
            <title>Clothes iron</title>

            <g
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Handle + rear */}
                <path d="
                    M44 20
                    H84
                    C87 20 89 22 90 26
                    L96 68
                " />

                {/* Curved body */}
                <path d="
                    M4 68
                    C16 49 35 37 53 37
                    H91
                " />

                {/* Soleplate */}
                <path d="M4 68 H96" />
            </g>
        </svg>
    );
}

export default IronSVG;