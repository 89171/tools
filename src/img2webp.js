#!/usr/bin/env node
const sharp = require('sharp')
const path = require('path')
const { supportImages } = require('../util')

let params = process.argv.slice(2)

const pFlagIndex = params.indexOf('-p')
const tempArr = pFlagIndex > -1 && params.splice(pFlagIndex,2)
const qualityString = +(tempArr && tempArr[1])
const quality = +qualityString ? (+qualityString >= 100 ? 100 : (+qualityString<=30 ? 75 : +qualityString)) :  75
console.log(quality)
params.forEach(item=>{
    const filePath = path.resolve(item)
    console.log(filePath)
    if(supportImages.indexOf(path.extname(filePath)) === -1) return;
    const fileName = `${path.dirname(filePath)}/${path.basename(filePath,path.extname(filePath))}.webp`
    console.log(fileName)
    sharp(filePath)
        .webp({quality})
        .toFile(fileName)
})