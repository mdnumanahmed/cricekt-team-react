const addToDb = (id) => {
    let storedData = getDataFromStorage()
    if(!id in storedData){
        
    }


}

const getDataFromStorage = () => {
    let storedData = {};
    const data = localStorage.getItem('players')
    if(data){
        storedData = JSON.parse(data)
    }
    return storedData
}

export {
    getDataFromStorage,
    addToDb
}