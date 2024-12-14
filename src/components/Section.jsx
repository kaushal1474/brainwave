import SectionSvg from "../assets/svg/SectionSvg"


const Section = ({ className = "", id, crossess = false, crossesOffset, custtomPadding, children }) => {
    return (
        <div className={`relative ${custtomPadding || `py-10 lg:py-16 xl:py-20 ${crossess ? "lg:py-32 xl:py-40" : ""}`} ${className}`}
            id={id}
        >
            {children}
            <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
            <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />

            {crossess && <>
                <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-strock-1 ${crossesOffset || ""} pointer-events-none lg:block xl:left-10 xl:right-10`} />
                <SectionSvg crossesOffset={crossesOffset} />
            </>}
        </div>
    )
}

export default Section