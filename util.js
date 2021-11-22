const supportImages = ['.png','.jpg','.jpeg','.gif','.svg']
const params = process.argv.slice(2)
const path = require('path')
const glob = require('glob')

// 返回指定Option false:没有指定Option  undefined没有指定Option参数
const getOption = (option) => {
    const rest = params.slice(0)
    const flagIndex = rest.indexOf(option)
    const tempArr = flagIndex > -1 && rest.splice(flagIndex,2)
    return {
        option: tempArr && tempArr[1],
        rest
    }
}

// reverse返回指定层级路径
const shortPaths = (paths,deep) => {
    if(!paths || paths.length === 0) return
    if(!Array.isArray(paths)){
        paths = [paths]
    }
    return paths.map(item => {
        const dirList = []
        let tempPath = item
        for(let i=0; i<deep; i++){
            dirList.unshift(path.basename(tempPath))
            tempPath = path.dirname(tempPath)
        }
        return path.join(...dirList)
    })
}

const filesFilter = (reg,options) => {
    return glob.sync(reg,options)
}

module.exports = {
    supportImages,
    getOption,
    shortPaths,
    filesFilter
}