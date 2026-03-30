import { renderAppLayout } from "./components/layout.js";

document.getElementById("app").innerHTML = renderAppLayout();

let currentLang = 'hi';
         
          const translations = {
              en: {
                  questionnaireTitle: "Health Assessment",
                  questionnaireSubtitle: "Answer these questions to help assess your respiratory health",
                  preliminaryTitle: "Preliminary Assessment",
                  back: "Back",
                  next: "Next",
                  skip: "Skip questionnaire",
                  continue: "Continue to AI Safety Analysis",
                  restartLink: "Start New Assessment",
                  uploadText: "Tap to record cough sample",
                  uploadHint: "Hold 10 seconds for best results • 44.1kHz sample rate",
                  recordBtn: "Record Cough",
                  recording: "Recording...",
                  analyzing: "Analyzing cough patterns...",
                  confidenceLabel: "confidence",
                  riskBadge: "High risk",
                  diseaseCategory: "Occupational lung disease",
                  mainFindingPrefix: "Based on your health questionnaire and cough analysis, you may have ",
                  mainFindingSuffix: ".",
                  warningText: "Please consult a healthcare professional for proper diagnosis and treatment.",
                  disclaimer: "<strong>Not a medical diagnosis.</strong> This model is a feature extractor — results are statistical signals only and must be reviewed by a qualified medical professional.",
                  preliminaryMessage: "Based on your responses, you may be experiencing symptoms consistent with Occupational Asthma. We recommend consulting with a healthcare professional for proper evaluation.",
                  featureLabels: ["Cough freq.", "Wheeze detected", "Expiratory phase"],
                  similarityLabel: "Similarity to training positives",
                  questionNumber: "Question",
                  yes: "Yes",
                  no: "No",
                  aiTitle: "AI Safety Analysis",
                  aiSubtitle: "Analyze worker scan and material exposure risks",
                  workerHealth: "Worker Health Analysis",
                  materials: "Material Analysis",
                  location: "Location & Environment",
                  worksiteVideo: "Site Context",
                  recordYourself: "Record your full body for scan",
                  recordHint: "Turn on location, stand back, and choose the camera before starting.",
                  takePhoto: "Take Photo of Material",
                  materialHint: "Open the camera, capture a photo, and add more if needed.",
                  recordSite: "Record Worksite Video",
                  siteHint: "GPS location will be captured automatically",
                  openCamera: "Open Camera",
                  addMorePhotos: "Add More",
                  clearPhotos: "Clear All",
                  recordingInProgress: "Recording...",
                  gettingLocation: "Getting GPS location...",
                  photoCaptured: "Photo Captured",
                  videoCaptured: "Video Captured",
                  retake: "Retake",
                  workEnvironment: "Work Environment",
                  dusty: "Dusty (Cement/Construction)",
                  mining: "Mining",
                  indoor: "Indoor/Factory",
                  outdoor: "Outdoor/Open Air",
                  weather: "Weather Condition",
                  normal: "Normal",
                  rainy: "Rainy",
                  hot: "Hot",
                  humid: "Humid",
                  worksiteType: "Worksite Type",
                  construction: "Construction",
                  miningSite: "Mining",
                  factory: "Factory",
                  general: "General Industrial",
                  getResults: "Get Analysis Results",
                  confidenceScore: "Confidence: 78%",
                  riskSummary: "Risk Summary",
                  healthRisk: "Health Risk",
                  materialRisk: "Material Risk",
                  environmentRisk: "Environment Risk",
                  overallRisk: "Overall Risk",
                  detectedIssues: "⚠️ Detected Issues",
                  recommendedPrecautions: "🛡️ Recommended Precautions",
                  detailedGuideTitle: "Detailed Safety Guide",
                  immediateAlert: "Immediate Danger - Multiple hazards detected!",
                  cautionAlert: "Caution - Some hazards detected",
                  safeAlert: "Safe - Minimal hazards detected",
                  backToQuestionnaire: "Back to Health Assessment",
                  proceedCough: "Proceed to Cough Recording",
                  helmet: "Helmet",
                  gloves: "Gloves",
                  mask: "N95 Mask",
                  boots: "Safety Boots",
                  goggles: "Safety Goggles",
                  vest: "High-vis Vest",
                  workerHealthSubtitle: "Record your full body for scan",
                  materialsSubtitle: "Take one or more photos of the materials you are working with",
                  worksiteSubtitle: "Record worksite video with GPS location",
                  nextMaterial: "Next: Material Analysis",
                  nextWorksite: "Next: Worksite Analysis",
                  backToWorker: "Back",
                  backToMaterial: "Back",
                  backToWorksite: "Back",
                  analysisComplete: "Analysis Complete",
                  analysisCompleteSubtitle: "Here are your safety analysis results",
                  questions: [
                      "Do you often have coughing that lasts more than 2 weeks?",
                      "Do you experience shortness of breath while working?",
                      "Do you feel chest tightness or wheezing during or after work?",
                      "Do your symptoms improve when you are away from work (like weekends/holidays)?",
                      "Do you work in dusty, smoky, or chemical-exposed environments?",
                      "Do you use protective equipment (mask/respirator) regularly at work?",
                      "Have you ever been diagnosed with asthma or any lung disease?",
                      "Do you frequently feel tired or weak without clear reason?",
                      "Have you had fever or night sweats recently?",
                      "Have you noticed any unexplained weight loss?",
                      "Do you cough up blood or thick mucus?",
                      "Have you been in close contact with someone diagnosed with TB?",
                      "Do you work in poorly ventilated or closed spaces?",
                      "Do you smoke or are you exposed to secondhand smoke regularly?",
                      "Have your breathing problems increased over time while working in this job?"
                  ]
              },
              hi: {
                  questionnaireTitle: "स्वास्थ्य मूल्यांकन",
                  questionnaireSubtitle: "अपनी श्वसन स्वास्थ्य का मूल्यांकन करने में मदद करने के लिए इन प्रश्नों के उत्तर दें",
                  preliminaryTitle: "प्रारंभिक मूल्यांकन",
                  back: "पीछे",
                  next: "अगला",
                  skip: "प्रश्नावली छोड़ें",
                  continue: "AI सुरक्षा विश्लेषण जारी रखें",
                  restartLink: "नया मूल्यांकन शुरू करें",
                  uploadText: "खांसी का नमूना रिकॉर्ड करने के लिए टैप करें",
                  uploadHint: "सर्वोत्तम परिणाम के लिए 10 सेकंड तक रखें • 44.1kHz नमूना दर",
                  recordBtn: "खांसी रिकॉर्ड करें",
                  recording: "रिकॉर्डिंग...",
                  analyzing: "खांसी पैटर्न का विश्लेषण कर रहे हैं...",
                  confidenceLabel: "विश्वास",
                  riskBadge: "उच्च जोखिम",
                  diseaseCategory: "व्यावसायिक फेफड़ा रोग",
                  mainFindingPrefix: "आपके स्वास्थ्य प्रश्नावली और खांसी विश्लेषण के आधार पर, आपको हो सकता है ",
                  mainFindingSuffix: "।",
                  warningText: "कृपया उचित निदान और उपचार के लिए एक स्वास्थ्य देखभाल पेशेवर से परामर्श करें।",
                  disclaimer: "<strong>एक चिकित्सा निदान नहीं।</strong> यह मॉडल एक सुविधा निकालने वाला है — परिणाम केवल सांख्यिकीय संकेत हैं और इन्हें एक योग्य चिकित्सा पेशेवर द्वारा समीक्षा की जानी चाहिए।",
                  preliminaryMessage: "आपके उत्तरों के आधार पर, आपको व्यावसायिक अस्थमा के लक्षण हो सकते हैं। हम अनुशंसा करते हैं कि आप उचित मूल्यांकन के लिए एक स्वास्थ्य देखभाल पेशेवर से परामर्श करें।",
                  featureLabels: ["खांसी आवृत्ति", "सिरदर्द का पता चला", "श्वास निकास चरण"],
                  similarityLabel: "प्रशिक्षण सकारात्मकताओं के साथ समानता",
                  questionNumber: "प्रश्न",
                  yes: "हाँ",
                  no: "नहीं",
                  aiTitle: "AI सुरक्षा विश्लेषण",
                  aiSubtitle: "शरीर स्कैन और सामग्री जोखिम का विश्लेषण करें",
                  workerHealth: "श्रमिक स्वास्थ्य विश्लेषण",
                  materials: "सामग्री विश्लेषण",
                  location: "स्थान और वातावरण",
                  worksiteVideo: "कार्यस्थल वीडियो विश्लेषण",
                  recordYourself: "स्कैन के लिए पूरे शरीर को रिकॉर्ड करें",
                  recordHint: "लोकेशन चालू करें, थोड़ा पीछे खड़े हों, और कैमरा चुनें।",
                  takePhoto: "सामग्री की फोटो लें",
                  materialHint: "कैमरा खोलें, फोटो लें, और जरूरत हो तो और फोटो जोड़ें।",
                  openCamera: "कैमरा खोलें",
                  addMorePhotos: "और फोटो जोड़ें",
                  clearPhotos: "सब साफ करें",
                  recordSite: "कार्यस्थल वीडियो रिकॉर्ड करें",
                  siteHint: "GPS स्थान स्वचालित रूप से कैप्चर किया जाएगा",
                  recordingInProgress: "रिकॉर्डिंग...",
                  gettingLocation: "GPS स्थान प्राप्त कर रहे हैं...",
                  photoCaptured: "फोटो कैप्चर किया गया",
                  videoCaptured: "वीडियो कैप्चर किया गया",
                  retake: "फिर से लें",
                  workEnvironment: "कार्य वातावरण",
                  dusty: "धूल भरा (सीमेंट/निर्माण)",
                  mining: "खनन",
                  indoor: "अंदर/कारखाना",
                  outdoor: "बाहर/खुली हवा",
                  weather: "मौसम की स्थिति",
                  normal: "सामान्य",
                  rainy: "बारिश",
                  hot: "गर्म",
                  humid: "आर्द्र",
                  worksiteType: "कार्यस्थल का प्रकार",
                  construction: "निर्माण",
                  miningSite: "खनन",
                  factory: "कारखाना",
                  general: "सामान्य औद्योगिक",
                  getResults: "विश्लेषण परिणाम प्राप्त करें",
                  confidenceScore: "विश्वास: 78%",
                  riskSummary: "जोखिम सारांश",
                  healthRisk: "स्वास्थ्य जोखिम",
                  materialRisk: "सामग्री जोखिम",
                  environmentRisk: "पर्यावरण जोखिम",
                  overallRisk: "समग्र जोखिम",
                  detectedIssues: "⚠️ पाए गए मुद्दे",
                  recommendedPrecautions: "🛡️ अनुशंसित सावधानियां",
                  detailedGuideTitle: "विस्तृत सुरक्षा गाइड",
                  immediateAlert: "तत्काल खतरा - कई खतरे पाए गए!",
                  cautionAlert: "सावधानी - कुछ खतरे पाए गए",
                  safeAlert: "सुरक्षित - न्यूनतम खतरे पाए गए",
                  backToQuestionnaire: "स्वास्थ्य मूल्यांकन पर वापस जाएं",
                  proceedCough: "खांसी रिकॉर्डिंग पर आगे बढ़ें",
                  helmet: "हेलमेट",
                  gloves: "दस्ताने",
                  mask: "N95 मास्क",
                  boots: "सेफ्टी बूट्स",
                  goggles: "सेफ्टी गॉगल्स",
                  vest: "हाई-विज वेस्ट",
                  workerHealthSubtitle: "स्कैन के लिए पूरे शरीर को रिकॉर्ड करें",
                  materialsSubtitle: "जिन सामग्रियों के साथ आप काम कर रहे हैं उनकी एक या अधिक फोटो लें",
                  worksiteSubtitle: "GPS स्थान के साथ कार्यस्थल वीडियो रिकॉर्ड करें",
                  nextMaterial: "अगला: सामग्री विश्लेषण",
                  nextWorksite: "अगला: कार्यस्थल विश्लेषण",
                  backToWorker: "पीछे",
                  backToMaterial: "पीछे",
                  backToWorksite: "पीछे",
                  analysisComplete: "विश्लेषण पूर्ण",
                  analysisCompleteSubtitle: "यह आपके सुरक्षा विश्लेषण के परिणाम हैं",
                  questions: [
                      "क्या आपको अक्सर 2 हफ्ते से अधिक समय तक खांसी होती है?",
                      "क्या आपको काम करते समय सांस की तकलीफ महसूस होती है?",
                      "क्या आपको काम के दौरान या बाद में सीने में कसावट या घरघराहट महसूस होती है?",
                      "क्या आपके लक्षण काम से दूर होने पर सुधरते हैं (जैसे वीकेंड/छुट्टियों पर)?",
                      "क्या आप धुंधले, धुएँ वाले या रसायनों के संपर्क वाले वातावरण में काम करते हैं?",
                      "क्या आप काम पर सुरक्षा उपकरण (मास्क/रेस्पिरेटर) का नियमित रूप से उपयोग करते हैं?",
                      "क्या आपको कभी अस्थमा या कोई फेफड़ा रोग का निदान किया गया है?",
                      "क्या आपको स्पष्ट कारण के बिना अक्सर थकान या कमजोरी महसूस होती है?",
                      "क्या आपको हाल ही में बुखार या रात को पसीना आया है?",
                      "क्या आपने कोई अस्पष्टीकृत वजन कमी देखी है?",
                      "क्या आप खांसी के साथ खून या गाढ़ा बलगम निकालते हैं?",
                      "क्या आप क्षय रोग से ग्रस्त किसी व्यक्ति के निकट संपर्क में आए हैं?",
                      "क्या आप खराब वेंटिलेशन वाले या बंद स्थानों में काम करते हैं?",
                      "क्या आप धूम्रपान करते हैं या आपको नियमित रूप से द्वितीयक धूम्रपान के संपर्क में रहने को मिलता है?",
                      "क्या इस काम करते समय आपकी सांस की समस्याएं समय के साथ बढ़ी हैं?"
                  ]
              }
          };
         
         // Initialize questions array - will be updated when language changes
         let questions = [];
        
        function initializeQuestions() {
            questions = [
                { id: 1, text: translations[currentLang].questions[0] },
                { id: 2, text: translations[currentLang].questions[1] },
                { id: 3, text: translations[currentLang].questions[2] },
                { id: 4, text: translations[currentLang].questions[3] },
                { id: 5, text: translations[currentLang].questions[4] },
                { id: 6, text: translations[currentLang].questions[5] },
                { id: 7, text: translations[currentLang].questions[6] },
                { id: 8, text: translations[currentLang].questions[7] },
                { id: 9, text: translations[currentLang].questions[8] },
                { id: 10, text: translations[currentLang].questions[9] },
                { id: 11, text: translations[currentLang].questions[10] },
                { id: 12, text: translations[currentLang].questions[11] },
                { id: 13, text: translations[currentLang].questions[12] },
                { id: 14, text: translations[currentLang].questions[13] },
                { id: 15, text: translations[currentLang].questions[14] }
            ];
        }

        let currentQuestion = 0;
        let answers = {};

        function renderQuestions() {
            const container = document.getElementById('questionsContainer');
            container.innerHTML = '';
            
            const question = questions[currentQuestion];
            const card = document.createElement('div');
            card.className = 'question-card';
            card.innerHTML = `
                <div class="question-number">${translations[currentLang].questionNumber} ${question.id} of ${questions.length}</div>
                <div class="question-text">${question.text}</div>
                <div class="answer-buttons">
                    <button class="answer-btn ${answers[question.id] === true ? 'selected' : ''}" onclick="selectAnswer(${question.id}, true)">${translations[currentLang].yes}</button>
                    <button class="answer-btn ${answers[question.id] === false ? 'selected' : ''}" onclick="selectAnswer(${question.id}, false)">${translations[currentLang].no}</button>
                </div>
            `;
            container.appendChild(card);
            
            updateProgress();
            updateNavButtons();
        }

        function selectAnswer(questionId, value) {
            answers[questionId] = value;
            renderQuestions();
        }

        function updateProgress() {
            const progress = ((currentQuestion + 1) / questions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        function updateNavButtons() {
            const backBtn = document.getElementById('backBtn');
            const nextBtn = document.getElementById('nextBtn');
            const skipLink = document.getElementById('skipLink');
            
            backBtn.classList.toggle('hidden', currentQuestion === 0);
            skipLink.classList.toggle('hidden', currentQuestion > 0);
            
            nextBtn.textContent = currentQuestion === questions.length - 1 ? translations[currentLang].continue : translations[currentLang].next;
            nextBtn.disabled = answers[questions[currentQuestion].id] === undefined;
            
            backBtn.textContent = translations[currentLang].back;
            skipLink.textContent = translations[currentLang].skip;
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                renderQuestions();
            } else {
                finishQuestionnaire();
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestions();
            }
        }

        function skipQuestionnaire() {
            answers = {};
            for (let q of questions) {
                answers[q.id] = null;
            }
            finishQuestionnaire();
        }

        function evaluateConditions() {
            // Always return asthma for simplicity
            return {
                condition: "Occupational Asthma",
                risk: "high",
                message: "Based on your responses, you may be experiencing symptoms consistent with Occupational Asthma. We recommend consulting with a healthcare professional for proper evaluation."
            };
        }

        function finishQuestionnaire() {
            document.getElementById('questionnaireSection').classList.add('hidden');
            goToCoughRecording();
            
            const result = evaluateConditions();
            if (result) {
                document.getElementById('preliminaryResult').classList.remove('hidden');
                document.getElementById('preliminaryText').innerHTML = translations[currentLang].preliminaryMessage;
            }
            
            updateQuestionnaireHeader();
        }
        
        function updateQuestionnaireHeader() {
            document.querySelector('.questionnaire-title').textContent = translations[currentLang].questionnaireTitle;
            document.querySelector('.questionnaire-subtitle').textContent = translations[currentLang].questionnaireSubtitle;
            document.querySelector('.preliminary-title').textContent = translations[currentLang].preliminaryTitle;
        }

        function applyStaticTranslations() {
            document.querySelectorAll('[data-i18n]').forEach((node) => {
                const key = node.getAttribute('data-i18n');
                const value = translations[currentLang][key];
                if (typeof value === 'string') {
                    node.textContent = value;
                }
            });
        }

        function startQuestionnaire() {
            currentQuestion = 0;
            answers = {};
            initializeQuestions(); // Initialize questions based on current language
            applyStaticTranslations();
            updateLanguageUI(); // Update language selector UI
            updateQuestionnaireHeader(); // Update questionnaire header text
            document.getElementById('questionnaireSection').classList.remove('hidden');
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
            document.getElementById('preliminaryResult').classList.add('hidden');
            renderQuestions();
        }

        function generateWaveform() {
            const waveform = document.getElementById('waveform');
            waveform.innerHTML = '';
            const bars = 100;
            for (let i = 0; i < bars; i++) {
                const bar = document.createElement('div');
                bar.className = 'waveform-bar';
                // Create cough pattern - higher amplitude in middle sections
                let height;
                if (i > 20 && i < 35) height = 60 + Math.random() * 40;
                else if (i > 45 && i < 60) height = 50 + Math.random() * 40;
                else if (i > 70 && i < 85) height = 40 + Math.random() * 30;
                else height = 10 + Math.random() * 20;
                
                bar.style.height = height + '%';
                bar.style.animationDelay = (i * 0.02) + 's';
                waveform.appendChild(bar);
            }
        }

        function startRecording() {
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('recordingSection').classList.remove('hidden');

            clearInterval(coughCountdown);
            coughCountdown = runCountdown(document.getElementById('timer'), 10, showAnalyzing);
        }

        function showAnalyzing() {
            document.getElementById('recordingSection').classList.add('hidden');
            document.getElementById('analyzingSection').classList.remove('hidden');
            
            setTimeout(() => {
                showResults();
            }, 2000);
        }

        function showResults() {
            document.getElementById('analyzingSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.remove('hidden');
            applyStaticTranslations();
            generateWaveform();
            
            // Update timestamp
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
            document.getElementById('timestamp').textContent = timeString;

            // Update results based on questionnaire assessment
            const assessment = evaluateConditions();
            if (assessment) {
                document.querySelector('.disease-name').textContent = translations[currentLang].diseaseCategory; // Using occupational lung disease category as condition
                const badge = document.querySelector('.badge');
                badge.textContent = translations[currentLang].riskBadge;
                badge.style.background = 'rgba(239, 68, 68, 0.15)';
                badge.style.color = '#ef4444';
                badge.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                document.querySelector('.main-finding').innerHTML = translations[currentLang].mainFindingPrefix + '<span class="disease-name">Occupational Asthma</span>' + translations[currentLang].mainFindingSuffix;
                document.querySelector('.warning-text').textContent = translations[currentLang].warningText;
            }

            // Show questionnaire restart option
            const headerRight = document.querySelector('.header-right');
            if (!document.getElementById('restartLink')) {
                const restartLink = document.createElement('button');
                restartLink.id = 'restartLink';
                restartLink.textContent = translations[currentLang].restartLink;
                restartLink.style.cssText = 'background: none; border: none; color: #f59e0b; cursor: pointer; font-size: 13px; margin-left: 16px; text-decoration: underline;';
                restartLink.onclick = startQuestionnaire;
                headerRight.appendChild(restartLink);
            }
        }

        function setLanguage(lang) {
            currentLang = lang;
            // Update active state
            document.getElementById('lang-en').classList.toggle('active', lang === 'en');
            document.getElementById('lang-hi').classList.toggle('active', lang === 'hi');
            // Restart questionnaire with new language
            startQuestionnaire();
        }

        function updateLanguageUI() {
            document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
            document.getElementById('lang-hi').classList.toggle('active', currentLang === 'hi');
        }

        // AI Analysis Functions
        // Recording state variables
        let workerStream = null;
        let materialStream = null;
        let capturedMaterialData = null;
        let capturedMaterialPhotos = [];
        let currentGPSLocation = null;
        let mockDangerMode = false;
        let materialCaptureInProgress = false;
        let coughCountdown = null;
        let workerCountdown = null;
        let workerCameraReady = false;
        let workerFacingMode = 'environment';

        // Worker Health Video Recording
        // State tracking
        let workerVideoRecorded = false;
        let materialPhotoCaptured = false;

        function getCameraSvg() {
            return (
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
                '<path d="M15 10V6a3 3 0 0 0-6 0v4"/>' +
                '<rect x="6" y="10" width="12" height="10" rx="2"/>' +
                '<path d="M18 13h2l2-2v8l-2-2h-2"/>' +
                '</svg>');
        }

        function getPhotoSvg() {
            return (
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
                '<path d="M4 8h3l2-2h6l2 2h3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"/>' +
                '<circle cx="12" cy="13" r="3.5"/>' +
                '</svg>');
        }

        function getVideoSvg() {
            return (
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
                '<path d="M4 7h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4z"/>' +
                '<path d="M16 11l4-3v10l-4-3"/>' +
                '</svg>');
        }

        function runCountdown(displayEl, seconds, onComplete) {
            let remaining = seconds;
            displayEl.textContent = remaining;
            const intervalId = setInterval(() => {
                remaining -= 1;
                displayEl.textContent = remaining;
                if (remaining <= 0) {
                    clearInterval(intervalId);
                    onComplete();
                }
            }, 1000);
            return intervalId;
        }

        function updateWorkerCameraButtons() {
            const frontBtn = document.getElementById('workerFrontBtn');
            const backBtn = document.getElementById('workerBackBtn');

            if (frontBtn) frontBtn.classList.toggle('active', workerFacingMode === 'user');
            if (backBtn) backBtn.classList.toggle('active', workerFacingMode === 'environment');
        }

        function resetMaterialCard() {
            const materialStart = document.getElementById('materialStartArea');
            materialStart.classList.remove('hidden');
            document.getElementById('materialCaptured').classList.toggle('hidden', capturedMaterialPhotos.length === 0);
            document.getElementById('materialPhotoCount').textContent = capturedMaterialPhotos.length;
            document.getElementById('materialNextBtn').disabled = capturedMaterialPhotos.length === 0;
            renderMaterialGallery();
        }

        async function requestCurrentLocation() {
            const gpsStatus = document.getElementById('gpsStatus');
            const gpsLocation = document.getElementById('gpsLocation');

            if (!gpsStatus || !gpsLocation) {
                return;
            }

            gpsStatus.classList.remove('hidden');

            if (!navigator.geolocation) {
                gpsLocation.textContent = 'Location is not supported on this device.';
                currentGPSLocation = null;
                return;
            }

            gpsLocation.textContent = 'Please allow location access for the body scan.';

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    currentGPSLocation = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    gpsLocation.textContent = 'Location connected for scan.';
                },
                () => {
                    currentGPSLocation = null;
                    gpsLocation.textContent = 'Location denied. You can still continue.';
                },
                { enableHighAccuracy: true, timeout: 10000 }
            );
        }

        async function getCameraStream(preferredFacingMode) {
            const constraintsList = [
                { video: { facingMode: { exact: preferredFacingMode } }, audio: false },
                { video: { facingMode: preferredFacingMode }, audio: false },
                { video: true, audio: false }
            ];

            for (const constraints of constraintsList) {
                try {
                    return await navigator.mediaDevices.getUserMedia(constraints);
                } catch (error) {
                    if (constraints === constraintsList[constraintsList.length - 1]) {
                        throw error;
                    }
                }
            }
        }

        function setWorkerCameraMode(mode) {
            workerFacingMode = mode;
            updateWorkerCameraButtons();
        }

        async function startWorkerRecording() {
            if (workerStream) return;

            try {
                await requestCurrentLocation();
                workerStream = await getCameraStream(workerFacingMode);
                const video = document.getElementById('workerVideoPreview');
                video.srcObject = workerStream;
                video.classList.remove('hidden');
                document.getElementById('workerStartArea').classList.add('hidden');
                document.getElementById('workerRecordingStatus').classList.remove('hidden');
                workerCameraReady = true;
            } catch (err) {
                console.error('Camera error:', err);
                alert('Camera access denied. Please allow camera access to record.');
            }
        }

        function beginWorkerCountdown() {
            if (!workerStream || !workerCameraReady || workerCountdown) return;
            clearInterval(workerCountdown);
            workerCountdown = runCountdown(document.getElementById('workerTimer'), 10, stopWorkerRecording);
        }

        function resetWorkerRecording() {
            clearInterval(workerCountdown);
            workerCountdown = null;

            if (workerStream) {
                workerStream.getTracks().forEach(track => track.stop());
                workerStream = null;
            }

            workerCameraReady = false;
            document.getElementById('workerVideoPreview').classList.add('hidden');
            document.getElementById('workerRecordingStatus').classList.add('hidden');
            document.getElementById('workerStartArea').classList.remove('hidden');
            updateWorkerCameraButtons();
        }

        function stopWorkerRecording() {
            resetWorkerRecording();
            workerVideoRecorded = true;
            document.getElementById('workerNextBtn').disabled = false;
        }

        // Material Photo Capture
        function startMaterialCapture() {
            if (materialCaptureInProgress || materialStream) return;

            materialCaptureInProgress = true;
            getCameraStream('environment')
                .then(stream => {
                    materialStream = stream;
                    const video = document.getElementById('materialVideoCapture');
                    video.srcObject = stream;
                    video.classList.remove('hidden');
                    document.getElementById('materialStartArea').classList.add('hidden');
                    document.getElementById('materialCaptureActions').classList.remove('hidden');
                })
                .catch(err => {
                    materialCaptureInProgress = false;
                    console.error('Camera error:', err);
                    alert('Camera access denied. Please allow camera access to capture photos.');
                });
        }

        function captureMaterialPhoto() {
            if (!materialStream) return;

            const video = document.getElementById('materialVideoCapture');
            const canvas = document.getElementById('materialCanvas');
            canvas.width = video.videoWidth || 640;
            canvas.height = video.videoHeight || 480;
            canvas.getContext('2d').drawImage(video, 0, 0);
            capturedMaterialData = canvas.toDataURL('image/jpeg');
            capturedMaterialPhotos.push(capturedMaterialData);
            materialPhotoCaptured = true;

            stopMaterialCapture();
            resetMaterialCard();
        }

        function stopMaterialCapture() {
            document.getElementById('materialCaptureActions').classList.add('hidden');

            if (materialStream) {
                materialStream.getTracks().forEach(track => track.stop());
                materialStream = null;
            }
            materialCaptureInProgress = false;
            document.getElementById('materialVideoCapture').classList.add('hidden');
            document.getElementById('materialStartArea').classList.remove('hidden');
        }

        function retakeMaterial() {
            if (materialStream) {
                materialStream.getTracks().forEach(track => track.stop());
                materialStream = null;
            }

            materialCaptureInProgress = false;
            capturedMaterialData = null;
            capturedMaterialPhotos = [];
            materialPhotoCaptured = false;
            document.getElementById('materialCaptureActions').classList.add('hidden');
            resetMaterialCard();
        }

        function renderMaterialGallery() {
            const gallery = document.getElementById('materialGallery');
            if (!gallery) return;

            gallery.innerHTML = capturedMaterialPhotos
                .map((photo, index) => `<div class="material-thumb"><img src="${photo}" alt="Material photo ${index + 1}"></div>`)
                .join('');
            gallery.classList.toggle('hidden', capturedMaterialPhotos.length === 0);
        }

        // Navigation functions
        function goToWorkerHealth() {
            applyStaticTranslations();
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.remove('hidden');
        }

        function goToMaterialAnalysis() {
            applyStaticTranslations();
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.remove('hidden');
        }

        function showAIResults() {
            applyStaticTranslations();
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.remove('hidden');
            runAIAnalysis();
        }

        function getRiskLevel(score) {
            if (score <= 1) return 'low';
            if (score === 2) return 'medium';
            return 'high';
        }

        function runAIAnalysis() {
            if (mockDangerMode) {
                updateRiskDisplay('health', 2);
                updateRiskDisplay('material', 1);
                updateRiskDisplay('env', 1);
                updateRiskDisplay('overall', 2);
                updateAlert(2);

                const issueIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path></svg>';
                const precautionIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg>';
                const mockIssues = [
                    'Worker appears to be without helmet protection in a hazardous area',
                    'No gloves detected while handling dusty and abrasive materials',
                    'No respiratory protection detected in a high dust exposure setting',
                    'No eye protection detected near airborne particles',
                    'No high-visibility vest detected for active site conditions'
                ];
                const mockPrecautions = [
                    'Stop the task until required protective equipment is worn',
                    'Wear helmet, gloves, N95 mask, safety goggles, boots, and high-visibility vest',
                    'Move the worker away from dust exposure until respiratory protection is fitted',
                    'Supervisor review is required before work resumes'
                ];

                document.getElementById('issuesList').innerHTML = mockIssues
                    .map((item) => '<div class="issue-item">' + issueIcon + '<span>' + item + '</span></div>')
                    .join('');
                document.getElementById('precautionsList').innerHTML = mockPrecautions
                    .map((item) => '<div class="precaution-item">' + precautionIcon + '<span>' + item + '</span></div>')
                    .join('');
                renderDetailedGuide([
                    {
                        heading: 'क्या पहनना चाहिए',
                        steps: [
                            'सिर की सुरक्षा के लिए मजबूत हेलमेट पहनें ताकि ऊपर से गिरने वाली चीजों से बचाव हो सके।',
                            'सांस की सुरक्षा के लिए सही फिट वाला N95 मास्क या रेस्पिरेटर पहनें, खासकर धूल वाले काम में।',
                            'हाथों की सुरक्षा के लिए मजबूत ग्लव्स पहनें ताकि सीमेंट, केमिकल और रगड़ से बचाव हो।',
                            'आंखों की सुरक्षा के लिए सेफ्टी गॉगल्स पहनें ताकि धूल और कण आंखों में न जाएं।',
                            'पैरों की सुरक्षा के लिए सेफ्टी बूट्स पहनें और यदि साइट सक्रिय है तो हाई-विज वेस्ट भी पहनें।'
                        ]
                    },
                    {
                        heading: 'कैसे ध्यान रखना चाहिए',
                        steps: [
                            'काम शुरू करने से पहले जांच लें कि सभी सुरक्षा उपकरण सही तरह पहने गए हैं और ढीले नहीं हैं।',
                            'यदि मास्क गीला, ढीला या गंदा हो जाए तो तुरंत बदलें और बिना मास्क धूल वाले क्षेत्र में काम न करें।',
                            'सीमेंट या केमिकल हाथ या त्वचा पर लगने पर तुरंत साफ पानी से धोएं और त्वचा सूखी रखें।',
                            'हर 30 से 45 मिनट में थोड़ी देर साफ हवा वाली जगह पर जाएं और पानी पिएं।',
                            'यदि खांसी, सांस फूलना, आंखों में जलन या चक्कर जैसा लक्षण बढ़े तो काम रोककर सुपरवाइजर को बताएं।'
                        ]
                    }
                ]);

                updatePPEChecklist([], true);
                return;
            }

            let healthRisk = 0;
            let materialRisk = 0;
            let envRisk = 0;

            // Analyze work environment
            const workEnv = document.getElementById('workEnvironment')?.value || 'dusty';
            if (workEnv === 'dusty') healthRisk += 1;
            if (workEnv === 'mining') { healthRisk += 2; envRisk += 2; }
            if (workEnv === 'indoor') envRisk += 1;

            // Analyze materials - mock based on captured photo
            let detectedMaterials = [];
            if (capturedMaterialData) {
                // Mock: randomly detect some materials (in real app, use AI model)
                const materialOptions = ['cement', 'sand', 'putty', 'chemicals'];
                const randomMaterials = materialOptions.filter(() => Math.random() > 0.6);
                detectedMaterials = randomMaterials.length > 0 ? randomMaterials : ['cement'];
            }

            if (detectedMaterials.includes('cement')) materialRisk += 2;
            if (detectedMaterials.includes('sand')) materialRisk += 1;
            if (detectedMaterials.includes('putty')) materialRisk += 1;
            if (detectedMaterials.includes('chemicals')) materialRisk += 3;
            if (detectedMaterials.length > 2) materialRisk += 1;

            // Analyze location from GPS
            if (currentGPSLocation) {
                if (currentGPSLocation.lat > 20 && currentGPSLocation.lat < 30 && 
                    currentGPSLocation.lon > 70 && currentGPSLocation.lon < 90) {
                    envRisk += 1;
                }
            } else {
                envRisk += 1;
            }
            // Calculate final scores (cap at 3)
            healthRisk = Math.min(healthRisk, 3);
            materialRisk = Math.min(materialRisk, 3);
            envRisk = Math.min(envRisk, 3);

            // Calculate overall risk
            let overallRisk = 0;
            const risks = [healthRisk, materialRisk, envRisk];
            const highCount = risks.filter(r => r === 3).length;
            if (highCount >= 2) overallRisk = 3;
            else if (highCount === 1) overallRisk = 2;
            else overallRisk = Math.max(...risks);

            // Update UI
            updateRiskDisplay('health', healthRisk);
            updateRiskDisplay('material', materialRisk);
            updateRiskDisplay('env', envRisk);
            updateRiskDisplay('overall', overallRisk);

            // Update alert
            updateAlert(overallRisk);

            // Update issues and precautions based on analysis
            updateIssuesAndPrecautions(workEnv, detectedMaterials);

            // Update PPE checklist
            updatePPEChecklist(detectedMaterials);
            renderDetailedGuide([
                {
                    heading: 'क्या पहनना चाहिए',
                    steps: [
                        'धूल वाले काम में N95 मास्क या रेस्पिरेटर लगातार पहनें।',
                        'हाथों की सुरक्षा के लिए ग्लव्स और पैरों की सुरक्षा के लिए सेफ्टी बूट्स पहनें।',
                        'यदि कण उड़ रहे हों तो सेफ्टी गॉगल्स का उपयोग करें।'
                    ]
                },
                {
                    heading: 'कैसे ध्यान रखना चाहिए',
                    steps: [
                        'काम के दौरान बीच-बीच में पानी पिएं और छोटी ब्रेक लें।',
                        'काम के बाद हाथ, चेहरा और खुली त्वचा अच्छी तरह साफ करें।',
                        'यदि सांस की तकलीफ या जलन बढ़े तो तुरंत रिपोर्ट करें।'
                    ]
                }
            ]);
        }

        function renderDetailedGuide(sections) {
            const stepIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg>';
            const guide = document.getElementById('detailedGuide');
            if (!guide) {
                return;
            }

            guide.innerHTML = sections.map((section) => (
                '<div class="guide-block">' +
                    '<div class="guide-heading">' + section.heading + '</div>' +
                    section.steps.map((step) => '<div class="guide-step">' + stepIcon + '<span>' + step + '</span></div>').join('') +
                '</div>'
            )).join('');
        }

        function updateRiskDisplay(type, score) {
            const level = getRiskLevel(score);
            const valueEl = document.getElementById(type + 'RiskValue');
            const barEl = document.getElementById(type + 'RiskBar');

            valueEl.textContent = level.charAt(0).toUpperCase() + level.slice(1);
            valueEl.className = 'risk-value ' + level;

            barEl.className = 'risk-bar-fill ' + level;
            barEl.style.width = ((score / 3) * 100) + '%';
        }

        function updateAlert(overallRisk) {
            const alertBox = document.getElementById('alertBox');
            const alertIcon = document.getElementById('alertIcon');
            const alertText = document.getElementById('alertText');
            const alertIconSvg = overallRisk === 3
                ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path></svg>'
                : overallRisk === 2
                    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="9"></circle></svg>'
                    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg>';

            alertBox.className = 'alert-box ' + (overallRisk === 3 ? 'immediate' : overallRisk === 2 ? 'caution' : 'safe');
            alertIcon.innerHTML = alertIconSvg;
            alertText.textContent = overallRisk === 3 ? 'Immediate Danger - Multiple hazards detected!' :
                                   overallRisk === 2 ? 'Caution - Some hazards detected' :
                                   'Safe - Minimal hazards detected';
        }

        function updateIssuesAndPrecautions(workEnv, materials) {
            const issues = [];
            const precautions = [];
            const isHindi = currentLang === 'hi';

            if (workEnv === 'dusty') {
                issues.push(isHindi ? 'सीमेंट या धूल के संपर्क से त्वचा में जलन हो सकती है' : 'Possible skin irritation due to cement or dust exposure');
                precautions.push(isHindi ? 'हर समय N95 मास्क पहनें' : 'Wear an N95 mask at all times');
                precautions.push(isHindi ? 'धूल वाली सामग्री संभालते समय सुरक्षात्मक ग्लव्स पहनें' : 'Use protective gloves when handling dusty materials');
            }
            if (workEnv === 'mining') {
                issues.push(isHindi ? 'खनन क्षेत्र में धूल का स्तर बहुत अधिक है' : 'High dust exposure in mining environment');
                issues.push(isHindi ? 'विषैली गैस का संभावित खतरा है' : 'Potential toxic gas risk');
                precautions.push(isHindi ? 'उपयुक्त फिल्टर वाला रेस्पिरेटर उपयोग करें' : 'Use a respirator with proper filters');
                precautions.push(isHindi ? 'पर्याप्त वेंटिलेशन सुनिश्चित करें' : 'Ensure proper ventilation');
            }
            if (workEnv === 'indoor') {
                issues.push(isHindi ? 'इनडोर कार्यस्थल में वेंटिलेशन कमजोर है' : 'Poor ventilation in indoor workspace');
                precautions.push(isHindi ? 'हवा के प्रवाह के लिए खिड़कियां या वेंट खुले रखें' : 'Keep windows or vents open for airflow');
                precautions.push(isHindi ? 'नियमित रूप से बाहर जाकर छोटे ब्रेक लें' : 'Take breaks outside regularly');
            }

            if (materials.includes('cement')) {
                issues.push(isHindi ? 'सीमेंट से त्वचा में जलन या जलन जैसी चोट हो सकती है' : 'Cement can cause skin burns and irritation');
                precautions.push(isHindi ? 'काम के तुरंत बाद हाथ धोएं' : 'Wash hands immediately after work');
                precautions.push(isHindi ? 'हाथ धोने के बाद त्वचा पर मॉइस्चराइज़र लगाएं' : 'Apply skin moisturizer after washing');
            }
            if (materials.includes('sand')) {
                issues.push(isHindi ? 'रेत के काम से धूल सांस के साथ अंदर जा सकती है' : 'Dust inhalation risk from sand work');
                precautions.push(isHindi ? 'लगातार डस्ट मास्क पहनें' : 'Wear a dust mask continuously');
                precautions.push(isHindi ? 'काम शुरू करने से पहले क्षेत्र को हल्का गीला करें' : 'Wet the area before working');
            }
            if (materials.includes('chemicals')) {
                issues.push(isHindi ? 'केमिकल के संपर्क से विषाक्तता का खतरा अधिक है' : 'High toxic risk from chemical exposure');
                precautions.push(isHindi ? 'केमिकल-प्रतिरोधी ग्लव्स पहनें' : 'Use chemical-resistant gloves');
                precautions.push(isHindi ? 'केवल अच्छी वेंटिलेशन वाली जगह पर काम करें' : 'Work only in a well-ventilated area');
                precautions.push(isHindi ? 'यदि संपर्क हो जाए तो तुरंत चिकित्सकीय सलाह लें' : 'Seek medical attention if exposure occurs');
            }
            if (materials.includes('putty')) {
                issues.push(isHindi ? 'पुट्टी से हल्का रासायनिक संपर्क हो सकता है' : 'Mild chemical exposure from putty');
                precautions.push(isHindi ? 'त्वचा के लंबे संपर्क से बचें' : 'Avoid prolonged skin contact');
            }

            if (!currentGPSLocation) {
                issues.push(isHindi ? 'बॉडी स्कैन के दौरान लोकेशन साझा नहीं की गई' : 'Location was not shared during the body scan');
                precautions.push(isHindi ? 'अगली बार चेक-इन में लोकेशन चालू रखें ताकि साइट संदर्भ भी शामिल हो' : 'Turn on location for future check-ins so the scan includes site context');
            }

            if (precautions.length < 3) {
                precautions.push(isHindi ? 'हर घंटे 10 मिनट का ब्रेक लें' : 'Take 10-minute breaks every hour');
                precautions.push(isHindi ? 'पूरे दिन पर्याप्त पानी पीते रहें' : 'Stay hydrated throughout the day');
            }

            const issueIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path></svg>';
            const precautionIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg>';
            const issuesList = document.getElementById('issuesList');
            issuesList.innerHTML = issues.length > 0
                ? issues.map(i => '<div class="issue-item">' + issueIcon + '<span>' + i + '</span></div>').join('')
                : '<div class="issue-item">' + issueIcon + '<span>' + (isHindi ? 'कोई महत्वपूर्ण समस्या नहीं मिली' : 'No significant issues detected') + '</span></div>';

            const precautionsList = document.getElementById('precautionsList');
            precautionsList.innerHTML = precautions.map(p => '<div class="precaution-item">' + precautionIcon + '<span>' + p + '</span></div>').join('');
        }

        function updatePPEChecklist(materials, forceMissing = false) {
            // This is a mock - in real app, analyze video for actual PPE
            const checklist = [
                { name: 'helmet', status: forceMissing ? false : Math.random() > 0.3 },
                { name: 'gloves', status: forceMissing ? false : (materials.includes('cement') ? Math.random() > 0.6 : Math.random() > 0.5) },
                { name: 'mask', status: forceMissing ? false : Math.random() > 0.4 },
                { name: 'boots', status: forceMissing ? false : Math.random() > 0.2 },
                { name: 'goggles', status: forceMissing ? false : (materials.includes('chemicals') ? Math.random() > 0.5 : Math.random() > 0.7) },
                { name: 'vest', status: forceMissing ? false : Math.random() > 0.3 }
            ];

            const items = document.querySelectorAll('.checklist-item');
            checklist.forEach((item, index) => {
                const icon = items[index].querySelector('.checklist-icon');
                icon.innerHTML = item.status
                    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg>'
                    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>';
                icon.style.color = item.status ? '#22c55e' : '#ef4444';
            });
        }

                function goToAIAnalysis() {
            // Reset states
            workerVideoRecorded = false;
            materialPhotoCaptured = false;
            materialCaptureInProgress = false;
            clearInterval(workerCountdown);
            workerCountdown = null;
            document.getElementById('workerNextBtn').disabled = true;
            document.getElementById('materialNextBtn').disabled = true;
            // Reset UI elements
            resetWorkerRecording();
            resetMaterialCard();
            capturedMaterialPhotos = [];
            const materialCaptured = document.getElementById('materialCaptured');
            if (materialCaptured) materialCaptured.classList.add('hidden');
            const gpsStatus = document.getElementById('gpsStatus');
            if (gpsStatus) gpsStatus.classList.add('hidden');
            document.getElementById('questionnaireSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.remove('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('recordingSection').classList.add('hidden');
            document.getElementById('analyzingSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
            renderMaterialGallery();
            updateWorkerCameraButtons();
        }

        function goToQuestionnaire() {
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('recordingSection').classList.add('hidden');
            document.getElementById('analyzingSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
            document.getElementById('questionnaireSection').classList.remove('hidden');
        }

        function goToCoughRecording() {
            document.getElementById('questionnaireSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('recordingSection').classList.add('hidden');
            document.getElementById('analyzingSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.remove('hidden');
        }

        function goToCoughResults() {
            document.getElementById('questionnaireSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('recordingSection').classList.add('hidden');
            document.getElementById('analyzingSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.remove('hidden');
        }


        function loadMockPreview() {
            mockDangerMode = true;
            currentGPSLocation = { lat: 24.8607, lon: 67.0011, accuracy: 12 };
            capturedMaterialPhotos = [
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect width="320" height="220" rx="18" fill="%23161616"/><rect x="24" y="120" width="92" height="54" rx="10" fill="%23c88a14"/><rect x="110" y="88" width="110" height="88" rx="12" fill="%23bfbfbf"/><rect x="210" y="104" width="86" height="70" rx="12" fill="%23816a43"/></svg>',
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect width="320" height="220" rx="18" fill="%23131313"/><circle cx="92" cy="120" r="42" fill="%23d5d5d5"/><rect x="142" y="76" width="128" height="96" rx="14" fill="%23d79a1b"/><rect x="158" y="92" width="96" height="16" rx="8" fill="%23996d15"/></svg>'
            ];
            capturedMaterialData = capturedMaterialPhotos[0];
            materialPhotoCaptured = true;
            workerVideoRecorded = true;
            document.getElementById('questionnaireSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('recordingSection').classList.add('hidden');
            document.getElementById('analyzingSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
            document.getElementById('workerNextBtn').disabled = false;
            document.getElementById('materialNextBtn').disabled = false;
            resetMaterialCard();
            renderMaterialGallery();
            showAIResults();
        }
        // Initialize questionnaire on load
        window.addEventListener('load', () => {
            const params = new URLSearchParams(window.location.search);
            if (params.get('preview') === 'analysis') {
                loadMockPreview();
                return;
            }
            startQuestionnaire();
        });

Object.assign(window, {
    initializeQuestions,
    renderQuestions,
    selectAnswer,
    updateProgress,
    updateNavButtons,
    nextQuestion,
    prevQuestion,
    skipQuestionnaire,
    evaluateConditions,
    finishQuestionnaire,
    updateQuestionnaireHeader,
    startQuestionnaire,
    generateWaveform,
    startRecording,
    showAnalyzing,
    showResults,
    setLanguage,
    updateLanguageUI,
    getCameraSvg,
    getPhotoSvg,
    getVideoSvg,
    runCountdown,
    resetMaterialCard,
    setWorkerCameraMode,
    startWorkerRecording,
    beginWorkerCountdown,
    resetWorkerRecording,
    stopWorkerRecording,
    startMaterialCapture,
    captureMaterialPhoto,
    stopMaterialCapture,
    retakeMaterial,
    renderMaterialGallery,
    goToWorkerHealth,
    goToMaterialAnalysis,
    showAIResults,
    getRiskLevel,
    runAIAnalysis,
    updateRiskDisplay,
    updateAlert,
    updateIssuesAndPrecautions,
    updatePPEChecklist,
    goToAIAnalysis,
    goToQuestionnaire,
    goToCoughRecording,
    goToCoughResults
});
