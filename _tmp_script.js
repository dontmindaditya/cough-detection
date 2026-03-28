
         let currentLang = 'hi'; // Default to Hindi
         
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
                  aiSubtitle: "Analyze worksite conditions and worker health risks",
                  workerHealth: "Worker Health Analysis",
                  materials: "Material Analysis",
                  location: "Location & Environment",
                  worksiteVideo: "Worksite Video Analysis",
                  recordYourself: "Record Yourself (10 sec)",
                  recordHint: "Show your face and upper body clearly",
                  takePhoto: "Take Photo of Material",
                  materialHint: "Take clear picture of materials you're working with",
                  recordSite: "Record Worksite Video",
                  siteHint: "GPS location will be captured automatically",
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
                  confidenceScore: "Confidence: 78% (Mock Analysis)",
                  riskSummary: "Risk Summary",
                  healthRisk: "Health Risk",
                  materialRisk: "Material Risk",
                  environmentRisk: "Environment Risk",
                  overallRisk: "Overall Risk",
                  detectedIssues: "⚠️ Detected Issues",
                  recommendedPrecautions: "🛡️ Recommended Precautions",
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
                  workerHealthSubtitle: "Record yourself for health assessment",
                  materialsSubtitle: "Take photo of materials you're working with",
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
                  aiSubtitle: "कार्यस्थल की स्थिति और श्रमिक स्वास्थ्य जोखिमों का विश्लेषण करें",
                  workerHealth: "श्रमिक स्वास्थ्य विश्लेषण",
                  materials: "सामग्री विश्लेषण",
                  location: "स्थान और वातावरण",
                  worksiteVideo: "कार्यस्थल वीडियो विश्लेषण",
                  recordYourself: "अपने आप को रिकॉर्ड करें (10 सेकंड)",
                  recordHint: "अपने चेहरे और ऊपरी शरीर को स्पष्ट दिखाएं",
                  takePhoto: "सामग्री की फोटो लें",
                  materialHint: "जिन सामग्रियों के साथ आप काम कर रहे हैं उनकी स्पष्ट तस्वीर लें",
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
                  confidenceScore: "विश्वास: 78% (मॉक विश्लेषण)",
                  riskSummary: "जोखिम सारांश",
                  healthRisk: "स्वास्थ्य जोखिम",
                  materialRisk: "सामग्री जोखिम",
                  environmentRisk: "पर्यावरण जोखिम",
                  overallRisk: "समग्र जोखिम",
                  detectedIssues: "⚠️ पाए गए मुद्दे",
                  recommendedPrecautions: "🛡️ अनुशंसित सावधानियां",
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
                  workerHealthSubtitle: "स्वास्थ्य मूल्यांकन के लिए खुद को रिकॉर्ड करें",
                  materialsSubtitle: "जिन सामग्रियों के साथ आप काम कर रहे हैं उनकी फोटो लें",
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
            goToAIAnalysis();
            
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

        function startQuestionnaire() {
            currentQuestion = 0;
            answers = {};
            initializeQuestions(); // Initialize questions based on current language
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
            
            let timeLeft = 10;
            const timer = document.getElementById('timer');
            
            const countdown = setInterval(() => {
                timeLeft--;
                timer.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    showAnalyzing();
                }
            }, 1000);
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
        let workerMediaRecorder = null;
        let worksiteMediaRecorder = null;
        let workerChunks = [];
        let worksiteChunks = [];
        let workerStream = null;
        let worksiteStream = null;
        let materialStream = null;
        let capturedMaterialData = null;
        let currentGPSLocation = null;

        // Worker Health Video Recording
        // State tracking
        let workerVideoRecorded = false;
        let materialPhotoCaptured = false;
        let worksiteVideoRecorded = false;

        function startWorkerRecording() {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                .then(stream => {
                    workerStream = stream;
                    const video = document.getElementById('workerVideoPreview');
                    video.srcObject = stream;
                    video.classList.remove('hidden');
                    document.querySelector('.ai-record-self-area').classList.add('hidden');
                    document.getElementById('workerRecordingStatus').classList.remove('hidden');

                    // Timer countdown
                    let timeLeft = 10;
                    const timerEl = document.getElementById('workerTimer');
                    timerEl.textContent = timeLeft;
                    
                    const timerInterval = setInterval(() => {
                        timeLeft--;
                        timerEl.textContent = timeLeft;
                        if (timeLeft <= 0) {
                            clearInterval(timerInterval);
                            stopWorkerRecording();
                        }
                    }, 1000);
                })
                .catch(err => {
                    console.error('Camera error:', err);
                    alert('Camera access denied. Please allow camera access to record.');
                });
        }

        function stopWorkerRecording() {
            if (workerStream) {
                workerStream.getTracks().forEach(track => track.stop());
                workerStream = null;
                document.getElementById('workerVideoPreview').classList.add('hidden');
                document.getElementById('workerRecordingStatus').classList.add('hidden');
                document.querySelector('.ai-record-self-area').classList.remove('hidden');
                document.querySelector('.ai-record-self-area').innerHTML = `
                    <div class="ai-record-self-icon">✅</div>
                    <div class="ai-record-self-text">Self Video Recorded</div>
                    <div class="ai-record-self-hint">Click to record again</div>
                `;
                workerVideoRecorded = true;
                document.getElementById('workerNextBtn').disabled = false;
            }
        }

        // Material Photo Capture
        function startMaterialCapture() {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
                .then(stream => {
                    materialStream = stream;
                    const video = document.getElementById('materialVideoCapture');
                    video.srcObject = stream;
                    video.classList.remove('hidden');
                    document.getElementById('materialStartArea').classList.add('hidden');

                    // Auto-capture after 3 seconds preview
                    setTimeout(() => {
                        captureMaterialPhoto();
                    }, 3000);
                })
                .catch(err => {
                    console.error('Camera error:', err);
                    alert('Camera access denied. Please allow camera access to capture photos.');
                });
        }

        function captureMaterialPhoto() {
            const video = document.getElementById('materialVideoCapture');
            const canvas = document.getElementById('materialCanvas');
            canvas.width = video.videoWidth || 640;
            canvas.height = video.videoHeight || 480;
            canvas.getContext('2d').drawImage(video, 0, 0);
            capturedMaterialData = canvas.toDataURL('image/jpeg');

            // Stop camera
            if (materialStream) {
                materialStream.getTracks().forEach(track => track.stop());
                materialStream = null;
            }

            video.classList.add('hidden');
            document.getElementById('materialCaptured').classList.remove('hidden');
            materialPhotoCaptured = true;
            document.getElementById('materialNextBtn').disabled = false;
        }

        function retakeMaterial() {
            document.getElementById('materialCaptured').classList.add('hidden');
            document.getElementById('materialStartArea').classList.remove('hidden');
            capturedMaterialData = null;
            materialPhotoCaptured = false;
            document.getElementById('materialNextBtn').disabled = true;
        }

        // Worksite Video with GPS
        function startWorksiteRecording() {
            // First get GPS location
            if (navigator.geolocation) {
                document.getElementById('gpsStatus').classList.remove('hidden');
                document.getElementById('gpsLocation').textContent = 'Getting GPS location...';

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        currentGPSLocation = {
                            lat: position.coords.latitude,
                            lon: position.coords.longitude,
                            accuracy: position.coords.accuracy
                        };
                        document.getElementById('gpsLocation').textContent = 
                            `📍 Location: ${currentGPSLocation.lat.toFixed(4)}, ${currentGPSLocation.lon.toFixed(4)}`;

                        // Now start video recording
                        startWorksiteVideoRecording();
                    },
                    (error) => {
                        console.error('GPS error:', error);
                        document.getElementById('gpsLocation').textContent = 'GPS unavailable, recording without location';
                        currentGPSLocation = null;
                        startWorksiteVideoRecording();
                    },
                    { enableHighAccuracy: true, timeout: 10000 }
                );
            } else {
                document.getElementById('gpsLocation').textContent = 'GPS not supported';
                currentGPSLocation = null;
                startWorksiteVideoRecording();
            }
        }

        function startWorksiteVideoRecording() {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
                .then(stream => {
                    worksiteStream = stream;
                    const video = document.getElementById('worksiteVideoPreview');
                    video.srcObject = stream;
                    video.classList.remove('hidden');
                    document.getElementById('worksiteStartArea').classList.add('hidden');
                    document.getElementById('worksiteRecordingStatus').classList.remove('hidden');

                    // Auto-stop after 10 seconds
                    setTimeout(() => {
                        stopWorksiteRecording();
                    }, 10000);
                })
                .catch(err => {
                    console.error('Camera error:', err);
                    alert('Camera access denied. Please allow camera access to record.');
                });
        }

        function stopWorksiteRecording() {
            if (worksiteStream) {
                worksiteStream.getTracks().forEach(track => track.stop());
                worksiteStream = null;
                document.getElementById('worksiteVideoPreview').classList.add('hidden');
                document.getElementById('worksiteRecordingStatus').classList.add('hidden');
                document.getElementById('worksiteStartArea').classList.remove('hidden');
                document.getElementById('worksiteStartArea').innerHTML = `
                    <div class="ai-record-site-icon">✅</div>
                    <div class="ai-record-site-text">Video Recorded</div>
                    <div class="ai-record-site-hint">Click to record again</div>
                `;
                worksiteVideoRecorded = true;
                document.getElementById('worksiteNextBtn').disabled = false;
            }
        }

        function retakeWorksite() {
            document.getElementById('worksiteStartArea').classList.remove('hidden');
            document.getElementById('worksiteStartArea').innerHTML = `
                <div class="ai-record-site-icon">🎥</div>
                <div class="ai-record-site-text">Record Worksite Video</div>
                <div class="ai-record-site-hint">GPS location will be captured automatically</div>
            `;
            worksiteVideoRecorded = false;
            currentGPSLocation = null;
            document.getElementById('worksiteNextBtn').disabled = true;
        }

        // Navigation functions
        function goToWorkerHealth() {
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.remove('hidden');
        }

        function goToMaterialAnalysis() {
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.remove('hidden');
        }

        function goToWorksiteAnalysis() {
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiWorksiteSection').classList.remove('hidden');
        }

        function showAIResults() {
            document.getElementById('aiWorksiteSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.remove('hidden');
            runAIAnalysis();
        }

        function getRiskLevel(score) {
            if (score <= 1) return 'low';
            if (score === 2) return 'medium';
            return 'high';
        }

        function runAIAnalysis() {
            let healthRisk = 0;
            let materialRisk = 0;
            let envRisk = 0;

            // Analyze work environment
            const workEnv = document.getElementById('workEnvironment').value;
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

            // Analyze worksite type
            const worksiteType = document.getElementById('worksiteType').value;
            if (worksiteType === 'mining') envRisk += 2;
            if (worksiteType === 'construction') envRisk += 1;

            // Analyze weather
            const weather = document.getElementById('weatherCondition').value;
            if (weather === 'rainy') envRisk += 1;
            if (weather === 'hot') healthRisk += 1;
            if (weather === 'humid') healthRisk += 1;

            // Analyze location from GPS
            if (currentGPSLocation) {
                // Mock: Industrial/mining areas have higher risk
                if (currentGPSLocation.lat > 20 && currentGPSLocation.lat < 30 && 
                    currentGPSLocation.lon > 70 && currentGPSLocation.lon < 90) {
                    envRisk += 1;
                }
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
            updateIssuesAndPrecautions(workEnv, materials, weather, worksiteType);

            // Update PPE checklist
            updatePPEChecklist(materials);

            // Show results
            document.getElementById('aiResults').classList.add('show');
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

            alertBox.className = 'alert-box ' + (overallRisk === 3 ? 'immediate' : overallRisk === 2 ? 'caution' : 'safe');
            alertIcon.textContent = overallRisk === 3 ? '🔴' : overallRisk === 2 ? '🟡' : '🟢';
            alertText.textContent = overallRisk === 3 ? 'Immediate Danger - Multiple hazards detected!' :
                                   overallRisk === 2 ? 'Caution - Some hazards detected' :
                                   'Safe - Minimal hazards detected';
        }

        function updateIssuesAndPrecautions(workEnv, materials, weather, worksiteType) {
            const issues = [];
            const precautions = [];

            // Environment issues
            if (workEnv === 'dusty') {
                issues.push('Possible skin irritation due to cement/dust exposure');
                precautions.push('Wear N95 mask at all times');
                precautions.push('Use protective gloves when handling dusty materials');
            }
            if (workEnv === 'mining') {
                issues.push('High dust exposure in mining environment');
                issues.push('Potential toxic gas risk');
                precautions.push('Use respirator with proper filters');
                precautions.push('Ensure proper ventilation');
            }
            if (workEnv === 'indoor') {
                issues.push('Poor ventilation in indoor workspace');
                precautions.push('Ensure windows are open for airflow');
                precautions.push('Take breaks outside regularly');
            }

            // Material issues
            if (materials.includes('cement')) {
                issues.push('Cement can cause skin burns and irritation');
                precautions.push('Wash hands immediately after work');
                precautions.push('Apply skin moisturizer after washing');
            }
            if (materials.includes('sand')) {
                issues.push('Dust inhalation risk from sand work');
                precautions.push('Wear dust mask continuously');
                precautions.push('Wet the area before working');
            }
            if (materials.includes('chemicals')) {
                issues.push('High toxic risk from chemical exposure');
                precautions.push('Use chemical-resistant gloves');
                precautions.push('Work in well-ventilated area only');
                precautions.push('Seek medical attention if exposed');
            }
            if (materials.includes('putty')) {
                issues.push('Mild chemical exposure from putty');
                precautions.push('Avoid prolonged skin contact');
            }

            // Weather issues
            if (weather === 'rainy') {
                issues.push('Slippery surfaces due to rain');
                precautions.push('Wear anti-slip boots');
                precautions.push('Watch for water accumulation');
            }
            if (weather === 'hot') {
                issues.push('High temperature may cause dehydration');
                precautions.push('Stay hydrated - drink water every 20 minutes');
                precautions.push('Take shade breaks every hour');
            }
            if (weather === 'humid') {
                issues.push('Humid conditions may cause skin infections');
                precautions.push('Keep skin dry and clean');
                precautions.push('Change wet clothes immediately');
            }

            // Worksite issues
            if (worksiteType === 'mining') {
                issues.push('Mining sites have high dust and toxic gas risk');
                precautions.push('Regular health check-ups recommended');
            }
            if (worksiteType === 'construction') {
                issues.push('Construction sites have moderate dust and injury risk');
                precautions.push('Always wear hard hat');
                precautions.push('Be aware of falling objects');
            }

            // Default precautions
            if (precautions.length < 3) {
                precautions.push('Take 10-minute breaks every hour');
                precautions.push('Stay hydrated throughout the day');
            }

            // Update DOM
            const issuesList = document.getElementById('issuesList');
            issuesList.innerHTML = issues.length > 0 ?
                issues.map(i => `<div class="issue-item">${i}</div>`).join('') :
                '<div class="issue-item">No significant issues detected</div>';

            const precautionsList = document.getElementById('precautionsList');
            precautionsList.innerHTML = precautions.map(p => `<div class="precaution-item">${p}</div>`).join('');
        }

        function updatePPEChecklist(materials) {
            // This is a mock - in real app, analyze video for actual PPE
            const checklist = [
                { name: 'helmet', status: Math.random() > 0.3 },
                { name: 'gloves', status: materials.includes('cement') ? Math.random() > 0.6 : Math.random() > 0.5 },
                { name: 'mask', status: Math.random() > 0.4 },
                { name: 'boots', status: Math.random() > 0.2 },
                { name: 'goggles', status: materials.includes('chemicals') ? Math.random() > 0.5 : Math.random() > 0.7 },
                { name: 'vest', status: Math.random() > 0.3 }
            ];

            const items = document.querySelectorAll('.checklist-item');
            checklist.forEach((item, index) => {
                const icon = items[index].querySelector('.checklist-icon');
                icon.textContent = item.status ? '✅' : '❌';
            });
        }

        function goToAIAnalysis() {
            // Reset states
            workerVideoRecorded = false;
            materialPhotoCaptured = false;
            worksiteVideoRecorded = false;
            document.getElementById('workerNextBtn').disabled = true;
            document.getElementById('materialNextBtn').disabled = true;
            document.getElementById('worksiteNextBtn').disabled = true;
            
            // Reset UI elements
            const workerArea = document.querySelector('.ai-record-self-area');
            if (workerArea) {
                workerArea.innerHTML = `
                    <div class="ai-record-self-icon">📹</div>
                    <div class="ai-record-self-text" data-i18n="recordYourself">Record Yourself (10 sec)</div>
                    <div class="ai-record-self-hint" data-i18n="recordHint">Show your face and upper body clearly</div>
                `;
            }
            
            const materialStart = document.getElementById('materialStartArea');
            if (materialStart) {
                materialStart.innerHTML = `
                    <div class="ai-photo-icon">📷</div>
                    <div class="ai-photo-text" data-i18n="takePhoto">Take Photo of Material</div>
                    <div class="ai-photo-hint" data-i18n="materialHint">Take clear picture of materials you're working with</div>
                `;
                materialStart.classList.remove('hidden');
            }
            
            const materialCaptured = document.getElementById('materialCaptured');
            if (materialCaptured) materialCaptured.classList.add('hidden');
            
            const worksiteArea = document.getElementById('worksiteStartArea');
            if (worksiteArea) {
                worksiteArea.innerHTML = `
                    <div class="ai-record-site-icon">🎥</div>
                    <div class="ai-record-site-text" data-i18n="recordSite">Record Worksite Video</div>
                    <div class="ai-record-site-hint" data-i18n="siteHint">GPS location will be captured automatically</div>
                `;
            }
            
            const gpsStatus = document.getElementById('gpsStatus');
            if (gpsStatus) gpsStatus.classList.add('hidden');
            
            document.getElementById('questionnaireSection').classList.add('hidden');
            document.getElementById('aiWorkerSection').classList.remove('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiWorksiteSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
        }

        function goToQuestionnaire() {
            document.getElementById('aiWorkerSection').classList.add('hidden');
            document.getElementById('aiMaterialSection').classList.add('hidden');
            document.getElementById('aiWorksiteSection').classList.add('hidden');
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('questionnaireSection').classList.remove('hidden');
        }

        function goToCoughRecording() {
            document.getElementById('aiResultsSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.remove('hidden');
        }

        // Initialize questionnaire on load
        window.addEventListener('load', () => {
            startQuestionnaire();
        });
    
