// ─────────────────────────────────────────────────────────────
//  NovaDev content file
//  Everything visitors read lives here. Edit text, add missions,
//  or update links without touching any component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  alias: 'NovaDev',
  name: 'Joel',
  role: 'Compueter Science Student',
  location: 'Victoria, Australia',
  tagline: 'I build systems that work in the real world — then prove that they did.',
  rotating: [
    'home energy automation',
    'AI-assisted software',
    'Data analysation and visualisation',
    'Utilization of LLMs'
  ],
  github: 'NottNovi',
};

export const about = {
  paragraphs: [
    "I'm Joel — NovaDev. My favourite problems sit where I can have an impact on the physical world, and where I can see the results in real time",
    "Over the past months I've arranged home automation projects using Home Assistant, Created an AI-assisted email client, created an app where university students can communicate and built an email triage assistant.",
    "When it comes to working, I can be independent or collaborative, and I can work in a team or lead one. With knowledge of GIT, I can manage version control and collaborate effectively on projects. I have a strong understanding of programming languages such as Python, R and JavaScript. I am always eager to learn new technologies and frameworks.",
  ],
  principles: [
    { title: 'Resource first', text: 'Use what I have availible and think how I can improve the system to make it more efficient.' },
    { title: 'Verify the outcome', text: 'A app that is built is not proof. Physical results are and it needs to be ut into action and pitched.' },
    { title: 'Evidence over assumptions', text: 'Confirmed, observed, assumed and unknown are tracked separately.' },
  ],
};

// statusTone: 'live' | 'test' | 'design' | 'build' | 'complete'
// planet: two colours for the sphere gradient, optional ring
export const missions = [
  {
    id: 'hss1a',
    code: 'MISSION 01',
    name: 'Home Security System',
    planet: { name: 'Voltara', a: '#ffcf6b', b: '#ff6a3d', ring: true },
    status: 'Active - and running',
    statusTone: 'live',
    category: 'Security systems · Home Assistant',
    summary:
      'A project arrnaged to monitor and control the security of my home, including cameras, sensors, and alarms. It is designed to provide real-time alerts and remote access to ensure the safety of my property.',
    highlights: [
      'Use of motion, door, and window sensors to detect intrusions and trigger alarms',
      'Use of camera feeds for real-time monitoring',
      'Notification sent to user phone and dummy phone when an intrusion is detected',
      'Dummy phone will send Text message and call user phone if they do not respond to the notification or have internet access',

    ],
    stack: ['Home Assistant', 'YAML', 'Tasker'],
  },
  {
    id: 'cms1a',
    code: 'MISSION 02',
    name: 'Cleaning Automation System',
    planet: { name: 'Sweep-7', a: '#6ff3ff', b: '#1f6fd1', ring: true },
    status: 'Architecture complete',
    statusTone: 'design',
    category: 'Robotics · Supervisor architecture',
    summary:
      'A project that decides when the home cleaning robots may vacuum or mop — based on household modes like Guest, Gathering, Away and Holiday — while each robot keeps its own navigation and recovery logic.',
    highlights: [
      'Seven prioritised household modes, from Maintenance and Manual Override down to Normal',
      'Publishes policy entities that robot automations consume — the supervisor never drives a robot directly',
      'Policy entities designed to fail closed: unknown means “not allowed”',
    ],
    stack: ['Home Assistant', 'Systems design', 'Technical writing'],
  },
  {
    id: 'revomail',
    code: 'MISSION 03',
    name: 'RevoMail',
    planet: { name: 'Revo Prime', a: '#ff8fc7', b: '#c2185b', ring: false },
    status: 'In development',
    statusTone: 'build',
    category: 'Software · AI',
    summary:
      'An AI-assisted email client focused on helping you see what matters first, starting with automatic email priority classification.',
    highlights: [
      'Email priority classification feature in active development using GPT-4o',
      'Email summary feature in active development using GPT-4o',
      'Retrieval of Gmail and Calendar data using Google API and OAuth2',
      'Task extraction and management feature in active development using GPT-4o',
      'More details coming soon',
    ],
    stack: ['AI', 'Email', 'React', 'Python', 'Google API'],
  },
  {
    id: 'wvs-ml',
    code: 'MISSION 04',
    name: 'Predicting Trust in Institutions — World Values Survey ML',
    planet: { name: 'Datum', a: '#9dffb0', b: '#1b8a5a', ring: true },
    status: 'Mission complete',
    statusTone: 'complete',
    category: 'Data science · Machine learning · R',
    summary:
      'A classification study on a 20,000-response extract of the World Values Survey, predicting whether people report high or low confidence in parliament, trade unions and the police — and comparing five machine-learning techniques head to head.',
    highlights: [
      'Built a reproducible, seeded sample: 20,000 rows and 33 randomly selected survey variables',
      'Cleaned the data by recoding negative survey codes as missing, auditing missingness per variable against a 30% threshold, and keeping complete cases',
      'Dropped the high-cardinality Country factor, which Random Forest cannot handle, and recoded the targets as Low/High factors',
      'Trained 15 models: Decision Tree, Naive Bayes, Bagging, Boosting and Random Forest for each of the three targets, on a 70/30 train/test split',
      'Wrote a custom evaluation function for accuracy, precision, recall and F1 from each confusion matrix, then exported comparison tables per target',
    ],
    stack: ['R', 'caret', 'randomForest', 'adabag', 'e1071', 'tree'],
  },
  {
    id: 'email-triage',
    code: 'MISSION 05',
    name: 'Email Triage Assistant',
    planet: { name: 'Sortis', a: '#ffd36e', b: '#d9822b', ring: false },
    status: 'Working prototype',
    statusTone: 'test',
    category: 'AI · Automation · Node.js',
    summary:
      'A Node.js assistant that reads my unread Gmail and uses an OpenAI model to triage every message, sorting it by category and priority, flagging whether it needs a reply, and suggesting what to do next.',
    highlights: [
      'Connects to Gmail through Google OAuth 2.0 and the Gmail API to pull unread inbox messages',
      'Parses raw MIME payloads: walks nested message parts, decodes base64url bodies and extracts the plain-text content and headers',
      'Uses strict JSON-schema structured output with GPT-4.1-mini, so every email returns a category, a 1–5 priority, requires-response, a summary, a suggested action and a confidence score',
      'Prompts the model not to invent facts and to fall back to "unknown" or low confidence when it is unsure',
      'Keeps API keys out of the code with environment variables (dotenv)',
    ],
    stack: ['Node.js', 'OpenAI API', 'Gmail API', 'OAuth 2.0', 'JSON Schema'],
  },
  {
    id: 'schelling',
    code: 'MISSION 06',
    name: 'Misperception & Segregation — Schelling Model Simulation',
    planet: { name: 'Schelling', a: '#ff9b7a', b: '#6b3fd1', ring: true },
    status: 'Mission complete',
    statusTone: 'complete',
    category: 'Computational modelling · Simulation · Python',
    summary:
      'University final project (FIT3139, 2025) that extends Schelling’s classic segregation model to ask a question: what happens when people misjudge their own neighbourhood? I explored it with three different modelling techniques.',
    highlights: [
      'Markov chain: enumerated all 16 states of a 4-agent circular chain, built the swap-based transition matrix, and compared heatmaps with and without misperception',
      'Monte Carlo: agent-based simulation on a 30×30 wrap-around grid (Moore neighbourhood, 15% vacancy, 50% satisfaction threshold), with 25 trials per misperception rate to measure segregation scores',
      'Heuristic learning: gave each agent a “hesitation” value that adapts after every move, then compared no, moderate and strong learning rates',
      'Visualised the results with grid snapshots, transition-matrix heatmaps and box plots annotated with medians',
      'Parameterised the whole model (grid size, steps, trials, rates) so it can be scaled to the hardware, since a full run takes about 16 minutes',
    ],
    stack: ['Python', 'NumPy', 'Matplotlib', 'Seaborn', 'Markov chains', 'Monte Carlo'],
  },
];

export const architecture = {
  title: 'OurSmartHome Supervisor',
  motto: 'Supervisors decide what should happen. Authorised subsystems decide how it is safely executed.',
  domains: [
    { code: 'EMS1A', name: 'Energy' },
    { code: 'CMS1A', name: 'Cleaning' },
    { code: 'LMS1A', name: 'Lighting' },
    { code: 'CCS1A', name: 'Climate' },
    { code: 'SSS1A', name: 'Security' },
    { code: 'WMS1A', name: 'Water' },
    { code: 'HWS1A', name: 'Wellness' },
    { code: 'MMS1A', name: 'Media' },
    { code: 'AMS1A', name: 'Assets' },
    { code: 'HTS1A', name: 'Tasks' },
  ],
};

export const skills = {
  inner: ['Home Assistant', 'YAML', 'React', 'R'],
  middle: ['Systems architecture', 'Control logic', 'Git', 'Machine learning','Rstudio', 'Python', 'SQL'],
  outer: ['Root-cause analysis', 'Technical writing', 'AI-assisted dev', 'Dashboards', 'LLM APIs', 'Simulation'],
};

// Leave a value empty ('') to hide it from the Contact section.
export const contact = {
  email: 'joelpjoseph@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joel-george-48633a180/',
  github: 'https://github.com/NottNovi',
};
