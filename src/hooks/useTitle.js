const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Jerins-Parlour`
    },[title])
}

export default useTitle;