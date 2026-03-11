// ============================================================
// 游戏引擎 - 数值系统 v2.0
// ============================================================
// 数值系统设计原则：
// 1. 资产变化 = 月净收入 × 月数，每回合显示明细
// 2. 健康值平滑变化，每次事件最多 ±10
// 3. 所有数值变化都有明确来源

// 游戏状态
let G = {};
let currentEnding = null; // 保存当前结局信息

// 数值变化记录（用于显示）
let lastChange = {
  years: 0,
  income: 0,        // 工资收入
  expenses: 0,      // 生活支出
  netFlow: 0,       // 净现金流
  healthDelta: 0,   // 健康变化
  source: ''        // 变化来源
};

// 初始化状态
function initState(scenario) {
  const job = JOBS[Math.floor(Math.random() * JOBS.length)];
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  
  // 基础状态 - 先不设置 money，让场景决定
  G = {
    scenario: scenario,
    age: 35,
    money: 0, // 默认0，由场景决定
    income: job.salary,        // 月工资收入
    job: job,
    city: city,
    burden: 3000,              // 每月固定负担（孩子、赡养等）
    debt: 0,                   // 总负债
    monthlyDebt: 0,            // 每月还债金额
    
    // 属性 (0-100)
    health: 70 + Math.floor(Math.random() * 20),
    network: 40 + Math.floor(Math.random() * 30),
    luck: 40 + Math.floor(Math.random() * 30),
    
    // 标记
    riskFlag: false,
    bigWin: false,
    entrepreneur: false,
    single: false,
    
    // 记录
    milestones: [],
    usedChoices: new Set(),
    year: 0,
    maxAge: 120, // 最大年龄
    easterEgg: null,
  };
  
  // 应用场景初始化（设置 money）
  if (scenario && scenario.init) {
    scenario.init(G);
  }
  
  // 应用幸运加成
  if (G.luckBonus) {
    G.luck = Math.min(100, G.luck + G.luckBonus);
  }
  
  // 应用健康起点
  if (G.healthStart) {
    G.health = G.healthStart;
  }
  
  // 记录起始资金
  G.startMoney = G.money;
  G.startAge = G.age;
  
  // 重置变化记录
  lastChange = { years: 0, income: 0, expenses: 0, netFlow: 0, healthDelta: 0, source: '' };
  
  // 记录里程碑
  G.milestones.push(`${G.age}岁: ${G.scenario ? G.scenario.title : '人生重启'}`);
}

// ============================================================
// 页面切换
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  // 随机选择场景
  const scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  initState(scenario);
  renderInit();
  showScreen('init-screen');
}

// ============================================================
// 初始档案
// ============================================================
function renderInit() {
  const body = document.getElementById('init-body');
  const s = G;
  
  // 计算初始月度现金流
  const monthlyIncome = s.income || 0;
  const monthlyExpense = s.city.cost + s.burden;
  const monthlyNet = monthlyIncome - monthlyExpense;
  
  body.innerHTML = `
    <div class="init-story">
      ${s.storyDesc ? s.storyDesc.replace(/\n/g, '<br>') : '你的人生，重新开始了。'}
    </div>
    <div class="init-card">
      <div class="init-label">当前状态</div>
      <div class="init-value job">${s.scenario ? s.scenario.title : '重新开始'}</div>
      <div class="init-desc">${s.scenario ? s.scenario.hint : ''}</div>
    </div>
    <div class="init-card">
      <div class="init-label">现居城市</div>
      <div class="init-value job">${s.city.name}</div>
      <div class="init-desc">${s.city.desc}，每月固定支出约 ¥${s.city.cost.toLocaleString()}</div>
    </div>
    <div class="init-card">
      <div class="init-label">当前存款</div>
      <div class="init-value money">¥${s.money.toLocaleString()}</div>
      <div class="init-desc">${s.money < 0 ? '负债开局，压力山大' : '这是你全部的家当'}</div>
    </div>
    ${s.job && s.income > 0 ? `
    <div class="init-card">
      <div class="init-label">当前收入</div>
      <div class="init-value">¥${s.income.toLocaleString()}/月</div>
      <div class="init-desc">${s.job.desc}</div>
    </div>
    ` : ''}
    <div class="init-card" style="background: var(--aged);">
      <div class="init-label">📊 月度现金流</div>
      <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
        <span>收入</span>
        <span style="color: var(--green);">+¥${monthlyIncome.toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
        <span>支出</span>
        <span style="color: var(--red);">-¥${monthlyExpense.toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 15px; font-weight: 600; border-top: 1px dashed var(--light-gray); padding-top: 8px;">
        <span>每月净收入</span>
        <span style="color: ${monthlyNet >= 0 ? 'var(--green)' : 'var(--red)'};">
          ${monthlyNet >= 0 ? '+' : ''}¥${monthlyNet.toLocaleString()}
        </span>
      </div>
      <div class="init-desc" style="margin-top: 8px;">
        ${monthlyNet >= 0 
          ? '每月能存下一些钱，慢慢积累财富' 
          : '入不敷出，需要想办法增加收入或减少支出'}
      </div>
    </div>
    <div class="init-stats">
      <div class="init-stat">
        <div class="init-stat-label">❤️ 健康</div>
        <div class="init-stat-bar">
          <div class="init-stat-fill health" style="width:${s.health}%"></div>
        </div>
        <div class="init-stat-val">${s.health}</div>
      </div>
      <div class="init-stat">
        <div class="init-stat-label">🤝 人脉</div>
        <div class="init-stat-bar">
          <div class="init-stat-fill network" style="width:${s.network}%"></div>
        </div>
        <div class="init-stat-val">${s.network}</div>
      </div>
      <div class="init-stat">
        <div class="init-stat-label">🍀 幸运</div>
        <div class="init-stat-bar">
          <div class="init-stat-fill luck" style="width:${s.luck}%"></div>
        </div>
        <div class="init-stat-val">${s.luck}</div>
      </div>
    </div>
  `;
}

function beginPlay() {
  showScreen('game-screen');
  nextEvent();
}

// ============================================================
// 游戏循环
// ============================================================

// ============================================================
// 时间推进与资产计算 - 清晰的数值系统
// ============================================================
function advanceTime(years, source = '时间流逝') {
  // 记录变化前的状态
  const beforeMoney = G.money;
  const beforeHealth = G.health;
  
  // ===== 1. 计算月度现金流 =====
  let monthlyIncome = 0;    // 月收入
  let monthlyExpense = 0;   // 月支出
  
  // 退休年龄65岁
  const isRetired = G.age >= 65 || G.income === 0;
  
  if (!isRetired && G.income > 0) {
    // 工作期间：有工资收入
    monthlyIncome = G.income;
    monthlyExpense = G.city.cost + G.burden + (G.monthlyDebt || 0);
  } else {
    // 退休后：无工资收入，可能有退休金（假设为原工资的30%）
    const pension = G.job ? Math.floor(G.job.salary * 0.3) : 0;
    monthlyIncome = pension;
    monthlyExpense = G.city.cost + G.burden;
  }
  
  // 净现金流
  const monthlyNet = monthlyIncome - monthlyExpense;
  
  // ===== 2. 累计资产变化 =====
  const totalMonths = years * 12;
  const totalIncome = monthlyIncome * totalMonths;
  const totalExpense = monthlyExpense * totalMonths;
  const netFlow = monthlyNet * totalMonths;
  
  G.money += netFlow;
  G.age += years;
  G.year += years;
  
  // ===== 3. 健康值自然衰减（年龄相关）=====
  // 使用整数计算，避免显示跳跃
  let healthLoss = 0;
  if (G.age < 50) {
    healthLoss = Math.round(years * 1);    // 35-50岁：每年-1
  } else if (G.age < 65) {
    healthLoss = Math.round(years * 2);    // 50-65岁：每年-2
  } else if (G.age < 80) {
    healthLoss = Math.round(years * 3);    // 65-80岁：每年-3
  } else if (G.age < 95) {
    healthLoss = Math.round(years * 4);    // 80-95岁：每年-4
  } else {
    healthLoss = Math.round(years * 5);    // 95岁以上：每年-5
  }
  
  G.health = Math.max(0, G.health - healthLoss);
  
  // ===== 4. 记录变化明细 =====
  lastChange = {
    years: years,
    income: totalIncome,
    expenses: totalExpense,
    netFlow: netFlow,
    healthDelta: -healthLoss,
    source: source,
    monthlyNet: monthlyNet  // 每月净收入，用于显示
  };
  
  return netFlow;
}

function updateStatsPanel() {
  const panel = document.getElementById('stats-panel');
  if (!panel) return;
  
  const healthClass = G.health < 30 ? 'low' : G.health < 60 ? 'mid' : 'high';
  const networkClass = G.network < 30 ? 'low' : G.network < 60 ? 'mid' : 'high';
  const luckClass = G.luck < 30 ? 'low' : G.luck < 60 ? 'mid' : 'high';
  
  panel.innerHTML = `
    <div class="stat-item">
      <div class="stat-label">❤️ 健康</div>
      <div class="stat-bar"><div class="stat-fill health" style="width:${G.health}%"></div></div>
      <div class="stat-val ${healthClass}">${Math.floor(G.health)}</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">🤝 人脉</div>
      <div class="stat-bar"><div class="stat-fill network" style="width:${G.network}%"></div></div>
      <div class="stat-val ${networkClass}">${Math.floor(G.network)}</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">🍀 幸运</div>
      <div class="stat-bar"><div class="stat-fill luck" style="width:${G.luck}%"></div></div>
      <div class="stat-val ${luckClass}">${Math.floor(G.luck)}</div>
    </div>
  `;
}

function updateHeader() {
  const ageEl = document.getElementById('game-age');
  const moneyEl = document.getElementById('game-money');
  const progressEl = document.getElementById('progress-fill');
  
  if (ageEl) {
    ageEl.innerHTML = `${G.age}<span>岁</span>`;
  }
  
  if (moneyEl) {
    moneyEl.textContent = `¥${G.money.toLocaleString()}`;
    moneyEl.className = 'game-money ' + (G.money >= 0 ? 'pos' : 'neg');
  }
  
  if (progressEl) {
    // 根据年龄和最大年龄计算进度
    const pct = ((G.age - G.startAge) / (G.maxAge - G.startAge)) * 100;
    progressEl.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }
  
  // 更新财务状态面板
  updateFinancialPanel();
}

// 新增：财务状态面板
function updateFinancialPanel() {
  // 查找或创建财务面板
  let panel = document.getElementById('financial-panel');
  if (!panel) {
    // 在游戏头部添加财务面板
    const header = document.querySelector('.game-header');
    if (header) {
      panel = document.createElement('div');
      panel.id = 'financial-panel';
      panel.style.cssText = 'font-size: 11px; color: var(--gray); padding: 8px 20px; background: var(--aged); border-top: 1px solid var(--light-gray);';
      header.appendChild(panel);
    } else {
      return;
    }
  }
  
  // 计算当前月度现金流
  const isRetired = G.age >= 65 || G.income === 0;
  let monthlyIncome = 0;
  let monthlyExpense = 0;
  
  if (!isRetired && G.income > 0) {
    monthlyIncome = G.income;
    monthlyExpense = G.city.cost + G.burden + (G.monthlyDebt || 0);
  } else {
    const pension = G.job ? Math.floor(G.job.salary * 0.3) : 0;
    monthlyIncome = pension;
    monthlyExpense = G.city.cost + G.burden;
  }
  
  const monthlyNet = monthlyIncome - monthlyExpense;
  const netColor = monthlyNet >= 0 ? 'var(--green)' : 'var(--red)';
  const netSign = monthlyNet >= 0 ? '+' : '';
  
  panel.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>${isRetired ? '🏠 退休生活' : '💼 ' + (G.job ? G.job.title : '自由职业')}</span>
      <span>
        <span style="color: var(--green);">+¥${monthlyIncome.toLocaleString()}</span>
        <span style="margin: 0 4px;">-</span>
        <span style="color: var(--red);">¥${monthlyExpense.toLocaleString()}</span>
        <span style="margin: 0 4px;">=</span>
        <span style="color: ${netColor}; font-weight: 600;">${netSign}¥${monthlyNet.toLocaleString()}/月</span>
      </span>
    </div>
  `;
}

function nextEvent() {
  // 检查健康值 - 健康为0直接死亡
  if (G.health <= 0) {
    showHealthEnding();
    return;
  }
  
  // 检查是否达到最大年龄
  if (G.age >= G.maxAge) {
    showEnding();
    return;
  }
  
  updateHeader();
  updateStatsPanel();
  
  // 移除了重复的自然衰老逻辑，已在 advanceTime 中处理
  
  // 1%概率触发彩蛋
  if (Math.random() < 0.01) {
    const easterEgg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
    renderEasterEvent(easterEgg);
    return;
  }
  
  // 根据年龄筛选合适的事件
  const ageGroup = getAgeGroup(G.age);
  
  // 决定事件类型
  const remainingChoices = CHOICE_EVENTS.filter(e => 
    !G.usedChoices.has(e.id) && 
    (!e.minAge || G.age >= e.minAge) &&
    (!e.maxAge || G.age <= e.maxAge) &&
    (!e.condition || e.condition(G)) // 检查事件条件
  );
  
  const shouldShowChoice = remainingChoices.length > 0 && (G.year % 3 === 0 || Math.random() > 0.4);
  
  if (shouldShowChoice) {
    // 选择事件
    const event = remainingChoices[Math.floor(Math.random() * Math.min(3, remainingChoices.length))];
    G.usedChoices.add(event.id);
    renderChoiceEvent(event);
  } else {
    // 随机事件 - 根据年龄和条件筛选
    const ageAppropriateRandom = RANDOM_EVENTS.filter(e => 
      (!e.minAge || G.age >= e.minAge) &&
      (!e.maxAge || G.age <= e.maxAge) &&
      (!e.condition || e.condition(G)) // 检查事件条件
    );
    
    // 如果没有年龄合适的事件，使用所有随机事件
    const eventPool = ageAppropriateRandom.length > 0 ? ageAppropriateRandom : RANDOM_EVENTS;
    const event = eventPool[Math.floor(Math.random() * eventPool.length)];
    renderRandomEvent(event);
  }
}

// 根据年龄分组
function getAgeGroup(age) {
  if (age < 50) return 'middle';       // 中年
  if (age < 65) return 'pre_retire';   // 退休前
  if (age < 80) return 'retired';      // 退休后
  if (age < 100) return 'elderly';     // 高龄
  return 'centenarian';                 // 百岁老人
}

// ============================================================
// 事件渲染
// ============================================================
function renderEasterEvent(event) {
  const body = document.getElementById('game-body');
  body.innerHTML = `
    <div class="event-card">
      <div class="event-tag type-easter">✨ 彩蛋事件</div>
      <div class="event-title">${event.title}</div>
      <div class="event-desc">${event.desc}</div>
      <div class="choices-wrap">
        <button class="choice-btn" onclick="triggerEaster()">
          接受命运的安排 →
          <span class="choice-hint">有些事情，无法拒绝</span>
        </button>
      </div>
    </div>
    ${renderLog()}
  `;
  document.querySelector('.choice-btn').onclick = () => triggerEaster(event);
}

function renderChoiceEvent(event) {
  const body = document.getElementById('game-body');
  body.innerHTML = `
    <div class="event-card">
      <div class="event-tag ${event.tagType}">${event.tag}</div>
      <div class="event-title">${event.title}</div>
      <div class="event-desc">${event.desc}</div>
      <div class="choices-wrap">
        ${event.choices.map((c, i) => `
          <button class="choice-btn" data-index="${i}">
            ${c.text}
            <span class="choice-hint">${c.hint}</span>
          </button>
        `).join('')}
      </div>
    </div>
    ${renderLog()}
  `;
  
  body.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.onclick = () => makeChoice(i, event);
  });
}

function renderRandomEvent(event) {
  const body = document.getElementById('game-body');
  body.innerHTML = `
    <div class="event-card">
      <div class="event-tag type-random">随机事件</div>
      <div class="event-title">${event.title}</div>
      <div class="event-desc">${event.desc}</div>
      <div class="choices-wrap">
        <button class="choice-btn">
          继续 →
          <span class="choice-hint">人生不等人</span>
        </button>
      </div>
    </div>
    ${renderLog()}
  `;
  document.querySelector('.choice-btn').onclick = () => triggerRandom(event);
}

function renderLog() {
  if (G.milestones.length === 0) return '';
  const recent = G.milestones.slice(-3).reverse();
  return `<div class="log-scroll">
    ${recent.map(m => `<div class="log-entry">${m}</div>`).join('')}
  </div>`;
}

// ============================================================
// 事件处理
// ============================================================
function makeChoice(idx, event) {
  const choice = event.choices[idx];
  
  // 记录事件前的状态
  const before = {
    money: G.money,
    health: G.health,
    network: G.network,
    luck: G.luck
  };
  
  // 执行事件效果
  const result = choice.effect(G);
  
  // 计算实际变化（事件effect已经修改了G对象）
  const actualResult = {
    type: result.type,
    msg: result.msg,
    money: G.money - before.money,
    health: G.health - before.health,
    network: G.network - before.network,
    luck: G.luck - before.luck
  };
  
  showResult(actualResult, () => {
    const yrs = 2 + Math.floor(Math.random() * 3);
    const actualYrs = Math.min(yrs, G.maxAge - G.age);
    advanceTime(actualYrs, result.msg.substring(0, 20));
    G.milestones.push(`${G.age - actualYrs}岁: ${result.msg.substring(0, 50)}...`);
    nextEvent();
  });
}

function triggerRandom(event) {
  // 记录事件前的状态
  const before = {
    money: G.money,
    health: G.health,
    network: G.network,
    luck: G.luck
  };
  
  // 执行事件效果
  const result = event.effect(G);
  
  // 计算实际变化（事件effect已经修改了G对象）
  const actualResult = {
    type: result.type,
    msg: result.msg,
    money: G.money - before.money,
    health: G.health - before.health,
    network: G.network - before.network,
    luck: G.luck - before.luck
  };
  
  showResult(actualResult, () => {
    const yrs = 1 + Math.floor(Math.random() * 2);
    const actualYrs = Math.min(yrs, G.maxAge - G.age);
    advanceTime(actualYrs, result.msg.substring(0, 20));
    G.milestones.push(`${G.age - actualYrs}岁: ${result.msg.substring(0, 50)}...`);
    nextEvent();
  });
}

function triggerEaster(event) {
  // 记录事件前的状态
  const before = {
    money: G.money,
    health: G.health,
    network: G.network,
    luck: G.luck
  };
  
  // 执行事件效果
  const result = event.effect(G);
  
  // 计算实际变化（事件effect已经修改了G对象）
  const actualResult = {
    type: result.type,
    msg: result.msg,
    money: G.money - before.money,
    health: G.health - before.health,
    network: G.network - before.network,
    luck: G.luck - before.luck
  };
  
  showResult(actualResult, () => {
    if (result.type === 'easter' && G.easterEgg) {
      showEnding();
    } else {
      const yrs = 2 + Math.floor(Math.random() * 3);
      advanceTime(yrs, '彩蛋事件');
      G.milestones.push(`${G.age}岁: 【彩蛋】${result.msg.substring(0, 40)}...`);
      nextEvent();
    }
  });
}

function showResult(result, cb) {
  const icons = { 
    gain: '🎯', 
    loss: '💸', 
    neutral: '🌀', 
    easter: '✨' 
  };
  
  const titles = {
    gain: '好消息',
    loss: '坏消息',
    neutral: '就这样了',
    easter: '命运之轮'
  };
  
  const gameScreen = document.getElementById('game-screen');
  
  // 构建资产变化明细
  let moneyChangeHtml = '';
  if (result.money !== undefined && result.money !== 0) {
    moneyChangeHtml = `<div class="result-money ${result.money > 0 ? 'gain' : 'loss'}">
      ${result.money > 0 ? '+' : ''}¥${result.money.toLocaleString()}
    </div>`;
  }
  
  // 构建时间推进明细
  let timeChangeHtml = '';
  if (lastChange.years > 0) {
    const monthlyNetText = lastChange.monthlyNet >= 0 
      ? `+¥${lastChange.monthlyNet.toLocaleString()}/月` 
      : `-¥${Math.abs(lastChange.monthlyNet).toLocaleString()}/月`;
    
    timeChangeHtml = `
      <div class="result-time-detail" style="background: var(--aged); padding: 12px; margin-bottom: 12px; border-radius: 4px; font-size: 12px;">
        <div style="font-weight: 600; margin-bottom: 8px;">⏰ 过去 ${lastChange.years} 年</div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>总收入</span>
          <span style="color: var(--green);">+¥${lastChange.income.toLocaleString()}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>总支出</span>
          <span style="color: var(--red);">-¥${lastChange.expenses.toLocaleString()}</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px dashed var(--light-gray); padding-top: 4px; margin-top: 4px;">
          <span>净现金流</span>
          <span style="color: ${lastChange.netFlow >= 0 ? 'var(--green)' : 'var(--red)'}; font-weight: 600;">
            ${lastChange.netFlow >= 0 ? '+' : ''}¥${lastChange.netFlow.toLocaleString()}
          </span>
        </div>
        <div style="color: var(--gray); font-size: 11px; margin-top: 4px;">
          月净收入: ${monthlyNetText}
        </div>
      </div>
    `;
  }
  
  const popup = document.createElement('div');
  popup.className = 'result-popup';
  popup.innerHTML = `
    <div class="result-box">
      <div class="result-icon">${icons[result.type] || '📌'}</div>
      <div class="result-title">${titles[result.type] || '结果'}</div>
      <div class="result-desc">${result.msg}</div>
      ${moneyChangeHtml}
      ${timeChangeHtml}
      <div class="result-stats">
        <div class="result-stat-item">
          <div class="result-stat-label">❤️ 健康</div>
          <div class="result-stat-change ${result.health > 0 ? 'up' : result.health < 0 ? 'down' : 'same'}">
            ${result.health > 0 ? '+' : ''}${result.health || 0}
          </div>
        </div>
        <div class="result-stat-item">
          <div class="result-stat-label">🤝 人脉</div>
          <div class="result-stat-change ${result.network > 0 ? 'up' : result.network < 0 ? 'down' : 'same'}">
            ${result.network > 0 ? '+' : ''}${result.network || 0}
          </div>
        </div>
        <div class="result-stat-item">
          <div class="result-stat-label">🍀 幸运</div>
          <div class="result-stat-change ${result.luck > 0 ? 'up' : result.luck < 0 ? 'down' : 'same'}">
            ${result.luck > 0 ? '+' : ''}${result.luck || 0}
          </div>
        </div>
      </div>
      <button class="btn-next">继续人生 →</button>
    </div>
  `;
  
  popup.querySelector('.btn-next').onclick = (e) => {
    e.stopPropagation();
    popup.remove();
    cb();
  };
  
  gameScreen.appendChild(popup);
}

// ============================================================
// 结局
// ============================================================
function showHealthEnding() {
  G.health = 0;
  const ending = {
    tag: 'bad', tagText: '悲惨结局',
    title: '倒在了终点前',
    subtitle: '钱没赚到，人先没了',
    story: `你的健康值降到了0。在医院的病床上，你回想这些年，大部分时间都在为钱发愁。现在钱不重要了，但你也没机会花了。`,
    type: 'bad'
  };
  renderEnding(ending);
}

function showEnding() {
  const ending = generateEnding(G);
  renderEnding(ending);
}

function renderEnding(ending) {
  currentEnding = ending; // 保存结局信息供截图使用
  const netMoney = G.money - (G.debt || 0);
  
  // 确保包含最终岁数的事件
  if (G.milestones.length === 0 || !G.milestones[G.milestones.length - 1].includes(G.age + '岁')) {
    G.milestones.push(`${G.age}岁: 人生模拟结束`);
  }
  
  const wrap = document.getElementById('end-wrap');
  wrap.innerHTML = `
    <div class="end-card" id="end-card">
      <div class="end-label">你的人生模拟结果 · ${G.age}岁</div>
      <span class="end-tag ${ending.tag}">${ending.tagText}</span>
      <div class="end-title">${ending.title}</div>
      <div class="end-subtitle">${ending.subtitle}</div>
      
      <div class="end-stats">
        <div class="end-stat">
          <div class="end-stat-label">最终净资产</div>
          <div class="end-stat-val" style="color:${netMoney>0?'var(--green)':'var(--red)'}">¥${netMoney.toLocaleString()}</div>
        </div>
        <div class="end-stat">
          <div class="end-stat-label">出发时存款</div>
          <div class="end-stat-val">¥${G.startMoney.toLocaleString()}</div>
        </div>
        <div class="end-stat">
          <div class="end-stat-label">城市</div>
          <div class="end-stat-val">${G.city.name}</div>
        </div>
        <div class="end-stat">
          <div class="end-stat-label">属性</div>
          <div class="end-stat-val">❤️${G.health} 🤝${G.network} 🍀${G.luck}</div>
        </div>
      </div>
      
      <div class="end-story">${ending.story}</div>
      
      <div class="milestones">
        <div class="milestones-title">· 人生轨迹 (${G.startAge}岁 → ${G.age}岁) ·</div>
        ${G.milestones.slice(-8).map(m => `<div class="milestone-item">${m}</div>`).join('')}
      </div>
      
      <div class="share-hint">📸 分享给朋友，看看他们的人生</div>
    </div>
    <button class="btn-restart" id="screenshot-btn" style="background: var(--gold); color: var(--ink); margin-bottom: 8px;">📸 保存截图</button>
    <button class="btn-restart" onclick="location.reload()">🔄 重开一局</button>
  `;
  
  showScreen('end-screen');
  
  // 绑定截图按钮事件
  document.getElementById('screenshot-btn').onclick = saveScreenshot;
}

// 截图功能
function saveScreenshot() {
  const card = document.getElementById('end-card');
  if (!card) {
    alert('找不到内容');
    return;
  }
  
  // 检查 html2canvas 是否加载
  if (typeof html2canvas === 'undefined') {
    alert('截图库未加载，请刷新页面重试');
    return;
  }
  
  // 显示加载提示
  const btn = document.getElementById('screenshot-btn');
  const originalText = btn.textContent;
  btn.textContent = '📸 正在生成...';
  btn.disabled = true;
  
  html2canvas(card, {
    backgroundColor: '#1a1208',
    scale: 2,
    useCORS: true,
    logging: false
  }).then(canvas => {
    // 创建下载链接
    const link = document.createElement('a');
    const tagText = currentEnding ? currentEnding.tagText : '结局';
    link.download = `重启人生_${G.age}岁_${tagText}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    // 恢复按钮
    btn.textContent = originalText;
    btn.disabled = false;
  }).catch(err => {
    console.error('截图失败:', err);
    alert('截图失败，请重试');
    btn.textContent = originalText;
    btn.disabled = false;
  });
}

// ============================================================
// 启动
// ============================================================
console.log('🎮 重启人生 - 游戏引擎加载完成');
