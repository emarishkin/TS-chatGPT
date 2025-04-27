import { FC } from "react";

interface GreetingProps{
    name:string
    fontSize:string
    fontWeight:string
    width:string
}


export const Greeting:FC<GreetingProps> = ({fontWeight,fontSize,name,width}) =>{
    return(
        <div style={{fontWeight,fontSize,width}}>
            <h3>{name}</h3>
        </div>
    )
}