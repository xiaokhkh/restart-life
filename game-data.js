// ============================================================
// 开局场景 - 多样化起点（所有场景35岁开局）
// ============================================================
const SCENARIOS = [
  {
    id: 'layoff',
    icon: '💼',
    title: '35岁，被裁员',
    desc: 'HR约你谈话，公司业务调整……N+1赔偿已到账。',
    hint: '经典开局，困难模式',
    init: (G) => {
      G.storyTitle = '被裁员的35岁';
      G.storyDesc = '今天是周五，HR约你谈话，说了那句熟悉的"公司业务调整"。\n\n你拿了N+1，走出大楼，站在路边发了十分钟呆。\n\n然后你打开手机，看了眼余额，深吸一口气，决定重新开始。';
      G.money = (Math.floor(Math.random() * 30) + 10) * 10000; // 10-40万
      G.startAge = 35;
      G.burden = 3000 + Math.floor(Math.random() * 3000);
    }
  },
  {
    id: 'lottery',
    icon: '🎰',
    title: '中彩票了！',
    desc: '随手买的彩票中了500万，税后400万到账。',
    hint: '轻松开局，考验定力',
    init: (G) => {
      G.storyTitle = '意外之财';
      G.storyDesc = '你从没想过这种事会发生在自己身上。\n\n一张彩票，从便利店随手买的，中了。\n\n税后400万到账的那一刻，你辞职了。\n\n但很快你发现：有钱只是开始，不是终点。';
      G.money = 4000000; // 400万
      G.startAge = 35;
      G.burden = 1000 + Math.floor(Math.random() * 2000);
      G.luckBonus = 20;
    }
  },
  {
    id: 'divorce',
    icon: '💔',
    title: '离婚了',
    desc: '十年婚姻结束，你分到一半财产，但也要还一半债务。',
    hint: '中年危机，重新出发',
    init: (G) => {
      G.storyTitle = '婚姻的终点';
      G.storyDesc = '离婚协议签完了，十年的婚姻画上句号。\n\n房子卖了，一人一半；存款分了，债也分了。\n\n你一个人在出租屋里，看着空荡荡的房间，决定重新开始。\n\n有些人说，单身是另一种自由。';
      G.money = (Math.floor(Math.random() * 20) + 5) * 10000; // 5-25万
      G.startAge = 35;
      G.burden = 2000; // 抚养费
      G.single = true; // 标记为单身状态
      G.single = true;
    }
  },
  {
    id: 'health',
    icon: '🏥',
    title: '健康亮红灯',
    desc: '体检报告异常，医生说需要休养，你决定辞职。',
    hint: '健康优先，其他再说',
    init: (G) => {
      G.storyTitle = '身体发出的警告';
      G.storyDesc = '体检报告出来了，好几项指标飘红。\n\n医生说：你再这样下去，身体会垮的。\n\n你看了看银行卡，算了算能撑多久，然后递交了辞职信。\n\n有些东西比钱重要。';
      G.money = (Math.floor(Math.random() * 15) + 5) * 10000; // 5-20万
      G.startAge = 35;
      G.healthStart = 40;
      G.burden = 1500 + Math.floor(Math.random() * 1500);
    }
  },
  {
    id: 'inheritance',
    icon: '📜',
    title: '收到一笔遗产',
    desc: '远房亲戚去世，你意外继承了一套老房子和一些存款。',
    hint: '意外之喜，如何利用',
    init: (G) => {
      G.storyTitle = '从未谋面的亲戚';
      G.storyDesc = '律师打电话来的时候，你还以为是诈骗。\n\n但那是真的——一个从未谋面的远房亲戚，把他的房子和积蓄留给了你。\n\n卖掉房子后，你手里突然有了这笔钱。\n\n接下来怎么办？';
      G.money = 1500000 + Math.floor(Math.random() * 1000000); // 150-250万
      G.startAge = 35;
      G.burden = 500 + Math.floor(Math.random() * 1500);
      G.luckBonus = 15;
    }
  },
  {
    id: 'startup_fail',
    icon: '📉',
    title: '创业失败',
    desc: '三年的心血付诸东流，公司倒闭，还背了一些债。',
    hint: '跌入谷底，从头再来',
    init: (G) => {
      G.storyTitle = '创业者的至暗时刻';
      G.storyDesc = '公司关门那天，你一个人坐在空荡荡的办公室里。\n\n三年的心血，几十万的投资，全都没了。\n\n你还欠了一些债，但好在不多。\n\n你打开招聘软件，决定重新成为一个打工人。';
      G.money = -100000 - Math.floor(Math.random() * 150000); // 负债10-25万
      G.startAge = 35;
      G.burden = 2000 + Math.floor(Math.random() * 2000);
      G.startupExp = true;
    }
  },
  {
    id: 'burnout',
    icon: '😵',
    title: '职业倦怠',
    desc: '在大厂干了十年，你突然不想上班了。',
    hint: '精神危机，寻找方向',
    init: (G) => {
      G.storyTitle = '我不想上班了';
      G.storyDesc = '早上醒来，你突然不想去公司了。\n\n不是某一天，是每一天。\n\n你在大厂干了十年，有钱，但没意思。有房，但没时间住。\n\n你决定休息一阵，想想自己到底要什么。';
      G.money = (Math.floor(Math.random() * 50) + 30) * 10000; // 30-80万
      G.startAge = 35;
      G.burden = 3000 + Math.floor(Math.random() * 3000);
      G.burnout = true;
    }
  },
  {
    id: 'family_crisis',
    icon: '👨‍👩‍👧',
    title: '家庭变故',
    desc: '父母生病需要照顾，你决定回老家。',
    hint: '孝道与事业，难以两全',
    init: (G) => {
      G.storyTitle = '回乡之路';
      G.storyDesc = '父亲病倒了，母亲一个人照顾不过来。\n\n你请了长假，后来干脆辞职回了老家。\n\n小城市的工资不高，但离父母近。\n\n这是你的选择，不后悔。';
      G.money = Math.floor(Math.random() * 3) * 50000; // 0, 5万, 或10万
      G.startAge = 35;
      G.burden = 4000 + Math.floor(Math.random() * 2000);
      G.hometown = true;
    }
  },
];

// ============================================================
// 工作列表
// ============================================================
const JOBS = [
  // 互联网/科技
  { title: '互联网产品经理', salary: 25000, desc: '五年大厂经验，精通PPT和甩锅', category: 'tech' },
  { title: '程序员', salary: 30000, desc: '被AI替代前最后一批中年码农', category: 'tech' },
  { title: '互联网运营', salary: 15000, desc: '整天追热点，但追不动了', category: 'tech' },
  { title: 'UI设计师', salary: 18000, desc: '画图十年，被AI一键生成打败', category: 'tech' },
  { title: '数据分析师', salary: 22000, desc: '每天都在Excel里游泳', category: 'tech' },
  
  // 金融
  { title: '银行客户经理', salary: 18000, desc: '业绩压力大，靠卖保险补贴工资', category: 'finance' },
  { title: '保险销售', salary: 8000, desc: '底薪3000，全靠业绩', category: 'finance' },
  { title: '会计', salary: 10000, desc: '代账50家小公司，累但赚不多', category: 'finance' },
  { title: '基金经理助理', salary: 25000, desc: '看似光鲜，实则是保姆', category: 'finance' },
  
  // 房地产
  { title: '房地产中介', salary: 10000, desc: '行业寒冬，连自己都买不起房', category: 'realestate' },
  { title: '装修设计师', salary: 15000, desc: '改方案改到怀疑人生', category: 'realestate' },
  
  // 制造业
  { title: '制造业主管', salary: 15000, desc: '管理30人车间，会喝酒会应酬', category: 'manufacture' },
  { title: '工厂质检员', salary: 8000, desc: '站了十年流水线，腰不太好', category: 'manufacture' },
  { title: '物流经理', salary: 14000, desc: '双十一不睡觉，日常007', category: 'logistics' },
  
  // 教育
  { title: '高中老师', salary: 8000, desc: '体制内，稳定但工资垫底', category: 'education' },
  { title: '驾校教练', salary: 9000, desc: '骂了十年学员，嗓子不行了', category: 'education' },
  { title: '在线教育运营', salary: 12000, desc: '双减后转行做成人教育', category: 'education' },
  
  // 媒体/广告
  { title: '广告公司AE', salary: 12000, desc: '擅长改稿，熟练掌握"改回第一版"', category: 'media' },
  { title: '自媒体博主', salary: 6000, desc: '粉丝3万，接广告够活着', category: 'media' },
  { title: '视频剪辑师', salary: 10000, desc: '熬夜剪片，发际线和存款一起减少', category: 'media' },
  { title: '品牌策划', salary: 18000, desc: 'PPT做得好，什么都能吹', category: 'media' },
  
  // 服务
  { title: '酒店经理', salary: 12000, desc: '疫情三年，酒店关了两家', category: 'service' },
  { title: '餐饮店长', salary: 10000, desc: '房租涨了三倍，利润降了三倍', category: 'service' },
  
  // 医疗
  { title: '医药代表', salary: 20000, desc: '带金销售被查，业绩越来越难', category: 'medical' },
  { title: '医疗器械销售', salary: 18000, desc: '集采后利润薄了', category: 'medical' },
  
  // 其他
  { title: '公务员', salary: 7000, desc: '考上了但被优化到边缘部门', category: 'gov' },
  { title: '律师', salary: 25000, desc: '独立执业三年，案源不稳定', category: 'law' },
  { title: '心理咨询师', salary: 15000, desc: '听别人的烦恼，自己也很累', category: 'service' },
];

// ============================================================
// 城市列表
// ============================================================
const CITIES = [
  { name: '北京', cost: 8000, desc: '五环外三居室，月租9000' },
  { name: '上海', cost: 8000, desc: '浦东两居室，月租8500' },
  { name: '深圳', cost: 7000, desc: '南山一居室，月租7500' },
  { name: '广州', cost: 5500, desc: '天河两居室，月租5500' },
  { name: '杭州', cost: 5000, desc: '余杭两居室，月租5000' },
  { name: '成都', cost: 3500, desc: '天府新区两居室，月租3500' },
  { name: '武汉', cost: 3500, desc: '光谷两居室，月租3500' },
  { name: '西安', cost: 3000, desc: '高新两居室，月租3000' },
  { name: '长沙', cost: 2800, desc: '岳麓两居室，月租2800' },
  { name: '老家县城', cost: 1500, desc: '自家房子，只有吃饭钱' },
  { name: '大理', cost: 2500, desc: '洱海边民宿，月租2000' },
  { name: '三亚', cost: 4000, desc: '海边公寓，淡季便宜' },
];

// ============================================================
// 选择事件库 - 每个事件4-6个选项
// ============================================================
const CHOICE_EVENTS = [
  // === 职业选择（35-55岁）===
  {
    id: 'find_job',
    tag: '职业抉择',
    tagType: 'type-choice',
    title: '有两个工作机会',
    desc: '猎头同时发来两个offer，你陷入纠结。',
    minAge: 35,
    maxAge: 55,
    choices: [
      { 
        text: '去创业公司当高管', 
        hint: '高薪险境，期权可能变废纸', 
        effect: (s) => {
          s.income = 35000;
          s.riskFlag = true;
          s.network = Math.min(100, s.network + 15);
          return { delta: 0, msg: '你加入了一家AI创业公司，职位COO，月薪3.5万+1%期权。CEO说明年就IPO。', type: 'gain', network: +15 };
        }
      },
      { 
        text: '回传统行业当中层', 
        hint: '稳定但薪资倒退', 
        effect: (s) => {
          s.income = 16000;
          s.riskFlag = false;
          return { delta: 0, msg: '你加入了一家制造业国企，月薪1.6万，稳定、无聊、但不会被裁。', type: 'neutral' };
        }
      },
      { 
        text: '先歇三个月再说', 
        hint: '每月消耗积蓄，但调整心态', 
        effect: (s) => {
          s.income = 0;
          s.money -= 30000;
          s.health = Math.min(100, s.health + 10);
          return { delta: -30000, msg: '你决定给自己放个长假。三个月后你精神焕发，但存款少了3万。', type: 'neutral', health: +10 };
        }
      },
      { 
        text: '两个都拒，等更好的', 
        hint: '风险最高，可能越等越差', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.6) {
            s.income = 40000;
            return { delta: 0, msg: '一个月后，更好的offer来了，月薪4万。你赌对了。', type: 'gain' };
          } else {
            s.income = 0;
            s.money -= 50000;
            return { delta: -50000, msg: '两个月过去了，没有更好的offer。你开始慌了，存款也在减少。', type: 'loss' };
          }
        }
      },
      { 
        text: '考虑自己单干', 
        hint: '创业最危险，但回报最高', 
        effect: (s) => {
          s.income = 0;
          s.entrepreneur = true;
          return { delta: 0, msg: '你决定自己干。没有工资，但一切可能性都握在自己手里。', type: 'neutral' };
        }
      },
    ]
  },
  
  {
    id: 'career_switch',
    tag: '职业转型',
    tagType: 'type-choice',
    title: '要不要转行？',
    desc: '朋友推荐你去一个陌生行业，薪资高30%，但要从零开始。',
    choices: [
      { 
        text: '搏一搏，单车变摩托', 
        hint: '高风险高回报，可能成功可能失败', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.45) {
            s.income = Math.floor(s.income * 1.5);
            s.network = Math.min(100, s.network + 20);
            return { delta: 0, msg: '转行成功！新行业更适合你，收入大涨，还认识了一群新朋友。', type: 'gain', network: +20 };
          } else {
            s.income = Math.floor(s.income * 0.6);
            s.health = Math.max(0, s.health - 15);
            return { delta: 0, msg: '转行失败。新行业没想的那么好，花了半年才适应，收入也降了。', type: 'loss', health: -15 };
          }
        }
      },
      { 
        text: '继续深耕本行', 
        hint: '稳妥但可能错过机会', 
        effect: (s) => {
          s.network = Math.max(0, s.network - 5);
          return { delta: 0, msg: '你选择继续本行。几年后回头看，那个行业确实火了一阵，但现在也凉了。', type: 'neutral', network: -5 };
        }
      },
      { 
        text: '两边都试试，边干边学', 
        hint: '精力分散，但风险对冲', 
        effect: (s) => {
          s.income = Math.floor(s.income * 1.1);
          s.health = Math.max(0, s.health - 10);
          return { delta: 0, msg: '你白天上班，晚上学新技能。很累，但一年后你成功转型，薪资涨了10%。', type: 'gain', health: -10 };
        }
      },
      { 
        text: '先调研清楚再说', 
        hint: '稳妥起见，但可能错过窗口期', 
        effect: (s) => {
          s.money -= 5000;
          return { delta: -5000, msg: '你花了一个月调研，发现那个行业确实不错——但招聘窗口已经关了。', type: 'loss' };
        }
      },
    ]
  },

  {
    id: 'moonlight',
    tag: '副业抉择',
    tagType: 'type-choice',
    title: '要不要接私活？',
    desc: '前同事问你能不能帮忙做个项目，报酬5万，但需要下班后加班完成。',
    choices: [
      { 
        text: '接！能赚多少是多少', 
        hint: '收入增加但身体透支', 
        effect: (s) => {
          s.money += 50000;
          s.health = Math.max(0, s.health - 10);
          s.network = Math.min(100, s.network + 10);
          return { delta: 50000, msg: '你接了这个私活，连续加班一个月，赚了5万。但体检报告多了几个异常指标。', type: 'gain', health: -10, network: +10 };
        }
      },
      { 
        text: '不接，身体要紧', 
        hint: '保住健康', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 5);
          return { delta: 0, msg: '你拒绝了。同事找了别人，那个项目后来出问题了，你暗自庆幸。', type: 'neutral', health: +5 };
        }
      },
      { 
        text: '接，但分期完成', 
        hint: '折中方案，收入减半', 
        effect: (s) => {
          s.money += 25000;
          s.health = Math.max(0, s.health - 5);
          return { delta: 25000, msg: '你和对方协商分期交付，报酬减半，但压力小了很多。', type: 'gain', health: -5 };
        }
      },
      { 
        text: '推荐给别人，拿介绍费', 
        hint: '不干活也能赚', 
        effect: (s) => {
          s.money += 5000;
          s.network = Math.min(100, s.network + 5);
          return { delta: 5000, msg: '你推荐了一个朋友，他完成了项目，你拿了5000介绍费，双赢。', type: 'gain', network: +5 };
        }
      },
    ]
  },

  {
    id: 'overseas_offer',
    tag: '海外机会',
    tagType: 'type-choice',
    title: '有一个海外工作机会',
    desc: '前同事在新加坡的公司招人，薪资翻倍，但要举家搬迁。',
    choices: [
      { 
        text: '去！趁年轻闯一闯', 
        hint: '收入大涨，但生活成本也高', 
        effect: (s) => {
          s.income *= 2;
          s.city = { name: '新加坡', cost: 15000, desc: '市中心公寓，月租1.5万人民币' };
          s.network = Math.min(100, s.network + 15);
          return { delta: 0, msg: '你举家搬到了新加坡。薪资翻倍，开销也翻倍，但视野开阔了。', type: 'gain', network: +15 };
        }
      },
      { 
        text: '不去，家人在这边', 
        hint: '放弃机会，但家庭稳定', 
        effect: (s) => {
          s.network = Math.max(0, s.network - 5);
          return { delta: 0, msg: '你拒绝了。老婆说谢谢你理解她不想离开家人。但你有时候会想，如果去了会怎样。', type: 'neutral', network: -5 };
        }
      },
      { 
        text: '先一个人去试试', 
        hint: '分居两地，考验感情', 
        effect: (s) => {
          s.income *= 1.8;
          s.city = { name: '新加坡', cost: 10000, desc: '合租公寓，月租1万人民币' };
          s.health = Math.max(0, s.health - 10);
          return { delta: 0, msg: '你一个人先去了新加坡，家人在国内。每月飞回去一次，累但值得。', type: 'neutral', health: -10 };
        }
      },
      { 
        text: '谈条件，让对方加钱', 
        hint: '可能谈崩', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.5) {
            s.income *= 2.5;
            s.city = { name: '新加坡', cost: 15000, desc: '公司承担房租' };
            return { delta: 0, msg: '对方同意了你的条件，还加了安家费。你的人生开启了新篇章。', type: 'gain' };
          } else {
            return { delta: 0, msg: '对方觉得你要求太多，offer撤回了。你有点后悔。', type: 'loss' };
          }
        }
      },
    ]
  },

  // === 理财投资 ===
  {
    id: 'invest',
    tag: '理财机会',
    tagType: 'type-choice',
    title: '朋友拉你入伙投资',
    desc: '大学同学说他发现了一个稳赚的项目，最低入场10万。"保底年化20%，你信我不？"',
    choices: [
      { 
        text: '投10万，赌一把', 
        hint: '可能暴赚，可能血本无归', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.65) {
            s.money += 80000;
            s.luck = Math.min(100, s.luck + 10);
            return { delta: 80000, msg: '你运气不错。项目在你入场后确实涨了，你获利8万。', type: 'gain', luck: +10 };
          } else if (luck > 0.25) {
            s.money -= 10000;
            return { delta: -10000, msg: '项目黄了。10万打了水漂，同学说"投资有风险"。', type: 'loss' };
          } else {
            s.money -= 100000;
            s.network = Math.max(0, s.network - 20);
            return { delta: -100000, msg: '警察打来电话，这是个庞氏骗局，同学已经跑路了。', type: 'loss', network: -20 };
          }
        }
      },
      { 
        text: '拒绝，存银行定期', 
        hint: '年化3%，安全第一', 
        effect: (s) => {
          const interest = Math.floor(s.money * 0.03);
          s.money += interest;
          return { delta: interest, msg: '你拒绝了，把钱存了定期。三年后本息到账，你感叹：幸亏没冲动。', type: 'gain' };
        }
      },
      { 
        text: '小投2万试试水', 
        hint: '风险可控', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.5) {
            s.money += 15000;
            return { delta: 15000, msg: '小赚1.5万，你及时抽身，没贪心。', type: 'gain' };
          } else {
            s.money -= 20000;
            return { delta: -20000, msg: '2万亏完了。你庆幸没投更多。', type: 'loss' };
          }
        }
      },
      { 
        text: '要详细资料研究一下', 
        hint: '可能错过时机', 
        effect: (s) => {
          return { delta: 0, msg: '你研究了三天，觉得不靠谱拒绝了。同学说"你太谨慎了"，然后赚钱的是他。你不知道该后悔还是庆幸。', type: 'neutral' };
        }
      },
    ]
  },

  {
    id: 'stock',
    tag: '股市风云',
    tagType: 'type-choice',
    title: '要不要入场炒股？',
    desc: '股市大涨，身边朋友都在赚钱。你有闲钱，要不要入场？',
    choices: [
      { 
        text: '全仓杀入，搏一把', 
        hint: '赌徒心态，成败在此一举', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.7) {
            s.money += 300000;
            s.luck = Math.min(100, s.luck + 20);
            return { delta: 300000, msg: '你运气爆棚，股票连续涨停，三个月翻倍离场，赚了30万。', type: 'gain', luck: +20 };
          } else if (luck > 0.3) {
            s.money -= 100000;
            return { delta: -100000, msg: '入市即套，割肉离场，亏了10万。你决定再也不碰股票了。', type: 'loss' };
          } else {
            s.money -= 250000;
            s.health = Math.max(0, s.health - 15);
            return { delta: -250000, msg: '买了"热门股"，公司财务造假退市，你血亏25万，失眠了三个月。', type: 'loss', health: -15 };
          }
        }
      },
      { 
        text: '小仓位试试水', 
        hint: '风险可控', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.5) {
            s.money += 20000;
            return { delta: 20000, msg: '小赚2万，够吃几顿好的。见好就收。', type: 'gain' };
          } else {
            s.money -= 15000;
            return { delta: -15000, msg: '小亏1.5万，算是交了学费。', type: 'loss' };
          }
        }
      },
      { 
        text: '买指数基金定投', 
        hint: '稳健但慢', 
        effect: (s) => {
          s.money += Math.floor(s.money * 0.08);
          return { delta: Math.floor(s.money * 0.08), msg: '你买了指数基金，三年后涨了8%。不多，但稳。', type: 'gain' };
        }
      },
      { 
        text: '不碰，太危险了', 
        hint: '稳字当头', 
        effect: (s) => {
          return { delta: 0, msg: '你忍住了。后来听说好几个朋友被套牢，你暗自庆幸。', type: 'neutral' };
        }
      },
      { 
        text: '交给专业机构打理', 
        hint: '省心但收费', 
        effect: (s) => {
          s.money += Math.floor(s.money * 0.05);
          return { delta: Math.floor(s.money * 0.05), msg: '你找了个理财顾问，年化5%，扣除管理费还有得赚。', type: 'gain' };
        }
      },
    ]
  },

  {
    id: 'house',
    tag: '买房决策',
    tagType: 'type-choice',
    title: '要不要现在买房？',
    desc: '中介推了套房，总价280万，首付84万。你手里有钱，但压上去就没现金流了。',
    choices: [
      { 
        text: '贷款买！上车再说', 
        hint: '每月还贷约8000元', 
        effect: (s) => {
          if (s.money < 840000) {
            return { delta: 0, msg: '首付不够，银行拒贷了。你站在那套房子门口拍了张照。', type: 'neutral' };
          }
          s.money -= 840000;
          s.monthlyDebt = (s.monthlyDebt || 0) + 8000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.luck = Math.min(100, s.luck + 10);
            return { delta: -840000, msg: '买了房，有了自己的家。五年后房价涨了30%，你庆幸当初的决定。', type: 'gain', luck: +10 };
          } else {
            return { delta: -840000, msg: '买了房，月供压力不小。房价这两年没怎么涨，但至少有个窝。', type: 'neutral' };
          }
        }
      },
      { 
        text: '再等等，租房住', 
        hint: '保留现金流', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.6) {
            s.luck = Math.min(100, s.luck + 5);
            return { delta: 0, msg: '你等了两年，房价跌了15%，你捡漏买了一套更好的。', type: 'gain', luck: +5 };
          }
          return { delta: 0, msg: '你决定再等等。房价起起伏伏，你一直没有下手，有时候后悔，有时候庆幸。', type: 'neutral' };
        }
      },
      { 
        text: '买个小户型先', 
        hint: '总价低，压力小', 
        effect: (s) => {
          s.money -= 400000;
          s.monthlyDebt = (s.monthlyDebt || 0) + 4000;
          return { delta: -400000, msg: '你买了个小两居，月供4000，压力不大，将来可以置换。', type: 'neutral' };
        }
      },
      { 
        text: '去更便宜的城市买', 
        hint: '房价低，但可能换个城市', 
        effect: (s) => {
          s.money -= 300000;
          s.city = CITIES.find(c => c.name === '成都') || CITIES[5];
          return { delta: -300000, msg: '你去了成都，全款买了套房，生活质量提高了，但离家人远了。', type: 'neutral' };
        }
      },
      { 
        text: '不买，投资自己', 
        hint: '学习进修，提升能力', 
        effect: (s) => {
          s.money -= 50000;
          s.income = Math.floor(s.income * 1.2);
          return { delta: -50000, msg: '你花了5万进修，换了个更好的工作，收入涨了20%。', type: 'gain' };
        }
      },
    ]
  },

  // === 创业 ===
  {
    id: 'startup',
    tag: '创业机会',
    tagType: 'type-choice',
    title: '要不要辞职创业？',
    desc: '你发现一个市场机会，前同事愿意合伙，各投50万。',
    choices: [
      { 
        text: '梭哈！辞职创业', 
        hint: '成功则财务自由，失败则一无所有', 
        effect: (s) => {
          s.income = 0;
          if (s.money < 500000) {
            s.money -= s.money * 0.5;
            return { delta: -Math.floor(s.money * 0.5), msg: '你资金不够，只能小规模试水。折腾了一年，项目黄了，积蓄花了一半。', type: 'loss' };
          }
          s.money -= 500000;
          const luck = Math.random();
          if (luck > 0.72) {
            s.income = 80000;
            s.bigWin = true;
            s.network = Math.min(100, s.network + 30);
            return { delta: -500000, msg: '你押上了全部。创业头两年很苦，第三年突然起飞，你的公司成了细分领域第一。', type: 'gain', network: +30 };
          } else if (luck > 0.4) {
            s.income = 20000;
            return { delta: -500000, msg: '创业失败，但你转型成了顾问。前同事走人，你一个人扛着小公司勉强维持。', type: 'neutral' };
          } else {
            s.income = 8000;
            s.debt = (s.debt || 0) + 300000;
            s.health = Math.max(0, s.health - 20);
            return { delta: -500000, msg: '彻底失败。合伙人跑路，你背了30万债，只能重新找工作。', type: 'loss', health: -20 };
          }
        }
      },
      { 
        text: '继续打工，等机会', 
        hint: '稳妥但可能后悔', 
        effect: (s) => {
          return { delta: 0, msg: '你想了一夜，决定不冒险。前同事自己去创了，两年后他在朋友圈晒新车新房。', type: 'neutral' };
        }
      },
      { 
        text: '副业创业，边上班边做', 
        hint: '精力分散，但风险对冲', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.5) {
            s.income += 10000;
            return { delta: 0, msg: '你白天上班，晚上做项目。一年后副业收入超过主业，你才辞职全职做。', type: 'gain' };
          } else {
            s.health = Math.max(0, s.health - 15);
            return { delta: 0, msg: '两边都顾不上，身体垮了，项目也没起来。你放弃了，好好休息。', type: 'loss', health: -15 };
          }
        }
      },
      { 
        text: '只投钱不参与', 
        hint: '当个投资人', 
        effect: (s) => {
          s.money -= 200000;
          const luck = Math.random();
          if (luck > 0.6) {
            s.money += 500000;
            return { delta: 300000, msg: '你投了20万，三年后公司被收购，你赚了30万。', type: 'gain' };
          } else {
            return { delta: -200000, msg: '投了20万，一年后公司倒闭，钱打了水漂。', type: 'loss' };
          }
        }
      },
    ]
  },

  // === 家庭 ===
  {
    id: 'divorce',
    tag: '人生岔口',
    tagType: 'type-choice',
    title: '婚姻出现危机',
    desc: '你和伴侣矛盾激化，对方说"再这样下去就离婚"。',
    condition: (s) => !s.single, // 已离婚的不触发此事件
    choices: [
      { 
        text: '认真挽救这段婚姻', 
        hint: '需要时间和精力投入', 
        effect: (s) => {
          const luck = Math.random();
          s.money -= 20000;
          if (luck > 0.5) {
            s.health = Math.min(100, s.health + 10);
            return { delta: -20000, msg: '你请了婚姻咨询师，带对方去旅行，重新找回了感觉。家又完整了。', type: 'neutral', health: +10 };
          } else {
            s.money -= 100000;
            s.burden = (s.burden || 0) + 3000;
            s.network = Math.max(0, s.network - 15);
            return { delta: -120000, msg: '努力了半年，还是离了。财产分割、孩子抚养……你净身出户，每月付抚养费3000。', type: 'loss', network: -15 };
          }
        }
      },
      { 
        text: '主动提离婚，解脱算了', 
        hint: '短期阵痛，长期未知', 
        effect: (s) => {
          s.money -= 150000;
          s.burden = (s.burden || 0) + 3000;
          s.health = Math.min(100, s.health + 5);
          s.single = true;
          return { delta: -150000, msg: '离婚了。分了150万的房子，你净身出户。意外的是，你发现自己睡得更好了。', type: 'loss', health: +5 };
        }
      },
      { 
        text: '先分居冷静一下', 
        hint: '给彼此空间', 
        effect: (s) => {
          s.money -= 50000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.health = Math.min(100, s.health + 5);
            return { delta: -50000, msg: '分居三个月后，你们和好了。经历这次危机，反而更珍惜彼此。', type: 'neutral', health: +5 };
          } else {
            s.money -= 100000;
            s.burden = (s.burden || 0) + 3000;
            return { delta: -150000, msg: '分居后矛盾更大，最后还是离了。钱没了，人也散了。', type: 'loss' };
          }
        }
      },
      { 
        text: '忍着，为了孩子', 
        hint: '维持表面和平', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 15);
          return { delta: 0, msg: '你选择了忍耐。表面上家庭完整，但你知道心里空了一块。', type: 'loss', health: -15 };
        }
      },
    ]
  },

  {
    id: 'second_child',
    tag: '家庭决策',
    tagType: 'type-choice',
    title: '要不要生二胎？',
    desc: '意外怀孕了，你们经济状况一般，但对方想要这个孩子。',
    condition: (s) => !s.single, // 单身不触发此事件
    choices: [
      { 
        text: '生！船到桥头自然直', 
        hint: '家庭开支翻倍', 
        effect: (s) => {
          s.burden = (s.burden || 0) + 2000;
          s.health = Math.max(0, s.health - 5);
          s.luck = Math.min(100, s.luck + 10);
          return { delta: 0, msg: '二胎出生了，是个女儿。虽然压力大，但看着两个孩子在一起玩，你觉得值了。', type: 'neutral', luck: +10, health: -5 };
        }
      },
      { 
        text: '不要，养不起', 
        hint: '经济压力小', 
        effect: (s) => {
          s.money -= 5000;
          s.health = Math.max(0, s.health - 10);
          return { delta: -5000, msg: '去医院做了手术，花了5000。你们之间的关系似乎有了裂痕。', type: 'loss', health: -10 };
        }
      },
      { 
        text: '生，但需要更多收入', 
        hint: '倒逼自己努力', 
        effect: (s) => {
          s.burden = (s.burden || 0) + 2000;
          s.income = Math.floor(s.income * 1.2);
          s.health = Math.max(0, s.health - 10);
          return { delta: 0, msg: '孩子出生后，你加倍努力，换了个更好的工作，收入涨了20%。压力就是动力。', type: 'gain', health: -10 };
        }
      },
      { 
        text: '和家人商量后再决定', 
        hint: '共同决策', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.5) {
            s.burden = (s.burden || 0) + 2000;
            return { delta: 0, msg: '全家人一起商量，决定生。婆婆主动提出帮忙带，压力小了很多。', type: 'neutral' };
          } else {
            s.money -= 5000;
            return { delta: -5000, msg: '商量后决定不要，做了手术。虽然遗憾，但经济条件确实不允许。', type: 'loss' };
          }
        }
      },
    ]
  },

  {
    id: 'parents_care',
    tag: '家庭责任',
    tagType: 'type-choice',
    title: '父母需要照顾',
    desc: '父母年纪大了，身体不太好，需要有人照顾。',
    choices: [
      { 
        text: '接父母来身边照顾', 
        hint: '家庭团聚，但开销增加', 
        effect: (s) => {
          s.burden = (s.burden || 0) + 3000;
          s.health = Math.max(0, s.health - 10);
          s.network = Math.min(100, s.network + 5);
          return { delta: 0, msg: '你把父母接到身边，请了保姆帮忙。开销大了，但家人在一起，心里踏实。', type: 'neutral', health: -10, network: +5 };
        }
      },
      { 
        text: '回老家发展', 
        hint: '薪资可能下降', 
        effect: (s) => {
          s.income = Math.floor(s.income * 0.7);
          s.city = CITIES.find(c => c.name === '老家县城') || CITIES[9];
          s.health = Math.min(100, s.health + 10);
          return { delta: 0, msg: '你辞职回老家，收入少了但能陪在父母身边。人生不只有钱。', type: 'neutral', health: +10 };
        }
      },
      { 
        text: '出钱请专业护工', 
        hint: '花钱买安心', 
        effect: (s) => {
          s.money -= 10000;
          return { delta: -10000, msg: '你每月出钱请护工，自己定期回去看望。钱花了，但心安了。', type: 'loss' };
        }
      },
      { 
        text: '兄弟姐妹轮流照顾', 
        hint: '分担压力', 
        effect: (s) => {
          s.burden = (s.burden || 0) + 1000;
          return { delta: 0, msg: '你和兄弟姐妹商量好轮流照顾，压力小了很多。血浓于水。', type: 'neutral' };
        }
      },
    ]
  },

  // === 社交 ===
  {
    id: 'social_club',
    tag: '社交拓展',
    tagType: 'type-choice',
    title: '要不要加入高端社交圈？',
    desc: '朋友邀请你加入商学院校友会，入会费5万/年，据说能认识很多大佬。',
    choices: [
      { 
        text: '加入，拓展人脉', 
        hint: '花钱买圈子', 
        effect: (s) => {
          s.money -= 50000;
          const luck = Math.random();
          if (luck > 0.4) {
            s.network = Math.min(100, s.network + 25);
            s.income += 5000;
            return { delta: -50000, msg: '入会后，你认识了一些有资源的人。有人给你介绍了稳定项目，月入多了5000。', type: 'gain', network: +25 };
          } else {
            return { delta: -50000, msg: '入会一年，加了一堆微信，发消息从没人回。圈子不是花钱就能进的。', type: 'loss' };
          }
        }
      },
      { 
        text: '算了，都是割韭菜', 
        hint: '省钱但错过机会', 
        effect: (s) => {
          return { delta: 0, msg: '你拒绝了。后来听说有人确实赚到了钱，也有人被忽悠投了不靠谱项目。你不知道自己是对是错。', type: 'neutral' };
        }
      },
      { 
        text: '先参加一次活动看看', 
        hint: '试水', 
        effect: (s) => {
          s.money -= 5000;
          s.network = Math.min(100, s.network + 5);
          return { delta: -5000, msg: '你花钱参加了一次活动，认识了几个有意思的人。圈子还是得自己混。', type: 'neutral', network: +5 };
        }
      },
      { 
        text: '让朋友帮忙介绍，不交会费', 
        hint: '蹭资源', 
        effect: (s) => {
          s.network = Math.min(100, s.network + 10);
          return { delta: 0, msg: '朋友帮你介绍了几个靠谱的人，你没花会费也进了圈子。人脉不是买来的。', type: 'gain', network: +10 };
        }
      },
    ]
  },

  // === 健康 ===
  {
    id: 'health_check',
    tag: '健康警示',
    tagType: 'type-choice',
    title: '体检报告亮红灯',
    desc: '体检发现几个指标异常，医生建议住院检查，可能需要手术。',
    choices: [
      { 
        text: '马上治疗，健康第一', 
        hint: '花钱保命', 
        effect: (s) => {
          const cost = 80000 + Math.floor(Math.random() * 40000);
          s.money -= cost;
          s.health = Math.min(100, s.health + 30);
          return { delta: -cost, msg: `住院治疗花了${Math.floor(cost/10000)}万，好在发现得早。出院后你开始注重养生了。`, type: 'loss', health: +30 };
        }
      },
      { 
        text: '先拖着，工作太忙', 
        hint: '省钱但埋雷', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 25);
          return { delta: 0, msg: '你拖着没去。半年后突然发作，被送进急诊，花得更多，身体也更差了。', type: 'loss', health: -25 };
        }
      },
      { 
        text: '换家医院复查', 
        hint: '可能是误诊', 
        effect: (s) => {
          s.money -= 5000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.health = Math.min(100, s.health + 5);
            return { delta: -5000, msg: '复查结果显示问题不大，注意饮食就行。虚惊一场。', type: 'neutral', health: +5 };
          } else {
            s.money -= 50000;
            s.health = Math.min(100, s.health + 20);
            return { delta: -55000, msg: '复查确认有问题，你接受了治疗，花了5万。早发现早治疗是对的。', type: 'loss', health: +20 };
          }
        }
      },
      { 
        text: '调整生活方式，定期观察', 
        hint: '自我调理', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 10);
          return { delta: 0, msg: '你开始早睡早起，戒烟戒酒，每天运动。半年后复查，指标好转了。', type: 'gain', health: +10 };
        }
      },
    ]
  },

  // === 学习 ===
  {
    id: 'mba',
    tag: '学习进修',
    tagType: 'type-choice',
    title: '要不要读MBA？',
    desc: '知名商学院MBA项目，学费30万，周末上课，两年拿学位。',
    choices: [
      { 
        text: '读！投资自己', 
        hint: '花钱换人脉和学历', 
        effect: (s) => {
          s.money -= 300000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.income += 10000;
            s.network = Math.min(100, s.network + 20);
            return { delta: -300000, msg: 'MBA读完，你认识了几个靠谱的朋友，工作也换了更好的。30万花得值。', type: 'gain', network: +20 };
          } else {
            return { delta: -300000, msg: 'MBA读完了，学历有了，但工作没变。同学都在晒升职加薪，你只多了个证书。', type: 'loss' };
          }
        }
      },
      { 
        text: '不读，自学也一样', 
        hint: '省钱但可能错过', 
        effect: (s) => {
          return { delta: 0, msg: '你决定自学。买了一堆书，看了两章就吃灰了。人生没有捷径，但花钱也不是捷径。', type: 'neutral' };
        }
      },
      { 
        text: '读个便宜的在线课程', 
        hint: '性价比高', 
        effect: (s) => {
          s.money -= 10000;
          s.income += 3000;
          return { delta: -10000, msg: '你报了个在线课程，花了一万，学到了不少东西，还认识了几个同学。值了。', type: 'gain' };
        }
      },
      { 
        text: '公司报销，才去读', 
        hint: '先谈条件', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.6) {
            s.income += 8000;
            s.network = Math.min(100, s.network + 15);
            return { delta: 0, msg: '公司同意报销一半，你读了MBA。学历、人脉都有了，还不花自己的钱。', type: 'gain', network: +15 };
          } else {
            return { delta: 0, msg: '公司不报销，你决定不读了。省了钱，但错过了机会。', type: 'neutral' };
          }
        }
      },
    ]
  },

  // === 副业 ===
  {
    id: 'sideline',
    tag: '副业机会',
    tagType: 'type-choice',
    title: '要不要搞副业？',
    desc: '你发现可以利用下班时间赚外快，有几个方向可以选择。',
    choices: [
      { 
        text: '做自媒体，拍短视频', 
        hint: '投入大，变现慢', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.6) {
            s.income += 15000;
            s.network = Math.min(100, s.network + 15);
            return { delta: 0, msg: '你一条视频爆了，涨了30万粉。品牌方找来，月入多了1.5万。', type: 'gain', network: +15 };
          } else {
            s.money -= 30000;
            s.health = Math.max(0, s.health - 5);
            return { delta: -30000, msg: '拍了8个月，粉丝涨了2000。买设备花了3万，精力也搭进去了。', type: 'loss', health: -5 };
          }
        }
      },
      { 
        text: '接私活/咨询', 
        hint: '稳定变现，但耗精力', 
        effect: (s) => {
          s.income += 5000;
          s.network = Math.min(100, s.network + 5);
          return { delta: 0, msg: '你在行上注册了账号，靠专业积累，每月能接2-3单咨询，额外多了5000收入。', type: 'gain', network: +5 };
        }
      },
      { 
        text: '专心主业，不搞副业', 
        hint: '保留精力', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 5);
          return { delta: 0, msg: '你把精力押在主业上，申请了公司内部转岗，升职了。主业收入涨了20%。', type: 'neutral', health: +5 };
        }
      },
      { 
        text: '开个网店/做电商', 
        hint: '需要资金和精力', 
        effect: (s) => {
          s.money -= 50000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.income += 8000;
            return { delta: -50000, msg: '你开了个淘宝店，进货、发货、客服都是自己。忙是忙，但每月多了8000收入。', type: 'gain' };
          } else {
            return { delta: -50000, msg: '网店开了一年，没赚到钱，货全砸手里了。你决定关闭店铺。', type: 'loss' };
          }
        }
      },
    ]
  },
  // === 旅游探险 ===
  {
    id: 'world_travel',
    tag: '人生选择',
    tagType: 'type-life',
    title: '要不要环游世界？',
    desc: '你突然想去看看这个世界。反正也没什么牵挂，何不任性一回？',
    choices: [
      { 
        text: '走！环游世界去', 
        hint: '花光积蓄，但看遍世界', 
        effect: (s) => {
          const cost = 300000 + Math.floor(Math.random() * 200000);
          s.money -= cost;
          s.health = Math.min(100, s.health + 20);
          s.network = Math.min(100, s.network + 25);
          s.luck = Math.min(100, s.luck + 15);
          s.worldTraveler = true;
          return { delta: -cost, msg: `你花${Math.floor(cost/10000)}万走了30个国家。看了金字塔、看了极光、看了世界尽头。回来时穷了，但眼睛里有光了。`, type: 'gain', health: +20, network: +25, luck: +15 };
        }
      },
      { 
        text: '穷游，打工旅行', 
        hint: '边走边赚，慢但自由', 
        effect: (s) => {
          s.money -= 50000;
          s.health = Math.min(100, s.health + 10);
          s.network = Math.min(100, s.network + 15);
          s.workingHoliday = true;
          return { delta: -50000, msg: '你去了新西兰打工度假，摘了一年苹果。虽然累，但认识了一群志同道合的旅人，还学会了冲浪。', type: 'gain', health: +10, network: +15 };
        }
      },
      { 
        text: '先在国内转转', 
        hint: '低成本探索', 
        effect: (s) => {
          s.money -= 30000;
          s.health = Math.min(100, s.health + 8);
          return { delta: -30000, msg: '你花了3万去了西藏、新疆、云南。高原反应、迷路、拉肚子，但这些都成了难忘的回忆。', type: 'neutral', health: +8 };
        }
      },
      { 
        text: '算了，没那个命', 
        hint: '省钱但可能后悔', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 5);
          return { delta: 0, msg: '你打开了机票页面，看了很久，最后关掉了。有些事，可能这辈子都不会做了。', type: 'loss', health: -5 };
        }
      },
    ]
  },

  // === 东南亚赌石 ===
  {
    id: 'gambling_stones',
    tag: '冒险机会',
    tagType: 'type-choice',
    title: '要不要去缅甸赌石？',
    desc: '朋友说缅甸翡翠原石暴利，一刀穷一刀富，他认识靠谱的矿主。',
    choices: [
      { 
        text: '去！赌一把大的', 
        hint: '可能一夜暴富，也可能倾家荡产', 
        effect: (s) => {
          s.money -= 200000;
          const luck = Math.random();
          if (luck > 0.85) {
            const win = 800000 + Math.floor(Math.random() * 2000000);
            s.money += win;
            s.luck = Math.min(100, s.luck + 30);
            return { delta: win - 200000, msg: `你花20万买的石头切开是极品帝王绿！转手卖了${Math.floor(win/10000)}万。人生巅峰！`, type: 'gain', luck: +30 };
          } else if (luck > 0.5) {
            s.money += 100000;
            return { delta: -100000, msg: '石头切开是普通的糯种，亏了10万。还好没伤筋动骨。', type: 'loss' };
          } else if (luck > 0.2) {
            return { delta: -200000, msg: '石头切开全是裂纹，废料。20万没了，你站在矿场门口发呆。', type: 'loss' };
          } else {
            s.money -= 100000;
            s.health = Math.max(0, s.health - 20);
            return { delta: -300000, msg: '你被骗了！那根本不是翡翠矿，是骗子团伙的圈套。被关了三天才逃出来，还被打了一顿。', type: 'loss', health: -20 };
          }
        }
      },
      { 
        text: '小赌怡情，投5万试试', 
        hint: '风险可控', 
        effect: (s) => {
          s.money -= 50000;
          const luck = Math.random();
          if (luck > 0.6) {
            s.money += 150000;
            return { delta: 100000, msg: '小赚10万，石头里是不错的冰种。你见好就收，没有继续赌。', type: 'gain' };
          } else {
            return { delta: -50000, msg: '石头切开啥都没有。5万买了教训。', type: 'loss' };
          }
        }
      },
      { 
        text: '不去，太危险了', 
        hint: '稳妥', 
        effect: (s) => {
          return { delta: 0, msg: '你拒绝了。后来听说那个朋友被人绑架了，据说是在赌石时得罪了当地势力。', type: 'neutral' };
        }
      },
      { 
        text: '去缅甸旅游，但不赌', 
        hint: '看看热闹', 
        effect: (s) => {
          s.money -= 10000;
          s.network = Math.min(100, s.network + 5);
          return { delta: -10000, msg: '你去了缅甸，看了翡翠市场，认识了一些玉石商人。虽然没赌，但长见识了。', type: 'neutral', network: +5 };
        }
      },
    ]
  },

  // === 非洲挖矿 ===
  {
    id: 'africa_mining',
    tag: '疯狂想法',
    tagType: 'type-life',
    title: '要不要去非洲挖矿？',
    desc: '同学在非洲开了个金矿，邀请你去入股，说年化50%不是梦。',
    choices: [
      { 
        text: '去非洲闯一闯', 
        hint: '高风险高回报，可能赚翻也可能回不来', 
        effect: (s) => {
          s.money -= 500000;
          s.health = Math.max(0, s.health - 15);
          const luck = Math.random();
          if (luck > 0.7) {
            s.money += 2000000;
            s.network = Math.min(100, s.network + 20);
            return { delta: 1500000, msg: '金矿真的出金了！你投入的50万变成了200万。虽然条件艰苦，但值得。', type: 'gain', health: -15, network: +20 };
          } else if (luck > 0.3) {
            s.money += 300000;
            return { delta: -200000, msg: '矿是开了，但产量远不如预期。折腾了两年，亏了20万，但算长见识了。', type: 'loss', health: -15 };
          } else {
            s.money = Math.max(0, s.money - 200000);
            s.health = Math.max(0, s.health - 30);
            return { delta: -700000, msg: '矿没挖成，还感染了疟疾。在当地医院躺了三个月，最后花光了钱逃回国。', type: 'loss', health: -30 };
          }
        }
      },
      { 
        text: '小投一点，不当合伙人', 
        hint: '有限风险', 
        effect: (s) => {
          s.money -= 100000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.money += 200000;
            return { delta: 100000, msg: '投了10万，一年后变成20万。虽然不多，但比银行强。', type: 'gain' };
          } else {
            return { delta: -100000, msg: '矿没挖出来，10万打了水漂。同学说"下次一定"。。。', type: 'loss' };
          }
        }
      },
      { 
        text: '不去，太远了', 
        hint: '安全第一', 
        effect: (s) => {
          return { delta: 0, msg: '你拒绝了。后来听说那个矿场出了安全事故，死了几个人。你庆幸没去。', type: 'neutral' };
        }
      },
      { 
        text: '让他把矿石寄样品来看', 
        hint: '先验证真假', 
        effect: (s) => {
          s.money -= 5000;
          return { delta: -5000, msg: '你花了5000请人鉴定，发现那矿石含金量极低。同学所谓的"金矿"就是个笑话。', type: 'loss' };
        }
      },
    ]
  },

  // === 淘金热 ===
  {
    id: 'gold_rush',
    tag: '疯狂想法',
    tagType: 'type-life',
    title: '要不要去阿拉斯加淘金？',
    desc: '看纪录片说阿拉斯加还有人淘金，一克黄金600块，运气好能发财。',
    choices: [
      { 
        text: '去！当个淘金客', 
        hint: '浪漫但辛苦', 
        effect: (s) => {
          s.money -= 100000;
          s.health = Math.max(0, s.health - 20);
          const luck = Math.random();
          if (luck > 0.6) {
            s.money += 500000;
            s.luck = Math.min(100, s.luck + 15);
            return { delta: 400000, msg: '你在冰天雪地里挖了半年，真的挖到了一条金脉！赚了40万，而且成了当地名人。', type: 'gain', health: -20, luck: +15 };
          } else if (luck > 0.3) {
            s.money += 50000;
            return { delta: -50000, msg: '挖了半年，只挖到一点点金沙，卖了5万。亏是亏了，但体验了真正的淘金生活。', type: 'loss', health: -20 };
          } else {
            return { delta: -100000, msg: '挖了三个月，啥都没挖到，反而被熊追了两次，冻伤了一次。最后灰溜溜回国。', type: 'loss', health: -20 };
          }
        }
      },
      { 
        text: '在国内淘金（如果有的话）', 
        hint: '就近尝试', 
        effect: (s) => {
          s.money -= 20000;
          return { delta: -20000, msg: '你去了某金矿区，发现早被人挖完了。20万买了套设备和教训。', type: 'loss' };
        }
      },
      { 
        text: '买黄金ETF算了', 
        hint: '稳赚不赔', 
        effect: (s) => {
          s.money += Math.floor(s.money * 0.05);
          return { delta: Math.floor(s.money * 0.05), msg: '你买了黄金ETF，一年涨了5%。不多，但安心。', type: 'gain' };
        }
      },
      { 
        text: '看纪录片过瘾就行', 
        hint: '云淘金', 
        effect: (s) => {
          return { delta: 0, msg: '你在家看了十部淘金纪录片，知道了怎么摇金盘，但从来没用过。', type: 'neutral' };
        }
      },
    ]
  },

  // === 欧洲走私 ===
  {
    id: 'smuggling',
    tag: '灰色地带',
    tagType: 'type-life',
    title: '有人让你帮忙带"货"去欧洲',
    desc: '一个"朋友"说，只要帮他带一批货去欧洲，报酬10万欧元。不用问是什么。',
    choices: [
      { 
        text: '接！高风险高回报', 
        hint: '可能是暴富，也可能是牢底坐穿', 
        effect: (s) => {
          const luck = Math.random();
          if (luck > 0.8) {
            s.money += 700000;
            s.luck = Math.min(100, s.luck + 20);
            return { delta: 700000, msg: '你带过去了，在机场紧张得快心脏病，但安全过关。70万到手，你决定这是最后一次。', type: 'gain', luck: +20 };
          } else if (luck > 0.4) {
            s.money -= 50000;
            s.health = Math.max(0, s.health - 10);
            return { delta: -50000, msg: '你拒绝了那批货，后来听说接单的人被抓了，判了15年。你吓出一身冷汗。', type: 'loss', health: -10 };
          } else {
            s.money = Math.max(0, s.money * 0.1);
            s.health = Math.max(0, s.health - 40);
            s.inJail = true;
            return { delta: -Math.floor(s.money * 0.9), msg: '你在欧洲机场被捕了。货里是违禁品，你被判了10年。人生毁了。', type: 'loss', health: -40 };
          }
        }
      },
      { 
        text: '先问清楚是什么货', 
        hint: '明知故问', 
        effect: (s) => {
          s.network = Math.max(0, s.network - 10);
          return { delta: 0, msg: '你问了，对方直接挂了电话。后来再也没联系过你。你猜对了——不该问的事别问。', type: 'neutral', network: -10 };
        }
      },
      { 
        text: '报警举报', 
        hint: '正义选择', 
        effect: (s) => {
          s.luck = Math.min(100, s.luck + 10);
          return { delta: 0, msg: '你匿名举报了。据说那个团伙后来被端了。你不知道自己救了多少人。', type: 'gain', luck: +10 };
        }
      },
      { 
        text: '直接拉黑，装没听过', 
        hint: '最安全的选择', 
        effect: (s) => {
          return { delta: 0, msg: '你拉黑了那个人，假装没听过这回事。有些钱，不是谁都能赚的。', type: 'neutral' };
        }
      },
    ]
  },

  // === 美洲冒险 ===
  {
    id: 'south_america',
    tag: '人生选择',
    tagType: 'type-life',
    title: '要不要去南美闯闯？',
    desc: '听说南美机会多，那边矿产、农业都需要人。也许能闯出一片天。',
    choices: [
      { 
        text: '去巴西开农场', 
        hint: '土地便宜，但气候陌生', 
        effect: (s) => {
          s.money -= 300000;
          const luck = Math.random();
          if (luck > 0.6) {
            s.income += 15000;
            s.network = Math.min(100, s.network + 15);
            return { delta: -300000, msg: '你在巴西买了一块地种大豆，第一年就丰收。现在每月净赚1.5万美元。', type: 'gain', network: +15 };
          } else {
            s.money -= 100000;
            s.health = Math.max(0, s.health - 15);
            return { delta: -400000, msg: '第一年就遇上干旱，全赔了。你不得不低价卖地，亏了40万。', type: 'loss', health: -15 };
          }
        }
      },
      { 
        text: '去智利开矿', 
        hint: '锂矿热潮，可能暴富', 
        effect: (s) => {
          s.money -= 500000;
          const luck = Math.random();
          if (luck > 0.7) {
            s.money += 2000000;
            return { delta: 1500000, msg: '你买的锂矿真的发现了矿脉！新能源时代，锂比黄金还值钱。', type: 'gain' };
          } else {
            return { delta: -500000, msg: '矿没挖出来，还在当地陷入了劳资纠纷。最后血本无归。', type: 'loss' };
          }
        }
      },
      { 
        text: '去阿根廷养牛', 
        hint: '潘帕斯草原，浪漫但辛苦', 
        effect: (s) => {
          s.money -= 200000;
          s.health = Math.max(0, s.health - 10);
          s.income += 5000;
          return { delta: -200000, msg: '你成了阿根廷的牧场主，虽然收入不高，但每天骑马放牧，活在风景里。', type: 'neutral', health: -10 };
        }
      },
      { 
        text: '不去，太远了', 
        hint: '安全第一', 
        effect: (s) => {
          return { delta: 0, msg: '你放弃了南美的机会。也许错过了暴富，但也避免了风险。人生没有对错。', type: 'neutral' };
        }
      },
    ]
  },

  // === 隐居生活 ===
  {
    id: 'hermit_life',
    tag: '人生选择',
    tagType: 'type-life',
    title: '要不要去深山隐居？',
    desc: '厌倦了城市生活，你想找个山沟沟，自己种菜养鸡，过陶渊明的生活。',
    choices: [
      { 
        text: '去终南山隐居', 
        hint: '田园牧歌，但可能无聊', 
        effect: (s) => {
          s.money -= 100000;
          s.health = Math.min(100, s.health + 25);
          s.network = Math.max(0, s.network - 30);
          s.hermit = true;
          return { delta: -100000, msg: '你在终南山租了个院子，种菜、看书、发呆。身体好了，但朋友少了。你不确定这是逃避还是觉醒。', type: 'neutral', health: +25, network: -30 };
        }
      },
      { 
        text: '去大理开民宿', 
        hint: '半隐居，还能赚点钱', 
        effect: (s) => {
          s.money -= 300000;
          s.health = Math.min(100, s.health + 10);
          s.network = Math.min(100, s.network + 10);
          const luck = Math.random();
          if (luck > 0.5) {
            s.income += 8000;
            return { delta: -300000, msg: '你的民宿成了网红打卡地，每月净赚8000，还认识了一群有趣的客人。', type: 'gain', health: +10, network: +10 };
          } else {
            return { delta: -300000, msg: '民宿开了三年，一直在亏。大理的民宿太多了，竞争太激烈。', type: 'loss' };
          }
        }
      },
      { 
        text: '先回老家住一阵', 
        hint: '低成本的田园生活', 
        effect: (s) => {
          s.burden = Math.max(0, s.burden - 1000);
          s.health = Math.min(100, s.health + 15);
          return { delta: 0, msg: '你回老家住了半年，帮父母干农活，身体好了，焦虑也少了。也许这才是你要的生活。', type: 'neutral', health: +15 };
        }
      },
      { 
        text: '算了吧，没那个条件', 
        hint: '现实一点', 
        effect: (s) => {
          return { delta: 0, msg: '你查了查隐居攻略，发现也要钱。算了，还是继续在城里卷吧。', type: 'neutral' };
        }
      },
    ]
  },

  // === 极限运动 ===
  {
    id: 'extreme_sports',
    tag: '人生体验',
    tagType: 'type-life',
    title: '要不要尝试极限运动？',
    desc: '人生苦短，要不要跳一次伞、潜一次水、爬一次山？',
    choices: [
      { 
        text: '去跳伞', 
        hint: '刺激但危险', 
        effect: (s) => {
          s.money -= 5000;
          const luck = Math.random();
          if (luck > 0.9) {
            s.health = Math.max(0, s.health - 30);
            return { delta: -5000, msg: '你跳了，伞打不开，备用伞也出问题。万幸落在树上，摔断了腿，捡回一条命。', type: 'loss', health: -30 };
          } else {
            s.luck = Math.min(100, s.luck + 10);
            return { delta: -5000, msg: '从4000米跳下去的那一刻，你觉得自己真正活过。人生需要这样的时刻。', type: 'gain', luck: +10 };
          }
        }
      },
      { 
        text: '去深潜考证', 
        hint: '探索海底世界', 
        effect: (s) => {
          s.money -= 10000;
          s.health = Math.min(100, s.health + 5);
          s.network = Math.min(100, s.network + 10);
          return { delta: -10000, msg: '你拿到了潜水证，看到了鲨鱼、珊瑚、沉船。海洋世界比陆地精彩多了。', type: 'gain', health: +5, network: +10 };
        }
      },
      { 
        text: '去爬雪山', 
        hint: '挑战自我', 
        effect: (s) => {
          s.money -= 30000;
          const luck = Math.random();
          if (luck > 0.7) {
            s.health = Math.min(100, s.health + 10);
            s.luck = Math.min(100, s.luck + 15);
            return { delta: -30000, msg: '你登顶了！站在雪山之巅，俯瞰云海，感觉什么烦恼都不重要了。', type: 'gain', health: +10, luck: +15 };
          } else {
            s.health = Math.max(0, s.health - 20);
            return { delta: -30000, msg: '攀登途中遇到暴风雪，差点冻死。幸亏队友及时救援，但你在医院躺了半个月。', type: 'loss', health: -20 };
          }
        }
      },
      { 
        text: '在电视上看别人玩', 
        hint: '安全第一', 
        effect: (s) => {
          return { delta: 0, msg: '你看了极限运动的视频，替别人紧张，自己毫发无伤。这也算一种人生智慧吧。', type: 'neutral' };
        }
      },
    ]
  },

  // === 学一门手艺 ===
  {
    id: 'learn_craft',
    tag: '自我提升',
    tagType: 'type-choice',
    title: '要不要学一门手艺？',
    desc: '打工太累，也许学一门手艺更好？厨师、理发、木工、按摩……',
    choices: [
      { 
        text: '学厨师，开饭店', 
        hint: '民以食为天', 
        effect: (s) => {
          s.money -= 50000;
          const luck = Math.random();
          if (luck > 0.5) {
            s.income += 10000;
            return { delta: -50000, msg: '你学了川菜，开了个小馆子，生意不错。每月净赚1万，虽累但充实。', type: 'gain' };
          } else {
            return { delta: -50000, msg: '学了厨师，但饭店开了三个月就倒闭了。厨艺有了，店没了。', type: 'loss' };
          }
        }
      },
      { 
        text: '学按摩，开理疗店', 
        hint: '养生行业前景好', 
        effect: (s) => {
          s.money -= 30000;
          s.income += 5000;
          s.health = Math.max(0, s.health - 10);
          return { delta: -30000, msg: '你成了推拿师，虽然每天按到手软，但每月稳定收入，还认识了一群老客户。', type: 'gain', health: -10 };
        }
      },
      { 
        text: '学木工，做家具', 
        hint: '传统手艺，慢工出细活', 
        effect: (s) => {
          s.money -= 20000;
          const luck = Math.random();
          if (luck > 0.6) {
            s.money += 100000;
            return { delta: 80000, msg: '你做的手工家具在网上火了，一个茶几卖一万。你成了"匠人"。', type: 'gain' };
          } else {
            return { delta: -20000, msg: '学会了木工，但发现现在谁还买手工家具啊。还是工厂流水线便宜。', type: 'loss' };
          }
        }
      },
      { 
        text: '不学了，保持现状', 
        hint: '躺平', 
        effect: (s) => {
          return { delta: 0, msg: '你想了想，觉得学手艺太累了。也许打工才是最简单的出路。', type: 'neutral' };
        }
      },
    ]
  },
  
  // === 中年后期事件（50-60岁）===
  {
    id: 'midlife_crisis_50',
    tag: '中年危机',
    tagType: 'type-life',
    title: '人生的下半场',
    desc: '50岁了，你开始思考接下来的人生该怎么过。',
    minAge: 50,
    maxAge: 60,
    choices: [
      { 
        text: '提前退休，享受生活', 
        hint: '收入归零，但时间自由', 
        effect: (s) => {
          s.income = 0;
          s.health = Math.min(100, s.health + 15);
          return { delta: 0, msg: '你选择了提前退休。虽然收入没了，但每天睡到自然醒，身体好了很多。', type: 'neutral', health: +15 };
        }
      },
      { 
        text: '继续工作，多赚点钱', 
        hint: '稳定收入，但身体透支', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 10);
          return { delta: 0, msg: '你决定继续工作。收入稳定，但身体开始吃不消了。', type: 'neutral', health: -10 };
        }
      },
      { 
        text: '转型做顾问/顾问', 
        hint: '工作时间灵活', 
        effect: (s) => {
          s.income = Math.floor(s.income * 0.6);
          s.health = Math.min(100, s.health + 5);
          return { delta: 0, msg: '你成了顾问，收入降了但时间多了。这是不错的选择。', type: 'gain', health: +5 };
        }
      },
    ]
  },

  // === 退休前后事件（55-65岁）===
  {
    id: 'retirement_plan',
    tag: '退休规划',
    tagType: 'type-life',
    title: '退休倒计时',
    desc: '退休的日子越来越近了，你开始规划退休后的生活。',
    minAge: 55,
    maxAge: 65,
    choices: [
      { 
        text: '回老家养老', 
        hint: '成本低，但医疗条件差', 
        effect: (s) => {
          s.burden = Math.max(0, s.burden - 2000);
          s.city = { name: '老家县城', cost: 1500, desc: '自家房子，生活成本低' };
          return { delta: 0, msg: '你回到老家，生活成本低了很多。虽然医疗条件差了点，但心里踏实。', type: 'neutral' };
        }
      },
      { 
        text: '去南方养老城市', 
        hint: '环境好，但有适应成本', 
        effect: (s) => {
          s.money -= 200000;
          s.city = { name: '三亚', cost: 4000, desc: '海边养老公寓' };
          s.health = Math.min(100, s.health + 10);
          return { delta: -200000, msg: '你在三亚买了套养老房，气候好，身体也好了。', type: 'neutral', health: +10 };
        }
      },
      { 
        text: '留在原地，不折腾了', 
        hint: '熟悉的环境', 
        effect: (s) => {
          return { delta: 0, msg: '你决定留在原地。熟悉的环境，熟悉的朋友，这样挺好的。', type: 'neutral' };
        }
      },
    ]
  },

  // === 退休初期事件（60-70岁）===
  {
    id: 'retirement_hobby',
    tag: '退休生活',
    tagType: 'type-life',
    title: '退休后的新爱好',
    desc: '退休后有了更多时间，你想培养点什么爱好？',
    minAge: 60,
    maxAge: 75,
    choices: [
      { 
        text: '学书法，写回忆录', 
        hint: '修身养性，陶冶情操', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 10);
          return { delta: 0, msg: '你开始学书法、写回忆录，陶冶情操。时间多了，心情也好了。', type: 'neutral', health: +10 };
        }
      },
      { 
        text: '学摄影旅游', 
        hint: '记录美好时光', 
        effect: (s) => {
          s.money -= 30000;
          s.health = Math.min(100, s.health + 5);
          s.network = Math.min(100, s.network + 5);
          return { delta: -30000, msg: '你买了相机，开始到处旅游拍照。虽然花了钱，但生活丰富了。', type: 'neutral', health: +5, network: +5 };
        }
      },
      { 
        text: '养养花草，遛遛鸟', 
        hint: '悠闲自在', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 8);
          return { delta: 0, msg: '你开始养花养鸟，每天浇水遛鸟，日子过得很悠闲。', type: 'neutral', health: +8 };
        }
      },
      { 
        text: '跳广场舞/打太极', 
        hint: '锻炼身体', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 15);
          s.network = Math.min(100, s.network + 10);
          return { delta: 0, msg: '你加入了广场舞队，认识了一群新朋友，身体也好了。', type: 'gain', health: +15, network: +10 };
        }
      },
    ]
  },
  
  // === 子女成长事件（不同年龄段）===
  {
    id: 'child_graduate',
    tag: '家庭',
    tagType: 'type-life',
    title: '孩子大学毕业了',
    desc: '孩子终于毕业了，开始找工作。',
    minAge: 45,
    maxAge: 55,
    choices: [
      { 
        text: '帮忙找工作', 
        hint: '动用人脉', 
        effect: (s) => {
          s.network = Math.max(0, s.network - 10);
          s.luck = Math.min(100, s.luck + 10);
          return { delta: 0, msg: '你托关系帮孩子找了份工作。虽然欠了人情，但孩子工作有着落了。', type: 'neutral', network: -10, luck: +10 };
        }
      },
      { 
        text: '让孩子自己闯', 
        hint: '锻炼独立性', 
        effect: (s) => {
          return { delta: 0, msg: '你让孩子自己找工作。虽然辛苦了点，但孩子成长了很多。', type: 'neutral' };
        }
      },
    ]
  },

  {
    id: 'child_marriage',
    tag: '家庭',
    tagType: 'type-life',
    title: '孩子要结婚了',
    desc: '孩子说要结婚了，对方家里要求不少。',
    minAge: 50,
    maxAge: 65,
    choices: [
      { 
        text: '出钱帮孩子买房', 
        hint: '大额支出', 
        effect: (s) => {
          s.money -= 800000;
          s.luck = Math.min(100, s.luck + 15);
          return { delta: -800000, msg: '你帮孩子付了首付。虽然积蓄少了，但孩子有了自己的家。', type: 'neutral', luck: +15 };
        }
      },
      { 
        text: '出钱办婚礼', 
        hint: '中等支出', 
        effect: (s) => {
          s.money -= 200000;
          return { delta: -200000, msg: '你给孩子办了场像样的婚礼，花了不少钱。但看到孩子幸福，值了。', type: 'neutral' };
        }
      },
      { 
        text: '意思一下，其他的让他们自己', 
        hint: '经济压力小', 
        effect: (s) => {
          s.money -= 50000;
          return { delta: -50000, msg: '你给了5万红包，其他让孩子自己想办法。年轻人该学会自己奋斗了。', type: 'neutral' };
        }
      },
    ]
  },

  {
    id: 'grandchild',
    tag: '家庭',
    tagType: 'type-life',
    title: '抱孙子了',
    desc: '孩子生了，你当爷爷/奶奶了！',
    minAge: 55,
    maxAge: 70,
    choices: [
      { 
        text: '帮忙带孩子', 
        hint: '累但幸福', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 10);
          s.network = Math.min(100, s.network + 5);
          return { delta: 0, msg: '你帮忙带孙子，虽然累但很幸福。隔代亲是真的亲。', type: 'neutral', health: -10, network: +5 };
        }
      },
      { 
        text: '出钱请保姆，自己享受', 
        hint: '花钱买自由', 
        effect: (s) => {
          s.money -= 100000;
          s.health = Math.min(100, s.health + 5);
          return { delta: -100000, msg: '你出钱请了保姆，自己只负责逗孩子玩。这样挺好的。', type: 'neutral', health: +5 };
        }
      },
      { 
        text: '偶尔看看，不插手', 
        hint: '保持距离', 
        effect: (s) => {
          return { delta: 0, msg: '你偶尔去看看孙子，但不插手育儿。两代人的育儿观念不一样，少管闲事。', type: 'neutral' };
        }
      },
    ]
  },

  // === 高龄健康事件（70-80岁）===
  {
    id: 'elderly_health_70',
    tag: '健康关怀',
    tagType: 'type-life',
    title: '身体大不如前',
    desc: '70多岁了，身体开始明显走下坡路。',
    minAge: 70,
    maxAge: 85,
    choices: [
      { 
        text: '定期体检，注意养生', 
        hint: '花钱保健康', 
        effect: (s) => {
          s.money -= 30000;
          s.health = Math.min(100, s.health + 10);
          return { delta: -30000, msg: '你开始重视健康，定期检查，养生调理。身体还算稳定。', type: 'neutral', health: +10 };
        }
      },
      { 
        text: '顺其自然', 
        hint: '接受衰老', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 10);
          return { delta: 0, msg: '你选择顺其自然。身体虽然变差，但心态平和。', type: 'neutral', health: -10 };
        }
      },
    ]
  },
  
  // === 高龄家庭事件（75-90岁）===
  {
    id: 'spouse_health',
    tag: '家庭',
    tagType: 'type-life',
    title: '老伴身体不好',
    desc: '老伴生病了，需要人照顾。',
    minAge: 70,
    maxAge: 90,
    condition: (s) => !s.single, // 单身不触发此事件
    choices: [
      { 
        text: '自己照顾', 
        hint: '累但在一起', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 15);
          return { delta: 0, msg: '你坚持自己照顾老伴，虽然很累，但舍不得假手于人。', type: 'neutral', health: -15 };
        }
      },
      { 
        text: '请护工帮忙', 
        hint: '花钱买服务', 
        effect: (s) => {
          s.money -= 100000;
          s.health = Math.max(0, s.health - 5);
          return { delta: -100000, msg: '请了护工帮忙，虽然花钱但自己也喘了口气。', type: 'neutral', health: -5 };
        }
      },
    ]
  },

  {
    id: 'spouse_pass',
    tag: '人生变故',
    tagType: 'type-life',
    title: '老伴走了',
    desc: '相伴几十年的人走了，你心里空落落的。',
    minAge: 70,
    maxAge: 95,
    condition: (s) => !s.single, // 单身不触发此事件
    choices: [
      { 
        text: '和孩子们住', 
        hint: '有人陪伴', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 10);
          s.burden = Math.max(0, s.burden - 1000);
          return { delta: 0, msg: '你搬去和孩子们住，虽然不习惯但有人照顾。', type: 'neutral', health: -10 };
        }
      },
      { 
        text: '一个人住，习惯就好', 
        hint: '保持独立', 
        effect: (s) => {
          s.health = Math.max(0, s.health - 15);
          s.network = Math.max(0, s.network - 10);
          return { delta: 0, msg: '你选择一个人住，虽然孤独但自由。孩子们有空就来看看。', type: 'neutral', health: -15, network: -10 };
        }
      },
      { 
        text: '去养老院', 
        hint: '专业照顾', 
        effect: (s) => {
          s.money -= 200000;
          s.network = Math.min(100, s.network + 10);
          return { delta: -200000, msg: '你去了养老院，认识了新朋友，生活有人照顾。', type: 'neutral', network: +10 };
        }
      },
    ]
  },

  // === 高龄独居事件（85-100岁）===
  {
    id: 'live_alone_elderly',
    tag: '独居生活',
    tagType: 'type-life',
    title: '独居老人的日常',
    desc: '孩子们都忙，偶尔来看看你。',
    minAge: 85,
    maxAge: 100,
    choices: [
      { 
        text: '请保姆照顾日常', 
        hint: '花钱买服务', 
        effect: (s) => {
          s.money -= 50000;
          return { delta: -50000, msg: '请了住家保姆，生活有人照顾了。', type: 'neutral' };
        }
      },
      { 
        text: '去养老院', 
        hint: '有伴儿', 
        effect: (s) => {
          s.money -= 100000;
          s.network = Math.min(100, s.network + 10);
          return { delta: -100000, msg: '去了养老院，有护工照顾，还有老年人作伴。', type: 'neutral', network: +10 };
        }
      },
      { 
        text: '让孩子们轮流照顾', 
        hint: '家庭轮流', 
        effect: (s) => {
          s.network = Math.min(100, s.network + 5);
          return { delta: 0, msg: '孩子们商量好轮流照顾，虽然麻烦他们，但能享受天伦之乐。', type: 'neutral', network: +5 };
        }
      },
    ]
  },
  
  // === 百岁老人特殊事件 ===
  {
    id: 'centenarian_wisdom',
    tag: '人生智慧',
    tagType: 'type-life',
    title: '百岁生日感悟',
    desc: '你活到100岁了，儿孙们从各地赶来祝寿。',
    minAge: 100,
    maxAge: 120,
    choices: [
      { 
        text: '分享长寿秘诀', 
        hint: '开心每一天', 
        effect: (s) => {
          s.luck = Math.min(100, s.luck + 15);
          s.network = Math.min(100, s.network + 10);
          return { delta: 0, msg: '100岁了，你很知足。心态好、爱运动、家庭和睦，这就是秘诀。', type: 'gain', luck: +15, network: +10 };
        }
      },
      { 
        text: '记录人生故事', 
        hint: '留下回忆', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 5);
          return { delta: 0, msg: '你开始口述回忆录，让孙辈记录。希望后人能从中受益。', type: 'gain', health: +5 };
        }
      },
      { 
        text: '坦然接受生命的有限', 
        hint: '平静面对', 
        effect: (s) => {
          s.health = Math.min(100, s.health + 5);
          return { delta: 0, msg: '你已经活够了，对生死看得很淡。能够百年，此生无憾。', type: 'neutral', health: +5 };
        }
      },
    ]
  },
];

// ============================================================
// 随机事件库（按年龄分组）
// ============================================================
const RANDOM_EVENTS = [
  // === 35-50岁：职业和家庭事件 ===
  { 
    title: '突然被公司裁员', 
    desc: '新老板上任，你在第一轮优化名单里。',
    minAge: 35,
    maxAge: 50,
    effect: (s) => { 
      const comp = s.income * 6; 
      s.income = 0; 
      s.money += comp; 
      s.network = Math.max(0, s.network - 10); 
      return { delta: comp, msg: `拿了${Math.floor(comp/10000)}万赔偿金，但工作没了。`, type: 'loss', network: -10 }; 
    }
  },
  
  { 
    title: '父母生病住院', 
    desc: '父亲突然脑梗，在ICU待了三周。',
    minAge: 35,
    maxAge: 60,
    effect: (s) => { 
      s.money -= 150000; 
      s.burden = (s.burden || 0) + 2000; 
      s.health = Math.max(0, s.health - 10); 
      return { delta: -150000, msg: '花了15万，好在命保住了。后续护理每月多了2000支出。', type: 'loss', health: -10 }; 
    }
  },
  
  { 
    title: '遭遇电信诈骗', 
    desc: '一个自称公安的电话，说你涉嫌洗钱案。',
    minAge: 35,
    maxAge: 70,
    effect: (s) => {
      const fooled = Math.random() > 0.5;
      if (fooled) {
        s.money -= 200000;
        s.luck = Math.max(0, s.luck - 20);
        return { delta: -200000, msg: '你转了20万"配合调查"，发现上当后立刻报警，但追回希望渺茫。', type: 'loss', luck: -20 };
      }
      return { delta: 0, msg: '你没上当，挂了电话举报，截图发朋友圈提醒大家，收获50个赞。', type: 'neutral' };
    }
  },
  
  { 
    title: '被领导穿小鞋', 
    desc: '你和新来的领导理念不合，他开始给你穿小鞋。',
    minAge: 35,
    maxAge: 55,
    effect: (s) => {
      s.income = Math.floor(s.income * 0.85);
      s.health = Math.max(0, s.health - 10);
      return { delta: 0, msg: '绩效连续两季度C，年终奖打折，升职无望。你学会了在公司隐身。', type: 'loss', health: -10 };
    }
  },
  
  // 正面事件
  { 
    title: '意外收到一笔遗产', 
    desc: '一个从未见面的远房亲戚去世，律师联系你。',
    minAge: 40,
    maxAge: 80,
    effect: (s) => {
      const amount = [50000, 100000, 300000, 800000][Math.floor(Math.random()*4)];
      s.money += amount;
      s.luck = Math.min(100, s.luck + 15);
      return { delta: amount, msg: `你继承了${Math.floor(amount/10000)}万。人生有时候就是这么离奇。`, type: 'gain', luck: +15 };
    }
  },
  
  { 
    title: '升职加薪', 
    desc: '领导突然找你谈话，说你的表现被上面看到了。',
    minAge: 35,
    maxAge: 55,
    effect: (s) => {
      s.income = Math.floor(s.income * 1.3);
      s.network = Math.min(100, s.network + 10);
      return { delta: 0, msg: '升职了，薪资涨了30%。虽然是应该的，但你还是很开心。', type: 'gain', network: +10 };
    }
  },
  
  { 
    title: '遇到贵人', 
    desc: '在一次聚会上，你认识了一个人，后来帮了你大忙。',
    minAge: 35,
    maxAge: 60,
    effect: (s) => {
      s.network = Math.min(100, s.network + 20);
      s.luck = Math.min(100, s.luck + 10);
      return { delta: 0, msg: '这个人给你介绍了一个好机会，帮你打开了一扇门。', type: 'gain', network: +20, luck: +10 };
    }
  },
  
  { 
    title: '副业意外爆火', 
    desc: '你随手写的一条微博引发了广泛传播。',
    minAge: 35,
    maxAge: 55,
    effect: (s) => {
      s.money += 50000;
      s.income += 5000;
      s.network = Math.min(100, s.network + 15);
      return { delta: 50000, msg: '接了几个品牌合作，一次性入账5万，还带来了稳定的月收入增量。', type: 'gain', network: +15 };
    }
  },
  
  { 
    title: '孩子考上好大学', 
    desc: '孩子高考发挥超常，考上了985。',
    minAge: 45,
    maxAge: 55,
    effect: (s) => {
      s.luck = Math.min(100, s.luck + 20);
      return { delta: 0, msg: '孩子考上了，你哭了两次，一次是接到电话，一次是交了学费。这是今年最好的事。', type: 'gain', luck: +20 };
    }
  },
  
  { 
    title: '中彩票小奖', 
    desc: '你随手买了一张彩票，没想到中了。',
    minAge: 35,
    maxAge: 80,
    effect: (s) => {
      const amount = 5000 + Math.floor(Math.random() * 45000);
      s.money += amount;
      s.luck = Math.min(100, s.luck + 10);
      return { delta: amount, msg: `中了${Math.floor(amount/10000)}万，不多，但够全家吃顿好的。`, type: 'gain', luck: +10 };
    }
  },
  
  // 中性事件
  { 
    title: '老同学聚会', 
    desc: '高中同学组织聚会，你犹豫要不要去。',
    minAge: 35,
    maxAge: 70,
    effect: (s) => {
      const go = Math.random() > 0.5;
      if (go) {
        s.money -= 2000;
        s.network = Math.min(100, s.network + 5);
        return { delta: -2000, msg: '去了，花了2000，见到了几个多年不见的朋友。有人混得很好，有人和你一样。', type: 'neutral', network: +5 };
      }
      return { delta: 0, msg: '没去。同学群里有人说你高冷，你没解释。有时候，怀旧不如不怀。', type: 'neutral' };
    }
  },
  
  { 
    title: '工作调动', 
    desc: '公司要调动你的岗位，去另一个城市。',
    minAge: 35,
    maxAge: 55,
    effect: (s) => {
      s.network = Math.max(0, s.network - 10);
      s.health = Math.max(0, s.health - 5);
      return { delta: 0, msg: '你去了新城市，重新开始建立人脉。家人抱怨了三个月，但最后适应了。', type: 'neutral', network: -10, health: -5 };
    }
  },

  // === 50-65岁：退休前后事件 ===
  {
    title: '公司提前退休计划',
    desc: '公司推出提前退休计划，有补偿金。',
    minAge: 50,
    maxAge: 60,
    effect: (s) => {
      const comp = s.income * 12;
      s.income = 0;
      s.money += comp;
      s.health = Math.min(100, s.health + 10);
      return { delta: comp, msg: `你接受了提前退休，拿了${Math.floor(comp/10000)}万补偿。终于自由了。`, type: 'gain', health: +10 };
    }
  },

  {
    title: '退休金核定',
    desc: '退休金核定下来了，比预期少。',
    minAge: 60,
    maxAge: 65,
    effect: (s) => {
      s.income = Math.floor(s.income * 0.4);
      return { delta: 0, msg: '退休金只有预期的40%，虽然比预期少，但够基本生活了。', type: 'neutral' };
    }
  },

  // === 60-80岁：退休生活事件 ===
  {
    title: '社区老年活动',
    desc: '社区组织老年活动，你参加了。',
    minAge: 60,
    maxAge: 85,
    effect: (s) => {
      s.network = Math.min(100, s.network + 10);
      s.health = Math.min(100, s.health + 5);
      return { delta: 0, msg: '认识了几个新朋友，生活丰富了。老年生活也可以很精彩。', type: 'gain', network: +10, health: +5 };
    }
  },

  {
    title: '体检发现问题',
    desc: '体检发现几个指标偏高。',
    minAge: 55,
    maxAge: 90,
    effect: (s) => {
      s.money -= 30000;
      s.health = Math.max(0, s.health - 5);
      return { delta: -30000, msg: '医生说要控制饮食、多运动。花了3万做检查，好在问题不大。', type: 'loss', health: -5 };
    }
  },

  {
    title: '孙子孙女来过暑假',
    desc: '暑假孙子孙女来住了一个月。',
    minAge: 55,
    maxAge: 75,
    effect: (s) => {
      s.money -= 10000;
      s.health = Math.max(0, s.health - 5);
      s.network = Math.min(100, s.network + 5);
      return { delta: -10000, msg: '虽然累，但看着孩子们玩得开心，你觉得很值得。', type: 'neutral', health: -5, network: +5 };
    }
  },

  // === 70-90岁：高龄事件 ===
  {
    title: '老朋友去世',
    desc: '一个认识几十年的老朋友走了。',
    minAge: 70,
    maxAge: 95,
    effect: (s) => {
      s.health = Math.max(0, s.health - 10);
      s.network = Math.max(0, s.network - 15);
      return { delta: 0, msg: '你参加了追悼会，心里很难过。同龄人一个一个走了。', type: 'loss', health: -10, network: -15 };
    }
  },

  {
    title: '身体检查需要住院',
    desc: '医生说需要住院观察一段时间。',
    minAge: 70,
    maxAge: 95,
    effect: (s) => {
      s.money -= 80000;
      s.health = Math.max(0, s.health - 15);
      return { delta: -80000, msg: '住院花了不少钱，但好在问题发现得早。', type: 'loss', health: -15 };
    }
  },

  {
    title: '儿孙来看望',
    desc: '儿孙们从各地赶来看你。',
    minAge: 70,
    maxAge: 100,
    effect: (s) => {
      s.health = Math.min(100, s.health + 10);
      s.network = Math.min(100, s.network + 10);
      return { delta: 0, msg: '儿孙满堂，你觉得自己这辈子值了。', type: 'gain', health: +10, network: +10 };
    }
  },

  // === 90-100岁：极高龄事件 ===
  {
    title: '摔了一跤',
    desc: '在家摔了一跤，需要卧床休养。',
    minAge: 85,
    maxAge: 100,
    effect: (s) => {
      s.health = Math.max(0, s.health - 25);
      s.money -= 50000;
      return { delta: -50000, msg: '摔得不轻，住院花了不少钱。恢复得也慢了。', type: 'loss', health: -25 };
    }
  },

  {
    title: '记忆力衰退',
    desc: '开始经常忘事，家人有些担心。',
    minAge: 80,
    maxAge: 100,
    effect: (s) => {
      s.health = Math.max(0, s.health - 15);
      return { delta: 0, msg: '医生说是正常的老化现象。你开始记日记，怕自己忘记重要的事。', type: 'loss', health: -15 };
    }
  },

  {
    title: '五代同堂',
    desc: '玄孙出生了，你是五代同堂！',
    minAge: 90,
    maxAge: 110,
    effect: (s) => {
      s.luck = Math.min(100, s.luck + 30);
      s.network = Math.min(100, s.network + 15);
      return { delta: 0, msg: '五代同堂！你是整个家族的骄傲，活成了传奇。', type: 'gain', luck: +30, network: +15 };
    }
  },

  // === 100岁以上：百岁老人事件 ===
  {
    title: '记者来采访',
    desc: '当地记者来采访百岁老人。',
    minAge: 100,
    maxAge: 120,
    effect: (s) => {
      s.network = Math.min(100, s.network + 20);
      return { delta: 0, msg: '你成了当地名人，记者问你的长寿秘诀。你说：心态好、家庭和睦、不纠结。', type: 'gain', network: +20 };
    }
  },

  {
    title: '平静的一天',
    desc: '阳光很好，你在院子里晒太阳。',
    minAge: 100,
    maxAge: 120,
    effect: (s) => {
      s.health = Math.min(100, s.health + 5);
      return { delta: 0, msg: '你晒着太阳，回忆着这一生。能有今天，已经很知足了。', type: 'neutral', health: +5 };
    }
  },
];

// ============================================================
// 彩蛋事件库
// ============================================================
const EASTER_EGGS = [
  {
    title: '💫 神秘来电',
    desc: '一个陌生号码打来，对方说："你是不是想换一种活法？"',
    effect: (s) => {
      const options = Math.floor(Math.random() * 5);
      switch(options) {
        case 0:
          s.easterEgg = 'monk';
          s.money = 0;
          s.health = 100;
          return { delta: -s.money, msg: '你放下一切，去了五台山。三年后，你成了一个扫地僧。', type: 'easter' };
        case 1:
          s.money += 5000000;
          s.easterEgg = 'lottery';
          s.luck = 100;
          return { delta: 5000000, msg: '你买了一张彩票，中了500万。从此财务自由。', type: 'easter' };
        case 2:
          s.easterEgg = 'runaway';
          s.money = 50000;
          s.network = 0;
          return { delta: -s.money + 50000, msg: '你卖掉所有东西，去了大理开民宿。从此再也不看手机。', type: 'easter' };
        case 3:
          s.easterEgg = 'alien';
          return { delta: 0, msg: '你被外星人带走了。你在另一个星球上负责地球样本的日常维护。', type: 'easter' };
        case 4:
          s.easterEgg = 'timetravel';
          s.age = 25;
          s.money = 0;
          return { delta: -s.money, msg: '你醒来，发现自己回到了25岁。你决定这次一定不让人生重蹈覆辙。', type: 'easter' };
      }
    }
  },
  {
    title: '🎪 神秘邀请',
    desc: '一张神秘的邀请函出现在你桌上，邀请你参加"人生重启"活动。',
    effect: (s) => {
      const options = Math.floor(Math.random() * 4);
      switch(options) {
        case 0:
          s.easterEgg = 'writer';
          s.income = 30000;
          return { delta: 0, msg: '你被编辑看中。三年后，你成了一名畅销书作家，专门写中年危机题材。', type: 'easter' };
        case 1:
          s.easterEgg = 'influencer';
          s.income = 50000;
          s.network = 100;
          return { delta: 0, msg: '活动上你的一段发言被发到网上，莫名其妙火了。你成了励志网红。', type: 'easter' };
        case 2:
          s.easterEgg = 'abbot';
          s.health = 100;
          return { delta: 0, msg: '活动主持人竟然是某寺庙的方丈。你和他聊了一晚，三年后成了俗家弟子。', type: 'easter' };
        case 3:
          s.easterEgg = 'hermit';
          s.money = Math.floor(s.money * 0.1);
          s.health = 100;
          s.network = 0;
          return { delta: -Math.floor(s.money * 0.9), msg: '你去了终南山，花光积蓄买了一间小屋，从此隐居。', type: 'easter' };
      }
    }
  },
  {
    title: '🎲 命运之骰',
    desc: '你在路边捡到一个骰子，上面刻着奇怪的符号。',
    effect: (s) => {
      const roll = Math.floor(Math.random() * 6) + 1;
      switch(roll) {
        case 1:
          s.money = 0;
          s.health = Math.max(0, s.health - 50);
          return { delta: -s.money, msg: '骰子显示"一贫如洗"。第二天，你的银行账户被清空。', type: 'loss' };
        case 2:
          s.money += 100000;
          return { delta: 100000, msg: '骰子显示"意外之财"。当天你收到了一笔10万的转账。', type: 'gain' };
        case 3:
          s.health = 100;
          return { delta: 0, msg: '骰子显示"恢复如初"。第二天体检，所有异常指标都消失了。', type: 'gain' };
        case 4:
          s.network = 100;
          return { delta: 0, msg: '骰子显示"贵人相助"。第二天，你接到一个老朋友的电话，他现在是大佬。', type: 'gain' };
        case 5:
          s.luck = 100;
          return { delta: 0, msg: '骰子显示"时来运转"。从此你做什么都顺风顺水。', type: 'gain' };
        case 6:
          s.easterEgg = 'rebirth';
          s.age = 35;
          s.money = 500000;
          s.health = 100;
          s.network = 50;
          s.luck = 80;
          return { delta: 500000 - s.money, msg: '骰子显示"重新来过"。你回到了35岁被裁那天，但这次手里有50万。', type: 'easter' };
      }
    }
  },
];

// ============================================================
// 彩蛋结局
// ============================================================
const EASTER_ENDINGS = {
  monk: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '归隐山林',
    subtitle: '放下执念，大彻大悟',
    story: '你放下了所有的争名逐利，在五台山的一座小庙里扫了二十年地。有人问你是否后悔，你只说：人生如梦，出家也是回家。',
    type: 'easter'
  },
  lottery: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '一夜暴富',
    subtitle: '命运开了个玩笑',
    story: '500万改变了你的人生。你环游世界，写了一本书叫《如何用一张彩票改变命运》，销量很好。但你还是会想：如果没中奖会怎样？',
    type: 'easter'
  },
  runaway: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '人间蒸发',
    subtitle: '在大理的某个角落',
    story: '你在洱海边开了一家叫"逃跑中年"的民宿。每天看着人来人往，听他们抱怨工作，你只微笑不说话。这算是逃避还是解脱？',
    type: 'easter'
  },
  alien: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '星际打工人',
    subtitle: '原来宇宙也需要中层管理',
    story: '你在仙女座星系的某个星球上管理着一群地球样本。工作不累，福利不错，就是偶尔会想起地球的麻辣烫。',
    type: 'easter'
  },
  timetravel: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '时间旅行者',
    subtitle: '你有了第二次机会',
    story: '回到25岁的你，做了完全不同的选择。这次，你在35岁时成了老板，坐在HR对面，看着那些被裁的员工，想起了上一世的自己。',
    type: 'easter'
  },
  writer: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '畅销书作家',
    subtitle: '苦难变成了文字',
    story: '你的《35岁被裁指南》卖了几十万册，被翻译成多种语言。你成了中年危机代言人，每次签售会都有人哭。',
    type: 'easter'
  },
  influencer: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '励志网红',
    subtitle: '你的苦难成了别人的鸡汤',
    story: '你的"中年逆袭"账号有500万粉丝，接一条广告20万。你每天都在说"人生永远不晚"，但有时候也不确定自己信不信。',
    type: 'easter'
  },
  abbot: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '俗家弟子',
    subtitle: '一边上班一边修行',
    story: '你周末在寺庙帮忙，工作日在公司摸鱼。同事都觉得你变了，变得佛系了。佛曰：众生皆苦，但可以边苦边乐。',
    type: 'easter'
  },
  hermit: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '终南隐士',
    subtitle: '你不看手机已经十年了',
    story: '你在终南山的小屋里住了十年，种菜、看书、发呆。偶尔有记者来采访"现代隐士"，你都会把他们赶走。',
    type: 'easter'
  },
  rebirth: {
    tag: 'easter', tagText: '彩蛋结局',
    title: '第二人生',
    subtitle: '带着记忆重来一次',
    story: '你带着上一世的记忆重来，避开了所有坑。50岁时，你财务自由，家庭幸福。但你总觉得，这样的人生好像少了什么——少了那种未知的刺激。',
    type: 'easter'
  },
};

// ============================================================
// 结局生成（多样化结局）
// ============================================================

// 健康归零的多样化文案
function getHealthZeroEnding(state) {
  const { money, age, network, luck, single } = state;
  const netMoney = money;
  
  // 根据年龄分类
  const isYoung = age < 50;
  const isMiddle = age >= 50 && age < 70;
  const isOld = age >= 70;
  
  // 根据财富分类
  const isRich = netMoney >= 1000000;
  const isPoor = netMoney < 100000;
  
  // 根据人脉分类
  const hasFriends = network >= 60;
  
  // 根据运气分类
  const isLucky = luck >= 60;
  
  // === 年轻时去世 (35-49岁) ===
  if (isYoung) {
    if (isRich) {
      return {
        tag: 'neutral', tagText: '遗憾结局',
        title: '英年早逝',
        subtitle: '拼命工作，却没等到享受的那天',
        story: `${age}岁，你走了。银行卡里躺着${Math.floor(netMoney/10000)}万，是你这几年拼了命赚来的。${hasFriends ? '朋友们来送你最后一程，有人哭着说："你太拼了。"' : '葬礼很简单，来的人不多。'}你躺在那里想：如果有来生，一定要对自己好一点。`,
        type: 'neutral'
      };
    } else if (isPoor) {
      return {
        tag: 'bad', tagText: '悲惨结局',
        title: '困顿一生',
        subtitle: '还没来得及翻身，就倒下了',
        story: `${age}岁，你在出租屋里倒下了。存款只有${Math.floor(netMoney/10000)}万，连丧葬费都不够。${single ? '没有家人，房东发现你的时候，已经过了三天。' : '家人从老家赶来，哭得昏天黑地。'}你这一生，好像一直在挣扎，却什么都没抓住。`,
        type: 'bad'
      };
    } else {
      return {
        tag: 'neutral', tagText: '遗憾结局',
        title: '戛然而止',
        subtitle: '人生刚刚开始，却突然结束',
        story: `${age}岁，一场突如其来的病把你带走了。存款${Math.floor(netMoney/10000)}万，不多不少。${hasFriends ? '朋友们都不敢相信："上周还一起吃饭呢..."' : '你走得很安静。'}你还有那么多计划没实现，那么多地方没去，那么多话没说。`,
        type: 'neutral'
      };
    }
  }
  
  // === 中年去世 (50-69岁) ===
  if (isMiddle) {
    if (isRich && hasFriends) {
      return {
        tag: 'neutral', tagText: '遗憾结局',
        title: '功成名就，却没能享受',
        subtitle: '半生奋斗，倒在终点线前',
        story: `${age}岁，你倒下了。存款${Math.floor(netMoney/10000)}万，事业也算有成，朋友们都说你"这辈子值了"。但你自己知道，还有很多想做的事没做。病床上，你第一次觉得，钱真的不是万能的。`,
        type: 'neutral'
      };
    } else if (isRich) {
      return {
        tag: 'neutral', tagText: '遗憾结局',
        title: '孤独的成功者',
        subtitle: '有钱有地位，却没有健康',
        story: `${age}岁，你在医院里走完了最后一程。存款${Math.floor(netMoney/10000)}万，但病房里很冷清。成功可以买很多东西，但买不来时间和陪伴。临走前，你突然很想见见那些被你忽略的人。`,
        type: 'neutral'
      };
    } else if (isPoor && hasFriends) {
      return {
        tag: 'bad', tagText: '温暖结局',
        title: '穷但有爱',
        subtitle: '钱不多，但朋友真心',
        story: `${age}岁，你走了。存款只有${Math.floor(netMoney/10000)}万，但病床前围满了朋友。他们给你讲以前的事，让你别担心。你闭上眼睛的时候想：这辈子钱没赚到，但交到了真朋友，也值了。`,
        type: 'neutral'
      };
    } else if (isPoor) {
      return {
        tag: 'bad', tagText: '悲惨结局',
        title: '中年困顿',
        subtitle: '上有老下有小，你却先走了',
        story: `${age}岁，你撑不住了。存款${Math.floor(netMoney/10000)}万，连看病都不够。${single ? '你走得很孤独。' : '家人的哭声让你心碎，但你已经无力安慰他们了。'}你这一生，好像永远在还债，永远不够，永远在担心。现在不用担心了。`,
        type: 'bad'
      };
    } else {
      return {
        tag: 'neutral', tagText: '平凡结局',
        title: '普通人的谢幕',
        subtitle: '平平淡淡来，平平淡淡走',
        story: `${age}岁，你的身体终于撑不住了。存款${Math.floor(netMoney/10000)}万，说多不多说少不少。${hasFriends ? '朋友们来送你，说你是他们认识的最实在的人。' : '你走得很安静。'}这一生没有大起大落，也没有什么遗憾，只是觉得，好像可以活得再精彩一点。`,
        type: 'neutral'
      };
    }
  }
  
  // === 老年去世 (70岁以上) ===
  if (isOld) {
    if (isRich && hasFriends) {
      return {
        tag: 'good', tagText: '圆满结局',
        title: '功德圆满',
        subtitle: '有钱有爱，善终',
        story: `${age}岁，你在家人和朋友的陪伴下安详离世。存款${Math.floor(netMoney/10000)}万，足够家人生活。这一生你经历了很多，也收获了很多。临走前，你说："我这一生，没什么遗憾了。"`,
        type: 'good'
      };
    } else if (isRich) {
      return {
        tag: 'neutral', tagText: '遗憾结局',
        title: '孤独的富翁',
        subtitle: '有钱却没有陪伴',
        story: `${age}岁，你在医院里独自走完最后一程。存款${Math.floor(netMoney/10000)}万，但没有人分享。你想起年轻时候，那时候虽然穷，但朋友很多。钱赚到了，但好像也失去了什么。`,
        type: 'neutral'
      };
    } else if (hasFriends) {
      return {
        tag: 'good', tagText: '温暖结局',
        title: '穷得只剩朋友',
        subtitle: '没钱，但有爱',
        story: `${age}岁，你走的时候很安详。存款只有${Math.floor(netMoney/10000)}万，但病房里挤满了来看你的人。他们叫你"老朋友"、"老前辈"，说你的故事他们会记着。你闭上眼想：这辈子，没白活。`,
        type: 'good'
      };
    } else if (isLucky) {
      return {
        tag: 'good', tagText: '幸运结局',
        title: '福寿双全',
        subtitle: '运气好到最后一刻',
        story: `${age}岁，你在睡梦中安详离去，没有痛苦。这一生你运气一直不错，关键时刻总有人帮，危险总能躲过。存款${Math.floor(netMoney/10000)}万，不多但够用。你觉得自己是被老天眷顾的那个人。`,
        type: 'good'
      };
    } else {
      return {
        tag: 'neutral', tagText: '平淡结局',
        title: '平凡一生',
        subtitle: '普通人的谢幕',
        story: `${age}岁，你走完了这一生。存款${Math.floor(netMoney/10000)}万，不算富裕但也没饿着。这一生没什么大起大落，就像大多数人一样，平平淡淡。但你想，平平淡淡也是一种福。`,
        type: 'neutral'
      };
    }
  }
  
  // 默认
  return {
    tag: 'neutral', tagText: '命运结局',
    title: '生命的终点',
    subtitle: '每个人都有自己的终点',
    story: `${age}岁，你的人生画上了句号。存款${Math.floor(netMoney/10000)}万，健康耗尽。这一生有苦有甜，有得有失。如果可以重来，你会做出不同的选择吗？`,
    type: 'neutral'
  };
}

function generateEnding(state) {
  // 检查彩蛋结局
  if (state.easterEgg && EASTER_ENDINGS[state.easterEgg]) {
    return { ...EASTER_ENDINGS[state.easterEgg], isEaster: true };
  }

  const { money, income, debt, bigWin, health, network, luck, age, single } = state;
  const netMoney = money - (debt || 0);
  
  // 健康为0，使用多样化文案
  if (health <= 0) {
    return getHealthZeroEnding(state);
  }
  
  // 活到120岁的传奇结局
  if (age >= 120) {
    const endings = [
      {
        tag: 'legendary', tagText: '传奇结局',
        title: '世纪老人',
        subtitle: '跨越两个世纪的见证者',
        story: `${age}岁！你成为了当地的传奇人物。记者来采访你的长寿秘诀，你笑着说："少生气，多笑，别把事当太重。"这一生你经历了太多，见证了这个时代的变化。能活到今天，已经是最大的幸运。`,
        type: 'good'
      },
      {
        tag: 'legendary', tagText: '传奇结局',
        title: '长寿之星',
        subtitle: '你太健康了，请分享你的长寿秘诀',
        story: `你成功活到了${age}岁！这简直是个奇迹！家人、朋友、媒体都纷纷来向你请教长寿秘诀。你笑着说："心态好、多运动、少纠结，这就是我的秘诀。"这一生，你值了！`,
        type: 'good'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 高龄 + 健康 = 长寿结局（多种文案）
  if (age >= 90 && health >= 50) {
    const endings = [
      {
        tag: 'legendary', tagText: '长寿结局',
        title: '长命百岁',
        subtitle: '能活到这个岁数，本身就是一种胜利',
        story: `${age}岁了！你已经是家族里最长寿的人了。${!single ? '五代同堂，' : ''}儿孙们都以你为荣。你这一生，有苦有甜，但能活到今天，什么都值了。`,
        type: 'good'
      },
      {
        tag: 'legendary', tagText: '长寿结局',
        title: '岁月静好',
        subtitle: '熬过了风雨，等到了彩虹',
        story: `${age}岁了。你坐在摇椅上，晒着太阳，回想这一生。年轻时那些天大的事，现在想想都不算什么了。存款${Math.floor(netMoney/10000)}万，不多但够用。你很知足。`,
        type: 'good'
      },
      {
        tag: 'legendary', tagText: '长寿结局',
        title: '生命赢家',
        subtitle: '活得久才是真本事',
        story: `${age}岁！你比同龄人多活了好几十年。存款${Math.floor(netMoney/10000)}万，身体还算硬朗，${network >= 60 ? '老朋友偶尔来串门，' : ''}日子过得平静又充实。这一辈子，值了。`,
        type: 'good'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 根据属性组合生成不同结局
  // 健康 + 有钱 = 人生赢家
  if (health >= 60 && netMoney >= 1000000) {
    const endings = [
      {
        tag: 'legendary', tagText: '传奇结局',
        title: '人生赢家',
        subtitle: '有钱又有健康，这才是真正的成功',
        story: `${age}岁了，身体还硬朗，存款${Math.floor(netMoney/10000)}万。${!single ? '儿孙绕膝，' : ''}生活富足，你成了别人眼中的"人生赢家"。这一辈子，你做对了几个关键选择。`,
        type: 'good'
      },
      {
        tag: 'legendary', tagText: '传奇结局',
        title: '富足人生',
        subtitle: '财务自由，身体健康',
        story: `${age}岁，你实现了大多数人一辈子的梦想：存款${Math.floor(netMoney/10000)}万，想去哪就去哪，身体也没拖后腿。这一路走来不容易，但你做到了。`,
        type: 'good'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 健康 + 没钱 = 平凡幸福（多种文案）
  if (health >= 60 && netMoney < 1000000) {
    const endings = [
      {
        tag: 'good', tagText: '幸福结局',
        title: '平凡中的幸福',
        subtitle: '没什么钱，但也没什么遗憾',
        story: `${age}岁了，身体还算健康，存款虽然不多（${Math.floor(netMoney/10000)}万），但够用了。${!single ? '儿孙满堂，' : ''}你发现，人生的幸福不在于有多少钱，而在于拥有什么。`,
        type: 'good'
      },
      {
        tag: 'good', tagText: '幸福结局',
        title: '知足常乐',
        subtitle: '钱不多，但日子过得舒心',
        story: `${age}岁，存款${Math.floor(netMoney/10000)}万，不算富裕，但你很快乐。身体还行，${hasFriends ? '朋友几个，' : ''}每天的日子平淡却充实。你觉得，这样也挺好。`,
        type: 'good'
      },
      {
        tag: 'good', tagText: '幸福结局',
        title: '简单生活',
        subtitle: '不追求大富大贵',
        story: `${age}岁了。这一生你没有赚大钱，存款${Math.floor(netMoney/10000)}万，但你也没有大起大落的烦恼。平平淡淡，健健康康，你觉得这就是一种福。`,
        type: 'good'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 不健康 + 有钱 = 有钱没命花（多种文案）
  if (health < 60 && netMoney >= 1000000) {
    const endings = [
      {
        tag: 'neutral', tagText: '遗憾结局',
        title: '有钱没命花',
        subtitle: '赚了钱，却赔了健康',
        story: `${age}岁了，存款${Math.floor(netMoney/10000)}万，但身体已经不行了。你躺在病床上，看着银行卡里的数字，突然觉得这些钱没什么意义。如果可以重来，你会选择少拼一点吗？`,
        type: 'neutral'
      },
      {
        tag: 'neutral', tagText: '遗憾结局',
        title: '用健康换钱',
        subtitle: '交易完成，后悔也来不及',
        story: `${age}岁，医生说你的身体透支太严重了。存款${Math.floor(netMoney/10000)}万，看病都不一定够。你想起年轻时拼命加班的日子，如果那时少熬几个夜...算了，没如果了。`,
        type: 'neutral'
      },
      {
        tag: 'neutral', tagText: '遗憾结局',
        title: '成功者的代价',
        subtitle: '站得越高，摔得越疼',
        story: `${age}岁，你是别人眼中的成功人士，存款${Math.floor(netMoney/10000)}万。但只有你知道，这些是用什么换来的。病床上的日子，你第一次有时间停下来思考：这值得吗？`,
        type: 'neutral'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 不健康 + 没钱 = 最惨结局（多种文案）
  if (health < 60 && netMoney < 1000000) {
    const endings = [
      {
        tag: 'bad', tagText: '悲惨结局',
        title: '又病又穷',
        subtitle: '人生没有更糟了',
        story: `${age}岁了，身体垮了，钱也没了。存款只剩${Math.floor(netMoney/10000)}万，看病都不够。你躺在病床上，回想这一生，不知道哪里做错了。`,
        type: 'bad'
      },
      {
        tag: 'bad', tagText: '悲惨结局',
        title: '命运捉弄',
        subtitle: '越是挣扎，越是无力',
        story: `${age}岁，你躺在医院走廊的加床，存款${Math.floor(netMoney/10000)}万，连住院押金都凑不齐。这一生你努力过，挣扎过，但好像命运一直在和你作对。`,
        type: 'bad'
      },
      {
        tag: 'bad', tagText: '悲惨结局',
        title: '底层人生',
        subtitle: '一直在谷底挣扎',
        story: `${age}岁，你的身体撑不住了。存款${Math.floor(netMoney/10000)}万，可能连后事都不够。这一生，你好像永远在还债，永远不够，永远在担心。现在不用担心了。`,
        type: 'bad'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 高人脉 = 人脉结局
  if (network >= 80) {
    const endings = [
      {
        tag: 'good', tagText: '人脉结局',
        title: '广结善缘',
        subtitle: '朋友遍天下',
        story: `${age}岁了，虽然存款只有${Math.floor(netMoney/10000)}万，但你的通讯录里有几百个朋友。无论遇到什么事，总有人帮你。这就是你的人脉财富。`,
        type: 'good'
      },
      {
        tag: 'good', tagText: '人脉结局',
        title: '桃李满天下',
        subtitle: '帮助过的人，都会记得你',
        story: `${age}岁，你这一生没赚大钱，但交了很多真朋友。存款${Math.floor(netMoney/10000)}万，但人脉是无价的。生病的时候有人探望，困难的时候有人帮。你觉得这才是真正的富有。`,
        type: 'good'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 高幸运 = 运气结局
  if (luck >= 80) {
    const endings = [
      {
        tag: 'good', tagText: '幸运结局',
        title: '一生好运',
        subtitle: '你就是那个被命运眷顾的人',
        story: `${age}岁了，回想这一生，似乎总有些好运气。关键时刻总有人帮你，危险总能躲过。存款${Math.floor(netMoney/10000)}万，不算多，但你已经很知足了。`,
        type: 'good'
      },
      {
        tag: 'good', tagText: '幸运结局',
        title: '福星高照',
        subtitle: '运气也是实力的一种',
        story: `${age}岁，你被朋友们称为"锦鲤体质"。每次快撑不住的时候，总有好运气来救你。存款${Math.floor(netMoney/10000)}万，身体还行，朋友也多。你觉得这辈子挺幸运的。`,
        type: 'good'
      }
    ];
    return endings[Math.floor(Math.random() * endings.length)];
  }
  
  // 默认结局（多种文案）
  const defaultEndings = [
    {
      tag: 'neutral', tagText: '平凡结局',
      title: '平凡一生',
      subtitle: '没什么特别的，但也不差',
      story: `${age}岁了，存款${Math.floor(netMoney/10000)}万，健康${health}分。这一生没什么特别的，像大多数人那样活着。但也还行，至少没饿死。`,
      type: 'neutral'
    },
    {
      tag: 'neutral', tagText: '平凡结局',
      title: '普通人的一生',
      subtitle: '不精彩，但真实',
      story: `${age}岁。这一生平平淡淡，没有传奇故事，没有跌宕起伏。存款${Math.floor(netMoney/10000)}万，不多不少。你想想，普通人不就是这样吗？`,
      type: 'neutral'
    },
    {
      tag: 'neutral', tagText: '平凡结局',
      title: '人生过客',
      subtitle: '来过，活过，就够了',
      story: `${age}岁。你想想这一生，好像没什么值得被记住的事。存款${Math.floor(netMoney/10000)}万，健康${health}分，普通得不能再普通。但你认真地活过了，这也是一种意义。`,
      type: 'neutral'
    }
  ];
  return defaultEndings[Math.floor(Math.random() * defaultEndings.length)];
}
