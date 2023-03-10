import { useContext } from 'react'
import './Info.css'
import Context from '../contexts/Context';
import { BiImages, BiPlayCircle, BiFolderMinus } from 'react-icons/bi';
import { TbFileDescription } from 'react-icons/tb';

function Info() {

    console.log("Info")

    const { info, chatUser } = useContext(Context)

    if(info)
    {
        return (
            <div className="InfoChat">
                <div className="Title">
                    <img src={chatUser.photo} alt="Logo" />
                    <span className="Text">
                        <h2>{chatUser.name}</h2>
                        <p>{chatUser.email}</p>
                    </span>
                </div>
                <span className="Docs">
                    <h3>Attachments</h3>
                    <div className="Cards IconDisabled">
                        <TbFileDescription size={24} className="Icon IconDisabled"/>  
                        <span className="Text">
                            <h4>Documents</h4>
                            <p>0 Files - 0 MB</p>
                        </span>
                    </div>
                    <div className="Cards IconDisabled">
                        <BiImages size={24} className="Icon IconDisabled"/>  
                        <span className="Text">
                            <h4>Photos</h4>
                            <p>0 Files - 0 MB</p>
                        </span>
                    </div>
                    <div className="Cards IconDisabled">
                        <BiPlayCircle size={24} className="Icon IconDisabled"/>  
                        <span className="Text">
                            <h4>Videos</h4>
                            <p>0 Files - 0 MB</p>
                        </span>
                    </div>
                    <div className="Cards IconDisabled">
                        <BiFolderMinus size={24} className="Icon IconDisabled"/>  
                        <span className="Text">
                            <h4>Other Files</h4>
                            <p>0 Files - 0 MB</p>
                        </span>
                    </div>
                 </span>
            </div>
        )    
    }
}

export default Info
