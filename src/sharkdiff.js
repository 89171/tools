#!/usr/bin/env node
const $t = {
    get:()=>{
        return {
            format:()=>{}
        }
    }
}
const sourceShark = {'createdriver_head': $t.get('drivermanage.createdriver.head').format(), //新增司机
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
    'certificateInfo2': $t.get('transport.transport.28a').format(),// 驾驶证初次领证日期、准驾车型
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
    'tip_maximum_workingtime': $t.get('fatigue.driving.maximum.working.time').format(), // 为了防止疲劳驾驶，工作时长上限为16小时！
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
    driver_id: $t.get('drivermanage.editdriver.driver_id').format(), // 司机编号
    Approvaltime: $t.get('drivermanage.editdriver.Approvaltime').format(), // 签约时间
    driver_status: $t.get('drivermanage.editdriver.driver_status').format(), // 状态
    city_name: $t.get('drivermanage.editdriver.city_name').format(), // 所属城市
    suppliername: $t.get('drivermanage.editdriver.suppliername').format(), // 所属供应商
    driver_name: $t.get('drivermanage.editdriver.driver_name').format(), // 司机姓名
    driver_english_name: $t.get('drivermanage.editdriver.driver_english_name').format(), // 司机英文名
    driverlanguage: $t.get('drivermanage.editdriver.driverlanguage').format(), // 司机语言
    coopMode: $t.get('drivercarmgt.driver.cooperationmode').format(), // 合作模式
    IdentityNumber: $t.get('drivermanage.editdriver.IdentityNumber').format(), // 证件号码
    areacode: $t.get('drivermanage.editdriver.areacode').format(), // 国际区号
    driver_phone: $t.get('drivermanage.editdriver.driver_phone').format(), // 电话
    driver_phone_check: $t.get('drivermanage.createdriver.prompt1').format(), // 请输入正确的电话号码
    driver_account: $t.get('drivermanage.editdriver.driver_account').format(), // 登录账号
    licenseplatenumber: $t.get('drivermanage.editdriver.licenseplatenumber').format(), // 车牌号
    identitycard: $t.get('drivermanage.editdriver.identitycard').format(), // 身份证
    idprompt: $t.get('drivermanage.createdriver.idprompt').format(), // 请输入正确的身份证号
    issuedate: $t.get('drivermanage.editdriver.issuedate').format(), // 驾驶证初次领证日期
    class: $t.get('drivermanage.editdriver.class').format(), // 准驾车型
    valueddate: $t.get('drivermanage.editdriver.valueddate').format(), // 驾驶证有效期
    email_address: $t.get('drivermanage.editdriver.email_address').format(), // 邮箱
    emailprompt: $t.get('drivermanage.createdriver.emailprompt').format(), // 请输入正确的电子邮箱
    wechat: $t.get('drivermanage.editdriver.wechat').format(), // 微信
    driver_address: $t.get('drivermanage.editdriver.driver_address').format(), // 司机住址
    Willingvehicle: $t.get('drivermanage.editdriver.Willingvehicle').format(), // 意愿车型
    transportcapacitylist: $t.get('drivermanage.editdriver.transportcapacitylist').format(), // 所属运力组
    transportcapacitymode: $t.get('drivermanage.editdriver.transportcapacitymode').format(), // 模式
    transportcapacityname: $t.get('drivermanage.editdriver.transportcapacityname').format(), // 运力组
    worktime: $t.get('drivermanage.editdriver.worktime').format(), // 工作时段
    certificatephoto: $t.get('drivermanage.editdriver.certificatephoto').format(), // 证照
    Driverlicensephoto: $t.get('drivermanage.editdriver.Driverlicensephoto').format(), // 驾驶证照片
    idCardPhoto: $t.get('transport.recruitment_of_approval.driver.id_card_photo').format(), // 身份证照片
    Idphoto: $t.get('drivermanage.editdriver.Idphoto').format(), // 证件照正面
    IdBackphoto: $t.get('drivercarmgt.driver.identificationphoto.reverseside').format(), // 证件照背面
    profilephoto: $t.get('drivermanage.editdriver.profilephoto').format(), // 头像
    Driverandvehiclephoto: $t.get('drivermanage.editdriver.Driverandvehiclephoto').format(), // 人车合照
    onlinecarHailingcertificatedriverphoto: $t.get('drivermanage.editdriver.onlinecarHailingcertificatedriverphoto').format(), // 网约车驾驶员照片
    noCriminalProofImg: $t.get('drivercarmgt.driver.innocentprove').format(), // 无罪证明
    otherIdPhoto: $t.get('transport.recruitment_of_approval.driver.other_photos').format(), // 其他证件照片
    submit: $t.get('drivermanage.editdriver.submit').format(), // 提交
    changelog: $t.get('drivermanage.editdriver.changelog').format(), // 变更历史
    leavelog: $t.get('drivermanage.editdriver.leavelog').format(), // 请假历史

    check2: $t.get('Transport.check.2').format(), // 通过
    check1: $t.get('Transport.check.1').format(), // 不通过
    check3: $t.get('Transport.check.3').format(), // 需要复核
    Transport_checking: $t.get('Transport.checking').format(), // 核验中
    resultsDetail: $t.get('tripartite.verification.results.detail').format(), // 三方核验结果
    clickUpload: $t.get('carmanage.createcar.upload').format(), //点击上传
    tip: $t.get('toast.success').format(), //温馨提示
    tipSuccess: $t.get('toast.success.info').format(), //操作成功
    tipErr: $t.get('toast.failure').format(), //系统错误
    confirm: $t.get('popup.confirm.confirm').format(), //提交
    cancel: $t.get('popup.confirm.cancel').format(), //取消
    manage_input: $t.get('manage.create.enter').format(), // 请输入
    manage_select: $t.get('manage.create.select.copy').format(), // 请选择
    manage_upload: $t.get('manage.create.upload').format(), // 请上传
    confirm_confirm_btn: $t.get('popup.confirm.confirm').format(), // 确认
    confirm_canel_btn: $t.get('popup.confirm.cancel').format(), // 取消
    'capacity.carunbund': $t.get('drivercarmgt.capacity.carunbund').format(), // 存在司机当前绑定的运力组需要司机绑定车辆，确定解绑车辆后，将自动解绑不符合要求的运力组
    tip_maximum_workingtime: $t.get('fatigue.driving.maximum.working.time').format(), // 为了防止疲劳驾驶，工作时长上限为16小时！

    hint: $t.get('capacitygroupmgt.drivercooperationmode.hint').format(), // 合作模式根据运力组情况默认对应，不可手动调整 ......
    checkListone: $t.get('Transport.recruitmentApproval.checkList.one').format(), // 操作失败，请先修改需要复核状态为通过或不通过，此操作需要人工判断证件是否合格
    ocrsuccess: $t.get('transport.transport.23').format(),// OCR识别成功
    ocrfailed: $t.get('transport.transport.24').format(),// OCR识别失败
    uploadagain: $t.get('transport.transport.27').format(),// 请重新上传
    idInfo: $t.get('transport.transport.25').format(),// 司机姓名、身份证
    certificateInfo: $t.get('transport.transport.28').format(),// 驾驶证初次领证日期、准驾车型、驾驶证有效期
    certificateInfo2: $t.get('transport.transport.28a').format(),// 驾驶证初次领证日期、准驾车型
    replaceSuccess: $t.get('transport.transport.26').format(),// 字段信息填写成功，请确认信息准确性。
    DownLoadError:$t.get('transport.transport.30').format(), // 文件下载失败。
    EmptyImageError:$t.get('transport.transport.31').format(), // 图片内容为空。
    ImageBlur:$t.get('transport.transport.32').format(), // 图片模糊。
    ImageDecodeFailed:$t.get('transport.transport.33').format(), // 图片解码失败。
    ImageNoText:$t.get('transport.transport.36').format(), // 图片中未检测到文本。
    ImageSizeTooLarge:$t.get('transport.transport.37').format(), // 图片尺寸过大，请参考输出参数中关于图片大小限制的说明。
    UnKnowError:$t.get('transport.transport.38').format(), // 未知错误。
    UnOpenError:$t.get('transport.transport.39').format(), // 服务未开通。
    InvalidParameterValueLimit:$t.get('transport.transport.40').format(), // 参数值错误。
    TooLargeFileError:$t.get('transport.transport.41').format(), // 文件内容太大。
    ChargeStatusException:$t.get('transport.transport.42').format(), // 计费状态异常。

    drivermanage_rebund: $t.get('Drivermanagement1.one').format(), // 当前司机所属运力组已全部解绑，请去运力组管理平台重新绑定。
    account_change: $t.get('Drivermanagement1.two').format(), // 你此次操作“登录账号”信息更改会对该司机待服务订单进行改派，可能会对司机处罚，是否确认继续执行？
    vehicle_change: $t.get('Drivermanagement1.three').format(), // 你此次操作“车牌号”信息更改会对该司机待服务订单进行改派，可能会对司机处罚；并且存在司机当前绑定的运力组需要司机绑定车辆，确定解绑车辆后，将自动解绑不符合要求的运力组 是否确认继续执行？
    vehicle_change2: $t.get('Drivermanagement1.four').format(), // 你此次操作“车牌号”信息更改会对该司机待服务订单进行改派，可能会对司机处罚，是否确认继续执行？
    resend_change2: $t.get('Drivermanagement1.six').format(), // 你此次操作会对该司机待服务订单进行改派，可能会对司机处罚；并且存在司机当前绑定的运力组需要司机绑定车辆，确定解绑车辆后，将自动解绑不符合要求的运力组 是否确认继续执行？

    forbidden_change: $t.get('id.card.name.number.can.not.change').format(), // 身份证姓名和身份证号不可变更
    workingtime: $t.get('capacitygroupmgt.fulltimegroup.workingtime').format(), // 当前司机为全职报名成功状态，工作时段以赛道班次时段为准，不可修改
    changehint: $t.get('capacitygroupmgt.changehint').format(), // 变更提示
    carchangehint: $t.get('capacitygroupmgt.changedetail.a').format(), // 当前操作涉及司机车型变更，变更后该司机将从所关联的所有原城市“全职司机指派-报名制”运力组中自动解绑，是否确认继续？
    citychangehint: $t.get('capacitygroupmgt.hangedetail.b').format(), // 当前操作涉及司机城市变更，变更后该司机将从所关联的所有原车型“全职司机指派-报名制”运力组中自动解绑，是否确认继续？
    two_require: $t.get('two.certificate.require').format(), // 以下两证件必填其一：
    two_upload_one: $t.get('network.car.license.other.documents.upload').format(), // 网约车驾驶证和其他证件必须上传一个
    modification_success: $t.get('application.modification.success').format(), // 修改申请成功
    approval_notice: $t.get('modification.submit.approval.notice').format(), // 您提交的修改已进入审批流，请耐心等待通知
    check_the_popup_two: $t.get('transport.vehicle_add.Check_the_popup_two').format(), //当前选择得供应商所服务城市不含%1$s
    saveerror: $t.get('common.message.error.saveerror').format(), // '保存失败'
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


