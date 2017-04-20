/**
 * Created by imsunhao on 2017/3/13.
 */
/**
 * TODO 测试新版数据库 wms_rb Menu
 *  入库操作 弹出层 样式调整 应用走马灯的猜想
 * TODO 测试入库操作
 *  完成添加任务流程页面
 * TODO 使用计算属性完成table的日期
 *
 *
 *
 *
 **/
/**TODO 测试 接口需求
 *
 * ------------ 登录页面 -----------------
 * auth/{username}/{password}
 * TODO 需求 登录请求 接口 1.登录
 * ------------ 业务处理 -----------------
 * TODO 需求 入库流程 接口
 *      1.新建
 *      2.删除
 *      3.修改
 * TODO 需求 入库操作 接口
 *      1.添加
 *      2.条件搜索
 *      3.删除
 *      4.请求历史记录
 *      5.请求入库明细 TODO 我认为只需要 rkDocsList 就好
 *      6.分配
 *      7.再次收货
 *      8.打印
 *      9.货品编号 模糊查询
 * ------------ 资源管理 -----------------
 * TODO 需求 仓库管理 接口
 *      1.添加
 *      2.get仓库
 *      3.修改 库区区域
 *      4.修改 库区属性
 *      5.查看 库区明细
 *      6.get 库区对应库位信息
 *
 * TODO
 *
 *
 *
 **/
/**数据库数据
 *
 */
/** TODO 系统配置
 *
 */
    /**      用户管理     userManagement
     *
     * */
        /**  0 分页获取 用户信息                        /user/page
         *          ruUserName          用户名
         *          ruLoginName         账户
         *          ruUserType          用户类型
         *                                  0.普通
         *                                  1.堆高车
         *                                  2.高位叉车
         *          ruPhone             手机  联系方式???
                    ruStatus            状态(int)
                                            0.禁用(软删除)
                                            1启用
                    ruIspda             是否允许登陆PDA(tinyint)
         *                                  0.是
         *                                  1.否
         *          ruUserZyq           高位叉车作业区域
         *          ruSex               性别(tinyint)
         *                                  1.男
         *                                  0.女
         *                                  json数据中1对应true 0对应false
         *           ruHomeaddress       家庭住址
         *           ruRemarks           备注

 **/
        /**     TODO 1  新增-启用-配置角色            POST /user
         *          ruUserName          用户昵称/名
         *          ruLoginPassword     密码
         *          ruPhone             手机
         *          ruTelephone         电话/座机
         *          ruQicq              qq
         *          ruIspda             是否允许登陆pda
         *                                  1.是
         *                                  0.否
         *          ruLoginName         登录账户
         *          ruEmail             邮箱地址
         *          ruSex               性别
         *                                  1.男
         *                                  0.女
         *                                  json数据中1对应true 0对应false
         *          ruBirthday          生日/出生日期
         *          ruHomeaddress       家庭住址
         *          ruUserType          用户类型
         *                                  0.普通
         *                                  1.堆高车
         *                                  2.高位叉车
         *                                  */
        /** 2 启用                               /user/liveUsersByUids
         *          user_ids    被勾选的用户id集合
         *          */
        /** 3 配置角色                           /user/userAddRoles
         *          用户配置角色
         *          userId         用户id
         *          roleIds        被勾选的角色id集合
         *          */
        /** 4 编辑                               /user
         *          ruUserName          用户昵称/名
         *          ruLoginPassword     密码
         *          ruPhone             手机
         *          ruTelephone         电话/座机
         *          ruQicq              qq
         *          ruIspda             是否允许登陆pda
         *                                  1.是
         *                                  0.否
         *          ruLoginName         登录账户
         *          ruEmail             邮箱地址
         *          ruSex               性别
         *                                  1.男
         *                                  0.女
         *                                  json数据中1对应true 0对应false
         *          ruBirthday          生日/出生日期
         *          ruHomeaddress       家庭住址
         *          ruUserType          用户类型
         *                                  0.普通
         *                                  1.堆高车
         *                                  2.高位叉车
         *                                  */
        /** 5 重置密码                             /user/resetPwd
         *          ids    被勾选的用户id集合
         *          */
        /** 6 禁用                               /user/dieUsersByUids
         *          user_ids    被勾选的用户id集合
         *          */
        /**  7 用户名不允许重复                  /user/isRepeatByUsername/{username}
         *          username    用户名称
         *          */
        /**  8 登录账号不允许重复              /user/isRepeatByLoginname/{loginname}
         *          loginname   登录账号
         *          */
        /** 9 设置 用户 角色            POST /user/userAddRoles
         *          userId         用户id
         *          roleIds        被勾选的角色id
         *          */
        /** 11 用户管理 根据id返回用户角色信息     POST /role/findByUserId/{user_id}
         *          user_id              用户id
         **/
        /**  12 请求所有角色                      /role/page  post
         *
         draw            没有意义   0
         pageNum         当前页     1
         pageSize        每页大小   999
         */
    /**   角色管理   roleManagement
     *
     */
        /** 0 分页获取 角色信息                        /role
         *          rrRoleId             角色id
         *          rrName               角色name
         *          rrRemarks            备注
         *          rrStatus             状态
         1.可用
         0.软删除禁用
         *          rrCjsj               创建时间
         *          */
        /** TODO 1 新增-启用-配置仓库-配置客户-配置菜单
         *          rrName               角色名称
         *          rrRemarks            备注
         *          */
        /** TODO 2 启用
         *          rrStatus             状态
         *          */
        /** TODO 3 配置仓库   /role/roleAddArehouses
         *          角色配置仓库
         *          roleId              角色id
         *          arehouseIds         被勾选的仓库id集合
         *          */
        /** TODO 4 配置客户  /role/roleAddClients
         *         角色配置客户
         *         roleId              角色id
         *         clientIds           被勾选的客户id集合
         *         */
        /** TODO 5 配置菜单   /role/roleAddMenus
         *          角色配置菜单
         *         roleId              角色id
         *         menuIds             被勾选的菜单id集合
         *         */
        /** TODO 6 禁用
         *          禁用
         *          rrStatus             状态
         *                                  0.禁用
         *                                  */
        /** TODO 7 编辑
         *          rrName               角色name
         *          rrRemarks            备注
         **/
        /** TODO 8 角色名称不允许重复的接口
         *          rrName               角色name
         *          */
        /** 9 查询所有仓库   POST /arehouse/page
         * 参数
         * {
                "pageNum": 1,
                "pageSize": 999,
                "draw": 1,
                "baStatus":1
            }
         * 参数说明
         *     baName            仓库名称
         *     baArehouseId      id
         **/
        /** 10 查询所有客户   POST /client/page
         * 参数
         * {
                "pageNum": 1,
                "pageSize": 999,
                "draw": 1,
                "bcStatus":1
            }
         * 参数说明
         *     bcCname      客户名称
         *     bcClientId   客户id
         **/
    /** 仓库管理/配置   warehouseConfiguration
     *
     */
        /**  0 分页获取 仓库详情   POST /arehouse/page
         * 参数
         * {
                "baName": "",
                "baScontacts": "",
                "baCtype": "",
                "baStatus": "",
                "pageNum": 1,
                "pageSize": 1,
                "draw": 1
            }
         参数说明
              baArehouseId      id
              baName            仓库名称
              baAddr            仓库地址
              baScity           所在地市
              baScontacts       联系人
              baPhone           电话
              baAcreage         面积
              baCtype           仓库类型
              baHumidity        相对湿度
              baFax             传真
              baPostoffice      邮编
              baIsti            是否需要维护ti值
              baStatus          状态
              baClientId        客户id
              baRemarks         备注
              baCreatetime      创建时间
              baPgroupinfo      平面图信息
        /**  1 新增 POST /arehouse
         * 参数
         * {
                "baArehouseId": 0,
                "baName": "23221",
                "baAddr": "122",
                "baScity": "122",
                "baScontacts": "string",
                "baPhone": "string",
                "baAcreage": "string",
                "baCtype": "string",
                "baHumidity": "string",
                "baFax": "string",
                "baPostoffice": "string",
                "baIsti": 0,
                "baStatus": 0,
                "baClientId": 0,
                "baRemarks": "string",
                "baCreatetime": "2017-04-06T06:05:11.376Z",
                "baPgroupinfo": "string",
                "arehouseKqs": [
                    {
                        "baqKqId": 8,
                        "baqArehouseId": 0,
                        "baqKqName": "string",
                        "baqIsdel": 0,
                        "baqStatus": 0,
                        "baseRegions": [
                            {
                                "brgRegionId": 8,
                                "brgArehouseId": 0,
                                "brgRegionNo": "string",
                                "brgKqId": 0,
                                "brgRegionStatus": 0
                             }
                        ]
                       }
                   ]
            }
         参数说明
                baArehouseId    仓库id 主键
                baName          仓库名称
                baAddr          仓库地址
                baScity         所在地市
                baScontacts     联系人
                baPhone         电话
                baAcreage       面积
                baCtype         仓库类型
                baHumidity      相对湿度
                baFax           传真
                baPostoffice    邮编
                baIsti          是否需要维护ti值 1:存在ti 2:不存在ti
                baStatus        状态1可用 0软删除
                baClientId      客户id
                baRemarks       备注
                baCreatetime    创建时间
                baPgroupinfo    平面图信息
         *
         */
        /** 1  编辑 PUT /arehouse
         * 参数
         * {
               "baArehouseId": 2,
               "baName": "000",
               "baAddr": "000",
               "baScity": "222",
               "baScontacts": "string",
               "baPhone": "string",
               "baAcreage": "string",
               "baCtype": "string",
               "baHumidity": "string",
               "baFax": "string",
               "baPostoffice": "string",
               "baIsti": 0,
               "baStatus": 0,
               "baClientId": 1,
               "baRemarks": "string",
               "baCreatetime": "2017-04-06T06:05:11.379Z",
               "baPgroupinfo": "string",
               "arehouseKqs": [
               {
                   "baqKqId": 1,
                   "baqArehouseId": 1,
                   "baqKqName": "string",
                   "baqIsdel": 0,
                   "baqStatus": 0,
                   "baseRegions": [
                       {
                           "brgRegionId": 1,
                           "brgArehouseId": 0,
                           "brgRegionNo": "string",
                           "brgKqId": 0,
                           "brgRegionStatus": 0
                       }
                   ]
               }
               ]
           }
         参数说明
                baArehouseId    仓库id 主键
                baName          仓库名称
                baAddr          仓库地址
                baScity         所在地市
                baScontacts     联系人
                baPhone         电话
                baAcreage       面积
                baCtype         仓库类型
                baHumidity      相对湿度
                baFax           传真
                baPostoffice    邮编
                baIsti          是否需要维护ti值 1:存在ti 2:不存在ti
                baStatus        状态1可用 0软删除
                baClientId      客户id
                baRemarks       备注
                baCreatetime    创建时间
                baPgroupinfo    平面图信息
         */
        /**  2 新增 POST /arehouse
         * 参数
         * {

                        "baName": "23221",
                        "baAddr": "122",
                        "baScity": "122",
                        "baScontacts": "string",
                        "baPhone": "string",
                        "baAcreage": "string",
                        "baCtype": "string",
                        "baHumidity": "string",
                        "baFax": "string",
                        "baPostoffice": "string",
                        "baIsti": 0,
                        "baStatus": 0,
                        "baClientId": 0,
                        "baRemarks": "string",
                        "baCreatetime": "2017-04-06T06:05:11.376Z",
                        "baPgroupinfo": "string",
                        "arehouseKqs": [
                            {
                                "baqKqId": 8,
                                "baqArehouseId": 0,
                                "baqKqName": "string",
                                "baqIsdel": 0,
                                "baqStatus": 0,
                                "baseRegions": [
                                    {
                                        "brgRegionId": 8,
                                        "brgArehouseId": 0,
                                        "brgRegionNo": "string",
                                        "brgKqId": 0,
                                        "brgRegionStatus": 0
                                     }
                                ]
                               }
                           ]
                    }
         参数说明
         baArehouseId    仓库id 主键
         baName          仓库名称
         baAddr          仓库地址
         baScity         所在地市
         baScontacts     联系人
         baPhone         电话
         baAcreage       面积
         baCtype         仓库类型
         baHumidity      相对湿度
         baFax           传真
         baPostoffice    邮编
         baIsti          是否需要维护ti值 1:存在ti 2:不存在ti
         baStatus        状态1可用 0软删除
         baClientId      客户id
         baRemarks       备注
         baCreatetime    创建时间
         baPgroupinfo    平面图信息
         *
         */
        /**  3 仓库管理 通过client_id查询部分仓库的信息(被客户id绑定的) GET /arehouse/findByClientId/{client_id}
        *          */
        /**  4 仓库管理 通过role_id查询部分仓库的信息(被角色id绑定的 GET /arehouse/findByRoleId/{role_id}
        *          */
        /**  5 仓库管理 通过id删除一条仓库数据 DELETE /arehouse/{id}
        *          */
        /**  6 仓库管理 根据id返回仓库信息 GET /arehouse/{id}
        *          */
        /**  7 仓库管理 通过client_id查询部分仓库的信息(被用户id绑定的)  GET /arehouse/{user_id}/{client_id}

        *          */
        /**  8 仓库管理 客户归属 GET /arehouse/belongToWhichClient/{arehouse_id}
         *
         */
        /**  9 仓库管理 软删除多个或单个数据 POST /arehouse/deleteOfSoft
         *      {
                  "id": 1,
                  "ids": [
                    1
                  ]
                }
         *
         */
    /**
     *    客户配置  clientConfiguration
     **/
        /**  0  分页获取 仓库详情 POST /client/page
         * 参数
         * {
         *      "bcCname": "",
                "bcStatus": 0,
                "pageNum": 1,
                "pageSize": 1,
                "draw": 1
         * }
         * 参数说明：
         *      bcClientId   客户id
                bcCname      客户名称
                bcCaddr      客户地址
                bcCtel       联系方式
                bcStatus     状态0 软删除 1 可用
                bcCjsj       创建时间
         */
        /**
         *   1 新增-配置货品-配置仓库 POST /client
         *   参数
         *   {
                "bcClientId": 0,
                "bcCname": "string",
                "bcCaddr": "string",
                "bcCtel": "string",
                "bcStatus": 0,
                "bcCjsj": "2017-04-06T06:05:11.359Z"
              }
            参数说明：
                bcClientId      客户id
                bcCname         客户名称
                bcCaddr         客户地址
                bcCtel          联系方式
                bcStatus        0 软删除 1 可用
                bcCjsj          创建时间
         *
        /**
         *  TODO 2 配置货品    /client/clientAddGoods
         *      通过clientId配置货品所属关系
         *      clientId            客户id
         *      goodsIds            被勾选的货品id集合
         **/
        /**
         2 配置货品 客户管理 通过client_id配置货品所属关系 POST /client/clientAddGoods
         参数
         {
            "id": 1,
            "ids": [
            2,3,4
            ]
         }
         参数说明：
         id     客户id
         ids    货品id
        **/
        /**
         *   3 配置仓库 客户管理 通过client_id配置仓库所属关系 POST /client/clientAddArehouses
         * 参数
         * {
                "id": 0,
                "ids": [
                  1
                ]
            }
         参数说明：
                id  客户id
                ids 仓库id
         **/
        /**
         *   4 编辑  PUT /client
         *  参数
         *  {
         *      "bcClientId": 1,
                "bcCname": "",
                "bcCaddr": "",
                "bcCtel": "",
                "bcStatus": 0,
                "bcCjsj": ""
         *  }
         *  参数说明：
         *          bcClientId  客户id
                    bcCname     客户名称
                    bcCaddr     客户地址
                    bcCtel      联系方式
                    bcStatu     0 软删除 1 可用
                    bcCjsj      创建时间
         **/
        /**
         *   5 客户不允许重复 客户管理 判断客户名称是否重复  GET /client/isRepeatByBcCname/{bcCname}
         *
         **/
        /**
         *  6 客户管理 软删除多个或单个数据  POST /client/deleteOfSoft
         * 参数
         * {
         *      "id": 0,
                "ids": [
                  1
                ]
         * }
         * 参数说明：
         *      id   客户id
         *      ids
         */
        /**
         *  7 客户管理 通过role_id查询部分客户的信息(被角色id绑定的) GET /client/findByRoleId/{role_id}
         */
        /**
         * 8 客户管理 通过user_id查询部分客户的信息(被用户id绑定的) GET /client/findByUserId/{user_id}
         */
        /**
         *  9 客户管理 通过id删除一条客户数据 DELETE /client/{id}
         */
        /**
         * 10 客户管理 根据id返回客户信息 GET /client/{id}
         */
/**
 * TODO 资源管理
 **/
    /**
     * TODO 仓库管理
     */
        /**
         *TODO 0 对于仓库的区域的增加
         */
        /**
         * TODO 1 对于仓库的区域的修改
         */
        /**
         * TODO 2 对于仓库的区域的查看
         */
        /**
         * TODO 3 禁止
         */
        /**
         * TODO 4 启用
         */
        /**
         * TODO 5 设为存储区
         */
        /**
         * TODO 6 设为暂存区
         */
        /**
         * TODO 7 设为未设定区
         */
        /**
         * TODO 8 设为分拣区
         */
        /**
         * TODO 9 设为不合格去区
         */
        /** TODO 10 查看区域中库存明细
         *
         */
/**
 *       货品管理   goodsManage
             **/
        /**
          0 分页查询货品详情 POST /goods
         参数
            {
                "bgGoodsName": "",
                "bgGoodsNo": "",
                "bgStatus": 1,
                "pageNum": 1,
                "pageSize": 1,
                "draw": 1
            }
         参数说明
            bgGoodsId      货品id
            bgGoodsNo      货品编号
            bgGoodsName    货品名称
            bgNameJc       货品简称
            bgT            货品t值
            bgI            货品i值
            bgHsl          货品换算量
            bgZxdw         整箱单位
            bgSzdw         散支单位
            bgStatus       状态
            bgArehouseId   仓库id(外键)
            bgClientId     客户id(外键)
            bgGoodsType    货品类型
            bgGoodsTj      货品体积
            bgGoodsZl      货品重量
            bgGoodsPrice   单价
            bgCreatetime   创建时间
            bgRemarks      备注
            bgGoodsGg      规格




         页面中需要显示的字段
         bgGoodsName    货品名称
         bgGoodsNo      货品编号
         bgNameJc       货品简称
         bgGoodsTj      货品体积
         bgGoodsZl      货品重量
         bgGoodsPrice   货品单价
         bgGoodsGg      规格
         bgZxdw         整箱单位
         bgSzdw         散支单位
         bgRemarks      备注
         */
        /**
            *   1 更新/编辑货品 PUT /goods
         *      参数
                {
                    "bgGoodsId": 2,
                    "bgGoodsNo": "string",
                    "bgGoodsName": "string",
                    "bgNameJc": "string",
                    "bgT": 0,
                    "bgI": 0,
                    "bgHsl": 0,
                    "bgZxdw": 0,
                    "bgSzdw": 0,
                    "bgStatus": 0,
                    "bgArehouseId": 0,
                    "bgClientId": 0,
                    "bgGoodsType": "string",
                    "bgGoodsTj": 0,
                    "bgGoodsZl": 0,
                    "bgGoodsPrice": 0,
                    "bgCreatetime": "2017-04-07T00:51:41.219Z",
                    "bgRemarks": "string",
                    "bgGoodsGg": "string"
                    "baseDws": [
                            {
                              "bdDwId": 0,
                              "bdName": "string",
                              "bdStatus": 0,
                              "bdIsdel": true,
                              "bdCreatetime": "2017-04-13T08:23:56.505Z"
                            }
                     ]
              }
         *      参数说明
                    bgGoodsId       货品id
                    bgGoodsNo       货品编号
                    bgGoodsName     货品名称
                    bgNameJc          货品简称
                    bgT             货品t值
                    bgI             货品i值
                    bgHsl           货品换算量
                    bgZxdw          整箱单位
                    bgSzdw          散支单位
                    bgStatus        状态
                    bgArehouseId    仓库id(外键)
                    bgClientId      客户id(外键)
                    bgGoodsType     货品类型
                    bgGoodsTj       货品体积
                    bgGoodsZl       货品重量
                    bgGoodsPrice    单价
                    bgCreatetime    创建时间
                    bgRemarks       备注
                    bgGoodsGg       规格
                    baseDws[
                    {
                      bdDwId        单位id
                      bdName        单位名称
                      bdStatus      1整箱单位 2散支单位
                      bdIsdel       0软删除 1可用
                      bdCreatetime  创建时间
                    }
                    ]


            **/
        /**
         *   2 新增货品 POST /goods/add
         *  参数
         *  {
                "bgGoodsNo": "string",
                "bgGoodsName": "string",
                "bgNamejc": "string",
                "bgT": 0,
                "bgI": 0,
                "bgHsl": 0,
                "bgZxdw": 0,
                "bgSzdw": 0,
                "bgStatus": 0,
                "bgArehouseId": 0,
                "bgClientId": 0,
                "bgGoodsType": "string",
                "bgGoodsTj": 0,
                "bgGoodsZl": 0,
                "bgGoodsPrice": 0,
                "bgCreatetime": "2017-04-07T03:05:33.291Z",
                "bgRemarks": "string",
                "bgGoodsGg": "string"
                "baseDws": [
                            {
                              "bdDwId": 0,
                              "bdName": "string",
                              "bdStatus": 0,
                              "bdIsdel": true,
                              "bdCreatetime": "2017-04-13T08:23:56.505Z"
                            }
                     ]
         *  }
         *      参数说明
                bgGoodsNo       货品编号
                bgGoodsName     货品名称
                bgNameJc          货品简称
                bgT             货品t值
                bgI             货品i值
                bgHsl           货品换算量
                bgZxdw          整箱单位
                bgSzdw          散支单位
                bgStatus        状态
                bgArehouseId    仓库id(外键)
                bgClientId      客户id(外键)
                bgGoodsType     货品类型
                bgGoodsTj       货品体积
                bgGoodsZl       货品重量
                bgGoodsPrice    单价
                bgCreatetime    创建时间
                bgRemarks       备注
                bgGoodsGg       规格
                baseDws[
                {
                  bdDwId        单位id
                  bdName        单位名称
                  bdStatus      1整箱单位 2散支单位
                  bdIsdel       0软删除 1可用
                  bdCreatetime  创建时间
                }
                ]
         */
        /**
         *   3 货品管理 通过客户id查询一些货品数据 GET /goods/findByClientId/{client_id}
         **/
        /**
         *   4 货品管理 通过货品编号查询一些货品数据 GET /goods/findBygoodsNo/{goods_no}
         **/
        /**
            *   5 货品管理 通过货品id查询货品  GET /goods/{id}
            *
         **/
        /**
         *   6 货品管理 软删除多个或单个数据 POST /goods/deleteOfSoft
         *  参数
         *  {
         *      "id": 0,
                "ids": [
                     1,2
                ]
         *  }
         *  参数说明：
         *  id 货品编号
         *
         *  **/
        /**
         *   7  货品管理 通过id删除一条货品数据 DELETE /goods/{id}
         *
         *  **/
        /**
         *   8 货品单号、编号不允许重复  货品管理 判断货品编号是否重复 GET /goods/isRepeatByBgGoodsNo/{bgGoodsNo}
         *
         **/
    /**
     *  RF管理   RFManage
         **/
        /**
         *  0 (RF管理主页面) 分页查询RF管理详情 POST /user/page
         * 参数
         * {
                "pageNum": 1,
                "pageSize": 1,
                "draw": 1
            }
         *
         * 参数说明
                ruUserId            用户主键id
                ruUserName          用户昵称/名
                ruLoginName         登录账户
                ruLoginPassword     密码
                ruPhone             手机
                ruTelephone         电话
                ruEmail             邮箱地址
                ruSex               性别1男 0 女  json数据中1对应true 0对应false
                ruBirthday          生日
                ruHomeaddress       家庭住址
                ruQicq              QQ
                ruCreateTime        创建时间
                ruLastModifiedTime  最后修改时间
                ruStatus            状态(status) 0禁用(软删除) 1启用
                ruSalt              随机掩码
                ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
                ruUserZyq           高位叉车作业区域
                ruRemarks           备注
                ruIspda             是否允许登陆pda 1是 0否
                ruPortrait          头像保存路径
         *
         */
        /**
         * 1 RF管理 关联作业区，判断主作业区是否被占用，是否已关联；是否有PDA任务 GET /user/userAddZyq/{id}/{firstZyq}/{secondZyq}
        /**
         *  TODO 2 获取作业区名称
         *      ruUserZyq   高位叉车作业区域
         *   **/
        /**
         *  2 获取作业区的名称 用户管理 根据id返回用户信息  GET /user/{id}
         */
        /**
         * 3  RF管理 判断主作业区是否重复 GET /user/isRepeatByFirstZyq/{firstZyq}
         **/
        /**
         *  4 编辑
         */
/**
 *      TODO 作业区管理 operationAreaManage
         *      **/
        /**
         *  0 (作业区管理主页面) 储位组管理 POST请求查询储位组信息 POST /locations/page
         * 参数
         * {
                "blsName": "储位组1001",
                "pageNum": 1,
                "pageSize": 1,
                "draw": 1
         * }
         * 参数说明
             blsLocationsId   储位组id
             blsName          名称
             blsCjsj          创建时间
             blsArehouseId    仓库id
             blsUserId        创建人
             blsRemarks       备注
         */
        /**
         *  1  储位组管理 新增储位组 POST /locations
         *  参数
         *  {
         *      "blsName": "string11",
                "blsCjsj": "2017-04-10T05:41:24.926Z",
                "blsArehouseId": 0,
                "blsUserId": 0,
                "blsRemarks": "string"
         *  }
         *  参数说明
                blsName         名称
                blsCjsj         创建时间
                blsArehouseId   仓库Id
                blsUserId       创建人
                blsRemarks      备注
         **/
        /**
         *   2 编辑 储位组管理 更新储位组信息 PUT /locations
         *  参数
         *  {
         *      "blsLocationsId": 1,
                "blsName": "string",
                "blsCjsj": "2017-04-10T05:52:25.431Z",
                "blsArehouseId": 1,
                "blsUserId": 1,
                "blsRemarks": "string"
         *  }
         *  参数说明
         *      blsLocationsId      储位组id
                blsName             名称
                blsCjsj             创建时间
                blsArehouseId       仓库id
                blsUserId           创建人
                blsRemarks          备注
         **/
        /**
         * 3 储位组管理 根据id返回储位组信息 GET /locations/{id}
         */
        /**
         *  4  储位组管理 通过id删除一条储位组数据 DELETE /locations/{id}
         */
        /**
         *  TODO 5 库位名称不允许重复
         *
         **/
/**
 *  TODO 业务处理
 **/
    /**TODO 入库预约 warehousingReservation
    */
        /**
         *      TODO 0 新增-入库任务        POST /mfunrkRwDoc/add
         *      {
                  "rkrwId": 0,
                  "rkrwNo": "A0001",
                  "rkrwDhrq": "2017-04-13T08:25:12.866Z",
                  "rkrwDbd": "调拨地1",
                  "rkrwCys": "承运商1",
                  "rkrwCph": "鲁A-GF886",
                  "rkrwSjxm": "老司机1",
                  "rkrwDh": "15098879088",
                  "rkrwStatus": "31",
                  "rkrwArehouseId": 1,
                  "rkrwClientId": 1,
                  "docList": [
                    {
                      "rkRkdjId": 8
                    },
                	{
                      "rkRkdjId": 17
                    }
                  ]
                }
         *      参数说明
         *          rkrwId      id
         *          rkrwNo      入库任务号     系统自动生成格式为当前日期例:入库2017-03-14-16-17-01
         *          rkrwDhrq    预计到货日期   精确到分钟
         *          rkrwDbd     调拨地
         *          rkrwCys     承运商
         *          rkrwCph     车牌号
         *          rkrwSjxm    司机姓名
         *          rkrwDh      司机电话
         *          rkrwStatus  任务状态
                                    1.初始(创建入库任务后的状态)
                                    2.已下发任务(下达任务后的状态)
                                    3.已开始收货(打印收货标签后的状态)
                                    4.收货中(上架第一个库位后的状态)
                                    5.
                                    1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                    2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                    6.收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
                                    可以手动将欠货标记为收货完成需要输入原因以及补发单号
         **/
        /**
         *   2 新增-入库单               POST      /mfunrkRwDoc/add
         *
         *   参数
         *      {
                    "rkRkdjNo": "L0197168",
                    "rkType": "1",
                    "rkGysmc": "供应商001",
                    "rkRemarks": "备注",
                    "rkUserId": 1,
                    "rkCreatetime": "2017-04-11T06:35:12.029Z",
                    "rkCreateUserId": 1,
                    "rkZdfs": 1,
                    "rkStartwith": 2,
                    "rkStatus": 31,
                    "rkArehouseId": 1,
                    "rkClientId":1,
                    "rkPrintcount": 0,
                    "rkRwId": 1,
                    "rkRwStatus": "51",
                    "rkDocsList": [
                      {
                        "rksGoodsId": 9,
                        "rksDwid": 1,
                        "rksCount": 100,
                        "rksStatus": 1
                      }
                    ]
                }
            参数说明
                rkRkdjId        主键id
         *      rkRkdjNo        入库单号
         *      rkErpNo         外部单号(ERP单号)
         *      rkType          单据类型 0： 采购订单 1：仓间调拨 2：退货入库
         *      rkGysmc         供应商名称
         *      rkRemarks       备注
         *      rkUserId        编辑人账户ID
         *      rkSjsj          入库时间(上架)
         *      rkBjsj          编辑时间
         *      rkCreatetime    创建时间
         *      rkCreateUserId  创建人账户ID
         *      rkZdfs          制单方式(1:手动 2:excel 3接口)
         *      rkStartwith     1电脑端2pda
         *      rkStatus        入库状态1原始状态 21部分分配 22全部分配 31部分收货 32 完全收货
         *      rkArehouseId    仓库id(外键)
         *      rkEndTime       pda结束时间
         *      rkPrintcount    打印收货标签次数(X)
         *      rkRwId          入库任务ID
         *      rkRwStatus      任务状态:
                                    1.初始(创建入库任务后的状态)
                                    2.已下发任务(下发任务后的状态)
                                    3.已开始收货(打印收货标签后的状态)
                                    4.收货中(分配库位后的状态)
                                    5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                    5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                    61.收货完成
                                    62 欠货
                                    收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
         *      rkQhWjyy        欠货完结原因
         *      rkQhBfdh        欠货补发单号
         *      rmsUser{
                       ruUserId            用户主键id
                       ruUserName          用户昵称/名
                       ruLoginName         登录账户
                       ruLoginPassword     密码
                       ruPhone             手机
                       ruTelephone         电话
                       ruEmail             邮箱地址
                       ruSex               性别1男 0 女  json数据中1对应true 0对应false
                       ruBirthday          生日
                       ruHomeaddress       家庭住址
                       ruQicq              qq
                       ruCreateTime        创建时间
                       ruLastModifiedTime  最后修改时间
                       ruStatus            状态
                       ruSalt              随机掩码
                       ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
                       ruUserZyq           高位叉车作业区域
                       ruRemarks           备注
                       ruIspda             是否允许登陆pda 1是 0否
                       ruPortrait          头像保存路径
               }
         *      rkDocsList[
         *           rksRkmxId   入库明细id
         *           rksGoodsId  货品id
         *           rksDwid     单位id
         *           rksCount    数量
         *           rksStatus   收货（入库明细）状态(1:初始状态 21:部分分配 22:完全分配 31:部分收货 32: 完全收货)
         *           rksRkdjId   入库明单据id
         *      ]
         *       baseGoods{
                          bgGoodsId     货品id
                          bgGoodsNo     货品编号
                          bgGoodsName   货品名称
                          bgNamejc      货品简称
                          bgT           货品t值
                          bgI           货品i值
                          bgHsl         货品换算量
                          bgZxdw        整箱单位
                          bgSzdw        散支单位
                          bgStatus      状态
                          bgArehouseId  仓库id(外键)
                          bgClientId    客户id(外键)
                          bgGoodsType   货品类型
                          bgGoodsTj     货品体积
                          bgGoodsZl     货品重量
                          bgGoodsPrice  单价
                          bgCreatetime  创建时间
                          bgRemarks     备注
                          bgGoodsGg     规格
                        },
                baseDw{
                          bdDwId        单位id
                          bdName        单位名称
                          bdStatus      1整箱单位 2散支单位
                          bdIsdel       0软删除 1可用
                          bdCreatetime  创建时间
                        }
         *   allCount 总数量
         *   allTj 总体积
         */
        /**
         *  TODO  3 编辑 入库单
                参数
                    {
                        "rkRkdjId": 0,
                        "rkRkdjNo": "string",
                        "rkErpNo": "string",
                        "rkType": "string",
                        "rkGysmc": "string",
                        "rkRemarks": "string",
                        "rkUserId": 0,
                        "rkSjsj": "2017-04-11T09:16:45.376Z",
                        "rkBjsj": "2017-04-11T09:16:45.376Z",
                        "rkCreatetime": "2017-04-11T09:16:45.376Z",
                        "rkCreateUserId": 0,
                        "rkZdfs": 0,
                        "rkStartwith": 0,
                        "rkStatus": 0,
                        "rkArehouseId": 0,
                        "rkEndTime": "2017-04-11T09:16:45.376Z",
                        "rkPrintcount": 0,
                        "rkRwId": 0,
                        "rkRwStatus": "string",
                        "rkQhWjyy": "string",
                        "rkQhBfdh": "string",
                        "rmsUser": {
                          "ruUserId": 0,
                          "ruUserName": "string",
                          "ruLoginName": "string",
                          "ruLoginPassword": "string",
                          "ruPhone": "string",
                          "ruTelephone": "string",
                          "ruEmail": "string",
                          "ruSex": true,
                          "ruBirthday": "2017-04-11T09:16:45.376Z",
                          "ruHomeaddress": "string",
                          "ruQicq": "string",
                          "ruCreateTime": "2017-04-11T09:16:45.377Z",
                          "ruLastModifiedTime": "2017-04-11T09:16:45.377Z",
                          "ruStatus": 0,
                          "ruSalt": "string",
                          "ruUserType": 0,
                          "ruUserZyq": "string",
                          "ruRemarks": "string",
                          "ruIspda": true,
                          "ruPortrait": "string"
                        },
                        "rkDocsList": [
                          {
                            "rksRkmxId": 0,
                            "rksGoodsId": 0,
                            "rksDwid": 0,
                            "rksCount": 0,
                            "rksStatus": 0,
                            "rksRkdjId": 0,
                            "baseGoods": {
                              "bgGoodsId": 0,
                              "bgGoodsNo": "string",
                              "bgGoodsName": "string",
                              "bgNamejc": "string",
                              "bgT": 0,
                              "bgI": 0,
                              "bgHsl": 0,
                              "bgZxdw": 0,
                              "bgSzdw": 0,
                              "bgStatus": 0,
                              "bgArehouseId": 0,
                              "bgClientId": 0,
                              "bgGoodsType": "string",
                              "bgGoodsTj": 0,
                              "bgGoodsZl": 0,
                              "bgGoodsPrice": 0,
                              "bgCreatetime": "2017-04-11T09:16:45.377Z",
                              "bgRemarks": "string",
                              "bgGoodsGg": "string"
                            },
                            "baseDw": {
                              "bdDwId": 0,
                              "bdName": "string",
                              "bdStatus": 0,
                              "bdIsdel": true,
                              "bdCreatetime": "2017-04-11T09:16:45.377Z"
                            }
                          }
                        ],
                        "allCount": 0,
                        "allTj": 0
                     }
         参数说明
                rkRkdjId        主键id
         *      rkRkdjNo        入库单号
         *      rkErpNo         外部单号(ERP单号)
         *      rkType          单据类型 0： 采购订单 1：仓间调拨 2：退货入库
         *      rkGysmc         供应商名称
         *      rkRemarks       备注
         *      rkUserId        编辑人账户ID
         *      rkSjsj          入库时间(上架)
         *      rkBjsj          编辑时间
         *      rkCreatetime    创建时间
         *      rkCreateUserId  创建人账户ID
         *      rkZdfs          制单方式(1:手动 2:excel 3接口)
         *      rkStartwith     1电脑端2pda
         *      rkStatus        入库状态1原始状态 21部分分配 22全部分配 31部分收货 32 完全收货
         *      rkArehouseId    仓库id(外键)
         *      rkEndTime       pda结束时间
         *      rkPrintcount    打印收货标签次数(X)
         *      rkRwId          入库任务ID
         *      rkRwStatus      任务状态:
                                     1.初始(创建入库任务后的状态)
                                     2.已下发任务(下发任务后的状态)
                                     3.已开始收货(打印收货标签后的状态)
                                     4.收货中(分配库位后的状态)
                                     5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                     5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                     61.收货完成
                                     62 欠货
                                     收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
         *      rkQhWjyy        欠货完结原因
         *      rkQhBfdh        欠货补发单号
         *      rmsUser{
                       ruUserId            用户主键id
                       ruUserName          用户昵称/名
                       ruLoginName         登录账户
                       ruLoginPassword     密码
                       ruPhone             手机
                       ruTelephone         电话
                       ruEmail             邮箱地址
                       ruSex               性别1男 0 女  json数据中1对应true 0对应false
                       ruBirthday          生日
                       ruHomeaddress       家庭住址
                       ruQicq              qq
                       ruCreateTime        创建时间
                       ruLastModifiedTime  最后修改时间
                       ruStatus            状态
                       ruSalt              随机掩码
                       ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
                       ruUserZyq           高位叉车作业区域
                       ruRemarks           备注
                       ruIspda             是否允许登陆pda 1是 0否
                       ruPortrait          头像保存路径
               }
         *      rkDocsList[
         *           rksRkmxId   入库明细id
         *           rksGoodsId  货品id
         *           rksDwid     单位id
         *           rksCount    数量
         *           rksStatus   收货（入库明细）状态(1:初始状态 21:部分分配 22:完全分配 31:部分收货 32: 完全收货)
         *           rksRkdjId   入库明单据id
         *      ]
         *       baseGoods{
                          bgGoodsId     货品id
                          bgGoodsNo     货品编号
                          bgGoodsName   货品名称
                          bgNamejc      货品简称
                          bgT           货品t值
                          bgI           货品i值
                          bgHsl         货品换算量
                          bgZxdw        整箱单位
                          bgSzdw        散支单位
                          bgStatus      状态
                          bgArehouseId  仓库id(外键)
                          bgClientId    客户id(外键)
                          bgGoodsType   货品类型
                          bgGoodsTj     货品体积
                          bgGoodsZl     货品重量
                          bgGoodsPrice  单价
                          bgCreatetime  创建时间
                          bgRemarks     备注
                          bgGoodsGg     规格
                        },
                    baseDw{
                          bdDwId        单位id
                          bdName        单位名称
                          bdStatus      1整箱单位 2散支单位
                          bdIsdel       0软删除 1可用
                          bdCreatetime  创建时间
                        }
         *   allCount 总数量
         *   allTj 总体积
         */
        /**4 分页查询货品详情       链接 goodsManage/0
         参数
         {
             "bgGoodsName": "",
             "bgGoodsNo": "",
             "bgStatus": 1,
             "pageNum": 1,
             "pageSize": 1,
             "draw": 1
         }
         参数说明
                bgGoodsId      货品id
                bgGoodsNo      货品编号
                bgGoodsName    货品名称
                bgNameJc       货品简称
                bgT            货品t值
                bgI            货品i值
                bgHsl          货品换算量
                bgZxdw         整箱单位
                bgSzdw         散支单位
                bgStatus       状态
                bgArehouseId   仓库id(外键)
                bgClientId     客户id(外键)
                bgGoodsType    货品类型
                bgGoodsTj      货品体积
                bgGoodsZl      货品重量
                bgGoodsPrice   单价
                bgCreatetime   创建时间
                bgRemarks      备注
                bgGoodsGg      规格




         页面中需要显示的字段
                bgGoodsName    货品名称
                bgGoodsNo      货品编号
                bgNameJc       货品简称
                bgGoodsTj      货品体积
                bgGoodsZl      货品重量
                bgGoodsPrice   货品单价
                bgGoodsGg      规格
                bgZxdw         整箱单位
                bgSzdw         散支单位
                bgRemarks      备注
         */
        /**
         *  TODO 5 删除 入库过程 通过入库单据id删除入库单据  DELETE /mfunrkDoc/{rkdoc_id}
         */
        /**
         *  TODO 6 入库单号不能重复（暂无）
         */
        /**
         *  7 入库预约的分页查询  入库过程 分页获取入库单据  POST /mfunrkDoc
         * 参数
         * {
         *    "draw": 1,
              "rkno": "",
              "startTimeParam": "",
              "endTimeParam": "",
              "pageNum": 1,
              "pageSize": 1,
              "status": 31
         * }
         * 参数说明
         *      rkRkdjId        主键id
         *      rkRkdjNo        入库单号
         *      rkErpNo         外部单号(ERP单号)
         *      rkType          单据类型 0： 采购订单 1：仓间调拨 2：退货入库
         *      rkGysmc         供应商名称
         *      rkRemarks       备注
         *      rkUserId        编辑人账户ID
         *      rkSjsj          入库时间(上架)
         *      rkBjsj          编辑时间
         *      rkCreatetime    创建时间
         *      rkCreateUserId  创建人账户ID
         *      rkZdfs          制单方式(1:手动 2:excel 3接口)
         *      rkStartwith     1电脑端2pda
         *      rkStatus        入库状态1原始状态 21部分分配 22全部分配 31部分收货 32 完全收货
         *      rkArehouseId    仓库id(外键)
         *      rkEndTime       pda结束时间
         *      rkPrintcount    打印收货标签次数(X)
         *      rkRwId          入库任务ID
         *      rkRwStatus      任务状态:
                                    1.初始(创建入库任务后的状态)
                                    2.已下发任务(下发任务后的状态)
                                    3.已开始收货(打印收货标签后的状态)
                                    4.收货中(分配库位后的状态)
                                    5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                    5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                    61.收货完成
                                    62 欠货
                                    收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
         *      rkQhWjyy        欠货完结原因
         *      rkQhBfdh        欠货补发单号
         *      rmsUser{
             *              ruUserId            用户主键id
             *              ruUserName          用户昵称/名
             *              ruLoginName         登录账户
             *              ruLoginPassword     密码
             *              ruPhone             手机
             *              ruTelephone         电话
             *              ruEmail             邮箱地址
             *              ruSex               性别1男 0 女  json数据中1对应true 0对应false
             *              ruBirthday          生日
             *              ruHomeaddress       家庭住址
             *              ruQicq              qq
             *              ruCreateTime        创建时间
             *              ruLastModifiedTime  最后修改时间
             *              ruStatus            状态
             *              ruSalt              随机掩码
             *              ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
             *              ruUserZyq           高位叉车作业区域
             *              ruRemarks           备注
             *              ruIspda             是否允许登陆pda 1是 0否
             *              ruPortrait          头像保存路径
             *      }
         *      rkDocsList[
         *           rksRkmxId   入库明细id
         *           rksGoodsId  货品id
         *           rksDwid     单位id
         *           rksCount    数量
         *           rksStatus   收货（入库明细）状态(1:初始状态 21:部分分配 22:完全分配 31:部分收货 32: 完全收货)
         *           rksRkdjId   入库明单据id
         *      ]
         *   allCount 总数量
         *   allTj 总体积
         */
    /**
     *      TODO 入库任务 warehousingTask
         */
        /**
         * TODO 0  分页查询任务单          POST /mfunrkRwDoc
         *   参数 --该分页不支持模糊查询 模糊查询的字段有6个
         *      {
                  "draw": 0,
                  "rkrwNo": "A",
                  "rkrwStatus": "31",
                  "rkrwDbd": "调",
                  "rkrwCys": "承",
                  "rkrwCph": "鲁",
                  "rkrwSjxm": "司机",
                  "rkrwDh": "150",
                  "rkrwArehouseId": 0,
                  "rkrwClientId": 0,
                  "pageNum": 1,
                  "pageSize": 100
                }

         *   参数说明
                rkrwNo          编号模糊查询
                rkrwStatus      状态码 31 部分收货
                rkrwDbd         调拨地模糊查询
                rkrwCys         承运商模糊查询
                rkrwCph         车牌号模糊查询
                rkrwSjxm        司机姓名模糊查询
                rkrwDh          电话模糊查询
                rkrwArehouseId  仓库权限信息
                rkrwClientId    客户权限信息
                pageNum         页码
                pageSize        分页大小

         *   返回结果说明
         *          rkrwId     id
         *          rkrwNo      任务号
         *          rkrwDhrq    预计到货日期
         *          rkrwDbd     调拨地
         *          rkrwCys     承运商
         *          rkrwCph     车牌号
         *          rkrwSjxm    司机姓名
         *          rkrwDh      司机电话
         *          rkrwStatus  任务状态
         */
            /** 1 修改 入库任务管理 更新入库任务单 PUT /mfunrkRwDoc
             *
             *          参数
             *          {
             *              "rkrwId": 1,
                            "rkrwNo": "111",
                            "rkrwDhrq": "2017-04-07T03:38:53.205Z",
                            "rkrwDbd": "111",
                            "rkrwCys": "111",
                            "rkrwCph": "111",
                            "rkrwSjxm": "111",
                            "rkrwDh": "111",
                            "rkrwStatus": "1"
             *          }
             *          参数说明
             *          rkrwId      id/入库任务号(系统自动生成格式为当前日期例:入库2017-03-14-16-17-01)
             *          rkrwNo      入库任务单号(系统自动生成)
             *          rkrwDhrq    预计到货日期(必填并且精确到分钟)
             *          rkrwDbd     调拨地(必填)
             *           rkrwCys    承运商(必填)
             *          rkrwCph     车牌号(必填)
             *          rkrwSjxm    司机姓名(必填)
             *          rkrwDh      司机电话(必填)
             *          rkrwStatus  任务状态:
                                        1.初始(创建入库任务后的状态)
                                        2.已下发任务(下达任务后的状态)
                                        3.已开始收货(打印收货标签后的状态)
                                        4.收货中(上架第一个库位后的状态)
                                        5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                        5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                        6.收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
                                        可以手动将欠货标记为收货完成需要输入原因以及补发单号
             */
            /**
             *          TODO 2 修改明细表
             *          rkRkdjNo        入库单号
             *          rkCreatetime    下单时间
             *                          总数量
             *                          总体积
             *          rkRemarks       备注
             */
            /**
             * 3 新增 入库任务单     POST /mfunrkRwDoc/add
             * 参数
             *
             *
             {
                "rkrwId": 0,
                "rkrwNo": "A0001",
                "rkrwDhrq": "2017-04-13T08:25:12.866Z",
                "rkrwDbd": "调拨地1",
                "rkrwCys": "承运商1",
                "rkrwCph": "鲁A-GF886",
                "rkrwSjxm": "老司机1",
                "rkrwDh": "15098879088",
                "rkrwStatus": "31",
                "rkrwArehouseId": 1,
                "rkrwClientId": 1,
                "docList": [
                 {
                   "rkRkdjId": 8
                 },
                 {
                   "rkRkdjId": 17
                 }
                ]
             }
             *
             *
             * 参数说明：
             *
             *      rkrwId          默认为null/0
                    rkrwNo          任务编号信息
                    rkrwDhrq        时间
                    rkrwDbd         调拨地
                    rkrwCys         承运商
                    rkrwCph         车牌号
                    rkrwSjxm        司机姓名
                    rkrwDh          电话
                    rkrwStatus      状态码
                    rkrwArehouseId  创建仓库
                    rkrwClientId    所属客户

                    docList [{"rkRkdjId": 8 需要被合并的入库单据id(其他字段无用)},{"rkRkdjId": 17 需要被合并的入库单据id(其他字段无用)}]
             *
             */
            /**
             *  4 删除入库单 入库任务管理 通过id删除一条入库任务单  DELETE /mfunrkRwDoc/{rkrw_id}
             */
            /**
             *  TODO 5 下发
             */
            /**
             * 6  入库任务管理 通过id获取一条入库任务单 GET /mfunrkRwDoc/{rkrw_id}
         * */
    /**
        * TODO 开始收货 startReceiving
           */
            /**
             * 0 开始收货分页查询 POST /mfunrkRwDoc
             参数 --该分页不支持模糊查询 模糊查询的字段有6个
             *      {
                    "pageNum": 1,
                    "pageSize": 1
                     "draw": 1,
         *      }
             *   参数说明
             *          rkrwId     id
             *          rkrwNo      任务号
             *          rkrwDhrq    预计到货日期
             *          rkrwDbd     调拨地
             *          rkrwCys     承运商
             *          rkrwCph     车牌号
             *          rkrwSjxm    司机姓名
             *          rkrwDh      司机电话
             *          rkrwStatus  任务状态
             */
            /**
             *  TODO 1 打印收货标签
             */
        /**
         *  TODO 入库操作   inputOperation
         */
            /**TODO 0  入库操作分页查询 入库过程 分页获取入库单据 POST /mfunrkDoc
             * 参数{
                    "draw": 1,
                    "pageNum": 1,
                    "pageSize": 1,
                    "status": 31
                  }
             * 参数说明
             *      rkRkdjId        主键id
             *      rkRkdjNo        入库单号
             *      rkErpNo         外部单号(ERP单号)
             *      rkType          单据类型 0： 采购订单 1：仓间调拨 2：退货入库
             *      rkGysmc         供应商名称
             *      rkRemarks       备注
             *      rkUserId        编辑人账户ID
             *      rkSjsj          入库时间(上架)
             *      rkBjsj          编辑时间
             *      rkCreatetime    创建时间
             *      rkCreateUserId  创建人账户ID
             *      rkZdfs          制单方式(1:手动 2:excel 3接口)
             *      rkStartwith     1电脑端2pda
             *      rkStatus        入库状态1原始状态 21部分分配 22全部分配 31部分收货 32 完全收货
             *      rkArehouseId    仓库id(外键)
             *      rkEndTime       pda结束时间
             *      rkPrintcount    打印收货标签次数(X)
             *      rkRwId          入库任务ID
             *      rkRwStatus      任务状态:
                                        1.初始(创建入库任务后的状态)
                                        2.已下发任务(下发任务后的状态)
                                        3.已开始收货(打印收货标签后的状态)
                                        4.收货中(分配库位后的状态)
                                        5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                        5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                        61.收货完成
                                        62 欠货
                                        收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
             *      rkQhWjyy        欠货完结原因
             *      rkQhBfdh        欠货补发单号
             *      rmsUser{
             *              ruUserId            用户主键id
             *              ruUserName          用户昵称/名
             *              ruLoginName         登录账户
             *              ruLoginPassword     密码
             *              ruPhone             手机
             *              ruTelephone         电话
             *              ruEmail             邮箱地址
             *              ruSex               性别1男 0 女  json数据中1对应true 0对应false
             *              ruBirthday          生日
             *              ruHomeaddress       家庭住址
             *              ruQicq              qq
             *              ruCreateTime        创建时间
             *              ruLastModifiedTime  最后修改时间
             *              ruStatus            状态
             *              ruSalt              随机掩码
             *              ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
             *              ruUserZyq           高位叉车作业区域
             *              ruRemarks           备注
             *              ruIspda             是否允许登陆pda 1是 0否
             *              ruPortrait          头像保存路径
             *      }
             *      rkDocsList[
             *           rksRkmxId   入库明细id
             *           rksGoodsId  货品id
             *           rksDwid     单位id
             *           rksCount    数量
             *           rksStatus   收货（入库明细）状态(1:初始状态 21:部分分配 22:完全分配 31:部分收货 32: 完全收货)
             *           rksRkdjId   入库明单据id
             *      ]
             *
             *   allCount 总数量
             *   allTj 总体积
             */
            /**
             *  TODO 1 入库过程 更新数据 PUT /mfunrkDoc
             *  TODO 参数(未正确测试)
             *  {
                     "rkRkdjId": 8,
                     "rkRkdjNo": "L0197167",
                     "rkErpNo": "erp_10001",
                     "rkType": "string",
                     "rkGysmc": "string",
                     "rkRemarks": "string",
                     "rkUserId": 1,
                     "rkSjsj": "2017-04-10T02:04:15.343Z",
                     "rkBjsj": "2017-04-10T02:04:15.343Z",
                     "rkCreatetime": "2017-04-10T02:04:15.343Z",
                     "rkCreateUserId": 1,
                     "rkZdfs": 0,
                     "rkStartwith": 0,
                     "rkStatus": 0,
                     "rkArehouseId": 1,
                     "rkEndTime": "2017-04-10T02:04:15.343Z",
                     "rkPrintcount": 0,
                     "rkRwId": 1,
                     "rkRwStatus": "string",
                     "rkQhWjyy": "string",
                     "rkQhBfdh": "string",
                     "rmsUser": {
                       "ruUserId": 5,
                       "ruUserName": "string",
                       "ruLoginName": "string",
                       "ruLoginPassword": "string",
                       "ruPhone": "string",
                       "ruTelephone": "string",
                       "ruEmail": "string",
                       "ruSex": true,
                       "ruBirthday": "2017-04-10T02:04:15.344Z",
                       "ruHomeaddress": "string",
                       "ruQicq": "string",
                       "ruCreateTime": "2017-04-10T02:04:15.344Z",
                       "ruLastModifiedTime": "2017-04-10T02:04:15.344Z",
                       "ruStatus": 1,
                       "ruSalt": "string",
                       "ruUserType": 0,
                       "ruUserZyq": "string",
                       "ruRemarks": "string",
                       "ruIspda": true,
                       "ruPortrait": "string"
                     },
                     "rkDocsList": [
                       {
                         "rksRkmxId": 88,
                         "rksGoodsId": 9,
                         "rksDwid": 1,
                         "rksCount": 0,
                         "rksStatus": 0,
                         "rksRkdjId": 8,
                         "baseGoods": {
                           "bgGoodsId": 1,
                           "bgGoodsNo": "string",
                           "bgGoodsName": "string",
                           "bgNamejc": "string",
                           "bgT": 0,
                           "bgI": 0,
                           "bgHsl": 0,
                           "bgZxdw": 0,
                           "bgSzdw": 0,
                           "bgStatus": 1,
                           "bgArehouseId": 1,
                           "bgClientId": 1,
                           "bgGoodsType": "string",
                           "bgGoodsTj": 0,
                           "bgGoodsZl": 0,
                           "bgGoodsPrice": 0,
                           "bgCreatetime": "2017-04-10T02:04:15.344Z",
                           "bgRemarks": "string",
                           "bgGoodsGg": "string"
                         },
                         "baseDw": {
                           "bdDwId": 1,
                           "bdName": "string",
                           "bdStatus": 1,
                           "bdIsdel": true,
                           "bdCreatetime": "2017-04-10T02:04:15.344Z"
                         }
                       }
                     ],
                     "allCount": 0,
                     "allTj":
              }
             *  参数说明
             *      rkRkdjId        主键id
             *      rkRkdjNo        入库单号
             *      rkErpNo         外部单号(ERP单号)
             *      rkType          单据类型 0： 采购订单 1：仓间调拨 2：退货入库
             *      rkGysmc         供应商名称
             *      rkRemarks       备注
             *      rkUserId        编辑人账户ID
             *      rkSjsj          入库时间(上架)
             *      rkBjsj          编辑时间
             *      rkCreatetime    创建时间
             *      rkCreateUserId  创建人账户ID
             *      rkZdfs          制单方式(1:手动 2:excel 3接口)
             *      rkStartwith     1电脑端2pda
             *      rkStatus        入库状态1原始状态 21部分分配 22全部分配 31部分收货 32 完全收货
             *      rkArehouseId    仓库id(外键)
             *      rkEndTime       pda结束时间
             *      rkPrintcount    打印收货标签次数(X)
             *      rkRwId          入库任务ID
             *      rkRwStatus      任务状态:
                                        1.初始(创建入库任务后的状态)
                                        2.已下发任务(下发任务后的状态)
                                        3.已开始收货(打印收货标签后的状态)
                                        4.收货中(分配库位后的状态)
                                        5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                        5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                        61.收货完成
                                        62 欠货
                                        收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
             *      rkQhWjyy        欠货完结原因
             *      rkQhBfdh        欠货补发单号
             *      rmsUser{
             *              ruUserId            用户主键id
             *              ruUserName          用户昵称/名
             *              ruLoginName         登录账户
             *              ruLoginPassword     密码
             *              ruPhone             手机
             *              ruTelephone         电话
             *              ruEmail             邮箱地址
             *              ruSex               性别1男 0 女  json数据中1对应true 0对应false
             *              ruBirthday          生日
             *              ruHomeaddress       家庭住址
             *              ruQicq              qq
             *              ruCreateTime        创建时间
             *              ruLastModifiedTime  最后修改时间
             *              ruStatus            状态
             *              ruSalt              随机掩码
             *              ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
             *              ruUserZyq           高位叉车作业区域
             *              ruRemarks           备注
             *              ruIspda             是否允许登陆pda 1是 0否
             *              ruPortrait          头像保存路径
             *      }
             *      rkDocsList[
             *          0{
             *              rksRkmxId   入库明细id
             *              rksGoodsId  货品id
             *              rksDwid     单位id
             *              rksCount    数量
             *              rksStatus   收货（入库明细）状态(1:初始状态 21:部分分配 22:完全分配 31:部分收货 32: 完全收货)
             *              rksRkdjId   入库明单据id
             *          }
             *         baseGoods{
             *              bgGoodsId       货品id
                            bgGoodsNo       货品编号
                            bgGoodsName     货品名称
                            bgNamejc        货品简称
                            bgT             货品t值
                            bgI             货品i值
                            bgHsl           货品换算量
                            bgZxdw          整箱单位
                            bgSzdw          散支单位
                            bgStatus        状态
                            bgArehouseId    仓库id(外键)
                            bgClientId      客户id(外键)
                            bgGoodsType     货品类型
                            bgGoodsTj       货品体积
                            bgGoodsZl       货品重量
                            bgGoodsPrice    单价
                            bgCreatetime    创建时间
                            bgRemarks       备注
                            bgGoodsGg       规格
             *         }
             *         baseDw{
             *              bdDwId          单位id
                            bdName          单位名称
                            bdStatus        1整箱单位 2散支单位
                            bdIsdel         0软删除 1可用
                            bdCreatetime    创建时间
             *         }
             *      ]
             *
             *   allCount 总数量
             *   allTj 总体积
             *
         */
            /**
             * TODO 2 入库过程 新增入库单据/包含入库单明细 POST /mfunrkDoc/
             * TODO 参数(未测试正确)
             * {
                    "rkRkdjId": 8,
                    "rkRkdjNo": "L0197167",
                    "rkErpNo": "erp_10001",
                    "rkType": "string",
                    "rkGysmc": "string",
                    "rkRemarks": "string",
                    "rkUserId": 1,
                    "rkSjsj": "2017-04-10T02:04:15.343Z",
                    "rkBjsj": "2017-04-10T02:04:15.343Z",
                    "rkCreatetime": "2017-04-10T02:04:15.343Z",
                    "rkCreateUserId": 1,
                    "rkZdfs": 0,
                    "rkStartwith": 0,
                    "rkStatus": 0,
                    "rkArehouseId": 1,
                    "rkEndTime": "2017-04-10T02:04:15.343Z",
                    "rkPrintcount": 0,
                    "rkRwId": 1,
                    "rkRwStatus": "string",
                    "rkQhWjyy": "string",
                    "rkQhBfdh": "string",
                    "rmsUser": {
                      "ruUserId": 5,
                      "ruUserName": "string",
                      "ruLoginName": "string",
                      "ruLoginPassword": "string",
                      "ruPhone": "string",
                      "ruTelephone": "string",
                      "ruEmail": "string",
                      "ruSex": true,
                      "ruBirthday": "2017-04-10T02:04:15.344Z",
                      "ruHomeaddress": "string",
                      "ruQicq": "string",
                      "ruCreateTime": "2017-04-10T02:04:15.344Z",
                      "ruLastModifiedTime": "2017-04-10T02:04:15.344Z",
                      "ruStatus": 1,
                      "ruSalt": "string",
                      "ruUserType": 0,
                      "ruUserZyq": "string",
                      "ruRemarks": "string",
                      "ruIspda": true,
                      "ruPortrait": "string"
                    },
                    "rkDocsList": [
                      {
                        "rksRkmxId": 88,
                        "rksGoodsId": 9,
                        "rksDwid": 1,
                        "rksCount": 0,
                        "rksStatus": 0,
                        "rksRkdjId": 8,
                        "baseGoods": {
                          "bgGoodsId": 1,
                          "bgGoodsNo": "string",
                          "bgGoodsName": "string",
                          "bgNamejc": "string",
                          "bgT": 0,
                          "bgI": 0,
                          "bgHsl": 0,
                          "bgZxdw": 0,
                          "bgSzdw": 0,
                          "bgStatus": 1,
                          "bgArehouseId": 1,
                          "bgClientId": 1,
                          "bgGoodsType": "string",
                          "bgGoodsTj": 0,
                          "bgGoodsZl": 0,
                          "bgGoodsPrice": 0,
                          "bgCreatetime": "2017-04-10T02:04:15.344Z",
                          "bgRemarks": "string",
                          "bgGoodsGg": "string"
                        },
                        "baseDw": {
                          "bdDwId": 1,
                          "bdName": "string",
                          "bdStatus": 1,
                          "bdIsdel": true,
                          "bdCreatetime": "2017-04-10T02:04:15.344Z"
                        }
                      }
                    ],
                    "allCount": 0,
                    "allTj": 0
                }
             *   *  参数说明
             *      rkRkdjId        主键id
             *      rkRkdjNo        入库单号
             *      rkErpNo         外部单号(ERP单号)
             *      rkType          单据类型 0： 采购订单 1：仓间调拨 2：退货入库
             *      rkGysmc         供应商名称
             *      rkRemarks       备注
             *      rkUserId        编辑人账户ID
             *      rkSjsj          入库时间(上架)
             *      rkBjsj          编辑时间
             *      rkCreatetime    创建时间
             *      rkCreateUserId  创建人账户ID
             *      rkZdfs          制单方式(1:手动 2:excel 3接口)
             *      rkStartwith     1电脑端2pda
             *      rkStatus        入库状态1原始状态 21部分分配 22全部分配 31部分收货 32 完全收货
             *      rkArehouseId    仓库id(外键)
             *      rkEndTime       pda结束时间
             *      rkPrintcount    打印收货标签次数(X)
             *      rkRwId          入库任务ID
             *      rkRwStatus      任务状态:
                                        1.初始(创建入库任务后的状态)
                                        2.已下发任务(下发任务后的状态)
                                        3.已开始收货(打印收货标签后的状态)
                                        4.收货中(分配库位后的状态)
                                        5.1.部分收货(任务下所有订单有一个部分收货整个任务为部分收货)
                                        5.2.全部收货(任务下所有订单状态为全部收货整个任务状态为全部收货)
                                        61.收货完成
                                        62 欠货
                                        收货完成/欠货(全部收货状态下导出台帐为收货完成,部分收货状态下导出台帐为欠货)
             *      rkQhWjyy        欠货完结原因
             *      rkQhBfdh        欠货补发单号
             *      rmsUser{
             *              ruUserId            用户主键id
             *              ruUserName          用户昵称/名
             *              ruLoginName         登录账户
             *              ruLoginPassword     密码
             *              ruPhone             手机
             *              ruTelephone         电话
             *              ruEmail             邮箱地址
             *              ruSex               性别1男 0 女  json数据中1对应true 0对应false
             *              ruBirthday          生日
             *              ruHomeaddress       家庭住址
             *              ruQicq              qq
             *              ruCreateTime        创建时间
             *              ruLastModifiedTime  最后修改时间
             *              ruStatus            状态
             *              ruSalt              随机掩码
             *              ruUserType          用户类型(0:普通 1堆高车 2高位叉车)
             *              ruUserZyq           高位叉车作业区域
             *              ruRemarks           备注
             *              ruIspda             是否允许登陆pda 1是 0否
             *              ruPortrait          头像保存路径
             *      }
             *      rkDocsList[
             *          0{
             *              rksRkmxId   入库明细id
             *              rksGoodsId  货品id
             *              rksDwid     单位id
             *              rksCount    数量
             *              rksStatus   收货（入库明细）状态(1:初始状态 21:部分分配 22:完全分配 31:部分收货 32: 完全收货)
             *              rksRkdjId   入库明单据id
             *          }
             *         baseGoods{
             *              bgGoodsId       货品id
                            bgGoodsNo       货品编号
                            bgGoodsName     货品名称
                            bgNamejc        货品简称
                            bgT             货品t值
                            bgI             货品i值
                            bgHsl           货品换算量
                            bgZxdw          整箱单位
                            bgSzdw          散支单位
                            bgStatus        状态
                            bgArehouseId    仓库id(外键)
                            bgClientId      客户id(外键)
                            bgGoodsType     货品类型
                            bgGoodsTj       货品体积
                            bgGoodsZl       货品重量
                            bgGoodsPrice    单价
                            bgCreatetime    创建时间
                            bgRemarks       备注
                            bgGoodsGg       规格
             *         }
             *         baseDw{
             *              bdDwId          单位id
                            bdName          单位名称
                            bdStatus        1整箱单位 2散支单位
                            bdIsdel         0软删除 1可用
                            bdCreatetime    创建时间
             *         }
             *      ]
             *
             *   allCount 总数量
             *   allTj 总体积
             *
             *
             */
            /**
             * TODO 3 入库过程 更新一些入库单据的任务外键id 关联 成为rwDoc_id POST /mfunrkDoc/updataRwId(待超哥修改)有问题
             */
            /**
             * TODO 4 入库过程 通过入库单据id删除入库单据 DELETE /mfunrkDoc/{rkdoc_id}
             */
            /**
             * TODO 5 入库过程 通过入库单据id获取一条入库单据 GET /mfunrkDoc/{rkdoc_id}
             */
    /**
     *      TODO 入库台账       inputLedger
         */
            /**
             *         TODO 0 入库台账主页面
             *             rkCreatetime    始发日期
             *             rkrwDhrq        到货日期
             *             rk_Sjsj         收货日期
             *             rkrwDbd         调拨地点
             *             rkrwCys         承运商
             *             rkrwCph         车牌号
             *             ruUserName       收货人
             *             baName          收货仓库
             *             rkRkdjNo        单号
             *             rkErpNo         调拨单号
             *             承运件数(台)    --计算出来的，在数据库中无字段
             *             承运件数(箱)    --计算出来的，在数据库中无字段
             *             方数            --计算出来的，在数据库中无字段
             *             bgGoodsNo       物料编码
             *             bgGoodsName     物料描述
             *             台数            --计算出来的，在数据库中无字段
             *             件数            --计算出来的，在数据库中无字段
             *             方数            --计算出来的，在数据库中无字段
             *             rksPsts         破损台数(入库储位时入到破损区库位中按明细累加破损台数)
             *             rksDbPswb       调拨破损外包(可以为0,操作员手动输入)
             *             rksYtPswb       源头破损外包(可以为0,操作员手动输入)
             *             rksDbPsnb       调拨破损内保(可以为0,操作员手动输入)
             *             rksYtPsnb       源头破损内保(可以为0,操作员手动输入)
             *             rksPm           泡沫(可以为0,操作员手动输入)
             *             rksQhsl         缺机/台(欠货数量,操作员手动输入)
             *             rksYcyy         异常原因(操作员手动输入)
             *             rksCljg         处理结果(操作员手动输入)
             *             rksJssj         结算时间,可以为空操作员手动输入
             */
            /**
             *  TODO  1 制作台账
             *  rkspm       泡沫(可以为0,操作员手动输入)
             *  rksDbPswb   调拨破损外包(可以为0,操作员手动输入)
             *  rksYtPswb   源头破损外包(可以为0,操作员手动输入)
             *  rksDb_psnb  调拨破损内保(可以为0,操作员手动输入)
             *  rksYtPsnb   源头破损内保(可以为0,操作员手动输入)
             *  rks_qhsl    缺机/台(欠货数量,操作员手动输入)
             *  rksYcyy     异常原因(操作员手动输入)
             *  rksCljg     处理结果(操作员手动输入)
             *  rks_psts    破损台数(入库储位时入到破损区库位中按明细累加破损台数)
             *  rksJssj     结算时间,可以为空操作员手动输入
             */
            /**
             *  TODO 2 制作台账明细
             *  rkRkdjNo    入库单号
             *  bgGoodsName 货品名称
             *  bgGoodsNo   货品编号
             *  rksCount    数量
             *  ruUserName  收货人
             */
            /**
             *          TODO 3 导出按钮
             */
            /**
             *  TODO 4 欠货完结
             *  rkQhWjyy    欠货完结原因/完结原因
             *  rkQhBfdh  (欠货补发单号)
             */
            /**
             *  TODO 5 入库单号不允许重复
             */
            /**
             *  TODO 6 数量不允许为负数
             */
        /**
             TODO 出库预约

             **/
            /**
             * TODO 0  出库单管理 根据分页要求获取没有出库任务的出库单信息 POST /mfunck/selectMfunckDocByPage
             * 参数
             * {
             *    ckCkdjId : 2
                  ckCkdjNo : "jy33333"
                  ckErpNo : "testerp_no"
                  ckCkdjType : 0
                  ckCkdjClientno : "ckdanju"
                  ckCkdjClientname : "高新区银座超市"
                  ckContacts : "郭靖"
                  ckTel : "15689878987"
                  ckAdress : "高新区银座超市"
                  ckXdsj : 1486531654000
                  ckBjsj : 1487741258000
                  ckYfhsj : 1487827662000
                  ckRemarks : "rrrrrrr"
                  ckStatus : 1
                  ckIsauto : 1
                  ckCksj : 1486445274000
                  ckStartwith : 0
                  ckIsyadan : 1
                  ckIsqianhuo : 1
                  ckArehouseId : 1
                  ckClientId : 2
                  ckEndtime : 1487050087000
                  ckRwStatus : 1
                  ckQhStatus : 3
                  ckZlStatus : 1
                  ckGqStatus : 1
                  ckrwId : 0
                  mfunckDocs []
                  allCount : null
                  allTj : null
                  allHeight : null
                }
             */
            /**
             * TODO 1 出库单管理 新增出库单据/包含出库单明细 POST /mfunck/add
             * 参数
             * {
             *
             * }
             */
        /**
         * TODO 出库任务
         */
            /**
             * TODO  出库单管理 根据分页要求获取没有出库任务的出库单信息 POST /mfunck/selectMfunckDocByPage
             */
/*
 * TODO 挑选数据
 * TODO 激活数据
 * TODO 出库操作
 * TODO 出库发运
 * TODO 回收存档
 * TODO 库内管理
 * TODO 库位转移
 * TODO 库存转移确认
 * TODO 库存冻结/解冻
 * TODO 入库日报
 * TODO 出库日报
 * TODO 动碰查询
 * TODO 库存查询
 * TODO 入库单据查询
 * TODO 出库单据查询
 * TODO 进出合并查询
 * TODO 库位转移查询
 * TODO 库位冻结查询
 * TODO 动碰盘点查询
 * TODO 循环盘点查询
 * TODO 全面盘点查询
 * TODO 盘点作业
 * TODO 动碰盘点
 * TODO 循环盘点
 * TODO 全面盘点
 **/

