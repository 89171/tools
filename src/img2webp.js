#!/usr/bin/env node
const sharp = require('sharp')
const path = require('path')
const { getOption,supportImages } = require('../util')

const {option:qualityString,list} = getOption('-p')
const quality = +qualityString ? (+qualityString >= 100 ? 100 : (+qualityString<=30 ? 75 : +qualityString)) :  75

list.forEach(item=>{
    const filePath = path.resolve(item)
    console.log(filePath)
    if(supportImages.indexOf(path.extname(filePath)) === -1) return;
    const fileName = `${path.dirname(filePath)}/${path.basename(filePath,path.extname(filePath))}.webp`
    console.log(fileName)
    sharp(filePath)
        .webp({quality})
        .toFile(fileName)
})