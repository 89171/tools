const supportImages = ['.png','.jpg','.jpeg','.gif','.svg']
const params = process.argv.slice(2)

const getOption = (option) => {
    const list = params.slice(0)
    const flagIndex = list.indexOf(option)
    const tempArr = flagIndex > -1 && list.splice(flagIndex,2)
    return {
        option: tempArr && tempArr[1],
        list
    }
} 

module.exports = {
    supportImages,
    getOption
}