/************************ 
 * Products_Online v2    *
 * - Random image version per product per block
 * - Each product×version is rated with each question exactly once
 * - One memory catch question per block
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

let expName = 'products_online';
let expInfo = {
    'prolific_ID': '',
    'age': '',,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

const psychoJS = new PsychoJS({ debug: true });

psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});

psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(
  function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },
  flowScheduler, dialogCancelScheduler
);

flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(setOrderRoutineBegin());
flowScheduler.add(setOrderRoutineEachFrame());
flowScheduler.add(setOrderRoutineEnd());
const main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_loopLoopBegin(main_loopLoopScheduler));
flowScheduler.add(main_loopLoopScheduler);
flowScheduler.add(main_loopLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'image_table.csv', 'path': 'image_table.csv'},
    {'name': 'taste&health/Belvita_original.png',          'path': 'taste&health/Belvita_original.png'},
    {'name': 'taste&health/Belvita_taste.png',             'path': 'taste&health/Belvita_taste.png'},
    {'name': 'taste&health/Belvita_health.png',            'path': 'taste&health/Belvita_health.png'},
    {'name': 'taste&health/Chips_Ahoy!_original.png',      'path': 'taste&health/Chips_Ahoy!_original.png'},
    {'name': 'taste&health/Chips_Ahoy!_taste.png',         'path': 'taste&health/Chips_Ahoy!_taste.png'},
    {'name': 'taste&health/Chips_Ahoy!_health.png',        'path': 'taste&health/Chips_Ahoy!_health.png'},
    {'name': 'taste&health/Goldfish_original.png',         'path': 'taste&health/Goldfish_original.png'},
    {'name': 'taste&health/Goldfish_taste.png',            'path': 'taste&health/Goldfish_taste.png'},
    {'name': 'taste&health/Goldfish_health.png',           'path': 'taste&health/Goldfish_health.png'},
    {'name': 'taste&health/KIND_original.png',             'path': 'taste&health/KIND_original.png'},
    {'name': 'taste&health/KIND_taste.png',                'path': 'taste&health/KIND_taste.png'},
    {'name': 'taste&health/KIND_health.png',               'path': 'taste&health/KIND_health.png'},
    {'name': 'taste&health/Lindt_original.png',            'path': 'taste&health/Lindt_original.png'},
    {'name': 'taste&health/Lindt_taste.png',               'path': 'taste&health/Lindt_taste.png'},
    {'name': 'taste&health/Lindt_health.png',              'path': 'taste&health/Lindt_health.png'},
    {'name': 'taste&health/Lipton_Tea_original.png',       'path': 'taste&health/Lipton_Tea_original.png'},
    {'name': 'taste&health/Lipton_Tea_taste.png',          'path': 'taste&health/Lipton_Tea_taste.png'},
    {'name': 'taste&health/Lipton_Tea_health.png',         'path': 'taste&health/Lipton_Tea_health.png'},
    {'name': 'taste&health/Nature_Valley_original.png',    'path': 'taste&health/Nature_Valley_original.png'},
    {'name': 'taste&health/Nature_Valley_taste.png',       'path': 'taste&health/Nature_Valley_taste.png'},
    {'name': 'taste&health/Nature_Valley_health.png',      'path': 'taste&health/Nature_Valley_health.png'},
    {'name': 'taste&health/PLANTERS_Cashews_original.png', 'path': 'taste&health/PLANTERS_Cashews_original.png'},
    {'name': 'taste&health/PLANTERS_Cashews_taste.png',    'path': 'taste&health/PLANTERS_Cashews_taste.png'},
    {'name': 'taste&health/PLANTERS_Cashews_health.png',   'path': 'taste&health/PLANTERS_Cashews_health.png'},
    {'name': 'taste&health/Pocky_original.png',            'path': 'taste&health/Pocky_original.png'},
    {'name': 'taste&health/Pocky_taste.png',               'path': 'taste&health/Pocky_taste.png'},
    {'name': 'taste&health/Pocky_health.png',              'path': 'taste&health/Pocky_health.png'},
    {'name': 'taste&health/Pringles_original.png',         'path': 'taste&health/Pringles_original.png'},
    {'name': 'taste&health/Pringles_taste.png',            'path': 'taste&health/Pringles_taste.png'},
    {'name': 'taste&health/Pringles_health.png',           'path': 'taste&health/Pringles_health.png'},
    {'name': 'taste&health/RitterSport_original.png',      'path': 'taste&health/RitterSport_original.png'},
    {'name': 'taste&health/RitterSport_taste.png',         'path': 'taste&health/RitterSport_taste.png'},
    {'name': 'taste&health/RitterSport_health.png',        'path': 'taste&health/RitterSport_health.png'},
    {'name': 'taste&health/TERRA_chips_original.png',      'path': 'taste&health/TERRA_chips_original.png'},
    {'name': 'taste&health/TERRA_chips_taste.png',         'path': 'taste&health/TERRA_chips_taste.png'},
    {'name': 'taste&health/TERRA_chips_health.png',        'path': 'taste&health/TERRA_chips_health.png'},
    {'name': 'taste&health/Twix_original.png',             'path': 'taste&health/Twix_original.png'},
    {'name': 'taste&health/Twix_taste.png',                'path': 'taste&health/Twix_taste.png'},
    {'name': 'taste&health/Twix_health.png',               'path': 'taste&health/Twix_health.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0;
  util.addInfoFromUrl(expInfo);
  if (!expInfo['prolific_ID'] || !expInfo['age']) {
    psychoJS.quit({ message: 'Please enter participant ID and age before continuing.', isCompleted: false });
    return Scheduler.Event.QUIT;
  }
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["prolific_ID"]}/${expInfo["prolific_ID"]}_${expName}_${expInfo["date"].split("_")[0]}`);
  psychoJS.experiment.field_separator = '\t';
  return Scheduler.Event.NEXT;
}

// ─── shared visual / state variables ────────────────────────────────────────
var WelcomeClock, text_welcome, key_resp;
var instructionsClock, text_instructions, key_resp_instructions;
var setOrderClock;
var fixationClock, text_fixation;
var ratingTrialClock;
var TTIME_LIMIT, all_questions, SLIDER_MIN, SLIDER_MAX, SLIDER_WIDTH, SLIDER_Y;
var questionClock, delayClock;
var waiting_next_question, timeout_warning, click_ready, question_index, current_x;
var delay_duration, normal_delay, warning_delay;
var productImage, questionText, ratingValueText;
var sliderLine, sliderMarker, sliderTicks, sliderCover, ratingMouse;
var leftAnchor, rightAnchor, warningText;
var memoryTrialClock;
var all_products;
var memoryQuestion, opt1Text, opt2Text, opt3Text, memoryKey;
var thanksClock, endText, endKey;
var globalClock, routineTimer;
var blockIntroClock, blockIntroText, blockIntroKey, lastSeenBlockNum;
var selected_trials, block_plan, show_memory, memory_correct_product, memory_options;
var blockIntroMaxDurationReached, _blockIntroKey_allKeys, blockIntroMaxDuration, blockIntroComponents;
var memoryTrialMaxDurationReached, _memoryKey_allKeys, memoryTrialMaxDuration, memoryTrialComponents;
var memoryQuestionClock, memoryDelayClock;
var memoryWaitingNext, memoryTimeoutWarning, memoryNormalDelay, memoryWarningDelay, memoryWarningText;
var rowsForUpload = [];
var DATAPIPE_EXPERIMENT_ID = "WxmPsuMHvMeP";
var questions_list, trial_ratings, trial_rts, trial_init, gotValidClick;
var ratingTrialMaxDuration, ratingTrialComponents;
var current_val, prevButtonState, _mouseButtons, _mouseXYs;

async function experimentInit() {
  // ── Welcome ──────────────────────────────────────────────────────────────
  WelcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window, name: 'text_welcome',
    text: 'Welcome!\nThis is a decision-making experiment\nPress SPACE to start',
    font: 'Arial', pos: [0, 0], draggable: false, height: 0.05,
    languageStyle: 'LTR', color: new util.Color('white'), depth: 0.0
  });
  key_resp = new core.Keyboard({ psychoJS, clock: new util.Clock(), waitForStart: true });

  // ── Instructions ─────────────────────────────────────────────────────────
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window, name: 'text_instructions',
    text: 'INSTRUCTIONS:\nYou will complete various blocks.\n\nIn each block, you will answer only ONE type of question:\n \n\nBefore each block, you will see which question to answer.\n\nRate each product from 0 (not at all) to 7 (very much).\nUse the mouse to move the slider and click to confirm.\nYou will have 8 seconds for each product.\n\nPress SPACE to begin the experiment',
    font: 'Arial', pos: [0, 0], draggable: false, height: 0.035, wrapWidth: 1.3,
    languageStyle: 'LTR', color: new util.Color('white'), depth: 0.0
  });
  key_resp_instructions = new core.Keyboard({ psychoJS, clock: new util.Clock(), waitForStart: true });

  // ── setOrder ─────────────────────────────────────────────────────────────
  setOrderClock = new util.Clock();

  // ── Block Intro ──────────────────────────────────────────────────────────
  blockIntroClock = new util.Clock();
  blockIntroText = new visual.TextStim({
    win: psychoJS.window, name: 'blockIntroText', text: '',
    font: 'Arial', pos: [0, 0], draggable: false, height: 0.038, wrapWidth: 2.0,
    languageStyle: 'LTR', color: new util.Color('white'), depth: 0.0
  });
  blockIntroKey = new core.Keyboard({ psychoJS, clock: new util.Clock(), waitForStart: true });
  lastSeenBlockNum = -1;

  // ── Fixation ─────────────────────────────────────────────────────────────
  fixationClock = new util.Clock();
  text_fixation = new visual.TextStim({
    win: psychoJS.window, name: 'text_fixation', text: '+',
    font: 'Arial', pos: [0, 0], draggable: false, height: 0.07,
    languageStyle: 'LTR', color: new util.Color('white'), depth: 0.0
  });

  // ── Rating trial ─────────────────────────────────────────────────────────
  ratingTrialClock = new util.Clock();
  TTIME_LIMIT = 8;
  all_questions = [
    ["liking", "How much do you LIKE the product?"],
    ["taste",  "How TASTY do you think the product is?"],
    ["health", "How HEALTHY do you think the product is?"]
  ];
  SLIDER_MIN = 0; SLIDER_MAX = 7; SLIDER_WIDTH = 0.72; SLIDER_Y = -0.33;
  questionClock = new util.Clock();
  delayClock    = new util.Clock();
  waiting_next_question = false; timeout_warning = false; click_ready = false;
  question_index = 0; current_x = 0;
  delay_duration = 0.5; normal_delay = 0.5; warning_delay = 1.5;

  productImage = new visual.ImageStim({
    win: psychoJS.window, name: 'productImage',
    image: 'default.png', mask: undefined, anchor: 'center',
    ori: 0.0, pos: [0, 0.14], draggable: false, size: [0.6, 0.6],
    color: new util.Color([1,1,1]), flipHoriz: false, flipVert: false,
    texRes: 128.0, interpolate: true, depth: -1.0
  });
  questionText = new visual.TextStim({
    win: psychoJS.window, name: 'questionText', text: 'placeholder',
    font: 'Arial', pos: [0, -0.22], draggable: false, height: 0.035,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -2.0
  });
  ratingValueText = new visual.TextStim({
    win: psychoJS.window, name: 'ratingValueText', text: 'Rating:',
    font: 'Arial', pos: [0, -0.26], draggable: false, height: 0.028,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -3.0
  });
  sliderLine = new visual.Rect({
    win: psychoJS.window, name: 'sliderLine',
    width: 0.72, height: 0.006, ori: 0.0, pos: [0, -0.33],
    draggable: false, anchor: 'center', lineWidth: 0,
    lineColor: new util.Color('white'), fillColor: new util.Color('white'),
    colorSpace: 'rgb', opacity: 1.0, depth: -4, interpolate: true,
  });
  sliderMarker = new visual.Polygon({
    win: psychoJS.window, name: 'sliderMarker', edges: 64,
    size: [0.02, 0.02], ori: 0.0, pos: [0, -0.33], draggable: false, anchor: 'center',
    lineWidth: 1.0, lineColor: new util.Color('white'), fillColor: new util.Color('white'),
    colorSpace: 'rgb', opacity: 1.0, depth: -3.5, interpolate: true,
  });
  sliderTicks = [];
  for (let i = 0; i <= 7; i++) {
    let xPos = -0.36 + (i / 7) * 0.72;
    sliderTicks.push(new visual.TextStim({
      win: psychoJS.window, name: `sliderTick_${i}`, text: String(i),
      font: 'Arial', pos: [xPos, -0.38], draggable: false, height: 0.025,
      languageStyle: 'LTR', color: new util.Color('white'), opacity: 1.0, depth: -4.2
    }));
  }
  sliderCover = new visual.Rect({
    win: psychoJS.window, name: 'sliderCover',
    width: 0.8, height: 0.18, ori: 0.0, pos: [0, -0.36], draggable: false, anchor: 'center',
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color([-1.0, -1.0, -1.0]), colorSpace: 'rgb', depth: -5, interpolate: true,
  });
  ratingMouse = new core.Mouse({ win: psychoJS.window });
  ratingMouse.mouseClock = new util.Clock();
  leftAnchor = new visual.TextStim({
    win: psychoJS.window, name: 'leftAnchor', text: 'Not at all',
    font: 'Arial', pos: [-0.35, -0.44], draggable: false, height: 0.022,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -7.0
  });
  rightAnchor = new visual.TextStim({
    win: psychoJS.window, name: 'rightAnchor', text: 'Very much',
    font: 'Arial', pos: [0.35, -0.44], draggable: false, height: 0.022,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -8.0
  });
  warningText = new visual.TextStim({
    win: psychoJS.window, name: 'warningText', text: 'Please answer before 8 seconds',
    font: 'Arial', pos: [0, 0], draggable: false, height: 0.05,
    languageStyle: 'LTR', color: new util.Color('red'), depth: -9.0
  });

  // ── Memory trial ─────────────────────────────────────────────────────────
  memoryTrialClock = new util.Clock();
  all_products = [
    "Belvita","Chips_Ahoy!","Goldfish","KIND","Lindt","Lipton_Tea",
    "Nature_Valley","PLANTERS_Cashews","Pocky","Pringles","RitterSport","TERRA_chips","Twix"
  ];
  memoryQuestion = new visual.TextStim({
    win: psychoJS.window, name: 'memoryQuestion',
    text: 'Which product was shown in the previous trial?\n\nUse keys 1, 2, or 3 to respond',
    font: 'Arial', pos: [0, 0.2], draggable: false, height: 0.05,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -1.0
  });
  opt1Text = new visual.TextStim({
    win: psychoJS.window, name: 'opt1Text', text: '1',
    font: 'Arial', pos: [0, 0.05], draggable: false, height: 0.035, wrapWidth: 1.0,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -2.0
  });
  opt2Text = new visual.TextStim({
    win: psychoJS.window, name: 'opt2Text', text: '2',
    font: 'Arial', pos: [0, -0.05], draggable: false, height: 0.035, wrapWidth: 1.0,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -3.0
  });
  opt3Text = new visual.TextStim({
    win: psychoJS.window, name: 'opt3Text', text: '3',
    font: 'Arial', pos: [0, -0.15], draggable: false, height: 0.035, wrapWidth: 1.0,
    languageStyle: 'LTR', color: new util.Color('white'), depth: -4.0
  });
  memoryKey = new core.Keyboard({ psychoJS, clock: new util.Clock(), waitForStart: true });
  memoryQuestionClock = new util.Clock();
  memoryDelayClock    = new util.Clock();
  memoryWaitingNext = false; memoryTimeoutWarning = false;
  memoryNormalDelay = 0.5;  memoryWarningDelay  = 1.5;
  memoryWarningText = new visual.TextStim({
    win: psychoJS.window, name: 'memoryWarningText', text: 'Please answer before 8 seconds',
    font: 'Arial', pos: [0, -0.28], draggable: false, height: 0.04,
    languageStyle: 'LTR', color: new util.Color('red'), opacity: 0.0, depth: -5.0
  });

  // ── Thanks ───────────────────────────────────────────────────────────────
  thanksClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window, name: 'endText', text: 'Thank you!\nPress SPACE to exit.',
    font: 'Arial', pos: [0, 0], draggable: false, height: 0.05,
    languageStyle: 'LTR', color: new util.Color('white'), depth: 0.0
  });
  endKey = new core.Keyboard({ psychoJS, clock: new util.Clock(), waitForStart: true });

  globalClock   = new util.Clock();
  routineTimer  = new util.CountdownTimer();
  return Scheduler.Event.NEXT;
}

// ═══════════════════════════════════════════════════════════════════════════
//  HELPER UTILITIES
// ═══════════════════════════════════════════════════════════════════════════
function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ═══════════════════════════════════════════════════════════════════════════
//  WELCOME
// ═══════════════════════════════════════════════════════════════════════════
var t, frameN, continueRoutine, routineForceEnded;
var WelcomeMaxDurationReached, _key_resp_allKeys, WelcomeMaxDuration, WelcomeComponents;

function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    WelcomeClock.reset(); routineTimer.reset(); WelcomeMaxDurationReached = false;
    key_resp.keys = undefined; key_resp.rt = undefined; _key_resp_allKeys = [];
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    WelcomeMaxDuration = null;
    WelcomeComponents = [text_welcome, key_resp];
    for (const c of WelcomeComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}
function WelcomeRoutineEachFrame() {
  return async function () {
    t = WelcomeClock.getTime(); frameN++;
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      text_welcome.tStart = t; text_welcome.frameNStart = frameN; text_welcome.setAutoDraw(true);
    }
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      key_resp.tStart = t; key_resp.frameNStart = frameN;
      psychoJS.window.callOnFlip(() => { key_resp.clock.reset(); key_resp.start(); key_resp.clearEvents(); });
    }
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({ keyList: ['space'], waitRelease: false });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;
        key_resp.rt   = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        continueRoutine = false;
      }
    }
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of WelcomeComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}
function WelcomeRoutineEnd(snapshot) {
  return async function () {
    for (const c of WelcomeComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt); routineTimer.reset();
    }
    key_resp.stop(); routineTimer.reset();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  INSTRUCTIONS
// ═══════════════════════════════════════════════════════════════════════════
var instructionsMaxDurationReached, _key_resp_instructions_allKeys, instructionsMaxDuration, instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    instructionsClock.reset(); routineTimer.reset(); instructionsMaxDurationReached = false;
    key_resp_instructions.keys = undefined; key_resp_instructions.rt = undefined; _key_resp_instructions_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null;
    instructionsComponents = [text_instructions, key_resp_instructions];
    for (const c of instructionsComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}
function instructionsRoutineEachFrame() {
  return async function () {
    t = instructionsClock.getTime(); frameN++;
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      text_instructions.tStart = t; text_instructions.frameNStart = frameN; text_instructions.setAutoDraw(true);
    }
    if (t >= 0.0 && key_resp_instructions.status === PsychoJS.Status.NOT_STARTED) {
      key_resp_instructions.tStart = t; key_resp_instructions.frameNStart = frameN;
      psychoJS.window.callOnFlip(() => { key_resp_instructions.clock.reset(); key_resp_instructions.start(); key_resp_instructions.clearEvents(); });
    }
    if (key_resp_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instructions.getKeys({ keyList: ['space'], waitRelease: false });
      _key_resp_instructions_allKeys = _key_resp_instructions_allKeys.concat(theseKeys);
      if (_key_resp_instructions_allKeys.length > 0) {
        key_resp_instructions.keys = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].name;
        continueRoutine = false;
      }
    }
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of instructionsComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}
function instructionsRoutineEnd(snapshot) {
  return async function () {
    for (const c of instructionsComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    key_resp_instructions.stop(); routineTimer.reset();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  SET ORDER  ← core counterbalancing logic lives here
// ═══════════════════════════════════════════════════════════════════════════
/*
  Design
  ──────
  Products:  13 (Belvita, Chips_Ahoy!, …, Twix)
  Versions:  3  (original, taste, health)
  Questions: 3  (liking, taste, health)
  Blocks:    9  (3 questions × 3 repetitions)

  Constraint: over the full experiment every (product × version) cell is
  rated with every question exactly once.

  Implementation
  ──────────────
  1.  For each product, randomly generate a 3×3 Latin-square that maps
      question → version.  Concretely: generate a random permutation of
      [0,1,2] for each question type (so the same version is never repeated
      for a given question across blocks).

  2.  9 blocks are arranged as 3 "rounds" × 3 question-types.
      - Round r (0-indexed), question q → use version assignment[q][r]
      - Within each block, the 13 products are shuffled.

  3.  Within each block, one trial is randomly selected as the memory-catch
      position (never the very first trial of the block to avoid it firing
      right after the intro).

  Trial object fields (compatible with the rest of the routines):
    product_id, image_path, block_num (1-9), block_question,
    block_image_version, is_last_trial_in_block, is_memory_trial_position
*/
var setOrderMaxDurationReached, setOrderMaxDuration, setOrderComponents;

function setOrderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = false; routineForceEnded = false;
    setOrderClock.reset(); routineTimer.reset(); setOrderMaxDurationReached = false;

    const VERSIONS   = ["original", "taste", "health"];
    const QUESTIONS  = ["liking", "taste", "health"];
    const BASE_PATH  = "taste&health/";

    // Per-product Latin square: for each question, which version to use in rounds 0,1,2
    // We build a 3×3 matrix where rows = questions, cols = rounds,
    // and every column is a permutation of VERSIONS.
    // Strategy: generate one random permutation of versions for round 0,
    //   rotate +1 for round 1, +2 for round 2 → guarantees no question
    //   repeats the same version AND each version appears once per question.
    function makeProductAssignment() {
      // assignment[question_idx][round_idx] = version_idx
      // Start with a random column-0, then derive columns 1 and 2 by rotation.
      let col0 = shuffleArray([0, 1, 2]);           // random permutation for round 0
      let assignment = QUESTIONS.map((_, qi) => [
        col0[qi],
        (col0[qi] + 1) % 3,
        (col0[qi] + 2) % 3
      ]);
      return assignment;  // [3][3]
    }

    // Build per-product assignment maps
    // productAssignments[product] = 3×3 matrix (see above)
    let productAssignments = {};
    for (const prod of all_products) {
      productAssignments[prod] = makeProductAssignment();
    }

    // Build 9 blocks: round 0..2 × question 0..2
    selected_trials = [];
    block_plan = [];
    let global_block_num = 1;

    // Pick 9 of the 13 products at random (without replacement) as memory targets,
    // one per block.  The remaining 4 products never serve as targets this session.
    let memory_target_pool = shuffleArray([...all_products]).slice(0, 9);
    // memory_target_pool[block_index] = the product that is the catch target for that block
    let memory_target_by_block = {};   // filled as we assign block numbers below

    // First pass: build the ordered list of 9 blocks so we can assign targets
    let ordered_blocks = [];
    for (let round = 0; round < 3; round++) {
      let round_blocks = QUESTIONS.map((q, qi) => ({
        block_question: q,
        round: round,
        question_idx: qi
      }));
      round_blocks = shuffleArray(round_blocks);
      for (const b of round_blocks) ordered_blocks.push(b);
    }
    // Assign block numbers and memory targets
    for (let bi = 0; bi < ordered_blocks.length; bi++) {
      ordered_blocks[bi].block_num = bi + 1;
      ordered_blocks[bi].memory_target = memory_target_pool[bi];
      memory_target_by_block[bi + 1] = memory_target_pool[bi];
      block_plan.push(ordered_blocks[bi]);
    }

    // Second pass: build trials
    for (const block of ordered_blocks) {
      global_block_num = block.block_num;
      let memory_target = block.memory_target;

      // Shuffle products for this block
      let shuffled_products = shuffleArray(all_products);

      // Find index of the memory target product in the shuffled list.
      // The catch cannot be at index 0 (too close to block intro).
      // If the target landed at index 0, swap it with a random later position.
      let target_idx = shuffled_products.indexOf(memory_target);
      if (target_idx === 0) {
        let swap_with = 1 + Math.floor(Math.random() * (shuffled_products.length - 1));
        [shuffled_products[0], shuffled_products[swap_with]] = [shuffled_products[swap_with], shuffled_products[0]];
        target_idx = swap_with;
      }

      for (let pi = 0; pi < shuffled_products.length; pi++) {
        let prod = shuffled_products[pi];
        let version_idx = productAssignments[prod][block.question_idx][block.round];
        let version_name = VERSIONS[version_idx];
        let img_path = `${BASE_PATH}${prod}_${version_name}.png`;

        selected_trials.push({
          product_id:               prod,
          image_path:               img_path,
          block_image_version:      version_name,
          block_num:                block.block_num,
          block_question:           block.block_question,
          round:                    block.round,
          is_last_trial_in_block:   (pi === shuffled_products.length - 1) ? 1 : 0,
          // catch fires on the trial that shows the designated memory target product
          is_memory_trial_position: (pi === target_idx) ? 1 : 0,
          memory_target_product:    memory_target   // stored for every trial in the block for reference
        });
      }
    }

    psychoJS.experiment.addData('block_plan', JSON.stringify(block_plan));
    psychoJS.experiment.addData('setOrder.started', globalClock.getTime());
    setOrderMaxDuration = null;
    setOrderComponents = [];
    return Scheduler.Event.NEXT;
  };
}

function setOrderRoutineEachFrame() {
  return async function () {
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    return Scheduler.Event.NEXT;
  };
}
function setOrderRoutineEnd(snapshot) {
  return async function () {
    psychoJS.experiment.addData('setOrder.stopped', globalClock.getTime());
    routineTimer.reset();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  BLOCK INTRO
// ═══════════════════════════════════════════════════════════════════════════
function blockIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    blockIntroClock.reset(); routineTimer.reset(); blockIntroMaxDurationReached = false;

    // Safety net
    const _bi = snapshot.getCurrentTrial ? snapshot.getCurrentTrial() : {};
    if (typeof block_num === 'undefined' || block_num === null) block_num = _bi.block_num || 0;
    if (typeof block_question === 'undefined' || block_question === null) block_question = _bi.block_question || '';

    let showBlockIntro = (block_num !== lastSeenBlockNum);
    if (!showBlockIntro) {
      continueRoutine = false;
    } else {
      lastSeenBlockNum = block_num;
      let introText = "";
      if (block_question === "liking")
        introText = "Next block: How much do you LIKE each product?\n\nPress SPACE to begin.";
      else if (block_question === "taste")
        introText = "Next block: How TASTY do you think each product is?\n\nPress SPACE to begin.";
      else if (block_question === "health")
        introText = "Next block: How HEALTHY do you think each product is?\n\nPress SPACE to begin.";
      blockIntroText.setText(introText);
      blockIntroKey.keys = undefined; blockIntroKey.rt = undefined; _blockIntroKey_allKeys = [];
    }

    psychoJS.experiment.addData('blockIntro.started', globalClock.getTime());
    blockIntroMaxDuration = null;
    blockIntroComponents = [blockIntroText, blockIntroKey];
    for (const c of blockIntroComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}
function blockIntroRoutineEachFrame() {
  return async function () {
    t = blockIntroClock.getTime(); frameN++;
    if (t >= 0.0 && blockIntroText.status === PsychoJS.Status.NOT_STARTED) {
      blockIntroText.tStart = t; blockIntroText.frameNStart = frameN; blockIntroText.setAutoDraw(true);
    }
    if (t >= 0.0 && blockIntroKey.status === PsychoJS.Status.NOT_STARTED) {
      blockIntroKey.tStart = t; blockIntroKey.frameNStart = frameN;
      psychoJS.window.callOnFlip(() => { blockIntroKey.clock.reset(); blockIntroKey.start(); blockIntroKey.clearEvents(); });
    }
    if (blockIntroKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = blockIntroKey.getKeys({ keyList: ['space'], waitRelease: false });
      _blockIntroKey_allKeys = _blockIntroKey_allKeys.concat(theseKeys);
      if (_blockIntroKey_allKeys.length > 0) {
        blockIntroKey.keys = _blockIntroKey_allKeys[_blockIntroKey_allKeys.length - 1].name;
        continueRoutine = false;
      }
    }
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of blockIntroComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}
function blockIntroRoutineEnd(snapshot) {
  return async function () {
    for (const c of blockIntroComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    psychoJS.experiment.addData('blockIntro.stopped', globalClock.getTime());
    if (typeof blockIntroKey !== 'undefined') blockIntroKey.stop();
    routineTimer.reset();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN LOOP
// ═══════════════════════════════════════════════════════════════════════════
var main_loop;
function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    main_loop = new TrialHandler({
      psychoJS, nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: selected_trials, seed: undefined, name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop);
    currentLoop = main_loop;
    for (const thisMain_loop of main_loop) {
      // Capture snapshot in block-scoped const to avoid closure-over-loop-variable bug
      const trialSnapshot = main_loop.getSnapshot();
      main_loopLoopScheduler.add(importConditions(trialSnapshot));
      main_loopLoopScheduler.add(blockIntroRoutineBegin(trialSnapshot));
      main_loopLoopScheduler.add(blockIntroRoutineEachFrame());
      main_loopLoopScheduler.add(blockIntroRoutineEnd(trialSnapshot));
      main_loopLoopScheduler.add(fixationRoutineBegin(trialSnapshot));
      main_loopLoopScheduler.add(fixationRoutineEachFrame());
      main_loopLoopScheduler.add(fixationRoutineEnd(trialSnapshot));
      main_loopLoopScheduler.add(ratingTrialRoutineBegin(trialSnapshot));
      main_loopLoopScheduler.add(ratingTrialRoutineEachFrame());
      main_loopLoopScheduler.add(ratingTrialRoutineEnd(trialSnapshot));
      main_loopLoopScheduler.add(memoryTrialRoutineBegin(trialSnapshot));
      main_loopLoopScheduler.add(memoryTrialRoutineEachFrame());
      main_loopLoopScheduler.add(memoryTrialRoutineEnd(trialSnapshot));
      main_loopLoopScheduler.add(main_loopLoopEndIteration(main_loopLoopScheduler, trialSnapshot));
    }
    return Scheduler.Event.NEXT;
  };
}
async function main_loopLoopEnd() {
  psychoJS.experiment.removeLoop(main_loop);
  currentLoop = psychoJS.experiment._unfinishedLoops.length > 0
    ? psychoJS.experiment._unfinishedLoops.at(-1)
    : psychoJS.experiment;
  return Scheduler.Event.NEXT;
}
function main_loopLoopEndIteration(scheduler, snapshot) {
  return async function () {
    if (typeof snapshot !== 'undefined') {
      if (snapshot.finished) {
        if (psychoJS.experiment.isEntryEmpty()) psychoJS.experiment.nextEntry(snapshot);
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  FIXATION
// ═══════════════════════════════════════════════════════════════════════════
var fixationMaxDurationReached, fixationMaxDuration, fixationComponents, frameRemains;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    fixationClock.reset(routineTimer.getTime()); routineTimer.add(0.5); fixationMaxDurationReached = false;
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixationMaxDuration = null;
    fixationComponents = [text_fixation];
    for (const c of fixationComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}
function fixationRoutineEachFrame() {
  return async function () {
    t = fixationClock.getTime(); frameN++;
    if (t >= 0.0 && text_fixation.status === PsychoJS.Status.NOT_STARTED) {
      text_fixation.tStart = t; text_fixation.frameNStart = frameN; text_fixation.setAutoDraw(true);
    }
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;
    if (text_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fixation.tStop = t; text_fixation.frameNStop = frameN;
      text_fixation.status = PsychoJS.Status.FINISHED; text_fixation.setAutoDraw(false);
    }
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of fixationComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return (continueRoutine && routineTimer.getTime() > 0) ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}
function fixationRoutineEnd(snapshot) {
  return async function () {
    for (const c of fixationComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    if (routineForceEnded) routineTimer.reset();
    else fixationClock.add(0.5);
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  RATING TRIAL
// ═══════════════════════════════════════════════════════════════════════════
function ratingTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    ratingTrialClock.reset(); routineTimer.reset(); ratingTrialMaxDuration = false;

    // Directly read trial fields from the current trial object as a safety net,
    // in case importAttributes did not set globals yet.
    const _trial = snapshot.getCurrentTrial ? snapshot.getCurrentTrial() : {};
    if (typeof image_path === 'undefined' || image_path === null || image_path === '')
      image_path = _trial.image_path || 'default.png';
    if (typeof block_question === 'undefined' || block_question === null)
      block_question = _trial.block_question || 'liking';
    if (typeof block_num === 'undefined' || block_num === null)
      block_num = _trial.block_num || 0;
    if (typeof block_image_version === 'undefined' || block_image_version === null)
      block_image_version = _trial.block_image_version || '';
    if (typeof product_id === 'undefined' || product_id === null)
      product_id = _trial.product_id || '';

    let question_map = {
      liking: ["liking", "How much do you LIKE the product?"],
      taste:  ["taste",  "How TASTY do you think the product is?"],
      health: ["health", "How HEALTHY do you think the product is?"]
    };
    questions_list = [question_map[block_question]];
    document.body.style.cursor = 'none';

    question_index = 0; trial_ratings = {}; trial_rts = {}; trial_init = {};
    questionText.text = questions_list[0][1];
    sliderCover.opacity = 0.0; warningText.opacity = 0.0; productImage.opacity = 1.0;
    leftAnchor.text = "Not at all"; rightAnchor.text = "Very much";

    let start_x = (Math.random() * SLIDER_WIDTH) - (SLIDER_WIDTH / 2);
    current_x = start_x;
    let init_val = ((current_x + SLIDER_WIDTH / 2) / SLIDER_WIDTH) * (SLIDER_MAX - SLIDER_MIN) + SLIDER_MIN;
    init_val = Math.min(Math.max(parseFloat(init_val.toFixed(1)), SLIDER_MIN), SLIDER_MAX);
    ratingValueText.text = "Rating: " + init_val.toFixed(1);
    sliderMarker.setPos([current_x, SLIDER_Y]);
    trial_init[questions_list[0][0]] = init_val;

    waiting_next_question = false; timeout_warning = false; click_ready = false;
    questionClock.reset(); delayClock.reset();
    // Guard: ensure image_path is a valid string before setting
    const safe_image_path = (typeof image_path === 'string' && image_path.length > 0)
      ? image_path
      : 'default.png';
    productImage.setImage(safe_image_path);

    ratingMouse.x = []; ratingMouse.y = []; ratingMouse.leftButton = [];
    ratingMouse.midButton = []; ratingMouse.rightButton = []; ratingMouse.time = [];
    gotValidClick = false;

    psychoJS.experiment.addData('ratingTrial.started', globalClock.getTime());
    psychoJS.experiment.addData('block_num', block_num);
    psychoJS.experiment.addData('block_question', block_question);
    psychoJS.experiment.addData('block_image_version', block_image_version);

    ratingTrialComponents = [
      productImage, questionText, ratingValueText,
      sliderLine, sliderMarker, ...sliderTicks, sliderCover,
      ratingMouse, leftAnchor, rightAnchor, warningText
    ];
    for (const c of ratingTrialComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function ratingTrialRoutineEachFrame() {
  return async function () {
    t = ratingTrialClock.getTime(); frameN++;
    let mousePos = ratingMouse.getPos();
    let mouse_pressed = ratingMouse.getPressed()[0] === 1;
    if (!mouse_pressed) click_ready = true;
    if (mousePos && Math.abs(mousePos[0]) > 0.001) current_x = mousePos[0];
    current_x = Math.max(-SLIDER_WIDTH / 2, Math.min(SLIDER_WIDTH / 2, current_x));
    let cv = ((current_x + SLIDER_WIDTH / 2) / SLIDER_WIDTH) * (SLIDER_MAX - SLIDER_MIN) + SLIDER_MIN;
    cv = Math.min(Math.max(parseFloat(cv.toFixed(1)), SLIDER_MIN), SLIDER_MAX);

    if (waiting_next_question) {
      productImage.opacity = 0.0; questionText.text = ""; ratingValueText.text = "";
      leftAnchor.text = ""; rightAnchor.text = ""; sliderCover.opacity = 1.0;
      if (timeout_warning) { warningText.text = "Please answer before 8 seconds"; warningText.opacity = 1.0; }
      else warningText.opacity = 0.0;
      if (delayClock.getTime() >= delay_duration) {
        if (question_index >= questions_list.length) {
          continueRoutine = false;
        } else {
          waiting_next_question = false; timeout_warning = false;
          productImage.opacity = 1.0; warningText.opacity = 0.0; sliderCover.opacity = 0.0;
          leftAnchor.text = "Not at all"; rightAnchor.text = "Very much";
          questionText.text = questions_list[question_index][1];
          current_x = (((cv - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * SLIDER_WIDTH) - (SLIDER_WIDTH / 2);
          sliderMarker.setPos([current_x, SLIDER_Y]);
          ratingValueText.text = "Rating: " + cv.toFixed(1);
          trial_init[questions_list[question_index][0]] = cv;
          questionClock.reset();
        }
      }
    } else {
      sliderCover.opacity = 0.0; warningText.opacity = 0.0; productImage.opacity = 1.0;
      leftAnchor.text = "Not at all"; rightAnchor.text = "Very much";
      sliderMarker.setPos([current_x, SLIDER_Y]); ratingValueText.text = "Rating: " + cv.toFixed(1);
      if (questionClock.getTime() >= TTIME_LIMIT) {
        let q_name = questions_list[question_index][0];
        trial_ratings[q_name] = null; trial_rts[q_name] = null;
        timeout_warning = true; delay_duration = warning_delay;
        question_index++; waiting_next_question = true; delayClock.reset();
      } else if (mouse_pressed && click_ready) {
        click_ready = false;
        let q_name = questions_list[question_index][0];
        trial_ratings[q_name] = cv; trial_rts[q_name] = questionClock.getTime();
        timeout_warning = false; delay_duration = normal_delay;
        question_index++; waiting_next_question = true; delayClock.reset();
      }
    }

    // Auto-draw all components
    const startAll = [
      productImage, questionText, ratingValueText, sliderLine, sliderMarker,
      ...sliderTicks, sliderCover, leftAnchor, rightAnchor, warningText
    ];
    for (const c of startAll) {
      if (t >= 0.0 && c.status === PsychoJS.Status.NOT_STARTED) {
        c.tStart = t; c.frameNStart = frameN; c.setAutoDraw(true);
      }
    }
    if (t >= 0.0 && ratingMouse.status === PsychoJS.Status.NOT_STARTED) {
      ratingMouse.tStart = t; ratingMouse.frameNStart = frameN;
      ratingMouse.status = PsychoJS.Status.STARTED;
      ratingMouse.mouseClock.reset(); prevButtonState = ratingMouse.getPressed();
    }
    if (ratingMouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = ratingMouse.getPressed();
      if (!_mouseButtons.every((e, i) => e === prevButtonState[i])) {
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce((a, e) => a + e) > 0) {
          _mouseXYs = ratingMouse.getPos();
          ratingMouse.x.push(_mouseXYs[0]); ratingMouse.y.push(_mouseXYs[1]);
          ratingMouse.leftButton.push(_mouseButtons[0]);
          ratingMouse.midButton.push(_mouseButtons[1]);
          ratingMouse.rightButton.push(_mouseButtons[2]);
          ratingMouse.time.push(ratingMouse.mouseClock.getTime());
        }
      }
    }

    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of ratingTrialComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}

function ratingTrialRoutineEnd(snapshot) {
  return async function () {
    for (const c of ratingTrialComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    psychoJS.experiment.addData('ratingTrial.stopped', globalClock.getTime());
    for (const q of all_questions.map(x => x[0])) {
      psychoJS.experiment.addData(`rating_${q}`, (q in trial_ratings) ? trial_ratings[q] : "");
      psychoJS.experiment.addData(`rt_${q}`,     (q in trial_rts)     ? trial_rts[q]     : "");
      psychoJS.experiment.addData(`init_${q}`,   (q in trial_init)    ? trial_init[q]    : "");
    }
    psychoJS.experiment.addData('mouse.x', ratingMouse.x);
    psychoJS.experiment.addData('mouse.y', ratingMouse.y);
    psychoJS.experiment.addData('mouse.leftButton', ratingMouse.leftButton);
    psychoJS.experiment.addData('mouse.time', ratingMouse.time);
    routineTimer.reset();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  MEMORY TRIAL  (fires on every block — one catch per block)
// ═══════════════════════════════════════════════════════════════════════════
function memoryTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    memoryTrialClock.reset(); routineTimer.reset(); memoryTrialMaxDurationReached = false;

    // Safety net: read directly from trial object if globals not set
    const _mt = snapshot.getCurrentTrial ? snapshot.getCurrentTrial() : {};
    if (typeof is_memory_trial_position === 'undefined' || is_memory_trial_position === null)
      is_memory_trial_position = _mt.is_memory_trial_position || 0;
    if (typeof product_id === 'undefined' || product_id === null)
      product_id = _mt.product_id || '';
    if (typeof memory_target_product === 'undefined' || memory_target_product === null)
      memory_target_product = _mt.memory_target_product || '';
    if (typeof block_num === 'undefined' || block_num === null)
      block_num = _mt.block_num || 0;

    // show_memory = true only at the designated catch-trial position
    show_memory = (is_memory_trial_position === 1);
    memory_correct_product = "";

    if (!show_memory) {
      continueRoutine = false;
    } else {
      document.body.style.cursor = 'none';
      memory_correct_product = product_id;
      let wrong_options = all_products.filter(p => p !== memory_correct_product);
      wrong_options = shuffleArray(wrong_options).slice(0, 2);
      memory_options = shuffleArray([memory_correct_product, ...wrong_options]);
      opt1Text.text = `1) ${memory_options[0]}`;
      opt2Text.text = `2) ${memory_options[1]}`;
      opt3Text.text = `3) ${memory_options[2]}`;
      memoryKey.keys = undefined; memoryKey.rt = undefined; _memoryKey_allKeys = [];
    }

    psychoJS.experiment.addData("memory_catch_shown", show_memory ? 1 : 0);
    psychoJS.experiment.addData("memory_correct_product", show_memory ? memory_correct_product : "");
    psychoJS.experiment.addData("memory_target_product", typeof memory_target_product !== 'undefined' ? memory_target_product : "");

    memoryTrialMaxDuration = null;
    memoryWaitingNext = false; memoryTimeoutWarning = false;
    memoryQuestionClock = new util.Clock(); memoryQuestionClock.reset();
    memoryDelayClock    = new util.Clock(); memoryDelayClock.reset();
    memoryWarningText.opacity = 0.0;

    memoryTrialComponents = [memoryQuestion, opt1Text, opt2Text, opt3Text, memoryKey, memoryWarningText];
    for (const c of memoryTrialComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}

function memoryTrialRoutineEachFrame() {
  return async function () {
    t = memoryTrialClock.getTime(); frameN++;
    if (!show_memory) return Scheduler.Event.NEXT;

    if (memoryWaitingNext) {
      memoryWarningText.opacity = memoryTimeoutWarning ? 1.0 : 0.0;
      let delayNeeded = memoryTimeoutWarning ? memoryWarningDelay : memoryNormalDelay;
      if (memoryDelayClock.getTime() >= delayNeeded) {
        continueRoutine = false; routineForceEnded = true;
      }
    } else {
      memoryWarningText.opacity = 0.0;
      if (memoryQuestionClock.getTime() >= 8.0) {
        memoryKey.keys = null; memoryKey.rt = null;
        memoryTimeoutWarning = true; memoryWaitingNext = true;
        memoryDelayClock = new util.Clock(); memoryDelayClock.reset();
      }
    }

    const startAll = [memoryQuestion, opt1Text, opt2Text, opt3Text, memoryWarningText];
    for (const c of startAll) {
      if (t >= 0.0 && c.status === PsychoJS.Status.NOT_STARTED) {
        c.tStart = t; c.frameNStart = frameN; c.setAutoDraw(true);
      }
    }
    if (t >= 0.0 && memoryKey.status === PsychoJS.Status.NOT_STARTED) {
      memoryKey.tStart = t; memoryKey.frameNStart = frameN;
      psychoJS.window.callOnFlip(() => { memoryKey.clock.reset(); memoryKey.start(); memoryKey.clearEvents(); });
    }
    if (memoryKey.status === PsychoJS.Status.STARTED && !memoryWaitingNext) {
      let theseKeys = memoryKey.getKeys({ keyList: ['1','2','3'], waitRelease: false });
      _memoryKey_allKeys = _memoryKey_allKeys.concat(theseKeys);
      if (_memoryKey_allKeys.length > 0) {
        memoryKey.keys = _memoryKey_allKeys[_memoryKey_allKeys.length - 1].name;
        memoryKey.rt   = _memoryKey_allKeys[_memoryKey_allKeys.length - 1].rt;
        memoryTimeoutWarning = false; memoryWaitingNext = true;
        memoryDelayClock = new util.Clock(); memoryDelayClock.reset();
      }
    }

    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of memoryTrialComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}

function memoryTrialRoutineEnd(snapshot) {
  return async function () {
    for (const c of memoryTrialComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    if (show_memory) {
      let chosenIdx = parseInt(memoryKey.keys) - 1;
      let chosenProduct = (chosenIdx >= 0 && chosenIdx < memory_options.length) ? memory_options[chosenIdx] : "";
      let memory_correct = (chosenProduct === memory_correct_product) ? 1 : 0;
      psychoJS.experiment.addData('memory_key', memoryKey.keys);
      psychoJS.experiment.addData('memory_rt', memoryKey.rt);
      psychoJS.experiment.addData('memory_choice_product', chosenProduct);
      psychoJS.experiment.addData('memory_correct', memory_correct);
      psychoJS.experiment.addData('memory_option_1', memory_options[0]);
      psychoJS.experiment.addData('memory_option_2', memory_options[1]);
      psychoJS.experiment.addData('memory_option_3', memory_options[2]);
    } else {
      for (const field of ['memory_key','memory_rt','memory_choice_product','memory_correct','memory_option_1','memory_option_2','memory_option_3'])
        psychoJS.experiment.addData(field, "");
    }
    routineTimer.reset();
    if (typeof memoryKey !== 'undefined') memoryKey.stop();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  THANKS
// ═══════════════════════════════════════════════════════════════════════════
var thanksMaxDurationReached, _endKey_allKeys, thanksMaxDuration, thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    t = 0; frameN = -1; continueRoutine = true; routineForceEnded = false;
    thanksClock.reset(); routineTimer.reset(); thanksMaxDurationReached = false;
    endKey.keys = undefined; endKey.rt = undefined; _endKey_allKeys = [];
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null;
    thanksComponents = [endText, endKey];
    for (const c of thanksComponents) if ('status' in c) c.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  };
}
function thanksRoutineEachFrame() {
  return async function () {
    t = thanksClock.getTime(); frameN++;
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      endText.tStart = t; endText.frameNStart = frameN; endText.setAutoDraw(true);
    }
    if (t >= 0.0 && endKey.status === PsychoJS.Status.NOT_STARTED) {
      endKey.tStart = t; endKey.frameNStart = frameN;
      psychoJS.window.callOnFlip(() => { endKey.clock.reset(); endKey.start(); endKey.clearEvents(); });
    }
    if (endKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKey.getKeys({ keyList: ['space'], waitRelease: false });
      _endKey_allKeys = _endKey_allKeys.concat(theseKeys);
      if (_endKey_allKeys.length > 0) {
        endKey.keys = _endKey_allKeys[_endKey_allKeys.length - 1].name;
        continueRoutine = false;
      }
    }
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0)
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    if (!continueRoutine) { routineForceEnded = true; return Scheduler.Event.NEXT; }
    continueRoutine = false;
    for (const c of thanksComponents)
      if ('status' in c && c.status !== PsychoJS.Status.FINISHED) { continueRoutine = true; break; }
    return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
  };
}
function thanksRoutineEnd(snapshot) {
  return async function () {
    for (const c of thanksComponents) if (typeof c.setAutoDraw === 'function') c.setAutoDraw(false);
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    endKey.stop(); routineTimer.reset();
    if (currentLoop === psychoJS.experiment) psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  };
}

// ═══════════════════════════════════════════════════════════════════════════
//  UTILITY
// ═══════════════════════════════════════════════════════════════════════════
function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
  };
}
function safeValue(v) {
  if (v === undefined || v === null) return "";
  if (Array.isArray(v)) return JSON.stringify(v);
  return String(v);
}
function csvEscape(v) {
  const s = safeValue(v);
  return (s.includes('"') || s.includes(',') || s.includes('\n'))
    ? '"' + s.replace(/"/g, '""') + '"'
    : s;
}
function convertRowsToCSV(rows, columns) {
  const header = columns.join(",");
  const lines = rows.map(row => columns.map(col => csvEscape(row[col])).join(","));
  return [header].concat(lines).join("\n");
}
async function uploadToDataPipe(csvText, filename) {
  const response = await fetch("https://pipe.jspsych.org/api/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ experimentID: DATAPIPE_EXPERIMENT_ID, filename, data: csvText })
  });
  const result = await response.json();
  console.log("DataPipe response:", result);
  if (!response.ok || result.error) throw new Error(result.error || result.message || "Unknown DataPipe error");
  return result;
}
function makeUploadFilename() {
  const pid = expInfo["prolific_ID"] || "noID";
  const dateStr = (expInfo["date"] || "nodate").split("_")[0];
  const rand = Math.random().toString(36).slice(2, 10);
  return `${pid}_${dateStr}_${rand}.csv`;
}
async function quitPsychoJS(message, isCompleted) {
  if (psychoJS.experiment.isEntryEmpty()) psychoJS.experiment.nextEntry();
  document.body.innerHTML = `<div style="font-family:Arial,sans-serif;text-align:center;padding-top:80px;font-size:28px;color:white;background:black;height:100vh;">Saving your data...<br><br>Please do not close this page.</div>`;
  try {
    const rows = psychoJS.experiment._trialsData || [];
    if (!rows.length) throw new Error("No experiment rows found to upload.");
    const columns = [...new Set(rows.flatMap(row => Object.keys(row)))];
    const csvText = convertRowsToCSV(rows, columns);
    await uploadToDataPipe(csvText, makeUploadFilename());
    document.body.innerHTML = `<div style="font-family:Arial,sans-serif;text-align:center;padding-top:80px;font-size:28px;color:white;background:black;height:100vh;">Your data were saved successfully.<br><br>You may now close this page.</div>`;
    psychoJS.window.close();
    psychoJS.quit({ message, isCompleted });
    return Scheduler.Event.QUIT;
  } catch (err) {
    console.error("Upload failed:", err);
    document.body.innerHTML = `<div style="font-family:Arial,sans-serif;text-align:center;padding-top:80px;font-size:24px;color:white;background:black;height:100vh;">There was a problem saving your data.<br><br>Please contact the researcher.<br><br>Error: ${err.message}</div>`;
    return Scheduler.Event.QUIT;
  }
}
