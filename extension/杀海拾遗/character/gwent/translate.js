const translate = {
	gw_huoge: "霍格",
	gw_aisinie: "埃丝涅",
	gw_gaier: "盖尔",
	gw_enxier: "恩希尔",
	gw_kuite: "奎特",
	gw_dagong: "达贡",
	gw_airuiting: "艾瑞汀",
	gw_fuertaisite: "弗尔泰斯特",
	gw_falanxisika: "法兰茜斯卡",
	gw_haluo: "哈洛",
	gw_hengsaite: "亨赛特",
	gw_kaerweite: "卡尔维特",
	gw_bulanwang: "布兰王",
	gw_fulisi: "符里斯",
	gw_laduoweide: "拉多维德",

	gw_jieluote: "杰洛特",
	gw_yenaifa: "叶奈法",
	gw_telisi: "特莉斯",
	gw_xili: "希里",
	gw_luoqi: "罗契",
	gw_yioufeisi: "伊欧菲斯",

	gw_aigeleisi: "艾格蕾斯",
	gw_aokeweisite: "奥克维斯特",
	gw_kaxier: "卡西尔",
	gw_luobo: "萝卜",
	gw_mieren: "尔米恩",
	gw_sanhanya: "三寒鸦",
	gw_shanhu: "珊瑚",
	gw_zhangyujushou: "章鱼巨兽",
	gw_zhuoertan: "卓尔坦",
	gw_meizi: "梅兹",
	gw_aimin: "艾敏",
	gw_puxila: "普希拉",

	gw_xigedelifa: "希格德莉法",
	gw_laomaotou: "毛矛头",
	gw_laomaotou2: "毛矛头",
	gw_qigaiwang: "乞丐王",

	gw_bierna: "碧尔娜",
	gw_haizhiyezhu: "海之野猪",
	gw_nitelila: "尼斯里拉",

	gw_linjing: "林精",
	gw_nvyemo: "女夜魔",
	gw_mierjiata: "米尔加塔",
	gw_kanbi: "坎毕",
	gw_hanmuduoer: "汉姆多尔",
	gw_kairuisi: "凯瑞斯",
	gw_oudimu: "欧迪姆",
	gw_shasixiwusi: "沙斯西乌斯",

	gw_yioufeisisp: "伊欧菲斯",
	gw_diandian: "店店",
	gw_feilafanruide: "菲拉凡德苪",
	gw_fenghuang: "凤凰",
	gw_yisilinni: "伊斯琳妮",
	gw_lanbote: "兰伯特",

	gw_saqiya: "萨琪亚",

	sqlongnu: "龙怒",
	sqlongnu_info: "准备阶段，你可以发现一张牌堆中的牌，若你手牌中有同名牌，你可以改为造成1点火属性伤害；锁定技，准备阶段开始时，你随机切换至一种形态。",
	sqlonghuo: "龙火",
	sqlonghuo_info: "出牌阶段限一次，你可以弃置所有手牌并摸等量的牌，若敌方角色手牌中与你弃置的牌同名的牌，则随机弃置其中一张。准备阶段开始时，你随机切换至一种形态。",
	sqlongwu: "龙舞",
	sqlongwu_info: "结束阶段，你可以摸X张牌，然后可以使用一张牌，X为手牌中同名牌数最多的牌的数量。准备阶段开始时，你随机切换至一种形态。",
	kuanglie: "狂猎",
	kuanglie_info: "锁定技，每当你使用黑色牌指定其他角色为目标后，目标随机弃置一张牌；每当你以此法累计弃置两张牌后，你摸一张牌。",
	lingshuang: "凛霜",
	lingshuang_info: "每当你失去最后一张基本牌，你可以视为对距离2以内的所有敌方角色使用【刺骨寒霜】；在一名角色受到【刺骨寒霜】影响时，你可以弃置一张手牌将其效果改为“摸牌数-2”。",
	gwshuangwu: "霜舞",
	gwshuangwu_info: "锁定技，每当你造成一次伤害，你视为对目标使用刺骨寒霜；你对处于刺骨寒霜的角色造成的伤害+1。",
	gwhuanshuang: "幻霜",
	gwhuanshuang_info: "准备或结束阶段，你可以发现一张铜卡法术并使用之，此牌结算两次。",
	gwjinli: "金醴",
	gwjinli_jiu: "先祖麦酒",
	gwjinli_info: "出牌阶段限一次，你可以弃置一张手牌，并将一张先祖麦酒置于一名角色的武将牌上。",
	gw_xianzumaijiu: "先祖麦酒",
	gw_xianzumaijiu_info: "出牌阶段对自己使用，你使用下一张【杀】造成伤害后，令所有友方角色摸一张牌；濒死阶段，对自己使用，回复1点体力。",
	gwliaotian: "燎天",
	gwliaotian_info: "出牌阶段限2次，若你有至少两张手牌且颜色均相同，你可以重铸你的全部手牌，并视为对一名随机敌方角色使用一张不计入出杀次数的【杀】。",
	gwmaoxian_yioufeisi: "伊欧菲斯",
	gwmaoxian_yioufeisi_info: "选择两名角色，令目标依次视为对对方使用一张【杀】，然后结束出牌阶段。",
	gwmaoxian_luoqi: "罗契",
	gwmaoxian_luoqi_info: "选择一名角色视为对其使用一张不计入出杀次数的【杀】，然后所有其他角色可以对目标使用一张【杀】，然后结束出牌阶段。",
	gwmaoxian_jieluote: "杰洛特",
	gwmaoxian_jieluote_info: "对一名角色造成1点伤害，若目标体力值大于2且为全场最多，改为造成2点伤害，然后结束出牌阶段。",
	gwmaoxian_yenaifa: "叶奈法",
	gwmaoxian_yenaifa_info: "对至多3名随机敌方角色施加一个随机负面效果，然后结束出牌阶段。",
	gwmaoxian_telisi: "特丽斯",
	gwmaoxian_telisi_info: "对至多3名随机友方角色施加一个随机正面效果，然后结束出牌阶段。",
	gwmaoxian_hengsaite: "亨赛特",
	gwmaoxian_hengsaite_info: "视为使用一张万箭齐发，每当有一名角色因此受到伤害，你获得一张【杀】，然后结束出牌阶段。",
	gwmaoxian_fuertaisite: "弗尔泰斯特",
	gwmaoxian_fuertaisite_info: "令至多两名角色各获得1点护甲，然后结束出牌阶段。",
	gwmaoxian_laduoweide: "拉多维德",
	gwmaoxian_laduoweide_info: "令一名角色的非锁定技失效直到其下一回合结束，并对其造成1点伤害，然后结束出牌阶段。",
	gwmaoxian_enxier: "恩希尔",
	gwmaoxian_enxier_info: "与一名手牌并不超过1的其他角色交换手牌，然后结束出牌阶段。",
	gwmaoxian_fulisi: "符里斯",
	gwmaoxian_fulisi_info: "选择至多三名角色，观看目标的手牌并可以弃置其中1~2张，然后结束出牌阶段。",
	gwmaoxian_kaerweite: "卡尔维特",
	gwmaoxian_kaerweite_info: "获得至多两名角色各一张手牌，然后结束出牌阶段。",
	gwmaoxian_bulanwang: "布兰王",
	gwmaoxian_bulanwang_info: "弃置至多两张牌并摸数量等于弃牌数2倍的牌，跳过弃牌阶段，然后结束出牌阶段。",
	gwmaoxian_kuite: "奎特",
	gwmaoxian_kuite_info: "视为对一名手牌数不小于你的角色连续使用两张【决斗】，然后结束出牌阶段。",
	gwmaoxian_haluo: "哈洛",
	gwmaoxian_haluo_info: "对所有体力值全场最少的角色造成1点伤害，然后结束出牌阶段。",
	gwmaoxian_dagong: "达贡",
	gwmaoxian_dagong_info: "视为同时使用刺骨寒霜、蔽日浓雾和倾盆大雨，然后结束出牌阶段。",
	gwmaoxian_gaier: "盖尔",
	gwmaoxian_gaier_info: "令一名角色增加或减少1点体力和体力上限，然后结束出牌阶段。",
	gwmaoxian_airuiting: "艾瑞汀",
	gwmaoxian_airuiting_info: "令所有其他角色选择一项：使用一张【杀】，或失去1点体力，然后结束出牌阶段。",
	gwmaoxian_aisinie: "埃丝涅",
	gwmaoxian_aisinie_info: "回复1点体力并获得任意一张银卡法术，然后结束出牌阶段。",
	gwmaoxian_falanxisika: "法兰茜斯卡",
	gwmaoxian_falanxisika_info: "随机观看三张金卡法术并使用其中一张，然后结束出牌阶段。",
	gwmaoxian_huoge: "霍格",
	gwmaoxian_huoge_info: "观看牌堆顶的六张牌，使用至多两张，然后弃掉其余的牌，然后结束出牌阶段。",
	gwmaoxian: "冒险",
	gwhuanbi: "幻笔",
	gwhuanbi_info: "出牌阶段限一次，你可以弃置一张牌，并创造一张冒险牌，然后随机选择一名有手牌的角色，被选中的角色可以交给你一张手牌并获得一张该牌的复制。",
	gwminxiang: "冥想",
	gwminxiang_info: "出牌阶段限一次，你可以弃置一张基本牌或普通锦囊牌并摸一张牌，然后选择其他两名角色，令目标分别视为对对方使用一张你弃置的牌的同名牌。",
	gwlangshi: "狼噬",
	gwlangshi_info: "每当你造成一次伤害，你可以对一名体力值不小于受伤害角色的其他角色造1点伤害。",
	gwjingshi: "血契",
	gwjingshi_info: "出牌阶段限一次，你可以猜测手牌中黑色牌最多的角色是谁，若猜对，你可以观看所有其他角色的手牌并获得任意一张。",
	gwjingtian: "经天",
	gwjingtian_info: "锁定技，牌堆顶的九张牌对你始终可见；你始终跳过摸牌阶段，改为获得3枚“经天”标记；每名角色的回合限一次，你可以在任意时间点移去一枚“经天”标记，然后获得牌堆顶的一张牌。",
	gwweitu: "卫土",
	gwweitu_info: "锁定技，每当你弃置牌，若你的护甲数小于3，你获得1点护甲；每当你的护甲为你累计抵消3次伤害，你获得一张随机银卡法术。",
	gwzhongmo: "终末",
	gwzhongmo_info: "锁定技，你跳过摸牌阶段，改为获得两张随机的稀有度不同的法术牌。",
	gwfutian: "覆天",
	gwfutian_info: "锁定技，你防止一切伤害；准备阶段，你须弃置一名其他角色的一张手牌；若你以此法累计弃置的牌总点数达到了24，你变身为汉姆多尔。",
	gwgouhun: "勾魂",
	gwgouhun_info: "出牌阶段限一次，你可以交给一名有手牌的其他角色一张手牌，然后令其选择一项：1. 将手牌中与此牌花色相同的牌（至少一张）交给你；2. 弃置手牌中与此牌花色不同的牌（至少一张）；3. 进入混乱状态直到下一回合结束。",
	gw_wuyao: "雾妖",
	gw_wuyao_info: "在你行动时可当作【杀】使用；回合结束后，从手牌中消失。",
	gw_lang: "狼",
	gw_lang_info: "在你行动时可当作酒使用；回合结束后，从手牌中消失。",
	gwyewu: "叶舞",
	gwyewu_info: "出牌阶段限一次，你可以弃置一张手牌，并弃置一名随机敌人的一张随机牌；若目标弃置的牌与你弃置的牌颜色相同，则重复发动；每以此法弃置一张敌方角色的手牌，你获得一张【雾妖】；每以此法弃置一张敌方角色的手牌，你获得一张【狼】。",
	shuangxi: "霜袭",
	shuangxi_info: "每两轮限一次，出牌阶段，你可以视为使用一张【刺骨寒霜】；若你在本回合造成过伤害，改为使用【白霜】。",
	gwfengshi: "风蚀",
	gwfengshi_info: "结束阶段，你可以选择一项：1. 为自己施加一个随机负面效果，并对两名随机敌人施加一个随机负面效果；2. 为自己施加两个随机正面效果，并对一名随机敌人施加一个随机正面效果。",
	yangfan: "扬帆",
	yangfan_info: "锁定技，每当你使用一张非装备牌，你随机重铸一张与其花色相同的手牌；若没有花色相同的手牌，改为随机重铸一张与其颜色相同的手牌。",
	gwchenshui: "沉睡",
	gwchenshui_bg: "睡",
	gwchenshui_info: "锁定技，你防止即将造成或受到的伤害，然后令伤害来源随机获得对方一张牌；结束阶段，若你自上次沉睡起累计发动了至少3次沉睡效果，你解除沉睡状态，对所有敌方角色造成1点伤害，然后切换至觉醒状态。",
	gwliedi: "裂地",
	gwliedi_info: "锁定技，你造成的伤害+X，X为你到该角色距离的一半，向下取整；结束阶段，若你连续两轮未造成伤害，你切换至沉睡状态。",
	julian: "巨敛",
	julian_info: "出牌阶段开始时，你可以摸若干张牌直到你的手牌数为全场最多或之一。",
	gwfusheng: "复生",
	gwfusheng_info: "当一名未翻面的角色进入濒死状态时，你可以令其翻面并回复1点体力，然后你与其各摸一张牌。",
	gwqinwu: "琴舞",
	gwqinwu2: "琴舞",
	gwqinwu_info: "出牌阶段限一次，每当你使用一张基本牌，你可以令一名角色摸一张牌并获得技能〖琴舞〗直到其下一回合结束。",
	huanshu: "幻术",
	huanshu2: "幻术",
	huanshu3: "幻术",
	huanshu_info: "结束阶段，你可以将一张手牌背面朝上置于你的武将牌上；当一名敌方角色使用一张与之颜色相同的锦囊牌时，你展示并移去此牌，取消锦囊的效果，然后摸两张牌；准备阶段，你移去武将牌上的“幻术”牌。",
	gwjieyin: "结印",
	gwjieyin_info: "出牌阶段，你可以视为使用瘟疫、燕子药水或昆恩法印（不能重复使用同一法术），技能两轮重置一次。",
	zhengjun: "整军",
	zhengjun_info: "锁定技，每当你使用或打出一张卡牌，若这是你在本局游戏中使用或打出的第二张与之同名的牌，你增加1点体力和体力上限；结束阶段，你可以观看牌堆顶的X张牌并获得其中一张，X为你以此法增加的体力上限数。",
	gwxuezhan: "血战",
	gwxuezhan_info: "准备阶段，若你的手牌数为全场最少或之一，你可以获得一张十字召唤。",
	jielue: "劫掠",
	jielue_info: "锁定技，出牌阶段开始时，你从两个随机队友处各获得一张可使用的牌并依次使用之，然后被拿牌的队友摸一张牌。",
	gwfengchi: "风驰",
	gwfengchi_info: "锁定技，出牌阶段开始时，你随机观看3个可以在出牌阶段使用的技能，并获得其中一个技能直到此阶段结束。",
	gwjushi: "巨噬",
	gwjushi2: "巨噬",
	gwjushi_info: "出牌阶段限一次，你可以将一名距离1以内的其他角色的一张随机牌置于你的武将牌上；当你受到伤害后，令“巨噬”牌回到原来的位置；准备阶段，你获得武将牌上的“巨噬”牌。",
	bolang: "搏浪",
	bolang_info: "准备阶段，你可以观看牌堆顶的六张牌，然后将其中至多三张排移入弃牌堆；每当你造成一次伤害，你可以从弃牌堆中获得一张以此法移入弃牌堆的牌（每回合限发动一次）。",
	lingji: "灵计",
	lingji_info: "出牌阶段限一次，你可以摸两张牌并弃置两张牌，若弃置的牌花色相同，你获得一张随机铜卡并展示；若弃置的牌点数相同，你获得一张随机银卡并展示。",
	gwjinyan: "金焰",
	gwjinyan_info: "锁定技，准备阶段，若游戏轮数为3的倍数，你获得一张随机金卡；当游戏轮数不是3的倍数时，你防止所有伤害。",
	gwshenyu: "神愈",
	gwshenyu_info: "准备阶段，你可以令一名角色选择一项：回复1点体力，或从弃牌堆中获得一张非金法术牌（直到洗牌入牌堆前该牌不能再以此法获得）。",
	junchi: "骏驰",
	junchi_info: "每当一名其他角色使用一张【杀】，若目标不是你，你可以对【杀】的目标使用一张牌，并摸一张牌，每回合限一次。",
	gw_dudayuanshuai1: "杜达元帅",
	gw_dudayuanshuai1_info: "当你成为其他角色使用牌的目标时，你可以使用此牌取消之，然后获得对你使用的牌。",
	gw_dudayuanshuai2: "杜达元帅",
	gw_dudayuanshuai2_info: "你不能使用、打出或弃置此牌；结束阶段，若此牌在你手牌中，你弃置之并随机弃置一张手牌。",
	hupeng: "呼朋",
	hupeng_info: "出牌阶段限一次，你可以弃置一张牌并将一张杜达元帅置入一名角色的手牌。",
	shuijian: "水箭",
	shuijian_info: "准备阶段，你可以弃置一张手牌视为对所有敌方角色使用一张万箭齐发。",
	yunhuo: "陨火",
	yunhuo_info: "锁定技，准备阶段，若游戏轮数为4的倍数，你令所有敌方角色随机弃置一张手牌（若没有手牌改为受到1点火焰伤害），然后在此回合结束后获得一个额外回合。",
	yinzhang: "银杖",
	yinzhang_info: "出牌阶段限一次，你可以弃置一张牌，然后发现一张银卡法术。",
	gwtianbian: "天变",
	gwtianbian_info: "出牌阶段开始时，你可以选择一项：随机使用一张对全场有正面效果的牌；或随机使用一张对全场有负面效果的牌。",
	gwxiaoshou: "枭首",
	gwxiaoshou_info: "出牌阶段限两次，你可以弃置一张牌对场上体力值最高（或之一）的一名角色造成1点伤害。",
	gwjiquan: "集权",
	gwjiquan_info: "出牌阶段限一次，你可以从任意名角色处各获得一张牌，每拿一张牌，被拿牌的角色视为对你使用一张【杀】。",
	nuhou: "怒吼",
	nuhou_info: "每当你受到一次伤害，你可以弃置一张牌，然后对一名随机敌人造成1点伤害并随机弃置其一张牌。",
	shewu: "蛇舞",
	shewu_info: "出牌阶段限一次，你可以弃置至多三张牌然后摸三张牌；若你弃置了至少两张牌，你本回合使用牌无视距离；若你弃置了三张牌，你回复1点体力。",
	gwzhanjiang: "斩将",
	gwzhanjiang_info: "每轮限一次，在一名角色的准备阶段，你可以弃置一张牌，然后所有角色可以对该角色使用一张【杀】，出杀的角色在响应时摸一张牌，当有至少两名角色响应后终止结算。",
	gwchuanxin: "穿心",
	gwchuanxin_info: "你的攻击范围基数为你当前体力值；每当你对一名角色使用【杀】结算完毕后，你可以亮出牌堆顶的一张牌，若为黑色，视为对目标再使用一张【杀】。",
	fengjian: "风剑",
	fengjian_info: "每当你使用一张锦囊牌，你可以视为对一名不是此牌目标的角色使用一张雷【杀】，若如此做，你获得潜行直到下一回合开始。",
	huandie: "幻蝶",
	huandie_info: "准备阶段，你可以摸一张牌，并令任意名其他角色摸两张牌，若如此做，此回合结束时，所有手牌数大于体力值的角色需弃置两张手牌。",
	xuezhou: "血咒",
	xuezhou_info: "准备阶段，你可以选择一项效果直到下一回合开始：1. 每当一名其他角色在一个回合中首次受到伤害，该角色失去1点体力，你回复1点体力；2. 每当一名其他角色在一个回合中首次造成伤害，该角色失去1点体力，你（若不是受伤害角色）回复1点体力。",
	fayin: "法印",
	fayin_info: "每当你使用一张【杀】，你可以弃置一张牌并获得一个随机法印效果：1. 目标随机弃置两张牌；2. 目标进入混乱状态直到下一回合开始；3. 对目标造成1点火属性伤害；4. 获得1点护甲；5. 令目标翻面并摸一张牌。",
	gwbaquan: "霸权",
	gwbaquan_info: "出牌阶段限一次，你可以获得一名其他角色的所有牌，然后还给其等量的牌，若你归还的牌均为你得到的牌且该角色体力值不小于你，你对其造成1点伤害。",
	hunmo: "魂墨",
	hunmo_info: "出牌阶段，若你手牌数少于2，你可以选择一名手牌数小于2的其他角色，观看牌堆顶的两张牌，你获得一张并交给其另一张；若你手牌数不少2，你可以选择一名手牌数不少于2的其他角色，你弃置一张手牌，然后观看并弃置其一张手牌。每回合对同一名角色最多发动一次。",
	huihun: "回魂",
	huihun_info: "结束阶段，你可以从弃牌堆中获得本回合使用的前两张红色牌。",
	lanquan: "远略",
	lanquan_backup: "远略",
	lanquan_info: "出牌阶段限一次，你可以观看牌堆顶的六张牌，并选择一张使用。",

	chaoyong: "潮涌",
	chaoyong_info: "准备阶段，你可以弃置一张牌，视为对所有敌方角色使用一张南蛮入侵或万箭齐发。",
};

export default translate;
