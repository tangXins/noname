const translates = {
	jin_zhangchunhua: "晋张春华",
	jin_zhangchunhua_prefix: "晋",
	huishi: "慧识",
	huishi_info: "摸牌阶段，你可以放弃摸牌，改为观看牌堆顶的X张牌，获得其中的一半（向下取整），然后将其余牌置入牌堆底。（X为牌堆数量的个位数）",
	qingleng: "清冷",
	qingleng_info: "一名角色的回合结束时，若其体力值与手牌数之和不小于X，则你可将一张牌当无距离限制的冰属性【杀】对其使用（X为牌堆数量的个位数）。若这是你本局游戏内首次对其发动此技能，则你摸一张牌。",
	xuanmu: "宣穆",
	xuanmu2: "宣穆",
	xuanmu_info: "锁定技，隐匿技。你于其他角色的回合登场时，防止你受到的伤害直到回合结束。",
	jin_simayi: "晋司马懿",
	jin_simayi_prefix: "晋",
	zhanghuyuechen: "张虎乐綝",
	xijue: "袭爵",
	xijue_gain: "袭爵",
	xijue_info: "锁定技，游戏开始时，你获得4枚“爵”。回合结束时，你获得X枚“爵”（X为你本回合内造成的伤害数）。你可弃置一枚“爵”并在合适的时机发动〖突袭〗和〖骁果〗。",
	xijue_info_guozhan: "锁定技，当你首次明置此武将牌时，你获得4枚“爵”。回合结束时，你获得X枚“爵”（X为你本回合内造成的伤害数）。你可弃置一枚“爵”并在合适的时机发动〖突袭〗和〖骁果〗。",
	xijue_tuxi: "突袭",
	xijue_tuxi_info: "摸牌阶段摸牌时，你可以少摸任意张牌，然后获得等量的角色的各一张手牌。",
	xijue_tuxi_info_guozhan: "摸牌阶段摸牌时，你可以少摸至多两张牌，然后获得等量的角色的各一张手牌。",
	xijue_xiaoguo: "骁果",
	xijue_xiaoguo_info: "其他角色的结束阶段开始时，你可以弃置一张手牌，令该角色选择一项：1.弃置一张装备牌，然后你摸一张牌；2.受到你对其造成的1点伤害。",
	xijue_xiaoguo_info_guozhan: "其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌；2.受到你对其造成的1点伤害。",
	gz_duyu: "杜预",
	duyu: "晋杜预",
	duyu_prefix: "晋",
	sanchen: "三陈",
	sanchen_info: "出牌阶段限一次。你可选择一名本回合内未选择过的角色。其摸三张牌，然后弃置三张牌。若其未以此法弃置牌或以此法弃置的牌的类别均不相同，则其摸一张牌且〖三陈〗于此阶段内使用次数上限+1。",
	sanchen_info_guozhan: "出牌阶段，你可选择一名本回合内未选择过的角色。其摸三张牌，然后弃置三张牌。若其未以此法弃置牌或以此法弃置的牌的类别均不相同，则其摸一张牌且你获得技能〖破竹〗直到回合结束。否则你本阶段内不能再发动〖三陈〗。",
	zhaotao: "诏讨",
	zhaotao_info: "觉醒技，准备阶段，若你本局游戏内发动〖三陈〗的次数大于2，则你减1点体力上限并获得〖破竹〗。",
	pozhu: "破竹",
	pozhu_info: "出牌阶段，你可以将一张手牌当做【出其不意】使用。若你未因此牌造成过伤害，则你不能再发动〖破竹〗直到回合结束。",
	pozhu_info_guozhan: "出牌阶段限一次，你可以将一张手牌当做【出其不意】使用。",
	jin_wangyuanji: "晋王元姬",
	jin_wangyuanji_prefix: "晋",
	shiren: "识人",
	shiren_info: "隐匿技。你于其他角色的回合内登场时，若其有手牌，则你可对其发动〖宴戏〗。",
	yanxi: "宴戏",
	yanxi2: "宴戏",
	yanxi_info: "出牌阶段，你可选择一名有手牌的角色。你将该角色的一张随机手牌与牌堆顶的两张牌混合后展示，并选择其中一张。若你以此法选择的是该角色的手牌，则你获得这三张牌。否则你获得选择的牌。你通过〖宴戏〗得到的牌，不计入当前回合的手牌上限。",
	yanxi_info_guozhan: "出牌阶段，你可选择一名有手牌的角色。你将该角色的一张随机手牌与牌堆中的两张随机牌混合后展示，并选择其中一张。若你以此法选择的是该角色的手牌，则你获得这三张牌。否则你获得选择的牌。你通过〖宴戏〗得到的牌，不计入当前回合的手牌上限。",
	jin_simazhao: "晋司马昭",
	jin_simazhao_prefix: "晋",
	tuishi: "推弑",
	tuishi_info: "隐匿技，你于其他角色A的回合内登场时，可于此回合结束时选择其攻击范围内的一名角色B。A选择一项：①对B使用一张【杀】。②你对A造成1点伤害。",
	choufa: "筹伐",
	choufa2: "筹伐",
	choufa_info: "出牌阶段限一次，你可展示一名其他角色的一张手牌并记录其类型A。你令其当前原类型不为A的手牌的牌名均视为【杀】且均视为无属性，直到其回合结束。",
	xinchoufa: "筹伐",
	xinchoufa_info: "出牌阶段限一次，你可展示一名其他角色的一张手牌A。你令其当前所有类型与A不同的手牌的牌名均视为【杀】且均视为无属性，直到其回合结束。",
	zhaoran: "昭然",
	zhaoran2: "昭然",
	zhaoran_info: "出牌阶段开始时，你可令你的手牌对其他角色可见直到出牌阶段结束。若如此做，当你于此阶段内失去一张手牌后，若你的手牌里没有与此牌花色相同的牌且你本回合内未因该花色的牌触发过此效果，则你选择一项：①摸一张牌。②弃置一名其他角色的一张牌。",
	visible_zhaoran: "invisible",
	chengwu: "成务",
	chengwu_info: "主公技，锁定技，其他晋势力角色攻击范围内的角色视为在你的攻击范围内。",
	jin_xiahouhui: "晋夏侯徽",
	jin_xiahouhui_prefix: "晋",
	baoqie: "宝箧",
	baoqie_info: "隐匿技，锁定技。你登场后，从牌堆或弃牌堆中获得一张不为赠物的宝物牌。若此牌在你的手牌区内为宝物牌，则你可以使用此牌。",
	jyishi: "宜室",
	jyishi_info: "每回合限一次，当有其他角色于其出牌阶段内因弃置而失去手牌后，你可令其获得这些牌中位于弃牌堆的一张，然后你获得其余位于弃牌堆的牌。",
	shiduo: "识度",
	shiduo_info: "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，你获得其所有手牌。然后你交给其X张手牌（X为你手牌数的一半，向下取整）。",
	jin_simashi: "晋司马师",
	jin_simashi_prefix: "晋",
	taoyin: "韬隐",
	taoyin2: "韬隐",
	taoyin_info: "隐匿技，当你登场后，若当前回合角色存在且不是你，则你可令该角色本回合的手牌上限-2。",
	yimie: "夷灭",
	yimie2: "夷灭",
	yimie_info: "每回合限一次，当你对其他角色造成伤害时，若伤害值X小于Y，则你可失去1点体力，将伤害值改为Y。此伤害结算结束后，其回复(Y-X)点体力（Y为其体力值）。",
	ruilve: "睿略",
	ruilve2: "睿略",
	ruilve_info: "主公技，其他晋势力角色的出牌阶段限一次，该角色可以将一张带有伤害标签的基本牌或锦囊牌交给你。",
	tairan: "泰然",
	tairan2: "泰然",
	tairan_info: "锁定技，回合结束时，你将体力回复至体力上限，并将手牌摸至体力上限（称为“泰然”牌）。然后你的下一个出牌阶段开始时，你失去上一次以此法回复的体力值的体力，弃置所有“泰然”牌。",
	gz_jin_simayi: "司马懿",
	gz_jin_zhangchunhua: "张春华",
	gz_jin_simazhao: "司马昭",
	gz_jin_wangyuanji: "王元姬",
	gz_jin_simashi: "司马师",
	gz_jin_xiahouhui: "夏侯徽",
	xinquanbian: "权变",
	xinquanbian_info: "出牌阶段，每当你首次使用/打出一种花色的手牌时，你可以从牌堆顶的X张牌中获得一张与此牌花色不同的牌，并将其余牌以任意顺序置于牌堆顶。出牌阶段，你至多可使用X张非装备手牌。（X为你的体力上限）",
	shibao: "石苞",
	zhuosheng: "擢升",
	zhuosheng_info: "出牌阶段，①你使用本轮内得到的基本牌时无次数和距离限制。②你使用本轮内获得的普通锦囊牌选择目标后，可令此牌的目标数+1或-1。③你使用本轮内得到的装备牌时可以摸一张牌（以此法得到的牌不能触发〖擢升〗）。",
	zhuosheng_info_guozhan: "出牌阶段，①你使用本轮内得到的基本牌时无距离限制。②你使用本轮内获得的普通锦囊牌选择目标后，可令此牌的目标数+1或-1。③你使用本轮内得到的装备牌时可以摸一张牌（以此法得到的牌不能触发〖擢升〗）。",
	jin_yanghuiyu: "晋羊徽瑜",
	jin_yanghuiyu_prefix: "晋",
	gz_jin_yanghuiyu: "羊徽瑜",
	huirong: "慧容",
	huirong_info: "隐匿技，锁定技。当你登场后，你令一名角色将手牌数摸至/弃至与体力值相同（至多摸至五张）。",
	ciwei: "慈威",
	ciwei_info: "一名角色于其回合内使用第二张牌时，若此牌为基本牌或普通锦囊牌，则你可以弃置一张牌，取消此牌的所有目标。",
	caiyuan: "才媛",
	caiyuan_info: "锁定技。回合结束时，若你于你的上一个回合结束后未扣减过体力，则你摸两张牌。",
	simazhou: "司马伷",
	caiwang: "才望",
	caiwang_info: "当你使用或打出牌响应其他角色使用的牌，或其他角色使用或打出牌响应你使用的牌后，若这两张牌颜色相同，则你可以弃置对方的一张牌。",
	naxiang: "纳降",
	naxiang2: "纳降",
	naxiang_info: "锁定技，当你受到其他角色造成的伤害后，或你对其他角色造成伤害后，你对其发动〖才望①〗时的“弃置”改为“获得”直到你的下回合开始。",
	cheliji: "彻里吉",
	chexuan: "车悬",
	chexuan_info: "出牌阶段，若你的装备区里没有宝物牌，你可弃置一张黑色牌，选择一张【舆】置入你的装备区；当你失去装备区里的宝物牌后，你可进行判定，若结果为黑色，将一张随机的【舆】置入你的装备区。",
	qiangshou: "羌首",
	qiangshou_info: "锁定技，若你的装备区内有宝物牌，你与其他角色的距离-1。",
	cheliji_sichengliangyu: "四乘粮舆",
	cheliji_sichengliangyu_bg: "粮",
	cheliji_sichengliangyu_info: "一名角色的回合结束时，若你的手牌数小于体力值，你可以摸两张牌，然后弃置此牌。",
	cheliji_tiejixuanyu: "铁蒺玄舆",
	cheliji_tiejixuanyu_bg: "蒺",
	cheliji_tiejixuanyu_info: "其他角色的回合结束时，若其本回合未造成过伤害，你可以令其弃置两张牌，然后弃置此牌。",
	cheliji_feilunzhanyu: "飞轮战舆",
	cheliji_feilunzhanyu_bg: "轮",
	cheliji_feilunzhanyu_info: "其他角色的回合结束时，若其本回合使用过非基本牌，你可以令其交给你一张牌，然后弃置此牌。",
	weiguan: "卫瓘",
	zhongyun: "忠允",
	zhongyun2: "忠允",
	zhongyun_info: "锁定技。每名角色的回合限一次，你受伤/回复体力后，若你的体力值与手牌数相等，你回复1点体力或对你攻击范围内的一名角色造成1点伤害；每名角色的回合限一次，你获得手牌或失去手牌后，若你的体力值与手牌数相等，你摸一张牌或弃置一名其他角色一张牌。",
	shenpin: "神品",
	shenpin_info: "当一名角色的判定牌生效前，你可以打出一张与判定牌颜色不同的牌代替之。",
	zhongyan: "钟琰",
	bolan: "博览",
	bolan_info: "①出牌阶段开始时，你可从三个描述中带有“出牌阶段限一次”的技能中选择一个，令当前回合角色获得直至此阶段结束。②其他角色出牌阶段限一次，其可以失去1点体力，令你发动一次〖博览①〗。",
	yifa: "仪法",
	yifa2: "仪法",
	yifa_info: "锁定技，其他角色使用【杀】或黑色普通锦囊牌指定你为目标后，其手牌上限-1直到其回合结束。",
	ol_huaxin: "OL华歆",
	ol_huaxin_prefix: "OL",
	caozhao: "草诏",
	caozhao_backup: "草诏",
	caozhao_info: "出牌阶段限一次，你可展示一张手牌并声明一种未以此法声明过的基本牌或普通锦囊牌，令一名体力不大于你的其他角色选择一项：令此牌视为你声明的牌，或其失去1点体力。然后若此牌声明成功，然后你可将其交给一名其他角色。",
	olxibing: "息兵",
	olxibing_info: "当你受到其他角色造成的伤害后，你可弃置你或该角色两张牌，然后你们中手牌少的角色摸两张牌，以此法摸牌的角色不能使用牌指定你为目标直到回合结束。",
	recaiwang: "才望",
	recaiwang_info: "①当你使用或打出牌响应其他角色使用的牌，或其他角色使用或打出牌响应你使用的牌后，若这两张牌颜色相同，则你可以弃置对方的一张牌。②若你的手牌数为1，则你可以将该手牌当做【闪】使用或打出。③若你的装备区牌数为1，则你可以将该装备当做【无懈可击】使用或打出。④若你的判定区牌数为1，则你可以将该延时锦囊牌当做【杀】使用或打出。",
	recaiwang_hand: "才望",
	recaiwang_equip: "才望",
	recaiwang_judge: "才望",
	yangyan: "杨艳",
	xuanbei: "选备",
	xuanbei_info: "①游戏开始时，你从牌堆中获得两张具有应变标签的牌。②每回合限一次。当你使用的具有应变标签的牌结算结束后，你可将此牌对应的所有实体牌交给一名其他角色。",
	xianwan: "娴婉",
	xianwan_info: "①当你需要使用【闪】时，若你的武将牌未横置，则你可以横置武将牌并视为使用【闪】。②当你需要使用【杀】时，若你的武将牌横置，则你可以重置武将牌并视为使用【杀】。",
	yangzhi: "杨芷",
	wanyi: "婉嫕",
	wanyi_info: "每回合每项限一次。出牌阶段，你可以将一张具有应变效果的牌当做【逐近弃远】/【出其不意】/【水淹七军】/【洞烛先机】使用。",
	maihuo: "埋祸",
	maihuo_info: "①当你成为其他角色使用【杀】的目标后，若此【杀】不为转化牌且有对应的实体牌且其武将牌上没有“祸”且你是此牌的唯一目标，则你可以令此牌对你无效，并将此【杀】置于其武将牌上，称为“祸”。②一名其他角色的出牌阶段开始时，若其武将牌上有“祸”，则其对你使用此“祸”（有距离限制且计入次数限制，若你不是此牌的合法目标，则改为将此“祸”置入弃牌堆）。③当你对有“祸”的其他角色造成伤害后，你移去其“祸”。",
	xinchang: "辛敞",
	canmou: "参谋",
	canmou_info: "一名角色使用普通锦囊牌指定第一个目标时，若其手牌数为全场唯一最多，则你可以为此牌增加一个额外目标。",
	congjian: "从鉴",
	congjian_info: "一名其他角色成为普通锦囊牌的唯一目标时，若其体力值为全场唯一最多，则你也可以成为此牌的目标。此牌结算结束后，若你受到过渠道为此牌的伤害，则你摸两张牌。",
	xuangongzhu: "晋宣公主",
	gz_xuangongzhu: "宣公主",
	xuangongzhu_prefix: "晋",
	gaoling: "高陵",
	gaoling_info: "隐匿技。当你于回合外明置此武将牌时，你可以令一名角色回复1点体力。",
	qimei: "齐眉",
	qimei_info: "准备阶段，你可以选择一名其他角色。你获得如下效果直到下回合开始：①每回合限一次，当你或其获得牌/失去手牌后，若你与其手牌数相等，则另一名角色摸一张牌。②每回合限一次，当你或其的体力值变化后，若你与其体力值相等，则另一名角色摸一张牌。",
	ybzhuiji: "追姬",
	ybzhuiji_info: "出牌阶段开始时，你可选择一项：①摸两张牌，并于出牌阶段结束时失去1点体力；②回复1点体力，并于出牌阶段结束时弃置两张牌。",
	jin_yanghu: "晋羊祜",
	jin_yanghu_prefix: "晋",
	huaiyuan: "怀远",
	huaiyuanx: "绥",
	huaiyuan_info: "①游戏开始时，你将你的手牌标记为“绥”。②当你失去一张“绥”后，你令一名角色执行一项：⒈其的手牌上限+1。⒉其的攻击范围+1。⒊其摸一张牌。③当你死亡时，你可令一名其他角色的手牌上限+X，且攻击范围+Y（X和Y为你自己被执行过〖怀远②〗的选项一和选项二的次数）。",
	chongxin: "崇信",
	chongxin_info: "出牌阶段限一次，你可重铸一张牌，且令一名有手牌的其他角色也重铸一张牌。",
	dezhang: "德彰",
	dezhang_info: "觉醒技。准备阶段，若你没有“绥”，则你减1点体力上限并获得〖卫戍〗。",
	weishu: "卫戍",
	weishu_info: "锁定技。①当你于摸牌阶段外不因〖卫戍①〗而摸牌后，你令一名角色摸一张牌。②当你于弃牌阶段外不因〖卫戍②〗而弃置牌后，你弃置一名其他角色的一张牌。",
	jin_jiachong: "晋贾充",
	jin_jiachong_prefix: "晋",
	xiongshu: "凶竖",
	xiongshu_info: "其他角色的出牌阶段开始时，你可弃置X张牌（X为你本轮内此前已发动过此技能的次数，为0则不弃）并展示其一张手牌，然后你预测“其本阶段内是否会使用与展示牌牌名相同的牌”。此阶段结束时，若你的预测正确，则你对其造成1点伤害；否则你获得展示牌。",
	jianhui: "奸回",
	jianhui_info: "锁定技。当你造成伤害后，若受伤角色为A，则你摸一张牌；当你受到伤害后，若伤害来源为A，则A弃置一张牌。（A为除本次伤害外最近一次对你造成过伤害的角色）",
	xinxuanbei: "选备",
	xinxuanbei_info: "出牌阶段限一次。你可选择一名其他角色区域内的一张牌。然后其对你使用对应实体牌为此牌的【杀】。然后若此【杀】，未对你造成过伤害，你摸一张牌；对你造成过伤害，你摸两张牌。",
	xinwanyi: "婉嫕",
	xinwanyi_info: "①当你使用【杀】或普通锦囊牌指定其他角色为唯一目标后，你可将其的一张牌置于你的武将牌上作为“嫕”。②你不能使用/打出/弃置与“嫕”花色相同的牌。③结束阶段或当你受到伤害后，你令一名角色获得你的一张“嫕”。",
	jin_guohuai: "郭槐",
	zhefu: "哲妇",
	zhefu_info: "当你于回合外使用或打出牌后，你可令一名有手牌的其他角色选择一项：⒈弃置一张名称相同的牌。⒉受到你造成的1点伤害。",
	yidu: "遗毒",
	yidu_info: "当你使用的【杀】或伤害性锦囊牌结算结束后，你可以展示一名未受到过渠道为此牌伤害的目标角色的至多三张手牌。若这些牌颜色均相同，则你弃置这些牌。",
	wangxiang: "王祥",
	bingxin: "冰心",
	bingxin_info: "每种牌名每回合限一次。当你需要使用基本牌时，若你的手牌数等于体力值且这些牌的颜色均相同，则你可以摸一张牌，视为使用一张基本牌。",
	ol_lisu: "OL李肃",
	ol_lisu_prefix: "OL",
	qiaoyan: "巧言",
	qiaoyan_info: "锁定技，当你于回合外受到其他角色造成的伤害时，若你：有“珠”，则你令伤害来源获得“珠”；没有“珠”，则你防止此伤害，然后摸一张牌，并将一张牌正面朝上置于武将牌上，称为“珠”。",
	xianzhu: "献珠",
	xianzhu_info: "锁定技，出牌阶段开始时，你令一名角色A获得“珠”。若A不为你自己，则你选择你攻击范围内的一名角色B，视为A对B使用一张【杀】。",
	chengjichengcui: "成济成倅",
	oltousui: "透髓",
	oltousui_info: "你可以将任意张牌置于牌堆底，视为使用一张需使用等量张【闪】抵消的【杀】。",
	olchuming: "畜鸣",
	olchuming_info: "锁定技。当你对其他角色造成伤害时，或当你受到其他角色造成的伤害时，若此伤害的渠道不为牌或没有对应的实体牌，此伤害+1，否则其于本回合结束时将所有以此法造成伤害的牌当【借刀杀人】或【过河拆桥】对你使用。",
};

export default translates;
