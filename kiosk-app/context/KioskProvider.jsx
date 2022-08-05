
import {createContext} from 'react'

const KioskContext = createContext()
const KioskProvider = ({children}) => {
    return(
        <KioskContext.Provider value={{}}>
            {children}
        </KioskContext.Provider>
    )
}

export {KioskProvider}

export default KioskContext