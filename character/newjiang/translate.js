const translates = {
	yj_zhanghe: "☆张郃",
	yj_zhanghe_prefix: "☆",
	yj_zhangliao: "☆张辽",
	yj_zhangliao_prefix: "☆",
	yj_xuhuang: "☆徐晃",
	yj_xuhuang_prefix: "☆",
	yj_ganning: "☆甘宁",
	yj_ganning_prefix: "☆",
	xhzhiyan: "治严",
	xhzhiyan_info: "出牌阶段，若你的手牌数不等于体力上限，则你可以将手牌摸至/弃至手牌上限，然后本回合不能对其他角色使用牌/可以将弃置的一张牌交给一名其他角色。",
	zhilve: "知略",
	zhilve_info: "锁定技，准备阶段，你选择一项：1.移动场上装备区的一张牌并失去1点体力。2.移动场上判定区的一张牌并令本回合手牌上限-1。3.本回合摸牌阶段多摸一张牌且使用的第一张【杀】无距离限制且不计入次数限制。",
	xinzhilve: "知略",
	xinzhilve_backup: "知略",
	xinzhilve_mark: "知略",
	xinzhilve_info: "出牌阶段限一次，你可以失去1点体力并选择一项：1.移动场上的一张牌；2.视为使用一张无距离限制且不计入次数限制的【杀】并摸一张牌。然后你本回合的手牌上限+1。",
	xinxhzhiyan: "治严",
	xinxhzhiyan_false: "治严",
	xinxhzhiyan_info: "出牌阶段每项各限一次，若你的手牌数：大于体力值，则你可以将X张手牌交给一名其他角色（X为你的手牌数与体力值之差）；小于体力上限，则你可以摸X张牌且本阶段内不能再对其他角色使用牌。（X为你的手牌数与体力上限之差）",
	weifeng: "威风",
	weifeng2: "威风",
	weifeng3: "威风",
	weifeng_info: "锁定技，当你于出牌阶段内使用第一张伤害性基本牌或普通锦囊牌后，你令此牌的一名没有“惧”的其他目标角色获得一枚名称为此牌牌名的“惧”。有“惧”的角色受到伤害时，其移去“惧”，然后若造成伤害的牌名称和“惧”：相同，此伤害+1；不同，你获得该角色的一张牌。准备阶段开始时或你死亡时，你移去场上的所有“惧”。",
	gnjinfan: "锦帆",
	gnjinfan_gain: "锦帆",
	gnjinfan_info: "弃牌阶段开始时，你可将任意张手牌置于武将牌上，称为“铃”（每种花色的“铃”限一张）。你可以如手牌般使用或打出“铃”。当有“铃”移动到处理区后，你从牌堆中获得与“铃”花色相同的一张牌。",
	gnsheque: "射却",
	gnsheque_info: "一名其他角色的准备阶段开始时，若其装备区内有牌，则你可以对其使用一张【杀】（无距离关系的限制且无视防具）。",
	yj_huangzhong: "☆黄忠",
	yj_huangzhong_prefix: "☆",
	spshidi: "势敌",
	spshidi_info: "转换技，锁定技。①准备阶段/结束阶段开始时，若你发动此分支的累计次数为奇数/偶数，则你获得一个“☯”。②若你的“☯”数为偶数，则你至其他角色的距离-1，且你使用的黑色【杀】不可被响应。③若你的“☯”数为奇数，则其他角色至你的距离+1，且你不可响应红色【杀】。",
	spyishi: "义释",
	spyishi_info: "当你对装备区有牌的其他角色造成伤害时，你可令此伤害-1，然后获得其装备区内的一张牌。",
	spqishe: "骑射",
	spqishe_info: "你可以将一张装备牌当做【酒】使用。你的手牌上限+X（X为你装备区内的牌数）。",
	yj_weiyan: "☆魏延",
	yj_weiyan_prefix: "☆",
	mbguli: "孤厉",
	mbguli_info: "出牌阶段限一次。你可以将所有手牌当做一张无视防具的【杀】使用。此牌结算结束后，若此牌造成过伤害，你可以失去1点体力并将手牌摸至X张（X为你的体力上限）。",
	mbaosi: "骜肆",
	mbaosi_info: "锁定技。当你于出牌阶段对一名攻击范围内的角色造成伤害后，你于此阶段对其使用牌无次数限制。",
	yj_zhoubuyi: "☆周不疑",
	yj_zhoubuyi_prefix: "☆",
	mbhuiyao: "慧夭",
	mbhuiyao_info: "出牌阶段限一次。你可以受到1点无来源伤害，然后你选择一名其他角色，令其视为对另一名角色造成过1点伤害。",
	mbquesong: "雀颂",
	mbquesong_info: "一名角色的结束阶段，若你于本回合受到过伤害，你可以令一名角色选择一项：1.摸X张牌并复原武将牌（X为3，若其装备区非宝物牌牌数不小于三张则X为2）；2.回复1点体力。",
	lukai: "陆凯",
	lukai_spade: "♠",
	lukai_spade_bg: "♠️",
	lukai_heart: "♥",
	lukai_heart_bg: "♥️",
	lukai_club: "♣",
	lukai_club_bg: "♣",
	lukai_diamond: "♦",
	lukai_diamond_bg: "♦️️",
	lkbushi: "卜筮",
	lkbushi_info: "①你使用♠牌无次数限制。②当你使用或打出♥牌后，你摸一张牌。③当你成为♣牌的目标后，你可以弃置一张牌，令此牌对你无效。④结束阶段开始时，你从牌堆或弃牌堆获得一张♦牌。⑤准备阶段开始时，你可调整此技能中四种花色的对应顺序。",
	lkzhongzhuang: "忠壮",
	lkzhongzhuang_info: "锁定技。①当你因执行【杀】的效果而造成伤害时，若你的攻击范围大于3，则此伤害+1。②当一名角色受到你因执行【杀】的效果而造成的伤害时，若你的攻击范围小于3，则此伤害改为1。",
	kebineng: "轲比能",
	kousheng: "寇旌",
	kousheng_info: "①出牌阶段开始时，你可以选择任意张手牌，这些牌称为“寇旌”直到回合结束。②你的“寇旌”均视为【杀】且无次数限制。③当你因执行对应实体牌包含“寇旌”的【杀】的效果而造成伤害后，你展示所有“寇旌”牌，然后目标角色可以用所有手牌交换这些牌。",
	zhugeshang: "诸葛尚",
	sangu: "三顾",
	sangu_info: "结束阶段，你可以选择至多三个{【杀】或不为notarget或singleCard的普通锦囊牌}中的牌名，然后令一名其他角色记录这些牌名。该角色的下个出牌阶段开始时，其的手牌于其需要使用牌时均视为其记录中的第一张牌直到此阶段结束，且当其使用或打出有对应实体牌的牌时，移除这些牌中的第一张牌。若你以此法选择过的牌名均为你本回合内使用过的牌名，则防止你因其以此法使用牌造成的伤害。",
	yizu: "轶祖",
	yizu_info: "锁定技。每回合限一次，当你成为【杀】或【决斗】的目标后，若你的体力值不大于使用者的体力值，则你回复1点体力。",
	liwan: "李婉",
	liandui: "联对",
	liandui_info: "①当你使用牌时，若本局游戏内上一张被使用的牌的使用者不为你，你可以令其摸两张牌。②其他角色使用牌时，若本局游戏内上一张被使用的牌的使用者为你，其可以令你摸两张牌。",
	biejun: "别君",
	biejun_info: "①其他角色的出牌阶段限一次。其可以将一张手牌交给你。②每回合限一次。当你受到伤害时，若你手牌中没有本回合因〖别君①〗得到的牌，你可以翻面并防止此伤害。",
	yj_sufei: "苏飞",
	shuojian: "数谏",
	shuojian_info: "出牌阶段限三次。你可以交给一名其他角色一张牌，其选择一项：1.令你摸X张牌并弃置X-1张牌；2.视为使用X张【过河拆桥】，然后此技能本回合失效（X为此技能本阶段剩余发动次数+1）。",
	yj_qiaozhou: "谯周",
	shiming: "识命",
	shiming_info: "每轮限一次。一名角色的摸牌阶段，你可以观看牌堆顶的三张牌，并可以将其中一张置于牌堆底。然后该角色可以改为对自己造成1点伤害，然后从牌堆底摸三张牌。",
	jiangxi: "将息",
	jiangxi_info: "一名角色的回合结束时，若一号位于此回合内进入过濒死状态或未受到过伤害，你可以重置〖识命〗并摸一张牌；若所有角色均未受到过伤害，你可以与当前回合角色各摸一张牌。",
	hanlong: "韩龙",
	duwang: "独往",
	duwang_info: "锁定技。①游戏开始时，你从牌堆顶将五张不为【杀】的牌置于武将牌上，称为“刺”。②若你有牌名不为【杀】“刺”，你至其他角色或其他角色至你的距离+1。",
	cibei: "刺北",
	cibei_info: "①当一名角色使用非转化【杀】造成伤害且此牌对应的实体牌进入弃牌堆后，你可以将一张不为【杀】的“刺”置入弃牌堆，并将这些牌置入“刺”，然后弃置一名角色区域里的一张牌。②一名角色的回合结束时，若你的“刺”均为【杀】，你获得所有“刺”，且这些牌不能被弃置，不计入手牌上限，且当你使用对应实体牌包含这些牌的牌时无次数和距离限制。",
	wuanguo: "武安国",
	diezhang: "叠嶂",
	diezhang_info: "转换技。①出牌阶段，你使用【杀】的次数上限+1。②阳：当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用X张【杀】；阴：当其他角色使用牌被你抵消后，你可以摸X张牌，视为对其使用一张【杀】（X为1）。",
	duanwan: "断腕",
	duanwan_info: "限定技。当你处于濒死状态时，你可以将体力回复至2点，然后删除〖叠嶂①〗和当前转换技状态的〖叠嶂②〗分支，并将〖叠嶂〗修改为“每回合限一次”且将X修改为2。",
	dcduliang: "督粮",
	dcduliang2: "督粮",
	dcduliang_info: "出牌阶段限一次。你可以获得一名其他角色的一张牌，然后选择一项：1.你观看牌堆顶的两张牌，然后令其获得其中的一或两张基本牌；2.令其于下回合的摸牌阶段额外摸一张牌。",
	sunli: "孙礼",
	kangli: "伉厉",
	kangli_info: "当你造成或受到伤害后，你摸两张牌。然后你下次造成伤害时弃置这些牌。",
	xiahoumao: "夏侯楙",
	tongwei: "统围",
	tongwei_info: "出牌阶段限一次。你可以重铸两张牌并指定一名其他角色，当其使用的下一张牌结算结束后，若此牌点数在你上次以此法重铸的牌的点数之间，你视为对其使用一张【杀】或【过河拆桥】。",
	cuguo: "蹙国",
	cuguo_info: "锁定技。当你于一回合使用牌首次被抵消后，你弃置一张牌，视为对此牌的目标角色使用一张该被抵消的牌。此牌结算结束后，若此牌被抵消，你失去1点体力。",
	chenshi: "陈式",
	qingbei: "擎北",
	qingbei_info: "每轮开始时，你可以选择任意种花色，你不能于本轮内使用这些花色的牌。然后当你于本轮使用牌结算结束后，你摸等同于你上一次〖擎北〗选择过的花色数的牌。",
	feiyao: "费曜",
	zhenfeng: "镇锋",
	zhenfeng_info: "每回合限一次。当其他角色于其回合内使用牌时，若其手牌数不大于其体力值，你可以猜测其手牌中与此牌类别相同的牌数。若你猜对，你摸X张牌并视为对其使用一张【杀】（X为你连续猜对的次数且至多为5）；若你猜错且差值大于1，其视为对你使用一张【杀】。",
	linghuyu: "令狐愚",
	yj_simafu: "司马孚",
	yj_xuangongzhu: "宣公主",
	xukun: "徐琨",
	xvzhi: "蓄志",
	xvzhi_info: "出牌阶段限一次，你可令两名角色各选择任意张手牌并交换这些牌，然后获得牌数较少的角色视为使用无视距离的【杀】；若获得牌数相等，你摸两张牌且可以对此阶段未以此法选择过的角色再发动一次〖蓄志〗。",
	beiyu: "备预",
	beiyu_info: "出牌阶段限一次，你可将手牌摸至体力上限，然后你将一种花色的所有手牌置于牌堆底。",
	duchi: "督持",
	duchi_info: "每回合限一次，当你成为其他角色使用牌的目标后，你可从牌堆底摸一张牌并展示所有手牌，若颜色均相同，则此牌对你无效。",
	yjqimei: "齐眉",
	yjqimei_info: "出牌阶段限一次，你可以选择一名其他角色，你与其各摸两张牌并展示两张手牌，然后你根据你与其展示牌的花色总数执行以下效果：1、你依次使用这些弃置的牌中可以使用的牌；2、你与其复原武将牌；3、你与其重铸展示牌；4、你与其各摸一张牌。",
	yjzhuiji: "追姬",
	yjzhuiji_info: "当你死亡时，你可以令一名角色从牌堆和弃牌堆中的随机使用任意装备牌直至其没有空置的装备栏。若如此做，当其失去以此法使用的装备牌后，其废除对应的装备栏。",
	fazhu: "筏铸",
	fazhu_info: "准备阶段，你可以重铸你的区域内任意张非伤害牌，然后将以此法获得的牌交给至多等量名角色各一张，这些角色可以依次使用一张无距离限制的【杀】。",
	xunyuxunyou: "荀彧荀攸",
	zhinang: "智囊",
	zhinang_info: "①当你使用锦囊牌后，你可以获得一个技能台词包含“谋”的技能直到再发动此项；②当你使用装备牌后，你可以获得一个技能名包含“谋”的技能直到再发动此项。",
	gouzhu: "苟渚",
	gouzhu_info: "你失去技能后，若此技能为：锁定技，回复1点体力；觉醒技，获得一张基本牌；限定技，对随机一名其他角色造成1点伤害；转换技，手牌上限+1；主公技，增加1点体力上限。",
	yj_sb_guojia: "新杀谋郭嘉",
	yj_sb_guojia_prefix: "新杀谋",
	xianmou: "先谋",
	xianmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②你失去过牌的回合结束时，你可以：阳，观看牌堆顶五张牌并获得至多X张牌，若未获得X张牌则获得〖遗计〗直到再发动此项；阴，观看一名角色手牌并弃置其中至多X张牌，若弃置X张牌则你进行一次【闪电】判定。（X为你本回合失去牌数）",
	lunshi: "论势",
	lunshi_info: "一名角色对其以外的角色使用普通锦囊牌的结算中，若你手牌中两种颜色的牌数量相同，你可将一张手牌当作不可被响应的【无懈可击】使用。",
	mp_liuling: "刘伶",
	mpjiusong: "酒颂",
	mpjiusong_info: "①你可以将一张锦囊牌当【酒】使用。②当一名角色使用【酒】时，你获得1枚“醉”标记（“醉”数至多为3）。",
	mpmaotao: "酕醄",
	mpmaotao_info: "当其他角色使用基本牌或普通锦囊牌指定唯一目标时，你可以移去1枚“醉”，令此牌的目标改为随机一名合法角色（无距离限制）。若目标角色与原目标相同且你本回合未以此法获得过牌，你从牌堆中随机获得一张锦囊牌。",
	mpbishi: "避世",
	mpbishi_info: "锁定技。你不能成为伤害类锦囊牌的目标。",
	mp_wangrong: "王戎",
	mpjianlin: "俭吝",
	mpjianlin_info: "每回合结束后，若本回合你有基本牌因使用、打出或弃置而进入弃牌堆，则你可以选择其中一张牌获得之。",
	mpsixiao: "死孝",
	mpsixiao_info: "锁定技，游戏开始时，你选择一名其他角色。每回合限一次，当该角色需要使用或打出牌时，其可以观看你的手牌并可以使用或打出其中一张牌，然后你摸一张牌。",
	yj_majun: "马钧",
	gongqiao: "工巧",
	gongqiao_info: "①出牌阶段限一次。你可以将一张手牌置于你的任意装备栏内（可替换原装备牌）。②若你装备区内的实体牌有：⒈基本牌，当你使用基本牌时，你令此牌的牌面数值+1；⒉锦囊牌，当你于一回合内首次使用一种类型的牌后，你摸一张牌；⒊装备牌，你的手牌上限+3。",
	jingyi: "精益",
	jingyi_info: "锁定技。每回合每个副类别限一次，当有实体牌进入你的装备区后，你摸X张牌，然后弃置两张牌（X为你装备区内实体牌的数量）。",
	chuanxie: "传械",
	chuanxie_info: "锁定技。①游戏开始时，你选择一个花色。②一名角色使用〖传械①〗花色时，你将〖传械①〗记录的花色改为下一个花色，然后从牌堆中获得一张再下一个花色的牌（顺序：♠/♥/♣/♦）。",
	yjqiaosi: "巧思",
	yjqiaosi_info: "每回合限一次，当你造成或受到伤害后，你可以将〖传械①〗记录的花色改为上一个或下一个花色。",
	yuliao: "余料",
	yuliao_info: "①每阶段限一次，有牌进入弃牌堆后，你可以将其中一张牌置于武将牌上，称为“材”（至多八张）。②当你进入濒死状态时，你可以将所有“材”置入弃牌堆，然后摸等量的牌。",
	qiqiao: "奇巧",
	qiqiao_info: "出牌阶段，你可以将两张“材”置入弃牌堆并选择一名角色装备区里的一张牌，其根据你移去的“材”获得以下效果直到此牌离开其装备区：基本牌：其使用【杀】的次数上限+1；锦囊牌，其使用锦囊牌不可被响应；装备牌，此牌离开其装备区时其摸两张牌。",
	yanxie: "研械",
	yanxie_info: "出牌阶段。①你可以将两张类别相同的“材”置入弃牌堆并摸等量的牌，然后随机从牌堆中获得一张装备牌。②你可以将一张装备牌置入一名其他角色的装备区中。",
	mp_xiangxiu: "向秀",
	mpmiaoxi: "妙析",
	mpmiaoxi_info: "出牌阶段限一次，你可以同时展示你和一名其他角色的一张手牌，若这两张牌：颜色相同，获得对方的展示牌；花色相同，令其失去1点体力；点数相同，本回合〖妙析〗发动次数+1，然后此项本回合失效。",
	mpsijiu: "思旧",
	mpsijiu_info: "回合结束时，若你本回合获得过其他角色的牌，你可以摸一张牌并观看一名角色的手牌。",
	new_yj_dongzhuo: "☆董卓",
	new_yj_dongzhuo_prefix: "☆",
	xiongjin: "雄进",
	xiongjin_info: "每轮每项各限一次。①出牌阶段开始时，你可以摸X张牌，然后本回合的弃牌阶段开始时，你弃置所有非基本牌。②其他角色的出牌阶段开始时，你可以令其摸X张牌，然后本回合的弃牌阶段开始时，其弃置所有基本牌。（X为你已损失的体力值，至少为1，至多为3）",
	zhenbian: "镇边",
	zhenbian_info: "锁定技。①你的手牌上限等于体力上限。②有牌非因使用进入弃牌堆后，你记录这些牌的花色，然后若你因此记录了至少四种花色且你的体力上限小于8，则你清除记录并增加1点体力上限。",
	baoxi: "暴袭",
	baoxi_sha: "暴袭-杀",
	baoxi_juedou: "暴袭-决斗",
	baoxi_info: "每轮每项各限一次，当一次性至少有两张基本牌/非基本牌进入弃牌堆后，你可以减1点体力上限，将一张手牌当作无距离和次数限制的【决斗】/【杀】使用。",
	fj_peixiu: "裴秀",
	fjzhitu: "制图",
	fjzhitu_info: "当你使用基本牌或单目标锦囊牌时，你可以令任意名你与其距离相等的角色也成为此牌的目标。",
	dcfujue: "复爵",
	dcfujue_info: "出牌阶段限一次。你可以移动场上一张牌，然后你将牌调整至五张。若你于此流程中获得且失去过牌，本回合你计算与其他角色的距离-1。",
	xjzhitu: "制图",
	xjzhitu_info: "①当你使用牌或成为牌的目标，若你未记录此牌的点数，你记录之并摸一张牌。②你使用已记录点数的牌无距离限制。③若你已记录所有点数，你使用牌不能被响应。",
	dcxiujue: "修爵",
	dcxiujue_info: "出牌阶段限一次，你可以与一名其他角色拼点。赢的角色可以依次使用双方的拼点牌（拼点角色外角色不是此牌的合法目标）。若平局，你与其各摸一张牌。",
	dchuairen: "怀刃",
	dchuairen_info: "你可以将装备区里的牌当无次数限制的基本牌使用。若此牌：牌面信息包含此基本牌，你摸两张牌；为装备区最后的牌，造成伤害值或回复量+1。",
	dcchizei: "斥贼",
	dcchizei_info: "你受到伤害时，可以用牌堆顶的牌与伤害来源拼点，若你：赢，你可重复此流程；没赢，你弃置X张牌（X为你本次赢的次数）。",
	wufu: "伍孚",
	dczhonge: "忠锷",
	dczhonge_info: "出牌阶段限一次，你可以将手牌调整至体力上限，与一名其他角色同时选择一项：1.你与其依次摸一张牌；2.你与其依次视为对对方使用一张【杀】。若其选择的项与你不同，你执行每项操作时额外执行一次。",
	dcjuekai: "绝忾",
	dcjuekai_info: "限定技，出牌阶段，你可以重置〖忠锷〗，然后直到出牌阶段结束，此阶段获得过牌的角色无法再使用手牌。",
	yj_zhanghuan: "新杀张奂",
	yj_zhanghuan_prefix: "新杀",
	dcyiju: "义拒",
	dcyiju_info: "锁定技，其他角色使用牌指定你为唯一目标后，你弃置一张牌。",
	dcshuguo: "戍国",
	dcshuguo_info: "每回合结束时，你可以依次使用本回合因弃置而置入弃牌堆的牌直到你使用了其他角色弃置的牌。若你的手牌数不为全场唯一最多，每有一张本回合弃置的牌没有使用，你摸一张牌。",
	yj_zhangyan: "新杀张燕",
	yj_zhangyan_prefix: "新杀",
	dcqiaolve: "趫掠",
	dcqiaolve_info: "你使用牌指定其他角色为目标后，若目标角色本局游戏第一次成为该牌名的目标，你可以获得其一张牌。",
	dchanjie: "悍捷",
	dchanjie_info: "其他角色的回合开始时，若其为全场体力值最多的角色，你可以将所有黑色手牌当一张伤害牌对其使用。",
};

export default translates;
