import { useState } from 'react'

export default function Key(props){
    const [Keycode, setKeycode] = useState(false)
    
    document.addEventListener('keydown', (e) => {
        if(e.key === props.text){
            setKeycode(true)

        }else{
            setKeycode(false)
        }
    })



    return(
        <div className={Keycode ? "key Active" : "key"}>{props.text}</div>
    )
}