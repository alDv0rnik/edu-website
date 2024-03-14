import './NotFound.css'
import Gear from '../assets/images/gear.jpg'

export default function NotFound() {
    return (
        <div className="container-wrapper">
            <div className="image-content">
                <img src={Gear} alt="logo" width={360} height={400}/>
            </div>
            <div className="text-content">
                <span>Page not found</span>
            </div>
        </div>
    )
}