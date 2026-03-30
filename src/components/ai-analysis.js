export function renderAIAnalysisSection() {
    return String.raw`
<div id="aiWorkerSection" class="ai-analysis-section hidden">
    <div class="ai-header">
        <div class="step-indicator">
            <span class="step active">1</span>
            <span class="step-line"></span>
            <span class="step">2</span>
        </div>
        <div class="ai-title" data-i18n="workerHealth">Worker Health Analysis</div>
        <div class="ai-subtitle" data-i18n="workerHealthSubtitle">Record your full body for scan</div>
    </div>
    <div class="ai-full-card">
        <div id="workerStartArea" class="ai-record-self-area">
            <div class="ai-record-self-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path d="M15 10V6a3 3 0 0 0-6 0v4"></path>
                    <rect x="6" y="10" width="12" height="10" rx="2"></rect>
                    <path d="M18 13h2l2-2v8l-2-2h-2"></path>
                </svg>
            </div>
            <div class="ai-record-self-text" data-i18n="recordYourself">Record your full body for scan</div>
            <div class="ai-record-self-hint" data-i18n="recordHint">Turn on location, stand back, and choose the camera before starting.</div>
            <div class="ai-action-row">
                <button class="ai-action-btn secondary" type="button" onclick="setWorkerCameraMode('user')" id="workerFrontBtn">Front Camera</button>
                <button class="ai-action-btn secondary active" type="button" onclick="setWorkerCameraMode('environment')" id="workerBackBtn">Back Camera</button>
                <button class="ai-action-btn primary" type="button" onclick="startWorkerRecording()" data-i18n="openCamera">Open Camera</button>
            </div>
        </div>
        <div id="gpsStatus" class="ai-gps-status hidden">
            <span class="gps-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
            </span>
            <span id="gpsLocation" data-i18n="gettingLocation">Getting GPS location...</span>
        </div>
        <video id="workerVideoPreview" class="ai-video-preview hidden" autoplay muted playsinline></video>
        <div id="workerRecordingStatus" class="ai-recording-status hidden">
            <div class="recording-indicator">
                <span class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                        <circle cx="12" cy="12" r="8"></circle>
                        <path d="M12 8v4l2.5 2.5"></path>
                    </svg>
                </span>
                <span id="workerTimer" class="recording-timer">10</span>
                <span class="recording-label">sec left</span>
            </div>
            <div class="ai-action-row">
                <button class="ai-action-btn secondary" type="button" onclick="resetWorkerRecording()">Close Camera</button>
                <button class="ai-action-btn primary" type="button" onclick="beginWorkerCountdown()">Start Scan</button>
            </div>
        </div>
    </div>
    <div class="ai-footer-nav">
        <button class="ai-nav-btn secondary" onclick="goToCoughResults()">Back to Cough Report</button>
        <button id="workerNextBtn" class="ai-nav-btn primary" onclick="goToMaterialAnalysis()" data-i18n="nextMaterial" disabled>Next: Material Analysis</button>
    </div>
</div>

<div id="aiMaterialSection" class="ai-analysis-section hidden">
    <div class="ai-header">
        <div class="step-indicator">
            <span class="step completed">1</span>
            <span class="step-line"></span>
            <span class="step active">2</span>
        </div>
        <div class="ai-title" data-i18n="materials">Material Analysis</div>
        <div class="ai-subtitle" data-i18n="materialsSubtitle">Take one or more photos of the materials you are working with</div>
    </div>
    <div class="ai-full-card">
        <div id="materialStartArea" class="ai-take-photo-area">
            <div class="ai-photo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path d="M4 8h3l2-2h6l2 2h3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"></path>
                    <circle cx="12" cy="13" r="3.5"></circle>
                </svg>
            </div>
            <div class="ai-photo-text" data-i18n="takePhoto">Take Photo of Material</div>
            <div class="ai-photo-hint" data-i18n="materialHint">Open the camera, capture a photo, and add more if needed.</div>
            <div class="ai-action-row">
                <button class="ai-action-btn primary" type="button" onclick="startMaterialCapture()" data-i18n="openCamera">Open Camera</button>
            </div>
        </div>
        <video id="materialVideoCapture" class="ai-video-preview hidden" autoplay muted playsinline></video>
        <canvas id="materialCanvas" class="hidden"></canvas>
        <div id="materialCaptureActions" class="ai-action-row hidden">
            <button class="ai-action-btn secondary" type="button" onclick="stopMaterialCapture()">Close Camera</button>
            <button class="ai-action-btn primary" type="button" onclick="captureMaterialPhoto()">Capture Photo</button>
        </div>
        <div id="materialCaptured" class="ai-captured-preview hidden">
            <div>
                <div class="ai-captured-text" data-i18n="photoCaptured">Photo Captured</div>
                <div class="ai-captured-subtext"><span id="materialPhotoCount">0</span> photos added</div>
            </div>
            <div class="ai-action-row compact">
                <button class="ai-retake-btn" type="button" onclick="startMaterialCapture()" data-i18n="addMorePhotos">Add More</button>
                <button class="ai-retake-btn" type="button" onclick="retakeMaterial()" data-i18n="clearPhotos">Clear All</button>
            </div>
        </div>
        <div id="materialGallery" class="material-gallery hidden"></div>
    </div>
    <div class="ai-footer-nav">
        <button class="ai-nav-btn secondary" onclick="goToWorkerHealth()" data-i18n="backToWorker">Back</button>
        <button id="materialNextBtn" class="ai-nav-btn primary" onclick="showAIResults()" data-i18n="getResults" disabled>Get Analysis Results</button>
    </div>
</div>

<div id="aiResultsSection" class="ai-analysis-section hidden">
    <div class="ai-header">
        <div class="ai-title" data-i18n="analysisComplete">Analysis Complete</div>
        <div class="ai-subtitle" data-i18n="analysisCompleteSubtitle">Here are your safety analysis results</div>
    </div>

    <div class="confidence-badge">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </svg>
        <span data-i18n="confidenceScore">Confidence: 78%</span>
    </div>

    <div class="risk-summary">
        <div class="risk-summary-title" data-i18n="riskSummary">Risk Summary</div>
        <div class="risk-grid">
            <div class="risk-item">
                <div class="risk-label" data-i18n="healthRisk">Health Risk</div>
                <div id="healthRiskValue" class="risk-value">Medium</div>
                <div class="risk-bar"><div id="healthRiskBar" class="risk-bar-fill" style="width: 66%;"></div></div>
            </div>
            <div class="risk-item">
                <div class="risk-label" data-i18n="materialRisk">Material Risk</div>
                <div id="materialRiskValue" class="risk-value">Low</div>
                <div class="risk-bar"><div id="materialRiskBar" class="risk-bar-fill" style="width: 33%;"></div></div>
            </div>
            <div class="risk-item">
                <div class="risk-label" data-i18n="environmentRisk">Environment Risk</div>
                <div id="envRiskValue" class="risk-value">Medium</div>
                <div class="risk-bar"><div id="envRiskBar" class="risk-bar-fill" style="width: 50%;"></div></div>
            </div>
            <div class="risk-item">
                <div class="risk-label" data-i18n="overallRisk">Overall Risk</div>
                <div id="overallRiskValue" class="risk-value">Medium</div>
                <div class="risk-bar"><div id="overallRiskBar" class="risk-bar-fill" style="width: 60%;"></div></div>
            </div>
        </div>

        <div id="alertBox" class="alert-box">
            <div id="alertIcon" class="alert-icon"></div>
            <div id="alertText" class="alert-text"></div>
        </div>
    </div>

    <div class="issues-list">
        <div class="issues-title" data-i18n="detectedIssues">Detected Issues</div>
        <div id="issuesList"></div>
    </div>

    <div class="precautions-list">
        <div class="precautions-title" data-i18n="recommendedPrecautions">Recommended Precautions</div>
        <div id="precautionsList"></div>
    </div>

    <div class="precautions-list">
        <div class="precautions-title" data-i18n="detailedGuideTitle">Detailed Safety Guide</div>
        <div id="detailedGuide"></div>
    </div>

    <div class="checklist-grid">
        <div class="checklist-item"><span class="checklist-icon"></span><span data-i18n="helmet">Helmet</span></div>
        <div class="checklist-item"><span class="checklist-icon"></span><span data-i18n="gloves">Gloves</span></div>
        <div class="checklist-item"><span class="checklist-icon"></span><span data-i18n="mask">N95 Mask</span></div>
        <div class="checklist-item"><span class="checklist-icon"></span><span data-i18n="boots">Safety Boots</span></div>
        <div class="checklist-item"><span class="checklist-icon"></span><span data-i18n="goggles">Safety Goggles</span></div>
        <div class="checklist-item"><span class="checklist-icon"></span><span data-i18n="vest">High-vis Vest</span></div>
    </div>

    <div class="ai-footer-nav">
        <button class="ai-nav-btn secondary" onclick="goToMaterialAnalysis()" data-i18n="backToMaterial">Back</button>
        <button class="ai-nav-btn primary" onclick="goToCoughResults()">Back to Cough Report</button>
    </div>
</div>
`;
}
