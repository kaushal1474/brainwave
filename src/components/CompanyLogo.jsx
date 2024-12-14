import { companyLogos } from "../constants"


const CompanyLogo = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50 uppercase">
                HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) =>
                    <li key={index} className="flex justify-center items-center flex-1 h-[8.5rem]">
                        <img src={logo} alt={logo} width={134} height={28} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CompanyLogo