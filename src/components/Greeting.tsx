import { FC, useState } from "react";

interface GreetingProps{
    fontSize:string
    fontWeight:string
    width:string
}


export const Greeting:FC<GreetingProps> = ({fontWeight,fontSize,width}) =>{

    const [name,setName] = useState<string>('Egor')

    const colName = () =>{
        setName('Игорь')
    }


    return(
        <div style={{fontWeight,fontSize,width}}>
            <h3>{name}</h3>
            <button onClick={colName}>изменить имя!</button>
        </div>
    )
}