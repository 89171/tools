#!/usr/bin/env node
var inquirer = require('inquirer')
const { spawn,exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const { shortPaths, getOption } = require('../util')

// fileCheck && fileCreate
const configPath = path.resolve(__dirname, '../config/recentDir.json')
try {
    fs.statSync(configPath)
} catch(e) {
    fs.writeFileSync(configPath,JSON.stringify([]))
}
const recentData = require(configPath)

// parse Option
const {option:addPath} = getOption('add')
const {option:delPath} = getOption('del')
const {option:filterPath} = getOption('filter')
const {option:list} = getOption('ls')

// 查看工作区列表
if(list === undefined) {
    console.log(recentData)
    return
}

// 添加/删除工作台区
if(addPath) {
    const addResolvePath = recentData.unshift(path.resolve(process.cwd(),addPath))
    const index = recentData.indexOf(addResolvePath)
    if(index > -1) {
        console.warn('Already exists.')
    }
    fs.writeFileSync(configPath,JSON.stringify(recentData))
    return
}else if(delPath) {
    const delResolvePath = path.resolve(process.cwd(),delPath)
    const index = recentData.indexOf(delResolvePath)
    if(index > -1) {
        recentData.splice(recentData.indexOf(delResolvePath),1)
        fs.writeFileSync(configPath,JSON.stringify(recentData))
    }else {
        console.warn('Not found!')
    }
    return
}else if(filterPath){
    openPath(filterPath)
    return
}

if(!recentData || recentData.length === 0){
    console.log('No data.')
    return
}
// 打开工作区
!addPath && !delPath && !filterPath && inquirer
  .prompt([
    {
        type: 'list',
        name: 'dir',
        message: 'Which workspace do you want to open?',
        choices: shortPaths(recentData,2),
        loop: false,
        pageSize: 10
    }
  ])
  .then(answers => {
    openPath(answers.dir)
  })
  .catch(error => {
    console.error(error)
  })

  function openPath(target){
    const dirname = recentData.find(item=>item.toLocaleLowerCase().indexOf(target.toLocaleLowerCase()) > -1)
    // process.chdir(dirname)
    spawn('code', [dirname])
    recentData.unshift(recentData.splice(recentData.indexOf(dirname),1)[0])
    fs.writeFileSync(configPath,JSON.stringify(recentData))
    console.log(dirname)
  }