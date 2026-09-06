/* ===========================
   所有支援貨幣資料
   =========================== */
const ALL_CURRENCIES = [
  // 常用（預設顯示）
  { code: 'TWD', name: '新台幣',     flag: '🇹🇼', symbol: 'NT$', group: '常用貨幣' },
  { code: 'USD', name: '美元',       flag: '🇺🇸', symbol: '$',   group: '常用貨幣' },
  { code: 'CNY', name: '人民幣',     flag: '🇨🇳', symbol: '¥',   group: '常用貨幣' },
  { code: 'JPY', name: '日圓',       flag: '🇯🇵', symbol: '¥',   group: '常用貨幣' },
  { code: 'EUR', name: '歐元',       flag: '🇪🇺', symbol: '€',   group: '常用貨幣' },
  { code: 'GBP', name: '英鎊',       flag: '🇬🇧', symbol: '£',   group: '常用貨幣' },
  { code: 'HKD', name: '港幣',       flag: '🇭🇰', symbol: 'HK$', group: '常用貨幣' },
  { code: 'KRW', name: '韓元',       flag: '🇰🇷', symbol: '₩',   group: '常用貨幣' },
  { code: 'SGD', name: '新加坡元',   flag: '🇸🇬', symbol: 'S$',  group: '常用貨幣' },
  { code: 'MYR', name: '馬來西亞令吉',flag: '🇲🇾',symbol: 'RM',  group: '常用貨幣' },
  { code: 'THB', name: '泰銖',       flag: '🇹🇭', symbol: '฿',   group: '常用貨幣' },
  { code: 'AUD', name: '澳幣',       flag: '🇦🇺', symbol: 'A$',  group: '常用貨幣' },
  { code: 'CAD', name: '加拿大元',   flag: '🇨🇦', symbol: 'C$',  group: '常用貨幣' },
  { code: 'CHF', name: '瑞士法郎',   flag: '🇨🇭', symbol: 'Fr',  group: '常用貨幣' },
  // 亞洲
  { code: 'VND', name: '越南盾',     flag: '🇻🇳', symbol: '₫',   group: '亞洲' },
  { code: 'IDR', name: '印尼盾',     flag: '🇮🇩', symbol: 'Rp',  group: '亞洲' },
  { code: 'PHP', name: '菲律賓披索', flag: '🇵🇭', symbol: '₱',   group: '亞洲' },
  { code: 'INR', name: '印度盧比',   flag: '🇮🇳', symbol: '₹',   group: '亞洲' },
  { code: 'PKR', name: '巴基斯坦盧比',flag: '🇵🇰',symbol: '₨',  group: '亞洲' },
  { code: 'BDT', name: '孟加拉塔卡', flag: '🇧🇩', symbol: '৳',   group: '亞洲' },
  { code: 'MNT', name: '蒙古圖格里克',flag: '🇲🇳',symbol: '₮',  group: '亞洲' },
  { code: 'KZT', name: '哈薩克堅戈', flag: '🇰🇿', symbol: '₸',   group: '亞洲' },
  // 歐洲
  { code: 'SEK', name: '瑞典克朗',   flag: '🇸🇪', symbol: 'kr',  group: '歐洲' },
  { code: 'NOK', name: '挪威克朗',   flag: '🇳🇴', symbol: 'kr',  group: '歐洲' },
  { code: 'DKK', name: '丹麥克朗',   flag: '🇩🇰', symbol: 'kr',  group: '歐洲' },
  { code: 'PLN', name: '波蘭茲羅提', flag: '🇵🇱', symbol: 'zł',  group: '歐洲' },
  { code: 'CZK', name: '捷克克朗',   flag: '🇨🇿', symbol: 'Kč',  group: '歐洲' },
  { code: 'HUF', name: '匈牙利福林', flag: '🇭🇺', symbol: 'Ft',  group: '歐洲' },
  { code: 'RON', name: '羅馬尼亞列伊',flag: '🇷🇴',symbol: 'lei', group: '歐洲' },
  { code: 'RUB', name: '俄羅斯盧布', flag: '🇷🇺', symbol: '₽',   group: '歐洲' },
  { code: 'TRY', name: '土耳其里拉', flag: '🇹🇷', symbol: '₺',   group: '歐洲' },
  // 美洲
  { code: 'MXN', name: '墨西哥比索', flag: '🇲🇽', symbol: 'MX$', group: '美洲' },
  { code: 'BRL', name: '巴西雷亞爾', flag: '🇧🇷', symbol: 'R$',  group: '美洲' },
  { code: 'ARS', name: '阿根廷比索', flag: '🇦🇷', symbol: '$',   group: '美洲' },
  { code: 'COP', name: '哥倫比亞比索',flag: '🇨🇴',symbol: '$',  group: '美洲' },
  { code: 'CLP', name: '智利比索',   flag: '🇨🇱', symbol: '$',   group: '美洲' },
  // 中東 & 非洲
  { code: 'SAR', name: '沙烏地里亞爾',flag: '🇸🇦',symbol: '﷼',  group: '中東 & 非洲' },
  { code: 'AED', name: '阿聯酋迪拉姆',flag: '🇦🇪',symbol: 'د.إ',group: '中東 & 非洲' },
  { code: 'ILS', name: '以色列謝克爾',flag: '🇮🇱',symbol: '₪',  group: '中東 & 非洲' },
  { code: 'EGP', name: '埃及鎊',     flag: '🇪🇬', symbol: '£',   group: '中東 & 非洲' },
  { code: 'ZAR', name: '南非蘭特',   flag: '🇿🇦', symbol: 'R',   group: '中東 & 非洲' },
  { code: 'NGN', name: '奈及利亞奈拉',flag: '🇳🇬',symbol: '₦',  group: '中東 & 非洲' },
  // 大洋洲
  { code: 'NZD', name: '紐西蘭元',   flag: '🇳🇿', symbol: 'NZ$', group: '大洋洲' },
];

/* ===========================
   應用程式狀態
   =========================== */
const DEFAULT_ACTIVE_CODES = ['TWD', 'USD', 'CNY', 'JPY'];
const STORAGE_KEY = 'currency_converter_v1';
const RATES_CACHE_KEY = 'exchange_rates_cache_v1';
const CACHE_TTL = 60 * 60 * 1000; // 1 小時

let state = {
  activeCurrencies: [...DEFAULT_ACTIVE_CODES],
  rates: {},          // { USD: 1, TWD: 31.5, ... } (以 USD 為基準)
  inputValue: '0',    // 目前輸入的數字字串
  expression: '',     // 計算機運算式
  operand: null,      // 待運算的第一個數字
  operator: null,     // 待運算的運算符
  waitingForOperand: false,
  activeCurrency: 'TWD', // 目前選取（輸入目標）的貨幣
  darkMode: false,
  lastUpdate: null,
  drawerTarget: null, // 'add' | 貨幣 code（替換）
  editMode: false,    // 編輯排序模式
  decimalPlaces: 1,   // 小數點位數（預設 1 位）
};

// 在舊輸入框 blur 重繪清單後，接續完成使用者的第一次點擊。
let pendingInlineEdit = null;
let pendingCurrencySelect = null;

/* ===========================
   工具函式
   =========================== */
function $(id) { return document.getElementById(id); }

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      activeCurrencies: state.activeCurrencies,
      activeCurrency: state.activeCurrency,
      darkMode: state.darkMode,
      decimalPlaces: state.decimalPlaces,
    }));
  } catch(_) {}
}

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (Array.isArray(data.activeCurrencies) && data.activeCurrencies.length >= 2) {
      state.activeCurrencies = data.activeCurrencies;
    }
    if (data.activeCurrency) state.activeCurrency = data.activeCurrency;
    if (typeof data.darkMode === 'boolean') state.darkMode = data.darkMode;
    if (typeof data.decimalPlaces === 'number') state.decimalPlaces = data.decimalPlaces;
  } catch(_) {}
}

function formatAmount(value, code) {
  if (isNaN(value) || !isFinite(value)) return '—';
  if (value === 0) {
    const dec = state.decimalPlaces;
    return new Intl.NumberFormat('zh-TW', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(value);
  }

  let dec = state.decimalPlaces;
  
  // 檢查如果用目前設定的位數四捨五入後，是不是會變成 0
  const checkRound = parseFloat(value.toFixed(dec));
  if (checkRound === 0) {
    // 原始值不為 0 但四捨五入變 0，代表數字太小，動態增加小數點位數直到非零有效數字出現
    const firstNonZero = Math.ceil(-Math.log10(Math.abs(value)));
    dec = Math.max(dec, firstNonZero);
  }

  try {
    return new Intl.NumberFormat('zh-TW', {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
    }).format(value);
  } catch(_) {
    return value.toFixed(dec);
  }
}

function getCurrencyMeta(code) {
  return ALL_CURRENCIES.find(c => c.code === code) || { code, name: code, flag: '🏳', symbol: '' };
}

function showToast(msg) {
  const toast = $('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// 取得高解析度國旗圖片 CDN 網址
function getFlagUrl(code) {
  // 將 TWD -> tw, USD -> us, EUR -> eu 等，使用前兩位代碼取小寫
  return `https://flagcdn.com/w80/${code.slice(0, 2).toLowerCase()}.png`;
}

/* ===========================
   匯率 API
   =========================== */
async function fetchRates() {
  // 先檢查快取
  try {
    const cached = JSON.parse(localStorage.getItem(RATES_CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      state.rates = cached.rates;
      state.lastUpdate = new Date(cached.ts);
      return true;
    }
  } catch(_) {}

  setStatus('loading', '更新中…');

  // 嘗試主要 API（exchangerate.fun）
  const apis = [
    () => fetch('https://api.exchangerate.fun/latest?base=USD').then(r => r.json()),
    () => fetch('https://open.er-api.com/v6/latest/USD').then(r => r.json()),
    () => fetch('https://api.frankfurter.app/latest?base=USD&symbols=TWD,CNY,JPY,EUR,GBP,HKD,KRW,SGD,MYR,THB,AUD,CAD,CHF,VND,IDR,PHP,INR,SEK,NOK,DKK,PLN,CZK,HUF,RON,RUB,TRY,MXN,BRL,ARS,SAR,AED,ILS,EGP,ZAR,NZD').then(r => r.json()),
  ];

  for (const api of apis) {
    try {
      const data = await api();
      const rates = data.rates || data.conversion_rates;
      if (rates && rates.JPY) {
        state.rates = { USD: 1, ...rates };
        state.lastUpdate = new Date();
        localStorage.setItem(RATES_CACHE_KEY, JSON.stringify({ ts: Date.now(), rates: state.rates }));
        return true;
      }
    } catch(_) {}
  }

  // 若全部失敗，使用備用靜態匯率（2025 年參考值）
  state.rates = {
    USD: 1, TWD: 32.5, CNY: 7.25, JPY: 149.5, EUR: 0.92, GBP: 0.79,
    HKD: 7.82, KRW: 1325, SGD: 1.34, MYR: 4.72, THB: 35.5, AUD: 1.55,
    CAD: 1.36, CHF: 0.88, VND: 24700, IDR: 15800, PHP: 56.5, INR: 83.2,
    SEK: 10.5, NOK: 10.7, DKK: 6.88, PLN: 4.02, CZK: 22.8, HUF: 360,
    RON: 4.61, RUB: 91.5, TRY: 30.5, MXN: 17.2, BRL: 4.97, ARS: 375,
    SAR: 3.75, AED: 3.67, ILS: 3.72, EGP: 30.9, ZAR: 18.8, NZD: 1.63,
  };
  return false;
}

function setStatus(type, text) {
  const dot = $('statusDot');
  const txt = $('statusText');
  dot.className = 'status-dot ' + type;
  txt.textContent = text;
}

function updateStatusDisplay() {
  if (state.lastUpdate) {
    const now = new Date();
    const diff = Math.round((now - state.lastUpdate) / 60000);
    const timeStr = diff < 1 ? '剛剛' : diff < 60 ? `${diff} 分鐘前` : state.lastUpdate.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
    setStatus('success', `${timeStr}更新`);
    $('lastUpdateTime').textContent = state.lastUpdate.toLocaleString('zh-TW', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  } else {
    setStatus('error', '離線模式');
    $('lastUpdateTime').textContent = '—';
  }
}

/* ===========================
   計算機邏輯
   =========================== */
function getCurrentInputNum() {
  return parseFloat(state.inputValue.replace(/,/g, '')) || 0;
}

function applyOperator() {
  if (state.operator === null || state.operand === null) return getCurrentInputNum();
  const a = state.operand;
  const b = getCurrentInputNum();
  switch(state.operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '×': return a * b;
    case '÷': return b !== 0 ? a / b : 0;
  }
  return b;
}

/* ===========================
   將計算機面板的點選動作，套用到直接編輯的 input 游標位置
   =========================== */
function handleInputWithCalcBtn(input, action, value) {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  let val = input.value;

  if (action === 'digit') {
    // 在游標處插入數字
    input.value = val.slice(0, start) + value + val.slice(end);
    const newPos = start + value.length;
    input.setSelectionRange(newPos, newPos);
    input.focus();
  } else if (action === 'decimal') {
    // 插入小數點（若無）
    if (!val.includes('.')) {
      input.value = val.slice(0, start) + '.' + val.slice(end);
      const newPos = start + 1;
      input.setSelectionRange(newPos, newPos);
    }
    input.focus();
  } else if (action === 'backspace') {
    // 刪除字元
    if (start !== end) {
      input.value = val.slice(0, start) + val.slice(end);
      input.setSelectionRange(start, start);
    } else if (start > 0) {
      input.value = val.slice(0, start - 1) + val.slice(end);
      input.setSelectionRange(start - 1, start - 1);
    }
    input.focus();
  } else if (action === 'clear') {
    // 全部清除
    input.value = '';
    input.setSelectionRange(0, 0);
    input.focus();
  } else if (action === 'percent') {
    // 百分比：直接換算現有數值 / 100
    const v = parseFloat(val) || 0;
    input.value = String(v / 100);
    input.focus();
  } else if (action === 'equals' || action === 'op') {
    // 點擊等號或加減乘除 ➔ 提交當前編輯，並執行計算機對應動作
    // 這邊會調用 input.blur()，觸發 commitEdit
    input.blur();
    
    // 稍候 50ms 讓編輯提交（並重新 renderCurrencyList）完成後，再執行對應運算
    setTimeout(() => {
      handleCalcBtn(action, value);
    }, 60);
  }
}

function handleCalcBtn(action, value) {
  // 如果目前正處於「直接點擊數字修改」的編輯框狀態
  // 將計算機面板按鍵導流，直接在輸入框的游標處插入/修改文字，而不是覆蓋
  const activeInput = document.querySelector('.currency-amount-input');
  if (activeInput) {
    handleInputWithCalcBtn(activeInput, action, value);
    return;
  }

  switch(action) {
    case 'digit': {
      if (state.waitingForOperand) {
        state.inputValue = value;
        state.waitingForOperand = false;
      } else {
        if (state.inputValue === '0' && value !== '.') {
          state.inputValue = value;
        } else if (state.inputValue.replace(/[^.]/g, '').length < 1 || value !== '.') {
          if (state.inputValue.replace(/[^0-9]/g, '').length < 15) {
            state.inputValue += value;
          }
        }
      }
      updateExpression('');
      break;
    }
    case 'decimal': {
      if (state.waitingForOperand) {
        state.inputValue = '0.';
        state.waitingForOperand = false;
      } else if (!state.inputValue.includes('.')) {
        state.inputValue += '.';
      }
      updateExpression('');
      break;
    }
    case 'backspace': {
      if (state.waitingForOperand) {
        state.inputValue = '0';
        state.waitingForOperand = false;
      } else if (state.inputValue.length > 1) {
        state.inputValue = state.inputValue.slice(0, -1);
      } else {
        state.inputValue = '0';
      }
      updateExpression('');
      break;
    }
    case 'clear': {
      state.inputValue = '0';
      state.expression = '';
      state.operand = null;
      state.operator = null;
      state.waitingForOperand = false;
      $('calcExpr').textContent = '';
      break;
    }
    case 'percent': {
      const v = getCurrentInputNum();
      if (state.operand !== null) {
        state.inputValue = String(state.operand * v / 100);
      } else {
        state.inputValue = String(v / 100);
      }
      updateExpression('');
      break;
    }
    case 'op': {
      const opSymbol = value === '×' ? '×' : value === '÷' ? '÷' : value;
      if (state.operator && !state.waitingForOperand) {
        const currentValue = getCurrentInputNum();
        const result = applyOperator();
        state.operand = result;
        state.inputValue = String(result);
        state.expression = `${state.expression} ${formatAmount(currentValue, state.activeCurrency)} ${opSymbol}`;
      } else {
        state.operand = getCurrentInputNum();
        state.expression = `${formatAmount(state.operand, state.activeCurrency)} ${opSymbol}`;
      }
      state.operator = value;
      state.waitingForOperand = true;
      updateExpression();
      break;
    }
    case 'equals': {
      if (state.operator) {
        const b = getCurrentInputNum();
        const exprStr = `${state.expression} ${formatAmount(b, state.activeCurrency)} =`;
        const result = applyOperator();
        state.inputValue = String(parseFloat(result.toPrecision(12)));
        state.operator = null;
        state.operand = null;
        state.waitingForOperand = false;
        state.expression = exprStr;
        $('calcExpr').textContent = exprStr;
      }
      break;
    }
  }

  renderCurrencyList();
  animateActiveItem();
}

function updateExpression() {
  // 完成計算後，下一次輸入才清空上一條算式；連續運算則保留完整歷程。
  if (!state.operator) state.expression = '';
  $('calcExpr').textContent = state.expression;
}

function animateActiveItem() {
  const el = document.querySelector('.currency-item.active .currency-amount');
  if (el) {
    el.style.transform = 'scale(1.04)';
    el.style.transition = 'transform 0.15s ease';
    setTimeout(() => { el.style.transform = ''; }, 150);
  }
}

/* ===========================
   轉換計算
   =========================== */
function getConvertedAmount(fromCode, toCode, amount) {
  const rates = state.rates;
  if (!rates[fromCode] || !rates[toCode]) return null;
  const inUSD = amount / rates[fromCode];
  return inUSD * rates[toCode];
}

function getRateLabel(fromCode, toCode) {
  if (!state.rates[fromCode] || !state.rates[toCode]) return '';
  const rate = getConvertedAmount(fromCode, toCode, 1);
  return `1 ${fromCode} = ${formatAmount(rate, toCode)} ${toCode}`;
}

/* ===========================
   渲染貨幣清單
   =========================== */
function renderCurrencyList() {
  const list = $('currencyList');
  const baseAmount = parseFloat(state.inputValue) || 0;

  list.innerHTML = '';
  state.activeCurrencies.forEach(code => {
    const meta = getCurrencyMeta(code);
    const isActive = code === state.activeCurrency;

    // 計算轉換後金額
    let displayAmount;
    if (isActive) {
      displayAmount = baseAmount;
    } else {
      const converted = getConvertedAmount(state.activeCurrency, code, baseAmount);
      displayAmount = converted !== null ? converted : 0;
    }

    const rateLabel = !isActive && state.rates[code]
      ? getRateLabel(state.activeCurrency, code)
      : '';

    const item = document.createElement('div');
    item.className = 'currency-item' + (isActive ? ' active' : '');
    item.dataset.code = code;
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `${meta.name} ${formatAmount(displayAmount, code)}`);
    item.setAttribute('aria-pressed', isActive ? 'true' : 'false');

    // 拖曳把手在左，國旗在右
    item.innerHTML = `
      <div class="drag-handle" title="拖曳排序">
        <span></span><span></span><span></span>
      </div>
      <div class="currency-flag">
        <img src="${getFlagUrl(code)}" class="currency-flag-img" onerror="this.style.display='none'; this.parentNode.querySelector('.flag-fallback').style.display='block';" alt="${code}">
        <span class="flag-fallback" style="display: none;">${code.slice(0, 2)}</span>
      </div>
      <div class="currency-info">
        <div class="currency-row1">
          <span class="currency-code">${code}</span>
          <span class="currency-amount">${formatAmount(displayAmount, code)}</span>
        </div>
        <div class="currency-row2">
          <span class="currency-name">${meta.name}</span>
          <span class="currency-rate">${rateLabel}</span>
        </div>
      </div>
    `;

    // 點選貨幣 → 切換為輸入目標（排除點擊拖曳把手與點擊數字區域的狀況）
    item.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.drag-handle') || e.target.closest('.currency-amount') || e.target.closest('.currency-amount-input')) return;

      const activeInput = document.querySelector('.currency-amount-input');
      if (!activeInput) return;

      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      pendingCurrencySelect = code;
      activeInput.blur();
    });

    item.addEventListener('click', (e) => {
      if (e.target.closest('.drag-handle') || e.target.closest('.currency-amount') || e.target.closest('.currency-amount-input')) return;
      selectCurrency(code);
    });

    // 點選數字區域 → 直接從點擊位置開始修改數字。
    const amountEl = item.querySelector('.currency-amount');
    amountEl.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();

      const activeInput = document.querySelector('.currency-amount-input');
      if (activeInput) {
        pendingInlineEdit = {
          code,
          clickEvent: { clientX: e.clientX, clientY: e.clientY },
        };
        activeInput.blur();
      } else {
        startInlineEdit(code, e);
      }
    });

    // 鍵盤支援
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') selectCurrency(code);
    });

    list.appendChild(item);
  });

  // 渲染完成後重新初始化拖曳
  initDragSort();
}

function selectCurrency(code) {
  if (state.activeCurrency === code) {
    // 再次點擊同個項目：進入計算機「覆蓋/全選」模式，下一個數字鍵會直接覆蓋原數值
    state.waitingForOperand = true;
    return;
  }

  // 計算目前 active 貨幣的輸入值在新貨幣的等值（供其他列顯示用）
  const currentAmount = parseFloat(state.inputValue) || 0;
  const converted = getConvertedAmount(state.activeCurrency, code, currentAmount);

  state.activeCurrency = code;

  // 將轉換值存入 inputValue 供畫面顯示，但標記為「等待輸入」
  // 這樣按下任何數字鍵都會直接覆蓋，從頭開始輸入新數值
  if (converted !== null && currentAmount !== 0) {
    state.inputValue = String(parseFloat(converted.toPrecision(10)));
  } else {
    state.inputValue = '0';
  }

  // 重置計算機狀態，並標記下一個數字鍵為「覆蓋模式」
  state.expression = '';
  state.operand = null;
  state.operator = null;
  state.waitingForOperand = true;   // ← 關鍵：切換後的第一個按鍵直接取代顯示值
  $('calcExpr').textContent = '';

  saveState();
  renderCurrencyList();

  // 加入選取動畫
  const item = document.querySelector(`.currency-item[data-code="${code}"]`);
  if (item) {
    item.style.transition = 'box-shadow 0.3s';
    setTimeout(() => { item.style.transition = ''; }, 300);
  }
}

function removeCurrency(code) {
  if (state.activeCurrencies.length <= 2) {
    showToast('⚠️ 至少需要保留 2 種貨幣');
    return;
  }
  state.activeCurrencies = state.activeCurrencies.filter(c => c !== code);
  if (state.activeCurrency === code) {
    state.activeCurrency = state.activeCurrencies[0];
    state.inputValue = '0';
  }
  saveState();
  renderCurrencyList();
  showToast(`已移除 ${code}`);
}

/* ===========================
   貨幣選擇抽屜
   =========================== */
let drawerMode = 'add'; // 'add'

function openCurrencyDrawer() {
  drawerMode = 'add';
  $('drawerOverlay').classList.add('open');
  $('currencyDrawer').classList.add('open');
  $('currencySearch').value = '';
  renderDrawerList('');
  setTimeout(() => $('currencySearch').focus(), 300);
}

function closeCurrencyDrawer() {
  $('drawerOverlay').classList.remove('open');
  $('currencyDrawer').classList.remove('open');
}

function renderDrawerList(query) {
  const drawerList = $('drawerList');
  drawerList.innerHTML = '';

  const q = query.trim().toLowerCase();
  const grouped = {};

  ALL_CURRENCIES.forEach(cur => {
    const match = !q
      || cur.code.toLowerCase().includes(q)
      || cur.name.toLowerCase().includes(q)
      || cur.group.toLowerCase().includes(q);
    if (!match) return;

    if (!grouped[cur.group]) grouped[cur.group] = [];
    grouped[cur.group].push(cur);
  });

  let hasAny = false;
  Object.entries(grouped).forEach(([group, items]) => {
    const labelEl = document.createElement('div');
    labelEl.className = 'currency-group-label';
    labelEl.textContent = group;
    drawerList.appendChild(labelEl);

    items.forEach(cur => {
      hasAny = true;
      let isSelected = state.activeCurrencies.includes(cur.code);
      const itemEl = document.createElement('div');
      itemEl.className = 'drawer-currency-item' + (isSelected ? ' selected' : '');
      itemEl.setAttribute('role', 'option');
      itemEl.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      itemEl.setAttribute('tabindex', '0');
      itemEl.innerHTML = `
        <div class="drawer-currency-flag">
          <img src="${getFlagUrl(cur.code)}" class="currency-flag-img" onerror="this.style.display='none'; this.parentNode.querySelector('.flag-fallback').style.display='block';" alt="${cur.code}">
          <span class="flag-fallback" style="display: none;">${cur.code.slice(0, 2)}</span>
        </div>
        <div class="drawer-currency-text">
          <div class="drawer-currency-code">${cur.code}</div>
          <div class="drawer-currency-name">${cur.name}</div>
        </div>
      `;

      // 支援點選多個貨幣，即時更新勾選狀態（不關閉抽屜）
      itemEl.addEventListener('click', () => {
        isSelected = state.activeCurrencies.includes(cur.code);
        if (isSelected) {
          // 嘗試移除
          if (state.activeCurrencies.length <= 2) {
            showToast('⚠️ 至少需要保留 2 種貨幣');
            return;
          }
          state.activeCurrencies = state.activeCurrencies.filter(c => c !== cur.code);
          if (state.activeCurrency === cur.code) {
            state.activeCurrency = state.activeCurrencies[0];
            state.inputValue = '0';
          }
          itemEl.classList.remove('selected');
          itemEl.setAttribute('aria-selected', 'false');
          showToast(`已移除 ${cur.code}`);
        } else {
          // 嘗試加入
          state.activeCurrencies.push(cur.code);
          itemEl.classList.add('selected');
          itemEl.setAttribute('aria-selected', 'true');
          showToast(`已加入 ${cur.code}`);
        }
        saveState();
        renderCurrencyList(); // 背後的轉換清單即時響應更新
      });

      itemEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') itemEl.click();
      });

      drawerList.appendChild(itemEl);
    });
  });

  if (!hasAny) {
    const empty = document.createElement('div');
    empty.style.cssText = 'text-align:center;padding:40px 20px;color:var(--text-tertiary);font-size:14px;';
    empty.textContent = `找不到「${query}」相關貨幣`;
    drawerList.appendChild(empty);
  }
}

function addCurrency(code) {
  if (state.activeCurrencies.includes(code)) {
    showToast(`${code} 已在清單中`);
    return;
  }
  state.activeCurrencies.push(code);
  saveState();
  renderCurrencyList();
  showToast(`✅ 已新增 ${getCurrencyMeta(code).name}`);
}

/* ===========================
   設定抽屜
   =========================== */
function openSettingsDrawer() {
  $('drawerOverlay').classList.add('open');
  $('settingsDrawer').classList.add('open');
  $('darkModeCheck').checked = state.darkMode;
  $('decimalSelect').value = state.decimalPlaces; // 同步下拉選單的值
  updateStatusDisplay();
}

function closeSettingsDrawer() {
  $('drawerOverlay').classList.remove('open');
  $('settingsDrawer').classList.remove('open');
}

/* ===========================
   主題切換
   =========================== */
function applyTheme() {
  if (state.darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

/* ===========================
   重新整理匯率
   =========================== */
async function refreshRates() {
  const btn = $('refreshBtn');
  btn.classList.add('spinning');
  localStorage.removeItem(RATES_CACHE_KEY);
  const ok = await fetchRates();
  btn.classList.remove('spinning');

  if (ok) {
    showToast('✅ 匯率已更新');
    setStatus('success', '已更新');
  } else {
    showToast('⚠️ 無法連線，使用備用匯率');
    setStatus('error', '離線模式');
  }
  renderCurrencyList();
  updateStatusDisplay();
}

/* ===========================
   編輯模式切換
   =========================== */
/* ===========================
   拖曳排序（採用現代 PointerEvents 支援觸控 & 滑鼠）
   =========================== */
let drag = {
  el: null,         // 正在拖曳的 DOM 元素
  fromIndex: -1,    // 拖曳起始索引
  toIndex: -1,      // 目前目標索引
  ghost: null,      // 拖曳預覽元素
  startY: 0,
  offsetY: 0,
  itemHeight: 0,
  pointerId: null,
};

function initDragSort() {
  const list = $('currencyList');
  const items = list.querySelectorAll('.currency-item');

  items.forEach((item, idx) => {
    const handle = item.querySelector('.drag-handle');
    if (!handle) return;

    // 使用 PointerEvents 同時處理滑鼠與多點觸控，直接允許隨時拖曳排序
    handle.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      
      // 鎖定 Pointer，確保流暢度
      handle.setPointerCapture(e.pointerId);
      drag.pointerId = e.pointerId;
      
      startDrag(item, idx, e.clientY);
    });

    handle.addEventListener('pointermove', (e) => {
      if (drag.el && drag.pointerId === e.pointerId) {
        e.preventDefault();
        moveDrag(e.clientY);
      }
    });

    handle.addEventListener('pointerup', (e) => {
      if (drag.el && drag.pointerId === e.pointerId) {
        e.preventDefault();
        handle.releasePointerCapture(e.pointerId);
        onDragEnd();
      }
    });

    handle.addEventListener('pointercancel', (e) => {
      if (drag.el && drag.pointerId === e.pointerId) {
        handle.releasePointerCapture(e.pointerId);
        onDragEnd();
      }
    });
  });
}

function startDrag(el, fromIndex, clientY) {
  const list = $('currencyList');
  const rect = el.getBoundingClientRect();

  drag.el = el;
  drag.fromIndex = fromIndex;
  drag.toIndex = fromIndex;
  drag.startY = clientY;
  drag.offsetY = clientY - rect.top;
  drag.itemHeight = rect.height;

  // 建立浮動預覽（ghost）
  drag.ghost = el.cloneNode(true);
  drag.ghost.style.cssText = `
    position: fixed;
    left: ${rect.left}px;
    top: ${rect.top}px;
    width: ${rect.width}px;
    z-index: 999;
    pointer-events: none;
    opacity: 0.92;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    border-radius: 16px;
    transition: none;
    transform: scale(1.02);
    background: var(--bg-card-hover);
    border: 1.5px solid rgba(124,111,247,0.5);
  `;
  document.body.appendChild(drag.ghost);
  el.classList.add('dragging');
}

function moveDrag(clientY) {
  if (!drag.ghost) return;

  // 移動 ghost
  const list = $('currencyList');
  const listRect = list.getBoundingClientRect();
  
  // 限制拖曳範圍在貨幣清單內
  const ghostTop = Math.max(
    listRect.top - 10,
    Math.min(clientY - drag.offsetY, listRect.bottom - drag.itemHeight + 10)
  );
  drag.ghost.style.top = ghostTop + 'px';

  // 計算目前懸停的索引
  const items = [...list.querySelectorAll('.currency-item')];
  let newIndex = drag.fromIndex;

  // 用當前拖曳預覽的中心 Y 軸來判定要塞在哪個卡片上方/下方
  const ghostCenterY = ghostTop + drag.itemHeight / 2;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.classList.contains('dragging')) continue;

    const r = item.getBoundingClientRect();
    const itemCenterY = r.top + r.height / 2;

    if (ghostCenterY < itemCenterY) {
      newIndex = i;
      break;
    } else {
      newIndex = i + 1;
    }
  }

  // 確保 newIndex 在合理範圍內
  if (newIndex >= items.length) {
    newIndex = items.length - 1;
  }

  // 調整放置目標的視覺反饋 (drag-over)
  items.forEach((item, idx) => {
    item.classList.toggle('drag-over', idx === newIndex && !item.classList.contains('dragging'));
  });

  drag.toIndex = newIndex;
}

function onDragEnd() {
  if (!drag.ghost) {
    drag.pointerId = null;
    return;
  }

  // 清理 ghost
  drag.ghost.remove();
  drag.ghost = null;

  const list = $('currencyList');
  list.querySelectorAll('.currency-item').forEach(item => {
    item.classList.remove('dragging', 'drag-over');
  });

  // 執行排序並存入 localStorage
  if (drag.fromIndex !== drag.toIndex && drag.toIndex >= 0) {
    const arr = [...state.activeCurrencies];
    const moved = arr.splice(drag.fromIndex, 1)[0];
    
    // 插入到新位置
    arr.splice(drag.toIndex, 0, moved);
    state.activeCurrencies = arr;
    saveState();
  }
  
  // 重新渲染清單
  renderCurrencyList();

  drag.el = null;
  drag.fromIndex = -1;
  drag.toIndex = -1;
  drag.pointerId = null;
}

/* ===========================
   事件綁定
   =========================== */
function bindEvents() {
  // 計算機按鈕
  document.querySelectorAll('.calc-btn').forEach(btn => {
    // 當編輯框開啟時，點擊計算機按鈕防止輸入框失去焦點 (blur)，這樣游標才不會不見
    btn.addEventListener('pointerdown', (e) => {
      const activeInput = document.querySelector('.currency-amount-input');
      if (activeInput) {
        e.preventDefault();
      }
    });

    btn.addEventListener('click', () => {
      handleCalcBtn(btn.dataset.action, btn.dataset.value);
    });
  });

  // 鍵盤支援
  document.addEventListener('keydown', (e) => {
    // 如果使用者正聚焦在金額直接輸入框中，不攔截實體鍵盤按鍵，保留瀏覽器預設的游標插入行為
    if (document.activeElement && document.activeElement.classList.contains('currency-amount-input')) {
      return;
    }

    if ($('currencyDrawer').classList.contains('open') || $('settingsDrawer').classList.contains('open')) return;

    const map = {
      '0': ['digit','0'], '1': ['digit','1'], '2': ['digit','2'],
      '3': ['digit','3'], '4': ['digit','4'], '5': ['digit','5'],
      '6': ['digit','6'], '7': ['digit','7'], '8': ['digit','8'],
      '9': ['digit','9'], '.': ['decimal',''], ',': ['decimal',''],
      '+': ['op','+'], '-': ['op','-'], '*': ['op','×'], '/': ['op','÷'],
      'Enter': ['equals',''], '=': ['equals',''],
      'Backspace': ['backspace',''], 'Delete': ['clear',''],
      'Escape': ['clear',''], '%': ['percent',''],
    };

    if (map[e.key]) {
      e.preventDefault();
      handleCalcBtn(map[e.key][0], map[e.key][1]);
    }
  });

  // 新增貨幣
  const addCurrencyBtn = $('addCurrencyBtn');
  if (addCurrencyBtn) addCurrencyBtn.addEventListener('click', openCurrencyDrawer);
  const headerAddBtn = $('headerAddBtn');
  if (headerAddBtn) headerAddBtn.addEventListener('click', openCurrencyDrawer);

  // 關閉抽屜
  $('closeDrawerBtn').addEventListener('click', closeCurrencyDrawer);
  $('closeSettingsBtn').addEventListener('click', closeSettingsDrawer);
  $('drawerOverlay').addEventListener('click', () => {
    closeCurrencyDrawer();
    closeSettingsDrawer();
  });

  // 搜尋
  $('currencySearch').addEventListener('input', (e) => {
    renderDrawerList(e.target.value);
  });

  // 設定
  $('settingsBtn').addEventListener('click', openSettingsDrawer);

  // 深色模式
  $('darkModeCheck').addEventListener('change', (e) => {
    state.darkMode = e.target.checked;
    applyTheme();
    saveState();
  });

  // 小數點位數設定
  $('decimalSelect').addEventListener('change', (e) => {
    state.decimalPlaces = parseInt(e.target.value, 10);
    saveState();
    renderCurrencyList();
  });

  // 重新整理
  $('refreshBtn').addEventListener('click', refreshRates);
}

/* ===========================
   點擊直接修改數字的編輯模式
   =========================== */
function startInlineEdit(code, clickEvent) {
  // 若該項目不是目前的 active 項目，則先將它切換為 active
  if (state.activeCurrency !== code) {
    selectCurrency(code);
  }

  const itemEl = document.querySelector(`.currency-item[data-code="${code}"]`);
  if (!itemEl) return;

  const amountEl = itemEl.querySelector('.currency-amount');
  // 如果已經在編輯狀態中，避免重複建立
  if (!amountEl || itemEl.querySelector('.currency-amount-input')) return;

  // 計算點擊處在 formattedText ("1,234.56") 中的字元偏移量
  let caretOffset = amountEl.textContent.length; // 預設放在最後
  if (clickEvent && (document.caretRangeFromPoint || document.caretPositionFromPoint)) {
    let range;
    if (document.caretRangeFromPoint) {
      range = document.caretRangeFromPoint(clickEvent.clientX, clickEvent.clientY);
    } else if (document.caretPositionFromPoint) {
      const pos = document.caretPositionFromPoint(clickEvent.clientX, clickEvent.clientY);
      if (pos) {
        range = document.createRange();
        range.setStart(pos.offsetNode, pos.offset);
      }
    }
    
    if (range && range.startContainer) {
      // 確保點擊的是文字節點
      const textNode = range.startContainer;
      if (textNode.nodeType === Node.TEXT_NODE) {
        caretOffset = range.startOffset;
      }
    }
  }

  // 轉換成無逗號原始數值 ("1234.56") 後的游標位置
  // 計算點擊位置左方有多少個千分位逗號，並將游標向左位移對應格數
  const formattedText = amountEl.textContent;
  const textToLeft = formattedText.substring(0, caretOffset);
  const commaCount = (textToLeft.match(/,/g) || []).length;
  let targetCursorPos = caretOffset - commaCount;

  // 隱藏原本的金額標籤
  amountEl.style.display = 'none';

  // 建立文字輸入框
  const input = document.createElement('input');
  input.type = 'text';
  input.inputMode = 'none';
  input.className = 'currency-amount-input';
  
  // 獲取目前畫面上顯示的數值，去除千分位逗號
  // 這能保證使用者點擊 "102.0" 編輯時就是 "102.0"，而不會跑出後台未格式化的 "102.0410632"
  const rawValue = amountEl.textContent.replace(/,/g, '');
  
  if (rawValue === '0' || rawValue === '') {
    input.value = '';
    targetCursorPos = 0;
  } else {
    input.value = rawValue;
  }

  // 將輸入框插入到原本金額標籤的前方
  amountEl.parentNode.insertBefore(input, amountEl);
  
  // 聚焦
  input.focus();
  
  // 將游標移至點擊位置
  const finalPos = Math.max(0, Math.min(input.value.length, targetCursorPos));
  input.setSelectionRange(finalPos, finalPos);

  let isCommitted = false;

  const commitEdit = () => {
    if (isCommitted) return;
    isCommitted = true;

    let textVal = input.value.trim();
    // 移除多餘字符，只保留數字和小數點
    textVal = textVal.replace(/[^0-9.]/g, '');
    
    const parsedVal = parseFloat(textVal);
    if (!isNaN(parsedVal) && isFinite(parsedVal)) {
      state.inputValue = String(parsedVal);
    } else {
      state.inputValue = '0';
    }

    // 重置計算機的狀態，開啟覆蓋模式
    state.expression = '';
    state.operand = null;
    state.operator = null;
    state.waitingForOperand = true;
    $('calcExpr').textContent = '';

    saveState();
    renderCurrencyList();

    const nextEdit = pendingInlineEdit;
    pendingInlineEdit = null;
    const nextSelection = pendingCurrencySelect;
    pendingCurrencySelect = null;
    if (nextEdit) {
      startInlineEdit(nextEdit.code, nextEdit.clickEvent);
    } else if (nextSelection) {
      selectCurrency(nextSelection);
    }
  };

  const cancelEdit = () => {
    if (isCommitted) return;
    isCommitted = true;
    renderCurrencyList(); // 重新渲染直接復原為文字
  };

  // 監聽失去焦點與鍵盤動作
  input.addEventListener('blur', commitEdit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      commitEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  });
}

async function init() {
  loadState();
  applyTheme();
  renderCurrencyList();
  bindEvents();

  const ok = await fetchRates();
  if (ok) {
    setStatus('success', '已更新');
  } else {
    setStatus('error', '離線模式');
    showToast('⚠️ 使用離線備用匯率');
  }

  renderCurrencyList();
  updateStatusDisplay();

  // 每 10 分鐘更新一次狀態顯示
  setInterval(updateStatusDisplay, 10 * 60 * 1000);
}

// 啟動
init();
