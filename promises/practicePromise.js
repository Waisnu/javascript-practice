const vinBusy = true
const vinWorking = true

function whatIsVinDoing () {
    return new Promise((resolve, reject) => {
        if ( vinBusy)
        {
            reject({ doing: ' Scrolling ', what: ' Facebook ' })
        } 
        else if (vinWorking) 
        {
            reject({doing: 'Working', what: 'with javascript'}) 
        }else if (vinBusy === vinWorking) {
            reject({
                veryBusy: ' dont bother him, he is working while scrolling'
            })
        }
        else {
            resolve(', he is actually learning Promise')
        }
        })
}

whatIsVinDoing().then((message) => {
    console.log(`so what is vin doing? ${message}`)
}).catch((error) => {
    if (error.veryBusy) {
        console.log(error.veryBusy)
    }
    else {
        console.log(
            `hmmmm he is ! ${error.doing} what? ${error.what}`
            )
    }
})

// TO-DO PRINT VERYBUSY if both condiions are true