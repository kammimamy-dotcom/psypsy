/************** 
 * Экс 1 *
 **************/


// store info about the experiment session:
let expName = 'экс 1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((1.0000, 1.0000, 1.0000)),
  units: 'cm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'words random.xlsx', 'path': 'words random.xlsx'},
    {'name': 'IMG_7650.WEBP', 'path': 'IMG_7650.WEBP'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var Text_2;
var Text;
var start;
var trialClock;
var text_defin;
var yes;
var no;
var tot;
var number_1;
var text;
var wordClock;
var otvet;
var conti;
var awnser_2;
var TOTClock;
var qq;
var instr_tot;
var Q1;
var Q1text;
var Q2;
var Q2text;
var Q3;
var Q3text;
var Q4;
var Q4text;
var q6;
var vspomnil;
var conti3;
var word_awnserClock;
var awnser;
var text_awnser_2;
var conti2;
var EndClock;
var text_end;
var image;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_2',
    text: 'ИНСТРУКЦИЯ',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 5.5], draggable: false, height: 0.6,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -1.0 
  });
  
  Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text',
    text: '\n\nВам будут предъявляться определения слов. Например: «Навигационный инструмент для измерения высоты солнца и звезд над горизонтом»\n\nПрочитав определение, выберите один из трех вариантов ответа, который подходит именно Вам:\n\n«Я ЗНАЮ»\nЕсли вы сразу, как только прочитали определение, вспомнили нужное слово\n\n«Я НЕ ЗНАЮ»\nЕсли у Вас нет никаких мыслей о том, что это за слово, и вы его не знаете \n\n«ВЕРТИТСЯ НА ЯЗЫКЕ»\nЕсли вы не можете вспомнить слово, но уверены, что знаете его и чувствуете, что оно вот-вот всплывет в памяти\n\n\nВремя на выполнение не ограничено',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 0.6], draggable: false, height: 0.45,  wrapWidth: 15.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  start = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'start',
    text: 'Начать',
    font: 'Calibri',
    pos: [0, (- 6)],
    size: [3, 1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: (-0.2157, 0.1686, 0.8588),
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.6,
    bold: true,
    italic: false,
  });
  start.clock = new util.Clock();
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text_defin = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_defin',
    text: '',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 4], draggable: false, height: 0.7,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'yes',
    text: 'Я ЗНАЮ',
    font: 'Calibri',
    pos: [(- 7), (- 1)],
    size: [3.5, 3.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: (-1.0000, -1.0000, -1.0000),
    fillColor: (1.0000, 0.9451, 0.7255),
    borderColor: (0.0039, 0.0039, 0.0039),
    colorSpace: 'rgb',
    borderWidth: 1.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.5,
    bold: true,
    italic: false,
  });
  yes.clock = new util.Clock();
  
  no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'no',
    text: 'Я НЕ ЗНАЮ',
    font: 'Calibri',
    pos: [0, (- 1)],
    size: [3.5, 3.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: (-1.0000, -1.0000, -1.0000),
    fillColor: (1.0000, 0.9451, 0.7255),
    borderColor: (0.0039, 0.0039, 0.0039),
    colorSpace: 'rgb',
    borderWidth: 1.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.5,
    bold: true,
    italic: false,
  });
  no.clock = new util.Clock();
  
  tot = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'tot',
    text: 'ВЕРТИТСЯ НА ЯЗЫКЕ',
    font: 'Calibri',
    pos: [7, (- 1)],
    size: [3.5, 3.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: (-1.0000, -1.0000, -1.0000),
    fillColor: (1.0000, 0.9451, 0.7255),
    borderColor: (0.0039, 0.0039, 0.0039),
    colorSpace: 'rgb',
    borderWidth: 1.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.5,
    bold: true,
    italic: false,
  });
  tot.clock = new util.Clock();
  
  number_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number_1',
    text: '',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 6], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((0.3255, 0.3255, 0.3255)),  opacity: undefined,
    depth: -5.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '(пытаюсь вспомнить)',
    font: 'Calibri',
    units: undefined, 
    pos: [7, (- 1.7)], draggable: false, height: 0.37,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((0.0039, 0.0039, 0.0039)),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "word"
  wordClock = new util.Clock();
  otvet = new visual.TextBox({
    win: psychoJS.window,
    name: 'otvet',
    text: '',
    placeholder: 'Введите слово',
    font: 'Calibri',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.5,
    lineSpacing: 1.0,
    size: [9, 1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: undefined, borderColor: (0.3255, 0.3255, 0.3255),
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.0,
    padding: 0.0,
    alignment: 'center',
    overflow: 'scroll',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  conti = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conti',
    text: 'Продолжить',
    font: 'Calibri',
    pos: [0, (- 4)],
    size: [3, 1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: (1.0000, 1.0000, 1.0000),
    fillColor: (-0.2157, 0.1686, 0.8588),
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.5,
    opacity: null,
    depth: -1,
    letterHeight: 0.4,
    bold: false,
    italic: false,
  });
  conti.clock = new util.Clock();
  
  awnser_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'awnser_2',
    text: 'ЭТО СЛОВО:',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 2, 5], draggable: false, height: 0.8,  wrapWidth: 5.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  awnser_2.bold = "true";
  
  // Initialize components for Routine "TOT"
  TOTClock = new util.Clock();
  qq = new visual.TextStim({
    win: psychoJS.window,
    name: 'qq',
    text: '',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 7], draggable: false, height: 0.47,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-0.2157, 0.1686, 0.8588)),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_tot = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_tot',
    text: 'Сейчас Вам предстоит ответить на вопросы\n\nЕсли в процессе заполнения вы внезапно вспомнили искомое слово или есть предположение, то напишите его в поле для ввода слова и нажмите "продолжить"',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 0.6], draggable: false, height: 0.7,  wrapWidth: 15.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((0.0902, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  Q1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q1',
    text: '1. Сколько слогов в слове, которое вы ищите? \n(прим. цифры могут не отображаться, это нормально)\n',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 5], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -3.0 
  });
  
  Q1text = new visual.TextBox({
    win: psychoJS.window,
    name: 'Q1text',
    text: '',
    placeholder: '...',
    font: 'Calibri',
    pos: [0, 4], 
    draggable: false,
    letterHeight: 0.5,
    lineSpacing: 1.0,
    size: [9, 1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: (1.0000, 1.0000, 1.0000), borderColor: (0.3255, 0.3255, 0.3255),
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Q2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q2',
    text: '2. Какая первая буква у этого слова?\n',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 2.5], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -5.0 
  });
  
  Q2text = new visual.TextBox({
    win: psychoJS.window,
    name: 'Q2text',
    text: '',
    placeholder: '...',
    font: 'Calibri',
    pos: [0, 1.7], 
    draggable: false,
    letterHeight: 0.5,
    lineSpacing: 1.0,
    size: [9, 1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: (1.0000, 1.0000, 1.0000), borderColor: (0.3255, 0.3255, 0.3255),
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  Q3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3',
    text: '3. Напишите слово(-а) сходное(-ые) по ЗВУЧАНИЮ \n(проранжируйте их: от более похожего к менее) \n',
    font: 'Calibri',
    units: undefined, 
    pos: [0, (- 0.5)], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -7.0 
  });
  
  Q3text = new visual.TextBox({
    win: psychoJS.window,
    name: 'Q3text',
    text: '',
    placeholder: '...',
    font: 'Calibri',
    pos: [0, (- 1.5)], 
    draggable: false,
    letterHeight: 0.5,
    lineSpacing: 1.0,
    size: [9, 1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: (1.0000, 1.0000, 1.0000), borderColor: (0.3255, 0.3255, 0.3255),
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  Q4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4',
    text: '4. Напишите слово(-а) сходное(-ые) по ЗНАЧЕНИЮ\n',
    font: 'Calibri',
    units: undefined, 
    pos: [0, (- 3.2)], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -9.0 
  });
  
  Q4text = new visual.TextBox({
    win: psychoJS.window,
    name: 'Q4text',
    text: '',
    placeholder: '...',
    font: 'Calibri',
    pos: [0, (- 4)], 
    draggable: false,
    letterHeight: 0.5,
    lineSpacing: 1.0,
    size: [9, 1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: (1.0000, 1.0000, 1.0000), borderColor: (0.3255, 0.3255, 0.3255),
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  q6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'q6',
    text: 'внезапно вспомнил(-а) искомое слово или есть предположение',
    font: 'Calibri',
    units: undefined, 
    pos: [0, (- 5.5)], draggable: false, height: 0.4,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -11.0 
  });
  
  vspomnil = new visual.TextBox({
    win: psychoJS.window,
    name: 'vspomnil',
    text: '',
    placeholder: 'Вспомнил(-а) слово',
    font: 'Calibri',
    pos: [0, (- 6.5)], 
    draggable: false,
    letterHeight: 0.5,
    lineSpacing: 1.0,
    size: [9, 1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: (1.0000, 1.0000, 1.0000), borderColor: (-1.0000, -1.0000, -1.0000),
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -12.0 
  });
  
  conti3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conti3',
    text: 'Продолжить',
    font: 'Calibri',
    pos: [9, (- 7.5)],
    size: [3, 1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: (1.0000, 1.0000, 1.0000),
    fillColor: (-0.2157, 0.1686, 0.8588),
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.5,
    opacity: null,
    depth: -13,
    letterHeight: 0.4,
    bold: false,
    italic: false,
  });
  conti3.clock = new util.Clock();
  
  // Initialize components for Routine "word_awnser"
  word_awnserClock = new util.Clock();
  awnser = new visual.TextStim({
    win: psychoJS.window,
    name: 'awnser',
    text: '',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 2.5], draggable: false, height: 0.8,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -1.0 
  });
  
  text_awnser_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_awnser_2',
    text: '',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.7,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((0.0902, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  conti2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conti2',
    text: 'Продолжить',
    font: 'Calibri',
    pos: [0, (- 4)],
    size: [3, 1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: (1.0000, 1.0000, 1.0000),
    fillColor: (-0.2157, 0.1686, 0.8588),
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.5,
    opacity: null,
    depth: -3,
    letterHeight: 0.4,
    bold: false,
    italic: false,
  });
  conti2.clock = new util.Clock();
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'ответы записаны\n\nБЛАГОДАРИМ ЗА УЧАСТИЕ И УДЕЛЕННОЕ ВРЕМЯ!!!',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 2], draggable: false, height: 0.7,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'IMG_7650.WEBP', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 2)], 
    draggable: false,
    size : [4, 4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    Text.alignText = "left";
    
    // reset start to account for continued clicks & clear times on/off
    start.reset()
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(Text_2);
    instrComponents.push(Text);
    instrComponents.push(start);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_2* updates
    if (t >= 0.0 && Text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_2.tStart = t;  // (not accounting for frame time here)
      Text_2.frameNStart = frameN;  // exact frame index
      
      Text_2.setAutoDraw(true);
    }
    
    
    // if Text_2 is active this frame...
    if (Text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Text* updates
    if (t >= 0.0 && Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text.tStart = t;  // (not accounting for frame time here)
      Text.frameNStart = frameN;  // exact frame index
      
      Text.setAutoDraw(true);
    }
    
    
    // if Text is active this frame...
    if (Text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start* updates
    if (t >= 0.0 && start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start.tStart = t;  // (not accounting for frame time here)
      start.frameNStart = frameN;  // exact frame index
      
      start.setAutoDraw(true);
    }
    
    
    // if start is active this frame...
    if (start.status === PsychoJS.Status.STARTED) {
    }
    
    if (start.status === PsychoJS.Status.STARTED) {
      // check whether start has been pressed
      if (start.isClicked) {
        if (!start.wasClicked) {
          // store time of first click
          start.timesOn.push(start.clock.getTime());
          // store time clicked until
          start.timesOff.push(start.clock.getTime());
        } else {
          // update time clicked until;
          start.timesOff[start.timesOff.length - 1] = start.clock.getTime();
        }
        if (!start.wasClicked) {
          // end routine when start is clicked
          continueRoutine = false;
          console.log("start");
        }
        // if start is still clicked next frame, it is not a new click
        start.wasClicked = true;
      } else {
        // if start is clicked next frame, it is a new click
        start.wasClicked = false;
      }
    } else {
      // keep clock at 0 if start hasn't started / has finished
      start.clock.reset();
      // if start is clicked next frame, it is a new click
      start.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    psychoJS.experiment.addData('start.numClicks', start.numClicks);
    psychoJS.experiment.addData('start.timesOn', start.timesOn);
    psychoJS.experiment.addData('start.timesOff', start.timesOff);
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'words random.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(wordRoutineBegin(snapshot));
      trialsLoopScheduler.add(wordRoutineEachFrame());
      trialsLoopScheduler.add(wordRoutineEnd(snapshot));
      trialsLoopScheduler.add(TOTRoutineBegin(snapshot));
      trialsLoopScheduler.add(TOTRoutineEachFrame());
      trialsLoopScheduler.add(TOTRoutineEnd(snapshot));
      trialsLoopScheduler.add(word_awnserRoutineBegin(snapshot));
      trialsLoopScheduler.add(word_awnserRoutineEachFrame());
      trialsLoopScheduler.add(word_awnserRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    text_defin.setText(definition);
    // reset yes to account for continued clicks & clear times on/off
    yes.reset()
    // reset no to account for continued clicks & clear times on/off
    no.reset()
    // reset tot to account for continued clicks & clear times on/off
    tot.reset()
    number_1.setText(progress);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_defin);
    trialComponents.push(yes);
    trialComponents.push(no);
    trialComponents.push(tot);
    trialComponents.push(number_1);
    trialComponents.push(text);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_defin* updates
    if (t >= 0.0 && text_defin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_defin.tStart = t;  // (not accounting for frame time here)
      text_defin.frameNStart = frameN;  // exact frame index
      
      text_defin.setAutoDraw(true);
    }
    
    
    // if text_defin is active this frame...
    if (text_defin.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *yes* updates
    if (t >= 0 && yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes.tStart = t;  // (not accounting for frame time here)
      yes.frameNStart = frameN;  // exact frame index
      
      yes.setAutoDraw(true);
    }
    
    
    // if yes is active this frame...
    if (yes.status === PsychoJS.Status.STARTED) {
    }
    
    if (yes.status === PsychoJS.Status.STARTED) {
      // check whether yes has been pressed
      if (yes.isClicked) {
        if (!yes.wasClicked) {
          // store time of first click
          yes.timesOn.push(yes.clock.getTime());
          // store time clicked until
          yes.timesOff.push(yes.clock.getTime());
        } else {
          // update time clicked until;
          yes.timesOff[yes.timesOff.length - 1] = yes.clock.getTime();
        }
        if (!yes.wasClicked) {
          // end routine when yes is clicked
          continueRoutine = false;
          console.log("i know");
        }
        // if yes is still clicked next frame, it is not a new click
        yes.wasClicked = true;
      } else {
        // if yes is clicked next frame, it is a new click
        yes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if yes hasn't started / has finished
      yes.clock.reset();
      // if yes is clicked next frame, it is a new click
      yes.wasClicked = false;
    }
    
    // *no* updates
    if (t >= 0 && no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no.tStart = t;  // (not accounting for frame time here)
      no.frameNStart = frameN;  // exact frame index
      
      no.setAutoDraw(true);
    }
    
    
    // if no is active this frame...
    if (no.status === PsychoJS.Status.STARTED) {
    }
    
    if (no.status === PsychoJS.Status.STARTED) {
      // check whether no has been pressed
      if (no.isClicked) {
        if (!no.wasClicked) {
          // store time of first click
          no.timesOn.push(no.clock.getTime());
          // store time clicked until
          no.timesOff.push(no.clock.getTime());
        } else {
          // update time clicked until;
          no.timesOff[no.timesOff.length - 1] = no.clock.getTime();
        }
        if (!no.wasClicked) {
          // end routine when no is clicked
          continueRoutine = false;
          console.log("i do not know");
        }
        // if no is still clicked next frame, it is not a new click
        no.wasClicked = true;
      } else {
        // if no is clicked next frame, it is a new click
        no.wasClicked = false;
      }
    } else {
      // keep clock at 0 if no hasn't started / has finished
      no.clock.reset();
      // if no is clicked next frame, it is a new click
      no.wasClicked = false;
    }
    
    // *tot* updates
    if (t >= 0 && tot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tot.tStart = t;  // (not accounting for frame time here)
      tot.frameNStart = frameN;  // exact frame index
      
      tot.setAutoDraw(true);
    }
    
    
    // if tot is active this frame...
    if (tot.status === PsychoJS.Status.STARTED) {
    }
    
    if (tot.status === PsychoJS.Status.STARTED) {
      // check whether tot has been pressed
      if (tot.isClicked) {
        if (!tot.wasClicked) {
          // store time of first click
          tot.timesOn.push(tot.clock.getTime());
          // store time clicked until
          tot.timesOff.push(tot.clock.getTime());
        } else {
          // update time clicked until;
          tot.timesOff[tot.timesOff.length - 1] = tot.clock.getTime();
        }
        if (!tot.wasClicked) {
          // end routine when tot is clicked
          continueRoutine = false;
          console.log("TOT");
        }
        // if tot is still clicked next frame, it is not a new click
        tot.wasClicked = true;
      } else {
        // if tot is clicked next frame, it is a new click
        tot.wasClicked = false;
      }
    } else {
      // keep clock at 0 if tot hasn't started / has finished
      tot.clock.reset();
      // if tot is clicked next frame, it is a new click
      tot.wasClicked = false;
    }
    
    // *number_1* updates
    if (t >= 0.0 && number_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number_1.tStart = t;  // (not accounting for frame time here)
      number_1.frameNStart = frameN;  // exact frame index
      
      number_1.setAutoDraw(true);
    }
    
    
    // if number_1 is active this frame...
    if (number_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('yes.numClicks', yes.numClicks);
    psychoJS.experiment.addData('yes.timesOn', yes.timesOn);
    psychoJS.experiment.addData('yes.timesOff', yes.timesOff);
    psychoJS.experiment.addData('no.numClicks', no.numClicks);
    psychoJS.experiment.addData('no.timesOn', no.timesOn);
    psychoJS.experiment.addData('no.timesOff', no.timesOff);
    psychoJS.experiment.addData('tot.numClicks', tot.numClicks);
    psychoJS.experiment.addData('tot.timesOn', tot.timesOn);
    psychoJS.experiment.addData('tot.timesOff', tot.timesOff);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wordMaxDurationReached;
var maxDurationReached;
var wordMaxDuration;
var wordComponents;
function wordRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'word' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    wordClock.reset();
    routineTimer.reset();
    wordMaxDurationReached = false;
    // update component parameters for each repeat
    otvet.setText('');
    otvet.refresh();
    // reset conti to account for continued clicks & clear times on/off
    conti.reset()
    psychoJS.experiment.addData('word.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((choice != 'yes'));
    maxDurationReached = false
    wordMaxDuration = null
    // keep track of which components have finished
    wordComponents = [];
    wordComponents.push(otvet);
    wordComponents.push(conti);
    wordComponents.push(awnser_2);
    
    wordComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function wordRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'word' ---
    // get current time
    t = wordClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *otvet* updates
    if (t >= 0 && otvet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      otvet.tStart = t;  // (not accounting for frame time here)
      otvet.frameNStart = frameN;  // exact frame index
      
      otvet.setAutoDraw(true);
    }
    
    
    // if otvet is active this frame...
    if (otvet.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *conti* updates
    if (t >= 0 && conti.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conti.tStart = t;  // (not accounting for frame time here)
      conti.frameNStart = frameN;  // exact frame index
      
      conti.setAutoDraw(true);
    }
    
    
    // if conti is active this frame...
    if (conti.status === PsychoJS.Status.STARTED) {
    }
    
    if (conti.status === PsychoJS.Status.STARTED) {
      // check whether conti has been pressed
      if (conti.isClicked) {
        if (!conti.wasClicked) {
          // store time of first click
          conti.timesOn.push(conti.clock.getTime());
          // store time clicked until
          conti.timesOff.push(conti.clock.getTime());
        } else {
          // update time clicked until;
          conti.timesOff[conti.timesOff.length - 1] = conti.clock.getTime();
        }
        if (!conti.wasClicked) {
          // end routine when conti is clicked
          continueRoutine = false;
          console.log("conti");
        }
        // if conti is still clicked next frame, it is not a new click
        conti.wasClicked = true;
      } else {
        // if conti is clicked next frame, it is a new click
        conti.wasClicked = false;
      }
    } else {
      // keep clock at 0 if conti hasn't started / has finished
      conti.clock.reset();
      // if conti is clicked next frame, it is a new click
      conti.wasClicked = false;
    }
    
    // *awnser_2* updates
    if (t >= 0 && awnser_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      awnser_2.tStart = t;  // (not accounting for frame time here)
      awnser_2.frameNStart = frameN;  // exact frame index
      
      awnser_2.setAutoDraw(true);
    }
    
    
    // if awnser_2 is active this frame...
    if (awnser_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    wordComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wordRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'word' ---
    wordComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('word.stopped', globalClock.getTime());
    psychoJS.experiment.addData('otvet.text',otvet.text)
    psychoJS.experiment.addData('conti.numClicks', conti.numClicks);
    psychoJS.experiment.addData('conti.timesOn', conti.timesOn);
    psychoJS.experiment.addData('conti.timesOff', conti.timesOff);
    // the Routine "word" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TOTMaxDurationReached;
var TOTMaxDuration;
var TOTComponents;
function TOTRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TOT' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    TOTClock.reset();
    routineTimer.reset();
    TOTMaxDurationReached = false;
    // update component parameters for each repeat
    qq.setText(Def);
    // Run 'Begin Routine' code from code_4
    Text.alignText = "left";
    
    Q1text.setText('');
    Q1text.refresh();
    Q2text.setText('');
    Q2text.refresh();
    Q3text.setText('');
    Q3text.refresh();
    Q4text.setText('');
    Q4text.refresh();
    vspomnil.setText('');
    vspomnil.refresh();
    // reset conti3 to account for continued clicks & clear times on/off
    conti3.reset()
    psychoJS.experiment.addData('TOT.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((choice != 'tot'));
    maxDurationReached = false
    TOTMaxDuration = null
    // keep track of which components have finished
    TOTComponents = [];
    TOTComponents.push(qq);
    TOTComponents.push(instr_tot);
    TOTComponents.push(Q1);
    TOTComponents.push(Q1text);
    TOTComponents.push(Q2);
    TOTComponents.push(Q2text);
    TOTComponents.push(Q3);
    TOTComponents.push(Q3text);
    TOTComponents.push(Q4);
    TOTComponents.push(Q4text);
    TOTComponents.push(q6);
    TOTComponents.push(vspomnil);
    TOTComponents.push(conti3);
    
    TOTComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function TOTRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TOT' ---
    // get current time
    t = TOTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *qq* updates
    if (t >= 6.9 && qq.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qq.tStart = t;  // (not accounting for frame time here)
      qq.frameNStart = frameN;  // exact frame index
      
      qq.setAutoDraw(true);
    }
    
    
    // if qq is active this frame...
    if (qq.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_tot* updates
    if (t >= 0 && instr_tot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_tot.tStart = t;  // (not accounting for frame time here)
      instr_tot.frameNStart = frameN;  // exact frame index
      
      instr_tot.setAutoDraw(true);
    }
    
    
    // if instr_tot is active this frame...
    if (instr_tot.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 6.9 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (instr_tot.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      instr_tot.tStop = t;  // not accounting for scr refresh
      instr_tot.frameNStop = frameN;  // exact frame index
      // update status
      instr_tot.status = PsychoJS.Status.FINISHED;
      instr_tot.setAutoDraw(false);
    }
    
    
    // *Q1* updates
    if (t >= 6.9 && Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1.tStart = t;  // (not accounting for frame time here)
      Q1.frameNStart = frameN;  // exact frame index
      
      Q1.setAutoDraw(true);
    }
    
    
    // if Q1 is active this frame...
    if (Q1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q1text* updates
    if (t >= 6.9 && Q1text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1text.tStart = t;  // (not accounting for frame time here)
      Q1text.frameNStart = frameN;  // exact frame index
      
      Q1text.setAutoDraw(true);
    }
    
    
    // if Q1text is active this frame...
    if (Q1text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q2* updates
    if (t >= 6.9 && Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2.tStart = t;  // (not accounting for frame time here)
      Q2.frameNStart = frameN;  // exact frame index
      
      Q2.setAutoDraw(true);
    }
    
    
    // if Q2 is active this frame...
    if (Q2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q2text* updates
    if (t >= 6.9 && Q2text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2text.tStart = t;  // (not accounting for frame time here)
      Q2text.frameNStart = frameN;  // exact frame index
      
      Q2text.setAutoDraw(true);
    }
    
    
    // if Q2text is active this frame...
    if (Q2text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q3* updates
    if (t >= 6.9 && Q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3.tStart = t;  // (not accounting for frame time here)
      Q3.frameNStart = frameN;  // exact frame index
      
      Q3.setAutoDraw(true);
    }
    
    
    // if Q3 is active this frame...
    if (Q3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q3text* updates
    if (t >= 6.9 && Q3text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3text.tStart = t;  // (not accounting for frame time here)
      Q3text.frameNStart = frameN;  // exact frame index
      
      Q3text.setAutoDraw(true);
    }
    
    
    // if Q3text is active this frame...
    if (Q3text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q4* updates
    if (t >= 6.9 && Q4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4.tStart = t;  // (not accounting for frame time here)
      Q4.frameNStart = frameN;  // exact frame index
      
      Q4.setAutoDraw(true);
    }
    
    
    // if Q4 is active this frame...
    if (Q4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q4text* updates
    if (t >= 6.9 && Q4text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4text.tStart = t;  // (not accounting for frame time here)
      Q4text.frameNStart = frameN;  // exact frame index
      
      Q4text.setAutoDraw(true);
    }
    
    
    // if Q4text is active this frame...
    if (Q4text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *q6* updates
    if (t >= 6.9 && q6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q6.tStart = t;  // (not accounting for frame time here)
      q6.frameNStart = frameN;  // exact frame index
      
      q6.setAutoDraw(true);
    }
    
    
    // if q6 is active this frame...
    if (q6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *vspomnil* updates
    if (t >= 6.9 && vspomnil.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vspomnil.tStart = t;  // (not accounting for frame time here)
      vspomnil.frameNStart = frameN;  // exact frame index
      
      vspomnil.setAutoDraw(true);
    }
    
    
    // if vspomnil is active this frame...
    if (vspomnil.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *conti3* updates
    if (t >= 6.9 && conti3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conti3.tStart = t;  // (not accounting for frame time here)
      conti3.frameNStart = frameN;  // exact frame index
      
      conti3.setAutoDraw(true);
    }
    
    
    // if conti3 is active this frame...
    if (conti3.status === PsychoJS.Status.STARTED) {
    }
    
    if (conti3.status === PsychoJS.Status.STARTED) {
      // check whether conti3 has been pressed
      if (conti3.isClicked) {
        if (!conti3.wasClicked) {
          // store time of first click
          conti3.timesOn.push(conti3.clock.getTime());
          // store time clicked until
          conti3.timesOff.push(conti3.clock.getTime());
        } else {
          // update time clicked until;
          conti3.timesOff[conti3.timesOff.length - 1] = conti3.clock.getTime();
        }
        if (!conti3.wasClicked) {
          // end routine when conti3 is clicked
          continueRoutine = false;
          console.log("conti3");
        }
        // if conti3 is still clicked next frame, it is not a new click
        conti3.wasClicked = true;
      } else {
        // if conti3 is clicked next frame, it is a new click
        conti3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if conti3 hasn't started / has finished
      conti3.clock.reset();
      // if conti3 is clicked next frame, it is a new click
      conti3.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TOTComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TOTRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TOT' ---
    TOTComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('TOT.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Q1text.text',Q1text.text)
    psychoJS.experiment.addData('Q2text.text',Q2text.text)
    psychoJS.experiment.addData('Q3text.text',Q3text.text)
    psychoJS.experiment.addData('Q4text.text',Q4text.text)
    psychoJS.experiment.addData('vspomnil.text',vspomnil.text)
    psychoJS.experiment.addData('conti3.numClicks', conti3.numClicks);
    psychoJS.experiment.addData('conti3.timesOn', conti3.timesOn);
    psychoJS.experiment.addData('conti3.timesOff', conti3.timesOff);
    // the Routine "TOT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var word_awnserMaxDurationReached;
var word_awnserMaxDuration;
var word_awnserComponents;
function word_awnserRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'word_awnser' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    word_awnserClock.reset();
    routineTimer.reset();
    word_awnserMaxDurationReached = false;
    // update component parameters for each repeat
    awnser.setText('ЗАГАДАННОЕ СЛОВО:');
    text_awnser_2.setText(WordS);
    // reset conti2 to account for continued clicks & clear times on/off
    conti2.reset()
    psychoJS.experiment.addData('word_awnser.started', globalClock.getTime());
    word_awnserMaxDuration = null
    // keep track of which components have finished
    word_awnserComponents = [];
    word_awnserComponents.push(awnser);
    word_awnserComponents.push(text_awnser_2);
    word_awnserComponents.push(conti2);
    
    word_awnserComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function word_awnserRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'word_awnser' ---
    // get current time
    t = word_awnserClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *awnser* updates
    if (t >= 0 && awnser.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      awnser.tStart = t;  // (not accounting for frame time here)
      awnser.frameNStart = frameN;  // exact frame index
      
      awnser.setAutoDraw(true);
    }
    
    
    // if awnser is active this frame...
    if (awnser.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_awnser_2* updates
    if (t >= 0 && text_awnser_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_awnser_2.tStart = t;  // (not accounting for frame time here)
      text_awnser_2.frameNStart = frameN;  // exact frame index
      
      text_awnser_2.setAutoDraw(true);
    }
    
    
    // if text_awnser_2 is active this frame...
    if (text_awnser_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *conti2* updates
    if (t >= 0 && conti2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conti2.tStart = t;  // (not accounting for frame time here)
      conti2.frameNStart = frameN;  // exact frame index
      
      conti2.setAutoDraw(true);
    }
    
    
    // if conti2 is active this frame...
    if (conti2.status === PsychoJS.Status.STARTED) {
    }
    
    if (conti2.status === PsychoJS.Status.STARTED) {
      // check whether conti2 has been pressed
      if (conti2.isClicked) {
        if (!conti2.wasClicked) {
          // store time of first click
          conti2.timesOn.push(conti2.clock.getTime());
          // store time clicked until
          conti2.timesOff.push(conti2.clock.getTime());
        } else {
          // update time clicked until;
          conti2.timesOff[conti2.timesOff.length - 1] = conti2.clock.getTime();
        }
        if (!conti2.wasClicked) {
          // end routine when conti2 is clicked
          continueRoutine = false;
          console.log("conti2");
        }
        // if conti2 is still clicked next frame, it is not a new click
        conti2.wasClicked = true;
      } else {
        // if conti2 is clicked next frame, it is a new click
        conti2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if conti2 hasn't started / has finished
      conti2.clock.reset();
      // if conti2 is clicked next frame, it is a new click
      conti2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    word_awnserComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function word_awnserRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'word_awnser' ---
    word_awnserComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('word_awnser.stopped', globalClock.getTime());
    psychoJS.experiment.addData('conti2.numClicks', conti2.numClicks);
    psychoJS.experiment.addData('conti2.timesOn', conti2.timesOn);
    psychoJS.experiment.addData('conti2.timesOff', conti2.timesOff);
    // the Routine "word_awnser" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' +
    psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(databObj[0])].concat(databObj).map(it => {
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    },
    body: JSON.stringify({
    experimentID: 'l7ui8ThWc0QW', // * обновить, указав experiment ID из DATAPIPE на шаге 4.3 *
    filename: filename,
    data: data,
    }),
    }).then(response => response.json()).then(data => {
    // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    
    
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_end);
    EndComponents.push(image);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    
    // if text_end is active this frame...
    if (text_end.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
