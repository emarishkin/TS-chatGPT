import { ChangeEvent, FC, useState } from "react";
import { Button } from "./Button";

interface GreetingProps{
    fontSize:string
    fontWeight:string
    width:string
    color:string
}


export const Greeting:FC<GreetingProps> = ({fontWeight,fontSize,width,color}) =>{

    const [names,setNames] = useState<string[]>(['Egor','Igor'])
    const [newName,setNewName] = useState<string>('')
    
    const ChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }

    const addName = () =>{
        if(newName!==''){
            setNames([...names,newName])
            setNewName("");
        }
    }
    
    const clearList = () => {
        setNames([])
    }

    const removeName = (nameToRemove:string) =>{
       setNames(names.filter(name=>name!==nameToRemove))
    }



    return(
        <div style={{fontWeight,fontSize,width,color}}>
            <h3>список имен:</h3>
           <ol>
            {names.map((name,index)=>(
                <li style={{display:'flex',justifyContent:'center',gap:20}} key={index}>
                    {name}
                    <Button width={"100px"} height={"80px"} fontSize={"15px"} alignItems={'center'}onClick={()=>removeName(name)}>Удалить имя</Button>
                </li>
            ))}
           </ol>

           <input style={{width:600,height:100,fontSize:30,marginBottom:20}} type="text" value={newName} onChange={ChangeName} placeholder="введи имя" />
           <div style={{display:'flex',justifyContent:'center',gap:20}}>
          <Button onClick={addName}>добавить новое имя +</Button>
          <Button onClick={clearList}>очистить список</Button>
           </div>
           
           
        </div>
    )
}