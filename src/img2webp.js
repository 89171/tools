#!/usr/bin/env node
const sharp = require('sharp')
const path = require('path')
const { getOption,supportImages } = require('../util')

const {option:qualityString,rest} = getOption('-p')
const quality = +qualityString ? (+qualityString >= 100 ? 100 : (+qualityString<=30 ? 75 : +qualityString)) :  75

rest.forEach(item=>{
    const filePath = path.resolve(item)
    if(supportImages.indexOf(path.extname(filePath)) === -1) {
        console.log('Not support!')
        return
    }
    const fileName = `${path.dirname(filePath)}/${path.basename(filePath,path.extname(filePath))}.webp`
    console.log(fileName)
    sharp(filePath)
        .webp({quality})
        .toFile(fileName)
})