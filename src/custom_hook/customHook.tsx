
import { useState } from "react"

const UseLocalStorage =(key: any,initialValue: any)=>{
    const [storedValue, setLocalStorage]=useState(()=>{
        try {
            const item= window.localStorage.getItem(key);
            return item? JSON.parse(item):initialValue;
        } catch (error) {
            console.error(`Error fetching ${key}`, error);
            return initialValue;            
        }
    })
    const setValue=(value: any)=>{
        try {
            const valueToStore= value instanceof Function ? value(storedValue): value
            setLocalStorage(valueToStore)
            window.localStorage.setItem(key,JSON.stringify(valueToStore))
        } catch (error) {
            console.error(error)            
        }
    }

    const clearStorage = () => {
        try {
            // storedValue(initialValue);
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error clearing ${key}`, error);
        }
    };

    return [storedValue,setValue,clearStorage]
}

export default UseLocalStorage 