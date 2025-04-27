import { ChangeEvent, FC, useState } from "react";

interface GreetingProps{
    fontSize:string
    fontWeight:string
    width:string
    color:string
}


export const Greeting:FC<GreetingProps> = ({fontWeight,fontSize,width,color}) =>{

    const [name,setName] = useState<string>('Egor')

    const colName = () =>{
        setName('Игорь')
    }

    const changeName = (event:ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value)
    }
     
    const clearName = () =>{
        setName('')
    }

    return(
        <div style={{fontWeight,fontSize,width,color}}>
            <h3>{name}</h3>
            <button onClick={colName}>изменить имя!</button>
            <button onClick={clearName}>очистить имя!</button>

            <input style={{width:600,height:100,fontSize:30}} type="text" value={name} onChange={changeName} placeholder="Введи свое имя"  />
        </div>
    )
}