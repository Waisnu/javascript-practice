
const userLeft = true
const userWatchingCatMeme = true

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ":("
            })
        }
        else if (userWatchingCatMeme) {
            reject({
                name: 'user watching cat meme',
                message: 'troll'
            })
        } else {
            resolve('RESOLVED')
        }
    })
}

watchTutorialPromise().then ((message) => {
    console.log('success: ' + message)

}).catch((error) => {
console.log(` 

${error.name}

OOPS

${error.message}`)
})