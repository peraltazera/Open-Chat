import { useContext } from 'react'
import './Info.css'
import Context from '../contexts/Context';
import img from '../assets/Victor.png';
import { BiImages, BiPlayCircle, BiFolderMinus } from 'react-icons/bi';
import { TbFileDescription } from 'react-icons/tb';

function Info() {
    const { hidden } = useContext(Context)

    return (
        <>
           { hidden ? <Results /> : null }
        </>
    )
}
  
const Results = () => (
    <div className="InfoChat">
        <div className="Title">
            <img src={img} alt="Logo" />
            <span className="Text">
                <h2>Victor Pereira</h2>
                <p>Victorgamedeveloper@gmail.com</p>
            </span>
        </div>
        <span className="Docs">
            <h3>Attachments</h3>
            <div className="Cards IconDisabled">
                <TbFileDescription size={24} className="Icon IconDisabled"/>  
                <span className="Text">
                    <h4>Documents</h4>
                    <p>129 Files - 375 MB</p>
                </span>
            </div>
            <div className="Cards IconDisabled">
                <BiImages size={24} className="Icon IconDisabled"/>  
                <span className="Text">
                    <h4>Photos</h4>
                    <p>129 Files - 375 MB</p>
                </span>
            </div>
            <div className="Cards IconDisabled">
                <BiPlayCircle size={24} className="Icon IconDisabled"/>  
                <span className="Text">
                    <h4>Videos</h4>
                    <p>129 Files - 375 MB</p>
                </span>
            </div>
            <div className="Cards IconDisabled">
                <BiFolderMinus size={24} className="Icon IconDisabled"/>  
                <span className="Text">
                    <h4>Other Files</h4>
                    <p>129 Files - 375 MB</p>
                </span>
            </div>
         </span>
    </div>
)
  

export default Info
