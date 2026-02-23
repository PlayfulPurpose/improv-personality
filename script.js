(function(){
  var el = document.getElementById('js-check');
  if (el) el.textContent = 'JavaScript is working - totals will update as you type.';
})();

var QUESTIONS = [
  { q: "After a new format has been explained:", opts: [
    "I am the first one to try this new format.",
    "I first pose some critical questions on the exact meaning of this format.",
    "I calmly wait and see who will take the initiative.",
    "I set the scene and divide the characters."
  ]},
  { q: "At the beginning of a scene:", opts: [
    "I often define the main story lines.",
    "I follow the idea of my fellow improv actor.",
    "I quietly watch how the scene develops.",
    "I quickly find the character that I can lose myself in."
  ]},
  { q: "When acting together:", opts: [
    "I find it hard to go along with the ideas of my fellow actor.",
    "I like to follow the ideas of my fellow actor.",
    "I have just so many ideas that I leave little room for my fellow actors.",
    "I have many new ideas but I do not forget my fellow actors."
  ]},
  { q: "When improvising, I believe the following is true:", opts: [
    "you need plenty of guts and nerves.",
    "you need to think fast.",
    "good teamwork is important.",
    "it is often a coincidental concurrence of circumstances."
  ]},
  { q: "When I look at a scene:", opts: [
    "I enjoy the acting that I see.",
    "I have plenty of ideas how to improve it.",
    "I wonder what the scene will lead to.",
    "I want to jump in and join."
  ]},
  { q: "During a scene without any structure:", opts: [
    "I decide what we are going to play.",
    "I immerse in the acting without really knowing what will happen.",
    "I observe well what is being created.",
    "I first want to discuss what we are going to do."
  ]},
  { q: "During the most pleasant scene I played:", opts: [
    "people had to laugh a lot about my play.",
    "my fellow actor(s) and I were tuned in well.",
    "everything happened as I suspected.",
    "there was a logical structure in the scene."
  ]},
  { q: "Please, divide the five points over the following propositions:", opts: [
    "My focus lies mainly with the teamwork and I take the initiative.",
    "My focus lies mainly with the teamwork, but I do not necessarily have to be in the spotlights myself.",
    "I am full of ideas and use them to direct the scene.",
    "I am full of ideas but I do not necessarily have to be in the spotlights myself."
  ]},
  { q: "The following is my responsibility in a scene:", opts: [
    "to make my fellow actor the star of the show.",
    "to set up a nice scene.",
    "to entertain the audience.",
    "to guard the structure of a scene."
  ]},
  { q: "After a scene has ended:", opts: [
    "I like to give my opinion.",
    "I carefully listen to the opinion of the trainer.",
    "I want to know what the intentions were of my fellow actor.",
    "I would sometimes like to take over the role of the trainer."
  ]},
  { q: "Towards the end of a scene:", opts: [
    "I like to give the final joke or last remark.",
    "I steer the scene towards a suitable closing.",
    "I have ideas on how the scene should end, but I do not impose those views.",
    "a fellow actor usually comes up with a suitable closing."
  ]},
  { q: "Regarding the creation of characters:", opts: [
    "I put down a character that the scene needs.",
    "I think: act normal, do not exaggerate.",
    "I first take a good look at the character that my fellow actor has come up with.",
    "I like to play a character that leaves a big impression."
  ]},
  { q: "On stage:", opts: [
    "I enjoy getting all the attention.",
    "I calmly think about my next step.",
    "I keep the overview of the scene.",
    "I join in with the scene."
  ]},
  { q: "My focus lies mainly with:", opts: [
    "the play of my fellow actor.",
    "my own play.",
    "the course of the scene.",
    "playing according to the improvisation principles."
  ]},
  { q: "When a scene is stuck:", opts: [
    "I can analyze well why that happens.",
    "we should look calmly to what is being created next.",
    "the scene did not develop the way I suspected it to develop.",
    "I know a way to give the play a new twist."
  ]},
  { q: "When setting up a free scene, created by ourselves:", opts: [
    "I usually am the panel chairman.",
    "I contribute a lot of ideas.",
    "I first want to think of a plan.",
    "I listen carefully."
  ]}
];

var TALLY = [
  { a: 'P', b: 'R', c: 'A', d: 'D' },
  { a: 'D', b: 'A', c: 'R', d: 'P' },
  { a: 'R', b: 'A', c: 'D', d: 'P' },
  { a: 'P', b: 'D', c: 'A', d: 'R' },
  { a: 'A', b: 'D', c: 'R', d: 'P' },
  { a: 'D', b: 'P', c: 'A', d: 'R' },
  { a: 'P', b: 'A', c: 'D', d: 'R' },
  { a: 'P', b: 'A', c: 'D', d: 'R' },
  { a: 'A', b: 'D', c: 'P', d: 'R' },
  { a: 'R', b: 'A', c: 'P', d: 'D' },
  { a: 'P', b: 'D', c: 'R', d: 'A' },
  { a: 'D', b: 'R', c: 'A', d: 'P' },
  { a: 'P', b: 'R', c: 'D', d: 'A' },
  { a: 'A', b: 'P', c: 'D', d: 'R' },
  { a: 'R', b: 'A', c: 'D', d: 'P' },
  { a: 'D', b: 'P', c: 'R', d: 'A' }
];

var PROFILES = {
  P: {
    name: 'Principal',
    subtitle: 'lead character',
    strengths: [
      'I know how to set about my work',
      'I enjoy being in the spotlights',
      'I like to score!',
      'I dare to make mistakes',
      'I am enthusiastic',
      'I am powerful and convincing'
    ],
    however: [
      'I can come across as arrogant',
      'I can be overwhelming',
      'I leave little room for others',
      'I should think better before I act'
    ]
  },
  D: {
    name: 'Director',
    subtitle: '',
    strengths: [
      'I am independent',
      'I have my own opinion, that I defend in an open and straightforward way',
      'I have a vision that I do not hesitate to propagate',
      'I like having the overview of and control over situations',
      'I steer processes'
    ],
    however: [
      'I am very critical',
      'I can be a know-it-all',
      'I tend to impose my own views not be open to the opinions of others',
      'Often I think I know it better'
    ]
  },
  A: {
    name: 'Audience',
    subtitle: '',
    strengths: [
      'I am sensitive and have empathy',
      'I am focused on my colleagues',
      "I listen to other one's ideas",
      'I like to help others',
      'I observe well',
      'I am a good team player'
    ],
    however: [
      'I can be hesitant',
      'I often follow others',
      'I often have others kick me around',
      'I should stand up for myself more often'
    ]
  },
  R: {
    name: 'Reviewer',
    subtitle: '',
    strengths: [
      'I am a sober person',
      'I analyze',
      'I am rational',
      'I control my emotions',
      'I have a strong opinion',
      'I have a sharp judgment'
    ],
    however: [
      'I can be too critical',
      'I can be too careful',
      'I often wait and see which way the wind blows',
      'I tend to avoid conflicts',
      'I can be cold'
    ]
  }
};

function getSums() {
  var inputs = document.querySelectorAll('#form input[data-q]');
  var sums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < inputs.length; i++) {
    var inp = inputs[i];
    var q = parseInt(inp.getAttribute('data-q'), 10);
    if (q >= 0 && q < 16) {
      var val = parseInt(inp.value, 10) || 0;
      sums[q] += val;
    }
  }
  return sums;
}

function updateSumDisplays() {
  try {
    var sums = getSums();
    var els = document.querySelectorAll('.q-sum[data-q]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var q = parseInt(el.getAttribute('data-q'), 10);
      if (q >= 0 && q < 16) {
        var s = sums[q];
        el.textContent = 'Total: ' + s + ' / 5';
        el.classList.remove('ok', 'error');
        el.classList.add(s === 5 ? 'ok' : 'error');
      }
    }
    var inputs = document.querySelectorAll('.option-row input');
    for (var j = 0; j < inputs.length; j++) inputs[j].classList.remove('invalid');
    if (typeof updateNextButton === 'function') updateNextButton();
  } catch (e) { console.error('updateSumDisplays', e); }
}

function validate() {
  var sums = getSums();
  var bad = false;
  for (var i = 0; i < sums.length; i++) { if (sums[i] !== 5) { bad = true; break; } }
  if (bad) {
    var blocks = document.querySelectorAll('.question-block');
    for (var i = 0; i < blocks.length; i++) {
      if (sums[i] !== 5) {
        var inps = blocks[i].querySelectorAll('input');
        for (var k = 0; k < inps.length; k++) inps[k].classList.add('invalid');
      }
    }
    return false;
  }
  return true;
}

function tally() {
  var scores = { P: 0, A: 0, R: 0, D: 0 };
  var inputs = document.querySelectorAll('#form input[data-q][data-opt]');
  for (var i = 0; i < inputs.length; i++) {
    var inp = inputs[i];
    var q = parseInt(inp.getAttribute('data-q'), 10);
    var opt = inp.getAttribute('data-opt');
    var val = parseInt(inp.value, 10) || 0;
    var col = TALLY[q][opt];
    scores[col] += val;
  }
  return scores;
}

function getAxisScores(scores) {
  var x = scores.P + scores.A - scores.R - scores.D;
  var y = scores.P + scores.D - scores.A - scores.R;
  return { x: x, y: y };
}

function scaleTo50(x, y) {
  var maxAbs = 160;
  return {
    x: Math.max(-50, Math.min(50, (x / maxAbs) * 50)),
    y: Math.max(-50, Math.min(50, (y / maxAbs) * 50))
  };
}

function primaryProfile(sx, sy) {
  if (sx >= 0 && sy >= 0) return 'P';
  if (sx < 0 && sy >= 0) return 'D';
  if (sx < 0 && sy < 0) return 'R';
  return 'A';
}

function drawQuadrant(svg, sx, sy) {
  var w = 400, h = 400;
  var pad = 50;
  var cx = w / 2, cy = h / 2;
  function scale(v) { return (v / 50) * (Math.min(w, h) / 2 - pad); }

  var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', 'translate(' + cx + ',' + cy + ')');

  for (var i = -50; i <= 50; i += 10) {
    var s = scale(i);
    var lineV = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineV.setAttribute('x1', s);
    lineV.setAttribute('y1', -scale(50));
    lineV.setAttribute('x2', s);
    lineV.setAttribute('y2', scale(50));
    lineV.setAttribute('stroke', '#e8e8e4');
    lineV.setAttribute('stroke-width', i === 0 ? '1.5' : '0.5');
    g.appendChild(lineV);
    var lineH = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineH.setAttribute('x1', -scale(50));
    lineH.setAttribute('y1', s);
    lineH.setAttribute('x2', scale(50));
    lineH.setAttribute('y2', s);
    lineH.setAttribute('stroke', '#e8e8e4');
    lineH.setAttribute('stroke-width', i === 0 ? '1.5' : '0.5');
    g.appendChild(lineH);
  }

  var axH = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axH.setAttribute('x1', -scale(50));
  axH.setAttribute('y1', 0);
  axH.setAttribute('x2', scale(50));
  axH.setAttribute('y2', 0);
  axH.setAttribute('stroke', '#333');
  axH.setAttribute('stroke-width', '1.5');
  g.appendChild(axH);
  var axV = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axV.setAttribute('x1', 0);
  axV.setAttribute('y1', -scale(50));
  axV.setAttribute('x2', 0);
  axV.setAttribute('y2', scale(50));
  axV.setAttribute('stroke', '#333');
  axV.setAttribute('stroke-width', '1.5');
  g.appendChild(axV);

  var axisLabels = [
    { x: -scale(50) - 38, y: 4, t: 'Individually', anchor: 'end' },
    { x: scale(50) + 8, y: 4, t: 'Together', anchor: 'start' },
    { x: -28, y: -scale(50) + 4, t: 'Submissive', anchor: 'end' },
    { x: -24, y: scale(50) + 14, t: 'Dominant', anchor: 'end' }
  ];
  for (var i = 0; i < axisLabels.length; i++) {
    var L = axisLabels[i];
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', L.x);
    text.setAttribute('y', L.y);
    text.setAttribute('text-anchor', L.anchor || 'start');
    text.setAttribute('fill', '#333');
    text.setAttribute('font-size', '11');
    text.setAttribute('font-family', 'Poppins, sans-serif');
    text.textContent = L.t;
    g.appendChild(text);
  }

  var quadLabels = [
    { x: scale(25), y: -scale(25), t: 'THE PRINCIPAL' },
    { x: -scale(25), y: -scale(25), t: 'THE DIRECTOR' },
    { x: -scale(25), y: scale(25), t: 'THE REVIEWER' },
    { x: scale(25), y: scale(25), t: 'THE AUDIENCE' }
  ];
  for (var i = 0; i < quadLabels.length; i++) {
    var Q = quadLabels[i];
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', Q.x);
    text.setAttribute('y', Q.y);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#5c5c5c');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-family', 'Poppins, sans-serif');
    text.textContent = Q.t;
    g.appendChild(text);
  }

  var px = scale(sx), py = -scale(sy);
  var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', px);
  dot.setAttribute('cy', py);
  dot.setAttribute('r', '8');
  dot.setAttribute('fill', '#2d5a4a');
  dot.setAttribute('stroke', '#fff');
  dot.setAttribute('stroke-width', '2');
  g.appendChild(dot);

  svg.innerHTML = '';
  svg.appendChild(g);
}

function showResults() {
  if (!validate()) {
    alert('Please assign exactly 5 points per question (across a, b, c and d) before viewing results.');
    return;
  }
  var scores = tally();
  var axes = getAxisScores(scores);
  var scaled = scaleTo50(axes.x, axes.y);
  var primary = primaryProfile(scaled.x, scaled.y);

  document.getElementById('score-P').textContent = scores.P;
  document.getElementById('score-A').textContent = scores.A;
  document.getElementById('score-R').textContent = scores.R;
  document.getElementById('score-D').textContent = scores.D;
  document.getElementById('x-axis').textContent = axes.x + ' (approx ' + Math.round(scaled.x) + ' on grid)';
  document.getElementById('y-axis').textContent = axes.y + ' (approx ' + Math.round(scaled.y) + ' on grid)';
  var sub = PROFILES[primary].subtitle ? ' (' + PROFILES[primary].subtitle + ')' : '';
  document.getElementById('primary-profile').textContent = PROFILES[primary].name + sub;

  drawQuadrant(document.getElementById('quadrant-svg'), scaled.x, scaled.y);

  var p = PROFILES[primary];
  var html = '<h3>I am characterized as ' + p.name + (p.subtitle ? ' (' + p.subtitle + ')' : '') + '</h3>';
  html += '<p>This means the following:</p><ul>';
  for (var i = 0; i < p.strengths.length; i++) html += '<li>' + p.strengths[i] + '</li>';
  html += '</ul><p class="however">However…</p><ul>';
  for (var j = 0; j < p.however.length; j++) html += '<li>' + p.however[j] + '</li>';
  html += '</ul>';
  html += '<p><em>This model is situation-based: your profile can depend on the situation and your fellow actors. One profile is not better than another.</em></p>';
  html += '<h3 class="other-profiles-heading">The other profiles</h3>';
  html += '<p class="other-profiles-intro">Here are the other three styles in the model so you can see the full picture.</p>';
  var keys = ['P', 'D', 'A', 'R'];
  for (var k = 0; k < keys.length; k++) {
    var key = keys[k];
    if (key === primary) continue;
    var other = PROFILES[key];
    html += '<div class="profile-card other-profile">';
    html += '<h4>' + other.name + (other.subtitle ? ' (' + other.subtitle + ')' : '') + '</h4>';
    html += '<p>This means the following:</p><ul>';
    for (var i = 0; i < other.strengths.length; i++) html += '<li>' + other.strengths[i] + '</li>';
    html += '</ul><p class="however">However…</p><ul>';
    for (var j = 0; j < other.however.length; j++) html += '<li>' + other.however[j] + '</li>';
    html += '</ul></div>';
  }
  document.getElementById('profile-content').innerHTML = html;

  document.getElementById('questionnaire').style.display = 'none';
  document.getElementById('results').classList.add('visible');
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function backToForm() {
  document.getElementById('results').classList.remove('visible');
  document.getElementById('questionnaire').style.display = 'block';
}

var currentStep = 1;
var totalSteps = 16;

function goToStep(step) {
  if (step < 1 || step > totalSteps) return;
  currentStep = step;
  var steps = document.querySelectorAll('.question-step');
  for (var i = 0; i < steps.length; i++) {
    var s = parseInt(steps[i].getAttribute('data-step'), 10);
    if (s === step) {
      steps[i].classList.add('active');
    } else {
      steps[i].classList.remove('active');
    }
  }
  var prevBtn = document.getElementById('prev-btn');
  if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : '';
  var nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.textContent = step === totalSteps ? 'See my results' : 'Next';
  }
  var ind = document.getElementById('step-indicator');
  if (ind) ind.textContent = 'Question ' + step + ' of ' + totalSteps;
  updateNextButton();
}

function updateNextButton() {
  var nextBtn = document.getElementById('next-btn');
  if (!nextBtn) return;
  var sums = getSums();
  var currentSum = currentStep >= 1 && currentStep <= 16 ? sums[currentStep - 1] : 0;
  nextBtn.disabled = currentSum !== 5;
}

function onNextClick() {
  if (currentStep === totalSteps) {
    showResults();
  } else {
    goToStep(currentStep + 1);
  }
}

function onPrevClick() {
  if (currentStep > 1) goToStep(currentStep - 1);
}

function init() {
  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('input', updateSumDisplays);
    form.addEventListener('change', updateSumDisplays);
  }
  var nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', onNextClick);
    nextBtn.disabled = true;
  }
  var prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', onPrevClick);
    prevBtn.style.display = 'none';
  }
  var back = document.getElementById('back-link');
  if (back) {
    back.addEventListener('click', function(e) {
      e.preventDefault();
      backToForm();
    });
  }
  goToStep(1);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
