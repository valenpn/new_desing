/************************ 
 * Products_Online *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'products_online';  // from the Builder filename that created this script
let expInfo = {
    'participant_ID': '',
    'age': '',
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
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
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

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'image_table.csv', 'path': 'image_table.csv'},
    {'name': 'taste&health/Belvita_original.png', 'path': 'taste&health/Belvita_original.png'},
    {'name': 'taste&health/Belvita_taste.png', 'path': 'taste&health/Belvita_taste.png'},
    {'name': 'taste&health/Belvita_health.png', 'path': 'taste&health/Belvita_health.png'},
    {'name': 'taste&health/Chips_Ahoy!_original.png', 'path': 'taste&health/Chips_Ahoy!_original.png'},
    {'name': 'taste&health/Chips_Ahoy!_taste.png', 'path': 'taste&health/Chips_Ahoy!_taste.png'},
    {'name': 'taste&health/Chips_Ahoy!_health.png', 'path': 'taste&health/Chips_Ahoy!_health.png'},
    {'name': 'taste&health/Goldfish_original.png', 'path': 'taste&health/Goldfish_original.png'},
    {'name': 'taste&health/Goldfish_taste.png', 'path': 'taste&health/Goldfish_taste.png'},
    {'name': 'taste&health/Goldfish_health.png', 'path': 'taste&health/Goldfish_health.png'},
    {'name': 'taste&health/KIND_original.png', 'path': 'taste&health/KIND_original.png'},
    {'name': 'taste&health/KIND_taste.png', 'path': 'taste&health/KIND_taste.png'},
    {'name': 'taste&health/KIND_health.png', 'path': 'taste&health/KIND_health.png'},
    {'name': 'taste&health/Lindt_original.png', 'path': 'taste&health/Lindt_original.png'},
    {'name': 'taste&health/Lindt_taste.png', 'path': 'taste&health/Lindt_taste.png'},
    {'name': 'taste&health/Lindt_health.png', 'path': 'taste&health/Lindt_health.png'},
    {'name': 'taste&health/Lipton_Tea_original.png', 'path': 'taste&health/Lipton_Tea_original.png'},
    {'name': 'taste&health/Lipton_Tea_taste.png', 'path': 'taste&health/Lipton_Tea_taste.png'},
    {'name': 'taste&health/Lipton_Tea_health.png', 'path': 'taste&health/Lipton_Tea_health.png'},
    {'name': 'taste&health/Nature_Valley_original.png', 'path': 'taste&health/Nature_Valley_original.png'},
    {'name': 'taste&health/Nature_Valley_taste.png', 'path': 'taste&health/Nature_Valley_taste.png'},
    {'name': 'taste&health/Nature_Valley_health.png', 'path': 'taste&health/Nature_Valley_health.png'},
    {'name': 'taste&health/PLANTERS_Cashews_original.png', 'path': 'taste&health/PLANTERS_Cashews_original.png'},
    {'name': 'taste&health/PLANTERS_Cashews_taste.png', 'path': 'taste&health/PLANTERS_Cashews_taste.png'},
    {'name': 'taste&health/PLANTERS_Cashews_health.png', 'path': 'taste&health/PLANTERS_Cashews_health.png'},
    {'name': 'taste&health/Pocky_original.png', 'path': 'taste&health/Pocky_original.png'},
    {'name': 'taste&health/Pocky_taste.png', 'path': 'taste&health/Pocky_taste.png'},
    {'name': 'taste&health/Pocky_health.png', 'path': 'taste&health/Pocky_health.png'},
    {'name': 'taste&health/Pringles_original.png', 'path': 'taste&health/Pringles_original.png'},
    {'name': 'taste&health/Pringles_taste.png', 'path': 'taste&health/Pringles_taste.png'},
    {'name': 'taste&health/Pringles_health.png', 'path': 'taste&health/Pringles_health.png'},
    {'name': 'taste&health/RitterSport_original.png', 'path': 'taste&health/RitterSport_original.png'},
    {'name': 'taste&health/RitterSport_taste.png', 'path': 'taste&health/RitterSport_taste.png'},
    {'name': 'taste&health/RitterSport_health.png', 'path': 'taste&health/RitterSport_health.png'},
    {'name': 'taste&health/TERRA_chips_original.png', 'path': 'taste&health/TERRA_chips_original.png'},
    {'name': 'taste&health/TERRA_chips_taste.png', 'path': 'taste&health/TERRA_chips_taste.png'},
    {'name': 'taste&health/TERRA_chips_health.png', 'path': 'taste&health/TERRA_chips_health.png'},
    {'name': 'taste&health/Twix_original.png', 'path': 'taste&health/Twix_original.png'},
    {'name': 'taste&health/Twix_taste.png', 'path': 'taste&health/Twix_taste.png'},
    {'name': 'taste&health/Twix_health.png', 'path': 'taste&health/Twix_health.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
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
  // make sure required fields were filled
  if (!expInfo['participant_ID'] || !expInfo['age']) {
    psychoJS.quit({
      message: 'Please enter participant ID and age before continuing.',
      isCompleted: false
    });
    return Scheduler.Event.QUIT;
  }

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant_ID"]}/${expInfo["participant_ID"]}_${expName}_${expInfo["date"].split("_")[0]}`);
  psychoJS.experiment.field_separator = '\t';

  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text_welcome;
var key_resp;
var instructionsClock;
var text_instructions;
var key_resp_instructions;
var setOrderClock;
var fixationClock;
var text_fixation;
var ratingTrialClock;
var TTIME_LIMIT;
var all_questions;
var SLIDER_MIN;
var SLIDER_MAX;
var SLIDER_WIDTH;
var SLIDER_Y;
var questionClock;
var delayClock;
var waiting_next_question;
var timeout_warning;
var click_ready;
var question_index;
var current_x;
var delay_duration;
var normal_delay;
var warning_delay;
var productImage;
var questionText;
var ratingValueText;
var ratingSlider;
var sliderLine;
var sliderMarker;
var sliderTicks;
var sliderCover;
var ratingMouse;
var leftAnchor;
var rightAnchor;
var warningText;
var memoryTrialClock;
var MEMORY_TRIGGERS;
var memory_counts;
var memory_target_occurrence;
var rowsForUpload = [];
var DATAPIPE_EXPERIMENT_ID = "WxmPsuMHvMeP";
var all_products;
var memoryQuestion;
var opt1Text;
var opt2Text;
var opt3Text;
var memoryKey;
var thanksClock;
var endText;
var endKey;
var globalClock;
var routineTimer;

// new block-intro + block structure vars
var blockIntroClock;
var blockIntroText;
var blockIntroKey;
var lastSeenBlockNum;
var selected_trials;
var block_plan;
var show_memory;
var memory_correct_product;
var memory_options;
var blockIntroMaxDurationReached;
var _blockIntroKey_allKeys;
var blockIntroMaxDuration;
var blockIntroComponents;
var memoryTrialMaxDurationReached;
var _memoryKey_allKeys;
var memoryTrialMaxDuration;
var memoryTrialComponents;
var memoryQuestionClock;
var memoryDelayClock;
var memoryWaitingNext;
var memoryTimeoutWarning;
var memoryNormalDelay;
var memoryWarningDelay;
var memoryWarningText;

async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: 'Welcome!\nThis is a decision-making experiment\nPress SPACE to start',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'INSTRUCTIONS:\nYou will complete various blocks.\n\nIn each block, you will answer only ONE type of question:\n- How much do you LIKE the product?\n- How TASTY do you think the product is?\n- How HEALTHY do you think the product is?\n\nBefore each block, you will see which question to answer.\n\nRate each product from 0 (not at all) to 7 (very much).\nUse the mouse to move the slider and click to confirm.\nYou will have 8 seconds for each product.\n\nPress SPACE to begin the experiment',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "setOrder"
  setOrderClock = new util.Clock();

  // Initialize components for Routine "blockIntro"
  blockIntroClock = new util.Clock();
  blockIntroText = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockIntroText',
    text: '',
    font: 'Arial',
    units: undefined,
    pos: [0, 0],
    draggable: false,
    height: 0.045,
    wrapWidth: 1.2,
    ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),
    opacity: undefined,
    depth: 0.0
  });
  blockIntroKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  lastSeenBlockNum = -1;

  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  text_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ratingTrial"
  ratingTrialClock = new util.Clock();
  TTIME_LIMIT = 8;
  
  all_questions = [
    ["liking", "How much do you LIKE the product?"],
    ["taste", "How TASTY do you think the product is?"],
    ["health", "How HEALTHY do you think the product is?"]
  ];
  
  SLIDER_MIN = 0;
  SLIDER_MAX = 7;
  SLIDER_WIDTH = 0.72;
  SLIDER_Y = -0.33;
  
  questionClock = new util.Clock();
  delayClock = new util.Clock();
  
  waiting_next_question = false;
  timeout_warning = false;
  click_ready = false;
  question_index = 0;
  current_x = 0;
  
  delay_duration = 0.5;
  normal_delay = 0.5;
  warning_delay = 1.5;
  productImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'productImage', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.14], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: 'placeholder',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.22)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  ratingValueText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ratingValueText',
    text: 'Rating:',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.26)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ratingSlider = null;  // disable built-in slider completely

  sliderLine = new visual.Rect({
    win: psychoJS.window,
    name: 'sliderLine',
    width: 0.72,
    height: 0.006,
    ori: 0.0,
    pos: [0, -0.33],
    draggable: false,
    anchor: 'center',
    lineWidth: 0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    colorSpace: 'rgb',
    opacity: 1.0,
    depth: -4,
    interpolate: true,
  });
  
  sliderMarker = new visual.Polygon({
    win: psychoJS.window,
    name: 'sliderMarker',
    edges: 64,
    size: [0.02, 0.02],
    ori: 0.0,
    pos: [0, -0.33],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    colorSpace: 'rgb',
    opacity: 1.0,
    depth: -3.5,
    interpolate: true,
  });
  
  sliderTicks = [];
  for (let i = 0; i <= 7; i++) {
    let xPos = -0.36 + (i / 7) * 0.72;
    sliderTicks.push(new visual.TextStim({
      win: psychoJS.window,
      name: `sliderTick_${i}`,
      text: String(i),
      font: 'Arial',
      units: undefined,
      pos: [xPos, -0.38],
      draggable: false,
      height: 0.025,
      wrapWidth: undefined,
      ori: 0.0,
      languageStyle: 'LTR',
      color: new util.Color('white'),
      opacity: 1.0,
      depth: -4.2
    }));
  }
  
  sliderCover = new visual.Rect ({
    win: psychoJS.window, name: 'sliderCover', 
    width: [0.8, 0.18][0], height: [0.8, 0.18][1],
    ori: 0.0, 
    pos: [0, (- 0.36)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  ratingMouse = new core.Mouse({
    win: psychoJS.window,
  });
  ratingMouse.mouseClock = new util.Clock();
  leftAnchor = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftAnchor',
    text: 'Not at all',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.35), (- 0.44)], draggable: false, height: 0.022,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  rightAnchor = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightAnchor',
    text: 'Very much',
    font: 'Arial',
    units: undefined, 
    pos: [0.35, (- 0.44)], draggable: false, height: 0.022,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  warningText = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningText',
    text: 'Please answer before 8 seconds',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "memoryTrial"
  memoryTrialClock = new util.Clock();
  MEMORY_TRIGGERS = {"Twix": 1, "Pringles": 1, "Lindt": 1, "Nature_Valley": 1};
  memory_counts = {"Twix": 0, "Pringles": 0, "Lindt": 0, "Nature_Valley": 0};
  memory_target_occurrence = {};
  
  var product_list = ["Twix", "Pringles", "Lindt", "Nature_Valley"];
  var occurrences = [1, 2, 3];
  
  for (var i = 0; i < product_list.length; i++) {
      var prod = product_list[i];
      var randomIndex = Math.floor(Math.random() * occurrences.length);
      memory_target_occurrence[prod] = occurrences[randomIndex];
  }
  
  all_products = ["Belvita", "Chips_Ahoy!", "Goldfish", "KIND", "Lindt", "Lipton_Tea", "Nature_Valley", "PLANTERS_Cashews", "Pocky", "Pringles", "RitterSport", "TERRA_chips", "Twix"];
  memoryQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'memoryQuestion',
    text: 'Which product was shown in the previous trial?\n\nUse keys 1, 2, or 3 to respond',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  opt1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt1Text',
    text: '1',
    font: 'Arial',
    units: undefined,
    pos: [0, 0.05],
    draggable: false,
    height: 0.035,
    wrapWidth: 1.0,
    ori: 0.0,
    languageStyle: 'LTR',
    alignText: 'left',
    anchorHoriz: 'center',
    color: new util.Color('white'),
    opacity: undefined,
    depth: -2.0
  });
  
  opt2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt2Text',
    text: '2',
    font: 'Arial',
    units: undefined,
    pos: [0, -0.05],
    draggable: false,
    height: 0.035,
    wrapWidth: 1.0,
    ori: 0.0,
    languageStyle: 'LTR',
    alignText: 'left',
    anchorHoriz: 'center',
    color: new util.Color('white'),
    opacity: undefined,
    depth: -3.0
  });
  
  opt3Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt3Text',
    text: '3',
    font: 'Arial',
    units: undefined,
    pos: [0, -0.15],
    draggable: false,
    height: 0.035,
    wrapWidth: 1.0,
    ori: 0.0,
    languageStyle: 'LTR',
    alignText: 'left',
    anchorHoriz: 'center',
    color: new util.Color('white'),
    opacity: undefined,
    depth: -4.0
  });
  
  memoryKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  memoryQuestionClock = new util.Clock();
  memoryDelayClock = new util.Clock();
  memoryWaitingNext = false;
  memoryTimeoutWarning = false;
  memoryNormalDelay = 0.5;
  memoryWarningDelay = 1.5;
  
  memoryWarningText = new visual.TextStim({
    win: psychoJS.window,
    name: 'memoryWarningText',
    text: 'Please answer before 8 seconds',
    font: 'Arial',
    units: undefined,
    pos: [0, -0.28],
    draggable: false,
    height: 0.04,
    wrapWidth: undefined,
    ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),
    opacity: 0.0,
    depth: -5.0
  });
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Thank you!\nPress SPACE to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  endKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();
  routineTimer = new util.CountdownTimer();
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeMaxDurationReached;
var _key_resp_allKeys;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    WelcomeMaxDuration = null
    WelcomeComponents = [];
    WelcomeComponents.push(text_welcome);
    WelcomeComponents.push(key_resp);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    t = WelcomeClock.getTime();
    frameN = frameN + 1;
    
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      text_welcome.tStart = t;
      text_welcome.frameNStart = frameN;
      text_welcome.setAutoDraw(true);
    }
    
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      key_resp.tStart = t;
      key_resp.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });
      psychoJS.window.callOnFlip(function() { key_resp.start(); });
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        continueRoutine = false;
      }
    }
    
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
    }
    
    key_resp.stop();
    routineTimer.reset();
    
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _key_resp_instructions_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    key_resp_instructions.keys = undefined;
    key_resp_instructions.rt = undefined;
    _key_resp_instructions_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(key_resp_instructions);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    t = instructionsClock.getTime();
    frameN = frameN + 1;
    
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      text_instructions.tStart = t;
      text_instructions.frameNStart = frameN;
      text_instructions.setAutoDraw(true);
    }
    
    if (t >= 0.0 && key_resp_instructions.status === PsychoJS.Status.NOT_STARTED) {
      key_resp_instructions.tStart = t;
      key_resp_instructions.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { key_resp_instructions.clock.reset(); });
      psychoJS.window.callOnFlip(function() { key_resp_instructions.start(); });
      psychoJS.window.callOnFlip(function() { key_resp_instructions.clearEvents(); });
    }
    
    if (key_resp_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instructions.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_instructions_allKeys = _key_resp_instructions_allKeys.concat(theseKeys);
      if (_key_resp_instructions_allKeys.length > 0) {
        key_resp_instructions.keys = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].name;
        key_resp_instructions.rt = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].rt;
        key_resp_instructions.duration = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].duration;
        continueRoutine = false;
      }
    }
    
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instructions.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instructions.keys', key_resp_instructions.keys);
    if (typeof key_resp_instructions.keys !== 'undefined') {
        psychoJS.experiment.addData('key_resp_instructions.rt', key_resp_instructions.rt);
        psychoJS.experiment.addData('key_resp_instructions.duration', key_resp_instructions.duration);
        routineTimer.reset();
    }
    
    key_resp_instructions.stop();
    routineTimer.reset();
    
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var setOrderMaxDurationReached;
var all_trials;
var setOrderMaxDuration;
var setOrderComponents;
function setOrderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);

    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    setOrderClock.reset();
    routineTimer.reset();
    setOrderMaxDurationReached = false;

    all_trials = TrialHandler.importConditions(psychoJS.serverManager, 'image_table.csv');

    function shuffleArray(array) {
      let arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    let trials_by_version = {
      original: [],
      taste: [],
      health: []
    };

    for (let row of all_trials) {
      if (row.image_path.includes("_original")) {
        trials_by_version.original.push(row);
      } else if (row.image_path.includes("_taste")) {
        trials_by_version.taste.push(row);
      } else if (row.image_path.includes("_health")) {
        trials_by_version.health.push(row);
      }
    }

    let question_to_versions = {
      liking: shuffleArray(["original", "taste", "health"]),
      taste: shuffleArray(["original", "taste", "health"]),
      health: shuffleArray(["original", "taste", "health"])
    };

    selected_trials = [];
    block_plan = [];
    let global_block_num = 1;

    for (let part_num = 1; part_num <= 3; part_num++) {
      let part_blocks = [
        {
          part_num: part_num,
          block_question: "liking",
          block_image_version: question_to_versions.liking[part_num - 1]
        },
        {
          part_num: part_num,
          block_question: "taste",
          block_image_version: question_to_versions.taste[part_num - 1]
        },
        {
          part_num: part_num,
          block_question: "health",
          block_image_version: question_to_versions.health[part_num - 1]
        }
      ];

      part_blocks = shuffleArray(part_blocks);
      let memory_index = Math.floor(Math.random() * 3);

      for (let i = 0; i < part_blocks.length; i++) {
        let block = part_blocks[i];
        block.block_num = global_block_num;
        block.memory_after_block = (i === memory_index) ? 1 : 0;
        block_plan.push(block);

        let block_trials = shuffleArray(trials_by_version[block.block_image_version]);

        let catch_trial_index = null;
        if (block.memory_after_block === 1) {
          // Pick a random position that is NOT the very first trial (index 0)
          // so the memory question never fires immediately after the block intro.
          // For blocks with only 1 trial, fall back to index 0.
          let min_idx = block_trials.length > 1 ? 1 : 0;
          catch_trial_index = min_idx + Math.floor(Math.random() * (block_trials.length - min_idx));
        }
        
        for (let j = 0; j < block_trials.length; j++) {
          let trial = Object.assign({}, block_trials[j]);
        
          trial.block_num = block.block_num;
          trial.part_num = block.part_num;
          trial.block_question = block.block_question;
          trial.block_image_version = block.block_image_version;
          trial.memory_after_block = block.memory_after_block;
          trial.is_last_trial_in_block = (j === block_trials.length - 1) ? 1 : 0;
          trial.is_memory_trial_position = (j === catch_trial_index) ? 1 : 0;
        
          selected_trials.push(trial);
        }

        global_block_num += 1;
      }
    }

    psychoJS.experiment.addData('block_plan', JSON.stringify(block_plan));
    psychoJS.experiment.addData('setOrder.started', globalClock.getTime());
    continueRoutine = false;
    setOrderMaxDuration = null;
    setOrderComponents = [];

    for (const thisComponent of setOrderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}

function setOrderRoutineEachFrame() {
  return async function () {
    t = setOrderClock.getTime();
    frameN = frameN + 1;

    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;
    for (const thisComponent of setOrderComponents) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    }

    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function setOrderRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of setOrderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    psychoJS.experiment.addData('setOrder.stopped', globalClock.getTime());
    routineTimer.reset();

    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  };
}


function blockIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);

    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    blockIntroClock.reset();
    routineTimer.reset();
    blockIntroMaxDurationReached = false;

    let showBlockIntro = (block_num !== lastSeenBlockNum);

    if (!showBlockIntro) {
      continueRoutine = false;
    } else {
      lastSeenBlockNum = block_num;

      let introText = "";
      if (block_question === "liking") {
        introText = "In the next block, rate how much you LIKE each product.\n\nPress SPACE to begin.";
      } else if (block_question === "taste") {
        introText = "In the next block, rate how TASTY you think each product is.\n\nPress SPACE to begin.";
      } else if (block_question === "health") {
        introText = "In the next block, rate how HEALTHY you think each product is.\n\nPress SPACE to begin.";
      }

      blockIntroText.setText(introText);
      blockIntroKey.keys = undefined;
      blockIntroKey.rt = undefined;
      _blockIntroKey_allKeys = [];
    }

    psychoJS.experiment.addData('blockIntro.started', globalClock.getTime());
    blockIntroMaxDuration = null;

    blockIntroComponents = [];
    blockIntroComponents.push(blockIntroText);
    blockIntroComponents.push(blockIntroKey);

    for (const thisComponent of blockIntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  }
}

function blockIntroRoutineEachFrame() {
  return async function () {
    t = blockIntroClock.getTime();
    frameN = frameN + 1;

    if (t >= 0.0 && blockIntroText.status === PsychoJS.Status.NOT_STARTED) {
      blockIntroText.tStart = t;
      blockIntroText.frameNStart = frameN;
      blockIntroText.setAutoDraw(true);
    }

    if (t >= 0.0 && blockIntroKey.status === PsychoJS.Status.NOT_STARTED) {
      blockIntroKey.tStart = t;
      blockIntroKey.frameNStart = frameN;

      psychoJS.window.callOnFlip(function() { blockIntroKey.clock.reset(); });
      psychoJS.window.callOnFlip(function() { blockIntroKey.start(); });
      psychoJS.window.callOnFlip(function() { blockIntroKey.clearEvents(); });
    }

    if (blockIntroKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = blockIntroKey.getKeys({
        keyList: ['space'],
        waitRelease: false
      });
      _blockIntroKey_allKeys = _blockIntroKey_allKeys.concat(theseKeys);
      if (_blockIntroKey_allKeys.length > 0) {
        blockIntroKey.keys = _blockIntroKey_allKeys[_blockIntroKey_allKeys.length - 1].name;
        blockIntroKey.rt = _blockIntroKey_allKeys[_blockIntroKey_allKeys.length - 1].rt;
        blockIntroKey.duration = _blockIntroKey_allKeys[_blockIntroKey_allKeys.length - 1].duration;
        continueRoutine = false;
      }
    }

    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;
    for (const thisComponent of blockIntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function blockIntroRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of blockIntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    psychoJS.experiment.addData('blockIntro.stopped', globalClock.getTime());

    if (typeof blockIntroKey !== 'undefined') {
      blockIntroKey.stop();
    }

    routineTimer.reset();

    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}
var main_loop;
function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot);
    
    main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1,
      method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo,
      originPath: undefined,
      trialList: selected_trials,
      seed: undefined,
      name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop);
    currentLoop = main_loop;
    
    for (const thisMain_loop of main_loop) {
      snapshot = main_loop.getSnapshot();
      main_loopLoopScheduler.add(importConditions(snapshot));
      main_loopLoopScheduler.add(blockIntroRoutineBegin(snapshot));
      main_loopLoopScheduler.add(blockIntroRoutineEachFrame());
      main_loopLoopScheduler.add(blockIntroRoutineEnd(snapshot));
      main_loopLoopScheduler.add(fixationRoutineBegin(snapshot));
      main_loopLoopScheduler.add(fixationRoutineEachFrame());
      main_loopLoopScheduler.add(fixationRoutineEnd(snapshot));
      main_loopLoopScheduler.add(ratingTrialRoutineBegin(snapshot));
      main_loopLoopScheduler.add(ratingTrialRoutineEachFrame());
      main_loopLoopScheduler.add(ratingTrialRoutineEnd(snapshot));
      main_loopLoopScheduler.add(memoryTrialRoutineBegin(snapshot));
      main_loopLoopScheduler.add(memoryTrialRoutineEachFrame());
      main_loopLoopScheduler.add(memoryTrialRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_loopLoopEndIteration(main_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function main_loopLoopEnd() {
  psychoJS.experiment.removeLoop(main_loop);
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;
  return Scheduler.Event.NEXT;
}


function main_loopLoopEndIteration(scheduler, snapshot) {
  return async function () {
    if (typeof snapshot !== 'undefined') {
      if (snapshot.finished) {
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


var fixationMaxDurationReached;
var fixationMaxDuration;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    fixationClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fixationMaxDurationReached = false;
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixationMaxDuration = null
    fixationComponents = [];
    fixationComponents.push(text_fixation);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    t = fixationClock.getTime();
    frameN = frameN + 1;
    
    if (t >= 0.0 && text_fixation.status === PsychoJS.Status.NOT_STARTED) {
      text_fixation.tStart = t;
      text_fixation.frameNStart = frameN;
      text_fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;
    if (text_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fixation.tStop = t;
      text_fixation.frameNStop = frameN;
      text_fixation.status = PsychoJS.Status.FINISHED;
      text_fixation.setAutoDraw(false);
    }
    
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();
    } else if (fixationMaxDurationReached) {
        fixationClock.add(fixationMaxDuration);
    } else {
        fixationClock.add(0.500000);
    }
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ratingTrialMaxDurationReached;
var questions_list;
var trial_ratings;
var trial_rts;
var trial_init;
var init_val;
var gotValidClick;
var ratingTrialMaxDuration;
var ratingTrialComponents;
function ratingTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    ratingTrialClock.reset();
    routineTimer.reset();
    ratingTrialMaxDurationReached = false;

    let question_map = {
      liking: ["liking", "How much do you LIKE the product?"],
      taste: ["taste", "How TASTY do you think the product is?"],
      health: ["health", "How HEALTHY do you think the product is?"]
    };

    questions_list = [question_map[block_question]];
    document.body.style.cursor = 'none';

    question_index = 0;
    trial_ratings = {};
    trial_rts = {};
    trial_init = {};

    questionText.text = questions_list[question_index][1];
    sliderCover.opacity = 0.0;
    warningText.opacity = 0.0;
    productImage.opacity = 1.0;
    leftAnchor.text = "Not at all";
    rightAnchor.text = "Very much";
    
    let start_x = (Math.random() * SLIDER_WIDTH) - (SLIDER_WIDTH / 2);
    current_x = start_x;
    let init_val = ((current_x + SLIDER_WIDTH / 2) / SLIDER_WIDTH) * (SLIDER_MAX - SLIDER_MIN) + SLIDER_MIN;
    init_val = Math.min(Math.max(Number.parseFloat(init_val.toFixed(1)), SLIDER_MIN), SLIDER_MAX);
    
    ratingValueText.text = "Rating: " + init_val.toFixed(1);
    sliderMarker.setPos([current_x, SLIDER_Y]);
    
    trial_init[questions_list[question_index][0]] = init_val;
    
    waiting_next_question = false;
    timeout_warning = false;
    click_ready = false;
    questionClock.reset();
    delayClock.reset();
    productImage.setImage(image_path);

    ratingMouse.x = [];
    ratingMouse.y = [];
    ratingMouse.leftButton = [];
    ratingMouse.midButton = [];
    ratingMouse.rightButton = [];
    ratingMouse.time = [];
    gotValidClick = false;

    psychoJS.experiment.addData('ratingTrial.started', globalClock.getTime());
    psychoJS.experiment.addData('block_num', block_num);
    psychoJS.experiment.addData('block_question', block_question);
    psychoJS.experiment.addData('block_image_version', block_image_version);

    ratingTrialMaxDuration = null;
    ratingTrialComponents = [];
    ratingTrialComponents.push(productImage);
    ratingTrialComponents.push(questionText);
    ratingTrialComponents.push(ratingValueText);
    ratingTrialComponents.push(sliderLine);
    ratingTrialComponents.push(sliderMarker);
    for (const tick of sliderTicks) {
      ratingTrialComponents.push(tick);
    }
    ratingTrialComponents.push(sliderCover);
    ratingTrialComponents.push(ratingMouse);
    ratingTrialComponents.push(leftAnchor);
    ratingTrialComponents.push(rightAnchor);
    ratingTrialComponents.push(warningText);
    
    for (const thisComponent of ratingTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var current_val;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function ratingTrialRoutineEachFrame() {
  return async function () {
    t = ratingTrialClock.getTime();
    frameN = frameN + 1;

    let mousePos = ratingMouse.getPos();
    let mouse_pressed = ratingMouse.getPressed()[0] === 1;
    
    if (!mouse_pressed) {
        click_ready = true;
    }
    
    if (mousePos && Math.abs(mousePos[0]) > 0.001) {
        current_x = mousePos[0];
    }
    
    current_x = Math.max(-SLIDER_WIDTH / 2, Math.min(SLIDER_WIDTH / 2, current_x));
    
    let current_val = ((current_x + SLIDER_WIDTH / 2) / SLIDER_WIDTH) * (SLIDER_MAX - SLIDER_MIN) + SLIDER_MIN;
    current_val = Math.min(Math.max(Number.parseFloat(current_val.toFixed(1)), SLIDER_MIN), SLIDER_MAX);
    
    if (waiting_next_question) {
        productImage.opacity = 0.0;
        questionText.text = "";
        ratingValueText.text = "";
        leftAnchor.text = "";
        rightAnchor.text = "";
        sliderCover.opacity = 1.0;
    
        if (timeout_warning) {
            warningText.text = "Please answer before 8 seconds";
            warningText.opacity = 1.0;
        } else {
            warningText.opacity = 0.0;
        }
    
        if (delayClock.getTime() >= delay_duration) {
            if (question_index >= questions_list.length) {
                continueRoutine = false;
            } else {
                waiting_next_question = false;
                timeout_warning = false;
    
                productImage.opacity = 1.0;
                warningText.opacity = 0.0;
                sliderCover.opacity = 0.0;
    
                leftAnchor.text = "Not at all";
                rightAnchor.text = "Very much";
                questionText.text = questions_list[question_index][1];
    
                let next_q_key = questions_list[question_index][0];
                let next_init_val = current_val;
                
                current_x = (((next_init_val - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * SLIDER_WIDTH) - (SLIDER_WIDTH / 2);
                
                sliderMarker.setPos([current_x, SLIDER_Y]);
                ratingValueText.text = "Rating: " + next_init_val.toFixed(1);
                
                trial_init[next_q_key] = next_init_val;
                questionClock.reset();
            }
        }
    }
    else {
        sliderCover.opacity = 0.0;
        warningText.opacity = 0.0;
        productImage.opacity = 1.0;
    
        leftAnchor.text = "Not at all";
        rightAnchor.text = "Very much";
    
        sliderMarker.setPos([current_x, SLIDER_Y]);
        ratingValueText.text = "Rating: " + current_val.toFixed(1);
    
        if (questionClock.getTime() >= TTIME_LIMIT) {
            let q_name = questions_list[question_index][0];
            trial_ratings[q_name] = null;
            trial_rts[q_name] = null;
    
            timeout_warning = true;
            delay_duration = warning_delay;
            question_index += 1;
            waiting_next_question = true;
            delayClock.reset();
        }
        else if (mouse_pressed && click_ready) {
            click_ready = false;
    
            let q_name = questions_list[question_index][0];
            trial_ratings[q_name] = current_val;
            trial_rts[q_name] = questionClock.getTime();
    
            timeout_warning = false;
            delay_duration = normal_delay;
            question_index += 1;
            waiting_next_question = true;
            delayClock.reset();
        }
    }
    
    if (t >= 0.0 && productImage.status === PsychoJS.Status.NOT_STARTED) {
      productImage.tStart = t;
      productImage.frameNStart = frameN;
      productImage.setAutoDraw(true);
    }
    
    if (t >= 0.0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      questionText.tStart = t;
      questionText.frameNStart = frameN;
      questionText.setAutoDraw(true);
    }
    
    if (t >= 0.0 && ratingValueText.status === PsychoJS.Status.NOT_STARTED) {
      ratingValueText.tStart = t;
      ratingValueText.frameNStart = frameN;
      ratingValueText.setAutoDraw(true);
    }
    
    if (t >= 0.0 && sliderCover.status === PsychoJS.Status.NOT_STARTED) {
      sliderCover.tStart = t;
      sliderCover.frameNStart = frameN;
      sliderCover.setAutoDraw(true);
    }
    
    if (t >= 0.0 && sliderLine.status === PsychoJS.Status.NOT_STARTED) {
      sliderLine.tStart = t;
      sliderLine.frameNStart = frameN;
      sliderLine.setAutoDraw(true);
    }
    
    if (t >= 0.0 && sliderMarker.status === PsychoJS.Status.NOT_STARTED) {
      sliderMarker.tStart = t;
      sliderMarker.frameNStart = frameN;
      sliderMarker.setAutoDraw(true);
    }
    
    for (const tick of sliderTicks) {
      if (t >= 0.0 && tick.status === PsychoJS.Status.NOT_STARTED) {
        tick.tStart = t;
        tick.frameNStart = frameN;
        tick.setAutoDraw(true);
      }
    }
    
    if (t >= 0.0 && ratingMouse.status === PsychoJS.Status.NOT_STARTED) {
      ratingMouse.tStart = t;
      ratingMouse.frameNStart = frameN;
      ratingMouse.status = PsychoJS.Status.STARTED;
      ratingMouse.mouseClock.reset();
      prevButtonState = ratingMouse.getPressed();
    }
    
    if (ratingMouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = ratingMouse.getPressed();
      if (!_mouseButtons.every((e,i) => (e == prevButtonState[i]))) {
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce((e, acc) => (e+acc)) > 0) {
          _mouseXYs = ratingMouse.getPos();
          ratingMouse.x.push(_mouseXYs[0]);
          ratingMouse.y.push(_mouseXYs[1]);
          ratingMouse.leftButton.push(_mouseButtons[0]);
          ratingMouse.midButton.push(_mouseButtons[1]);
          ratingMouse.rightButton.push(_mouseButtons[2]);
          ratingMouse.time.push(ratingMouse.mouseClock.getTime());
        }
      }
    }
    
    if (t >= 0.0 && leftAnchor.status === PsychoJS.Status.NOT_STARTED) {
      leftAnchor.tStart = t;
      leftAnchor.frameNStart = frameN;
      leftAnchor.setAutoDraw(true);
    }
    
    if (t >= 0.0 && rightAnchor.status === PsychoJS.Status.NOT_STARTED) {
      rightAnchor.tStart = t;
      rightAnchor.frameNStart = frameN;
      rightAnchor.setAutoDraw(true);
    }
    
    if (t >= 0.0 && warningText.status === PsychoJS.Status.NOT_STARTED) {
      warningText.tStart = t;
      warningText.frameNStart = frameN;
      warningText.setAutoDraw(true);
    }

    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;
    for (const thisComponent of ratingTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratingTrialRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of ratingTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    psychoJS.experiment.addData('ratingTrial.stopped', globalClock.getTime());

    for (const q of all_questions.map(x => x[0])) {
      psychoJS.experiment.addData(`rating_${q}`, (q in trial_ratings) ? trial_ratings[q] : "");
      psychoJS.experiment.addData(`rt_${q}`, (q in trial_rts) ? trial_rts[q] : "");
      psychoJS.experiment.addData(`init_${q}`, (q in trial_init) ? trial_init[q] : "");
    }

    psychoJS.experiment.addData('mouse.x', ratingMouse.x);
    psychoJS.experiment.addData('mouse.y', ratingMouse.y);
    psychoJS.experiment.addData('mouse.leftButton', ratingMouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', ratingMouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', ratingMouse.rightButton);
    psychoJS.experiment.addData('mouse.time', ratingMouse.time);

    routineTimer.reset();

    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  };
}
function memoryTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);

    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    memoryTrialClock.reset();
    routineTimer.reset();
    memoryTrialMaxDurationReached = false;

    show_memory = (memory_after_block === 1 && is_memory_trial_position === 1);
    memory_correct_product = "";

    if (!show_memory) {
      continueRoutine = false;
    } else {
      document.body.style.cursor = 'none';
      memory_correct_product = product_id;

      let wrong_options = all_products.filter(p => p !== memory_correct_product);

      function shuffleArray(array) {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }

      wrong_options = shuffleArray(wrong_options).slice(0, 2);
      memory_options = shuffleArray([memory_correct_product, ...wrong_options]);

      opt1Text.text = `1) ${memory_options[0]}`;
      opt2Text.text = `2) ${memory_options[1]}`;
      opt3Text.text = `3) ${memory_options[2]}`;

      memoryKey.keys = undefined;
      memoryKey.rt = undefined;
      _memoryKey_allKeys = [];
    }

    psychoJS.experiment.addData("memory_after_block", show_memory ? block_num : "");
    psychoJS.experiment.addData("memory_correct_product", show_memory ? memory_correct_product : "");

    memoryTrialMaxDuration = null;
    memoryWaitingNext = false;
    memoryTimeoutWarning = false;
    memoryQuestionClock = new util.Clock();   // fresh clock every routine
    memoryQuestionClock.reset();
    memoryDelayClock = new util.Clock();      // fresh clock every routine
    memoryDelayClock.reset();
    memoryWarningText.opacity = 0.0;
    
    memoryTrialComponents = [];
    memoryTrialComponents.push(memoryQuestion);
    memoryTrialComponents.push(opt1Text);
    memoryTrialComponents.push(opt2Text);
    memoryTrialComponents.push(opt3Text);
    memoryTrialComponents.push(memoryKey);
    memoryTrialComponents.push(memoryWarningText);

    for (const thisComponent of memoryTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    return Scheduler.Event.NEXT;
  };
}


function memoryTrialRoutineEachFrame() {
  return async function () {
    t = memoryTrialClock.getTime();
    frameN = frameN + 1;

    if (!show_memory) {
      return Scheduler.Event.NEXT;
    }

    if (memoryWaitingNext) {
      if (memoryTimeoutWarning) {
        memoryWarningText.opacity = 1.0;
      } else {
        memoryWarningText.opacity = 0.0;
      }

      if (memoryDelayClock.getTime() >= (memoryTimeoutWarning ? memoryWarningDelay : memoryNormalDelay)) {
        continueRoutine = false;
        routineForceEnded = true;  // prevent component loop from re-setting continueRoutine
      }
    } else {
      memoryWarningText.opacity = 0.0;

      if (memoryQuestionClock.getTime() >= 8.0) {
        memoryKey.keys = null;
        memoryKey.rt = null;
        memoryTimeoutWarning = true;
        memoryWaitingNext = true;
        memoryDelayClock = new util.Clock();  // reset delay clock at timeout moment
        memoryDelayClock.reset();
      }
    }

    if (t >= 0.0 && memoryQuestion.status === PsychoJS.Status.NOT_STARTED) {
      memoryQuestion.tStart = t;
      memoryQuestion.frameNStart = frameN;
      memoryQuestion.setAutoDraw(true);
    }

    if (t >= 0.0 && opt1Text.status === PsychoJS.Status.NOT_STARTED) {
      opt1Text.tStart = t;
      opt1Text.frameNStart = frameN;
      opt1Text.setAutoDraw(true);
    }

    if (t >= 0.0 && opt2Text.status === PsychoJS.Status.NOT_STARTED) {
      opt2Text.tStart = t;
      opt2Text.frameNStart = frameN;
      opt2Text.setAutoDraw(true);
    }

    if (t >= 0.0 && opt3Text.status === PsychoJS.Status.NOT_STARTED) {
      opt3Text.tStart = t;
      opt3Text.frameNStart = frameN;
      opt3Text.setAutoDraw(true);
    }

    if (t >= 0.0 && memoryWarningText.status === PsychoJS.Status.NOT_STARTED) {
      memoryWarningText.tStart = t;
      memoryWarningText.frameNStart = frameN;
      memoryWarningText.setAutoDraw(true);
    }

    if (t >= 0.0 && memoryKey.status === PsychoJS.Status.NOT_STARTED) {
      memoryKey.tStart = t;
      memoryKey.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { memoryKey.clock.reset(); });
      psychoJS.window.callOnFlip(function() { memoryKey.start(); });
      psychoJS.window.callOnFlip(function() { memoryKey.clearEvents(); });
    }

    if (memoryKey.status === PsychoJS.Status.STARTED && !memoryWaitingNext) {
      let theseKeys = memoryKey.getKeys({
        keyList: ['1', '2', '3'],
        waitRelease: false
      });
      _memoryKey_allKeys = _memoryKey_allKeys.concat(theseKeys);
      if (_memoryKey_allKeys.length > 0) {
        memoryKey.keys = _memoryKey_allKeys[_memoryKey_allKeys.length - 1].name;
        memoryKey.rt = _memoryKey_allKeys[_memoryKey_allKeys.length - 1].rt;
        memoryKey.duration = _memoryKey_allKeys[_memoryKey_allKeys.length - 1].duration;

        memoryTimeoutWarning = false;
        memoryWaitingNext = true;
        memoryDelayClock.reset();
      }
    }

    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;
    for (const thisComponent of memoryTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memoryTrialRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of memoryTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    if (show_memory) {
      psychoJS.experiment.addData('memory_key', memoryKey.keys);
      psychoJS.experiment.addData('memory_rt', memoryKey.rt);

      let chosenIdx = parseInt(memoryKey.keys) - 1;
      let chosenProduct = (chosenIdx >= 0 && chosenIdx < memory_options.length) ? memory_options[chosenIdx] : "";
      let memory_correct = (chosenProduct === memory_correct_product) ? 1 : 0;

      psychoJS.experiment.addData('memory_choice_product', chosenProduct);
      psychoJS.experiment.addData('memory_correct', memory_correct);
      psychoJS.experiment.addData('memory_option_1', memory_options[0]);
      psychoJS.experiment.addData('memory_option_2', memory_options[1]);
      psychoJS.experiment.addData('memory_option_3', memory_options[2]);
    } else {
      psychoJS.experiment.addData('memory_key', "");
      psychoJS.experiment.addData('memory_rt', "");
      psychoJS.experiment.addData('memory_choice_product', "");
      psychoJS.experiment.addData('memory_correct', "");
      psychoJS.experiment.addData('memory_option_1', "");
      psychoJS.experiment.addData('memory_option_2', "");
      psychoJS.experiment.addData('memory_option_3', "");
    }

    routineTimer.reset();

    if (typeof memoryKey !== 'undefined') {
      memoryKey.stop();
    }

    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  };
}


var thanksMaxDurationReached;
var _endKey_allKeys;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    thanksClock.reset();
    routineTimer.reset();
    thanksMaxDurationReached = false;
    endKey.keys = undefined;
    endKey.rt = undefined;
    _endKey_allKeys = [];
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    thanksComponents = [];
    thanksComponents.push(endText);
    thanksComponents.push(endKey);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    t = thanksClock.getTime();
    frameN = frameN + 1;
    
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      endText.tStart = t;
      endText.frameNStart = frameN;
      endText.setAutoDraw(true);
    }
    
    if (t >= 0.0 && endKey.status === PsychoJS.Status.NOT_STARTED) {
      endKey.tStart = t;
      endKey.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { endKey.clock.reset(); });
      psychoJS.window.callOnFlip(function() { endKey.start(); });
      psychoJS.window.callOnFlip(function() { endKey.clearEvents(); });
    }
    
    if (endKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKey.getKeys({
        keyList: ['space'],
        waitRelease: false
      });
      _endKey_allKeys = _endKey_allKeys.concat(theseKeys);
      if (_endKey_allKeys.length > 0) {
        endKey.keys = _endKey_allKeys[_endKey_allKeys.length - 1].name;
        endKey.rt = _endKey_allKeys[_endKey_allKeys.length - 1].rt;
        endKey.duration = _endKey_allKeys[_endKey_allKeys.length - 1].duration;
        continueRoutine = false;
      }
    }
    
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());

    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endKey.corr, level);
    }
    psychoJS.experiment.addData('endKey.keys', endKey.keys);
    if (typeof endKey.keys !== 'undefined') {
        psychoJS.experiment.addData('endKey.rt', endKey.rt);
        psychoJS.experiment.addData('endKey.duration', endKey.duration);
        routineTimer.reset();
    }

    endKey.stop();
    routineTimer.reset();
    
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function endLoopIteration(scheduler, snapshot) {
  return async function () {
    if (typeof snapshot !== 'undefined') {
      if (snapshot.finished) {
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
  if (s.includes('"') || s.includes(",") || s.includes("\n")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function convertRowsToCSV(rows, columns) {
  const header = columns.join(",");
  const lines = rows.map(row => columns.map(col => csvEscape(row[col])).join(","));
  return [header].concat(lines).join("\n");
}

async function uploadToDataPipe(csvText, filename) {
  const response = await fetch("https://pipe.jspsych.org/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      experimentID: DATAPIPE_EXPERIMENT_ID,
      filename: filename,
      data: csvText
    })
  });

  const result = await response.json();
  console.log("DataPipe response:", result);

  if (!response.ok || result.error) {
    throw new Error(result.error || result.message || "Unknown DataPipe error");
  }

  return result;
}
function saveCurrentTrialRow() {
  rowsForUpload.push({
    product_id: typeof product_id !== "undefined" ? product_id : "",
    version: typeof version !== "undefined" ? version : "",
    image_path: typeof image_path !== "undefined" ? image_path : "",
    taste: typeof taste !== "undefined" ? taste : "",
    taste_initMouse: typeof taste_initMouse !== "undefined" ? taste_initMouse : "",
    taste_RT: typeof taste_RT !== "undefined" ? taste_RT : "",
    health: typeof health !== "undefined" ? health : "",
    health_initMouse: typeof health_initMouse !== "undefined" ? health_initMouse : "",
    health_RT: typeof health_RT !== "undefined" ? health_RT : "",
    liking: typeof liking !== "undefined" ? liking : "",
    liking_initMouse: typeof liking_initMouse !== "undefined" ? liking_initMouse : "",
    liking_RT: typeof liking_RT !== "undefined" ? liking_RT : "",
    participant: expInfo["participant_ID"] || "",
    age: expInfo["age"] || "",
    trial_type: typeof trial_type !== "undefined" ? trial_type : "",
    correct_product: typeof correct_product !== "undefined" ? correct_product : "",
    memory_correct_product: typeof memory_correct_product !== "undefined" ? memory_correct_product : "",
    memory_chosen: typeof memory_chosen !== "undefined" ? memory_chosen : "",
    memory_accuracy: typeof memory_accuracy !== "undefined" ? memory_accuracy : "",
    memory_RT: typeof memory_RT !== "undefined" ? memory_RT : ""
  });
}
function makeUploadFilename() {
  const pid = expInfo["participant_ID"] || "noID";
  const dateStr = (expInfo["date"] || "nodate").split("_")[0];
  const rand = Math.random().toString(36).slice(2, 10);
  return `${pid}_${dateStr}_${rand}.csv`;
}
async function quitPsychoJS(message, isCompleted) {
  // Save any orphaned entry first
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }

  // Show a visible saving message
  document.body.innerHTML = `
    <div style="
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 80px;
      font-size: 28px;
      color: white;
      background: black;
      height: 100vh;
    ">
      Saving your data...<br><br>
      Please do not close this page.
    </div>
  `;

  try {
    const rows = psychoJS.experiment._trialsData || [];

    if (!rows.length) {
      throw new Error("No experiment rows found to upload.");
    }

    const columns = [...new Set(rows.flatMap(row => Object.keys(row)))];
    const csvText = convertRowsToCSV(rows, columns);
    const filename = makeUploadFilename();

    await uploadToDataPipe(csvText, filename);
    console.log("Upload successful:", filename);

    document.body.innerHTML = `
      <div style="
        font-family: Arial, sans-serif;
        text-align: center;
        padding-top: 80px;
        font-size: 28px;
        color: white;
        background: black;
        height: 100vh;
      ">
        Your data were saved successfully.<br><br>
        You may now close this page.
      </div>
    `;

    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    return Scheduler.Event.QUIT;

  } catch (err) {
    console.error("Upload failed:", err);

    document.body.innerHTML = `
      <div style="
        font-family: Arial, sans-serif;
        text-align: center;
        padding-top: 80px;
        font-size: 24px;
        color: white;
        background: black;
        height: 100vh;
      ">
        There was a problem saving your data.<br><br>
        Please contact the researcher.<br><br>
        Error: ${err.message}
      </div>
    `;

    return Scheduler.Event.QUIT;
  }
}
