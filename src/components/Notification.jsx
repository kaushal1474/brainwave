import { notification1 } from "../assets"
import { notificationImages } from "../constants"

const Notification = ({ className = "", title }) => {
    return (
        <div className={`${className} flex items-center p-4 pr-6 bg-n-9/14 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>

            <img src={notification1} width={62} height={62} alt="image" className="rounded-xl" />

            <div className="flex-1">
                <h6 className="mb-1 text-base font-semibold">{title}</h6>

                <div className="flex justify-between items-center">
                    <ul className="flex -m-0.5">
                        {notificationImages.map((image, index) =>
                            <li key={index} className="flex h-6 w-6 border-2 border-n-12 rounded-full overflow-hidden">
                                <img src={image} alt={image} className="w-full" width={20} height={20} />
                            </li>
                        )}
                    </ul>
                    <div className="body-2 text-n-13">1m ago</div>
                </div>
            </div>
        </div>
    )
}

export default Notification