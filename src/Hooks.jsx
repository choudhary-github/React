import { useEffect, useState } from "react";

export function useLocalStorage(key,initialValue){

    const[state,setState] = useState(()=>{
        const localStorageValue = localStorage.getItem(key)
        if(localStorageValue){
            return localStorageValue
        }
        return initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key,state.toString())
    }, [state, key])
    return [state, setState]
}