#!/usr/bin/env node
const $t = {
    get:()=>{
        return {
            format:()=>{}
        }
    }
}
const sourceShark = {
    'createdriver_head': $t.get('drivermanage.createdriver.head').format(), //新增司机
      'suppliername': $t.get('drivermanage.createdriver.suppliername').format(), // 供应商
      'city_name': $t.get('drivermanage.createdriver.city_name').format(), // 所属城市
      'driver_name': $t.get('drivermanage.createdriver.driver_name').format(), // 司机姓名
      'driver_english_name': $t.get('drivermanage.createdriver.driver_english_name').format(), // 司机英文名
      'driverlanguage': $t.get('drivermanage.createdriver.driverlanguage').format(), // 司机语言
      'coopMode': $t.get('drivercarmgt.driver.cooperationmode').format(), // 合作模式
      'areacode': $t.get('drivermanage.createdriver.areacode').format(), // 国际区号
      'driver_phone': $t.get('drivermanage.createdriver.driver_phone').format(), // 电话
      'driver_phone_check': $t.get('drivermanage.createdriver.prompt1').format(), // 请输入正确的电话号码
      'driver_account': $t.get('drivermanage.createdriver.driver_account').format(), // 登录账号
      'initialpassword': $t.get('drivermanage.createdriver.initialpassword').format(), // 初始密码
      'initialpassword_check': $t.get('drivermanage.createdriver.prompt2').format(), // 请输入数字和字母6-15位密码
      'licenseplatenumber': $t.get('drivermanage.createdriver.licenseplatenumber').format(), // 车牌号
      'identityNumber': $t.get('drivermanage.createdriver.IdentityNumber').format(), // 证件号码
      'willingvehicle': $t.get('drivermanage.createdriver.Willingvehicle').format(), // 意愿车型
      'email_address': $t.get('drivermanage.createdriver.email_address').format(), // 邮箱
      'emailprompt': $t.get('drivermanage.createdriver.emailprompt').format(), // 请输入正确的电子邮箱
      'wechat': $t.get('drivermanage.createdriver.wechat').format(), // 微信
      'worktime': $t.get('drivermanage.createdriver.worktime').format(), // 工作时段
      'identityCard': $t.get('drivermanage.createdriver.identityCard').format(), // 身份证
      'idprompt': $t.get('drivermanage.createdriver.idprompt').format(), // 请输入正确的身份证号
      'issuedate': $t.get('drivermanage.createdriver.issuedate').format(), // 驾驶证初次领证日期
      'class': $t.get('drivermanage.createdriver.class').format(), // 准驾车型
      'valueddate': $t.get('drivermanage.createdriver.valueddate').format(), // 驾驶证有效期
      'certificatephoto': $t.get('drivermanage.createdriver.certificatephoto').format(), // 证照
      'driverlicensephoto': $t.get('drivermanage.createdriver.Driverlicensephoto').format(), // 驾驶证照片
      'iDphoto': $t.get('drivermanage.createdriver.IDphoto').format(), // 证件照正面
      'IdBackphoto': $t.get('drivercarmgt.driver.identificationphoto.reverseside').format(), // 证件照背面
      'profilephoto': $t.get('drivermanage.createdriver.profilephoto').format(), // 头像
      'driverandvehiclephoto': $t.get('drivermanage.createdriver.Driverandvehiclephoto').format(), // 人车合照
      'onlinecarHailingcertificatedriverphoto': $t.get('drivermanage.createdriver.onlinecarHailingcertificatedriverphoto').format(), // 网约车驾驶员照片
      'otherIdPhoto': $t.get('transport.recruitment_of_approval.driver.other_photos').format(), // 其他证件照片
      'noCriminalProofImg': $t.get('drivercarmgt.driver.innocentprove').format(), // 无罪证明
      'submit': $t.get('drivermanage.createdriver.submit').format(), // 提交
      'worktime_addinfo': $t.get('drivermanage.createdriver.worktime.addinfo').format(), // 请选择时段
      'overC2': $t.get('transport.transport.17').format(), // 提交失败，司机准驾车型不满足平台要求（限制：准驾车型：C2以上）
      'dirver_license_mismatch': $t.get('transport.transport.19').format(), // 提交失败，司机驾驶证有效期不满足平台要求（限制：驾驶证没过有效期）
      'drivingage': $t.get('transport.transport.16').format(), // 提交失败，司机驾龄不满足平台要求（限制：司机驾龄>3年）
      'nameMatch': $t.get('transport.transport.21').format(), // 提交失败，驾驶证姓名一致性不满足平台要求（  限制：驾驶证姓名需与司机姓名一致）
      'idMatch': $t.get('transport.transport.20').format(), // 提交失败，驾驶证号一致性不满足平台要求（限制：驾驶证号需与司机身份证号一致）
      'driverage': $t.get('transport.transport.15').format(), // 提交失败，司机年龄不满足平台要求（限制：男性<60周岁 ；女性<55周岁）
      'overage': $t.get('transport.transport.18').format(), // 提交失败，司机身份证有效期不满足平台要求（限制：身份证没过有效期
      'ocrsuccess': $t.get('transport.transport.23').format(),// OCR识别成功
      'ocrfailed': $t.get('transport.transport.24').format(),// OCR识别失败
      'uploadagain': $t.get('transport.transport.27').format(),// 请重新上传
      'idInfo': $t.get('transport.transport.25').format(),// 司机姓名、身份证
      'certificateInfo': $t.get('transport.transport.28').format(),// 驾驶证初次领证日期、准驾车型、驾驶证有效期
      'replaceSuccess': $t.get('transport.transport.26').format(),// 字段信息填写成功，请确认信息准确性。
      'DownLoadError':$t.get('transport.transport.30').format(), // 文件下载失败。
      'EmptyImageError':$t.get('transport.transport.31').format(), // 图片内容为空。
      'ImageBlur':$t.get('transport.transport.32').format(), // 图片模糊。
      'ImageDecodeFailed':$t.get('transport.transport.33').format(), // 图片解码失败。
      'ImageNoText':$t.get('transport.transport.36').format(), // 图片中未检测到文本。
      'ImageSizeTooLarge':$t.get('transport.transport.37').format(), // 图片尺寸过大，请参考输出参数中关于图片大小限制的说明。
      'UnKnowError':$t.get('transport.transport.38').format(), // 未知错误。
      'UnOpenError':$t.get('transport.transport.39').format(), // 服务未开通。
      'InvalidParameterValueLimit':$t.get('transport.transport.40').format(), // 参数值错误。
      'TooLargeFileError':$t.get('transport.transport.41').format(), // 文件内容太大。
      'ChargeStatusException':$t.get('transport.transport.42').format(), // 计费状态异常。
      'hint': $t.get('capacitygroupmgt.drivercooperationmode.hint').format(), // 合作模式根据运力组情况默认对应，不可手动调整 ......
      'tip_maximum_workingtime': $t.get('fatigue.driving.maximum.working.time').format(), // 为了防止疲劳驾驶，工作时长上限为14小时！
      'clickUpload': $t.get('carmanage.createcar.upload').format(), //点击上传
      'tip': $t.get('toast.success').format(),//温馨提示
      'tipSuccess': $t.get('toast.success.info').format(),//操作成功
      'tipErr': $t.get('toast.failure').format(),//系统错误
      'confirm': $t.get('popup.confirm.confirm').format(),//提交
      'cancel': $t.get('popup.confirm.cancel').format(),//取消
      'manage_input': $t.get('manage.create.enter').format(), // 请输入
      'manage_select': $t.get('manage.create.select.copy').format(), // 请选择
      'manage_upload': $t.get('manage.create.upload').format(), // 请上传
		'manage_nodata': $t.get('manage.list.share').format(), //暂无数据
		two_require: $t.get('two.certificate.require').format(), // 以下两证件必填其一：
		two_upload_one: $t.get('network.car.license.other.documents.upload').format() // 网约车驾驶证和其他证件必须上传一个
}
const targetShark = {
    createdriver_head: $t.get('drivermanage.createdriver.head').format(), //新增司机
    suppliername: $t.get('drivermanage.createdriver.suppliername').format(), // 供应商
    city_name: $t.get('drivermanage.createdriver.city_name').format(), // 所属城市
    driver_name: $t.get('drivermanage.createdriver.driver_name').format(), // 司机姓名
    driver_english_name: $t.get('drivermanage.createdriver.driver_english_name').format(), // 司机英文名
    driverlanguage: $t.get('drivermanage.createdriver.driverlanguage').format(), // 司机语言
    coopMode: $t.get('drivercarmgt.driver.cooperationmode').format(), // 合作模式
    areacode: $t.get('drivermanage.createdriver.areacode').format(), // 国际区号
    driver_phone: $t.get('drivermanage.createdriver.driver_phone').format(), // 电话
    driver_phone_check: $t.get('drivermanage.createdriver.prompt1').format(), // 请输入正确的电话号码
    driver_account: $t.get('drivermanage.createdriver.driver_account').format(), // 登录账号
    initialpassword: $t.get('drivermanage.createdriver.initialpassword').format(), // 初始密码
    initialpassword_check: $t.get('drivermanage.createdriver.prompt2').format(), // 请输入数字和字母6-15位密码
    licenseplatenumber: $t.get('drivermanage.createdriver.licenseplatenumber').format(), // 车牌号
    identityNumber: $t.get('drivermanage.createdriver.IdentityNumber').format(), // 证件号码
    willingvehicle: $t.get('drivermanage.createdriver.Willingvehicle').format(), // 意愿车型
    email_address: $t.get('drivermanage.createdriver.email_address').format(), // 邮箱
    emailprompt: $t.get('drivermanage.createdriver.emailprompt').format(), // 请输入正确的电子邮箱
    wechat: $t.get('drivermanage.createdriver.wechat').format(), // 微信
    worktime: $t.get('drivermanage.createdriver.worktime').format(), // 工作时段
    identityCard: $t.get('drivermanage.createdriver.identityCard').format(), // 身份证
    idprompt: $t.get('drivermanage.createdriver.idprompt').format(), // 请输入正确的身份证号
    issuedate: $t.get('drivermanage.createdriver.issuedate').format(), // 驾驶证初次领证日期
    class: $t.get('drivermanage.createdriver.class').format(), // 准驾车型
    valueddate: $t.get('drivermanage.createdriver.valueddate').format(), // 驾驶证有效期
    certificatephoto: $t.get('drivermanage.createdriver.certificatephoto').format(), // 证照
    driverlicensephoto: $t.get('drivermanage.createdriver.Driverlicensephoto').format(), // 驾驶证照片
    iDphoto: $t.get('drivermanage.createdriver.IDphoto').format(), // 证件照正面
    IdBackphoto: $t.get('drivercarmgt.driver.identificationphoto.reverseside').format(), // 证件照背面
    profilephoto: $t.get('drivermanage.createdriver.profilephoto').format(), // 头像
    driverandvehiclephoto: $t.get('drivermanage.createdriver.Driverandvehiclephoto').format(), // 人车合照
    onlinecarHailingcertificatedriverphoto: $t.get('drivermanage.createdriver.onlinecarHailingcertificatedriverphoto').format(), // 网约车驾驶员照片
    otherIdPhoto: $t.get('transport.recruitment_of_approval.driver.other_photos').format(), // 其他证件照片
    noCriminalProofImg: $t.get('drivercarmgt.driver.innocentprove').format(), // 无罪证明
    submit: $t.get('drivermanage.createdriver.submit').format(), // 提交
    worktime_addinfo: $t.get('drivermanage.createdriver.worktime.addinfo').format(), // 请选择时段
    overC2: $t.get('transport.transport.17').format(), // 提交失败，司机准驾车型不满足平台要求（限制：准驾车型：C2以上）
    dirver_license_mismatch: $t.get('transport.transport.19').format(), // 提交失败，司机驾驶证有效期不满足平台要求（限制：驾驶证没过有效期）
    drivingage: $t.get('transport.transport.16').format(), // 提交失败，司机驾龄不满足平台要求（限制：司机驾龄>3年）
    nameMatch: $t.get('transport.transport.21').format(), // 提交失败，驾驶证姓名一致性不满足平台要求（  限制：驾驶证姓名需与司机姓名一致）
    idMatch: $t.get('transport.transport.20').format(), // 提交失败，驾驶证号一致性不满足平台要求（限制：驾驶证号需与司机身份证号一致）
    driverage: $t.get('transport.transport.15').format(), // 提交失败，司机年龄不满足平台要求（限制：男性<60周岁 ；女性<55周岁）
    overage: $t.get('transport.transport.18').format(), // 提交失败，司机身份证有效期不满足平台要求（限制：身份证没过有效期
    ocrsuccess: $t.get('transport.transport.23').format(), // OCR识别成功
    ocrfailed: $t.get('transport.transport.24').format(), // OCR识别失败
    uploadagain: $t.get('transport.transport.27').format(), // 请重新上传
    idInfo: $t.get('transport.transport.25').format(), // 司机姓名、身份证
    certificateInfo: $t.get('transport.transport.28').format(), // 驾驶证初次领证日期、准驾车型、驾驶证有效期
    replaceSuccess: $t.get('transport.transport.26').format(), // 字段信息填写成功，请确认信息准确性。
    DownLoadError: $t.get('transport.transport.30').format(), // 文件下载失败。
    EmptyImageError: $t.get('transport.transport.31').format(), // 图片内容为空。
    ImageBlur: $t.get('transport.transport.32').format(), // 图片模糊。
    ImageDecodeFailed: $t.get('transport.transport.33').format(), // 图片解码失败。
    ImageNoText: $t.get('transport.transport.36').format(), // 图片中未检测到文本。
    ImageSizeTooLarge: $t.get('transport.transport.37').format(), // 图片尺寸过大，请参考输出参数中关于图片大小限制的说明。
    UnKnowError: $t.get('transport.transport.38').format(), // 未知错误。
    UnOpenError: $t.get('transport.transport.39').format(), // 服务未开通。
    InvalidParameterValueLimit: $t.get('transport.transport.40').format(), // 参数值错误。
    TooLargeFileError: $t.get('transport.transport.41').format(), // 文件内容太大。
    ChargeStatusException: $t.get('transport.transport.42').format(), // 计费状态异常。
    hint: $t.get('capacitygroupmgt.drivercooperationmode.hint').format(), // 合作模式根据运力组情况默认对应，不可手动调整 ......
    tip_maximum_workingtime: $t.get('fatigue.driving.maximum.working.time').format(), // 为了防止疲劳驾驶，工作时长上限为16小时！
    clickUpload: $t.get('carmanage.createcar.upload').format(), //点击上传
    tip: $t.get('toast.success').format(), //温馨提示
    tipSuccess: $t.get('toast.success.info').format(), //操作成功
    tipErr: $t.get('toast.failure').format(), //系统错误
    confirm: $t.get('popup.confirm.confirm').format(), //提交
    cancel: $t.get('popup.confirm.cancel').format(), //取消
    manage_input: $t.get('manage.create.enter').format(), // 请输入
    manage_select: $t.get('manage.create.select.copy').format(), // 请选择
    manage_upload: $t.get('manage.create.upload').format(), // 请上传
    manage_nodata: $t.get('manage.list.share').format(), //暂无数据
    two_require: $t.get('two.certificate.require').format(), // 以下两证件必填其一：
    two_upload_one: $t.get('network.car.license.other.documents.upload').format(), // 网约车驾驶证和其他证件必须上传一个
    productionLine: $t.get("documents.require.productionLine").format(), // 产线
}
const sourceKeys = Object.keys(sourceShark)
const targetKeys = Object.keys(targetShark)

const sourceUnique = []
const targetUnique = []

sourceKeys.forEach(item => {
    targetKeys.indexOf(item) === -1 && sourceUnique.push(item)
})

targetKeys.forEach(item => {
    sourceKeys.indexOf(item) === -1 && targetUnique.push(item)
})
const keys = sourceUnique.concat(targetUnique)
console.log(`不同的key有${keys.length}个:`,keys)


