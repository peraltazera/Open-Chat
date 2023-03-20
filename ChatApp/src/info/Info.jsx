import { useContext } from 'react'
import Context from '../contexts/Context';
import { BiImages, BiPlayCircle, BiFolderMinus } from 'react-icons/bi';
import { TbFileDescription } from 'react-icons/tb';
import IconDisabled from '../styles/IconDisabled.style';
import Language from '../Language';
import { InfoStl, HeaderStl, TitleHeaderStl, TextHeaderStl, ImageStl, CardStl, DocStl, CardTextsStl, TitleCardStl, TextCardStl, TitleDocStl } from './Info.style';

function Info() {

    console.log("Info")

    const { info, chatUser, language } = useContext(Context)

    if(info)
    {
        return (
            <InfoStl>

                <HeaderStl>
                    <ImageStl src={chatUser.photo} alt="Logo" />
                    <TitleHeaderStl>{chatUser.name}</TitleHeaderStl>
                    <TextHeaderStl>{chatUser.email}</TextHeaderStl>
                </HeaderStl>

                <DocStl>

                    <TitleDocStl>{Language[language].chat.info.attachments}</TitleDocStl>

                    <IconDisabled>
                        <CardStl>
                            <TbFileDescription size={32} color="#999999"/>  
                            <CardTextsStl>
                                <TitleCardStl>{Language[language].chat.info.documents}</TitleCardStl>
                                <TextCardStl>0 {Language[language].chat.info.files} - 0 MB</TextCardStl>
                            </CardTextsStl>
                        </CardStl>
                    </IconDisabled>

                    <IconDisabled>
                        <CardStl>
                            <BiImages size={32} color="#999999"/>  
                            <CardTextsStl>
                                <TitleCardStl>{Language[language].chat.info.photos}</TitleCardStl>
                                <TextCardStl>0 {Language[language].chat.info.files} - 0 MB</TextCardStl>
                            </CardTextsStl>
                        </CardStl>
                    </IconDisabled>

                    <IconDisabled>
                        <CardStl>
                            <BiPlayCircle size={32} color="#999999"/>  
                            <CardTextsStl>
                                <TitleCardStl>{Language[language].chat.info.videos}</TitleCardStl>
                                <TextCardStl>0 {Language[language].chat.info.files} - 0 MB</TextCardStl>
                            </CardTextsStl>
                        </CardStl>
                    </IconDisabled>

                    <IconDisabled>
                        <CardStl>
                            <BiFolderMinus size={32} color="#999999"/>  
                            <CardTextsStl>
                                <TitleCardStl>{Language[language].chat.info.otherFiles}</TitleCardStl>
                                <TextCardStl>0 {Language[language].chat.info.files} - 0 MB</TextCardStl>
                            </CardTextsStl>
                        </CardStl>
                    </IconDisabled>

                 </DocStl>
                 
            </InfoStl>
        )    
    }
}

export default Info
