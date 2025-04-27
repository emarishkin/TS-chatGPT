import { FC, ReactNode } from "react";

interface buttonProps{
    children:ReactNode
    onClick:()=>void 
    width?:string
    height?:string
    fontSize?:string
    alignItems?:string
}


export const Button:FC<buttonProps> = ({onClick,children,width,height,fontSize,alignItems}) =>{
    return(
        <button style={{width,height,fontSize,alignItems}} onClick={onClick}>{children}</button>
    )
}