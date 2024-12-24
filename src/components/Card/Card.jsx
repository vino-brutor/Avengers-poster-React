import Image from "../Image/Image"
import Title from "../title/Title"
import Text from "../Text/Text"
import Button from "../Button/Button"
import style from "./style.module.css"

export default function Card(){
    return(
        <div className={"card " + style.cardStyle}>
            <div className={"card-body " + style.cardDisplay}>
                <Image></Image>
                <div className={style.divCardContent}>
                  <Title></Title>
                  <Text></Text>
                  <div>
                    <Button></Button>
                  </div>
                </div>
            </div>
        </div>
    )
}