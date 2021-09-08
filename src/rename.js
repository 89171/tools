#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

let count = 0, failCount = 0

const rename = (oldPath) => {
    console.log(oldPath)
    const args = process.argv.slice(2)
    const newFile = oldPath.replace(args[0],args[1] || '')
    fs.rename(oldPath,newFile,(err)=>{
        if(err){
            failCount++
            console.log(`${oldPath} rename failed! ${err}`)
        }
    })
}

const readDir = (dir) => {
    return fs.readdirSync(dir)
}

const run = (dir) => {
    const dirName = dir || process.cwd()
    const fileList = readDir(dirName)
    fileList.forEach(item=>{
        const pathItem = path.join(dirName,item)
        fs.stat(pathItem,(err,stats)=>{
            if(err){
                console.log(err)
                return
            }
            if(stats.isDirectory()){
                run(path.join(dirName,item))
            }else{
                count++
                rename(pathItem)
            }
        })
    })
    console.log(`${count}个文件重命名成功，${failCount}个文件重命名失败`)
}

run()