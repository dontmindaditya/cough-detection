import { renderQuestionnaireSection } from "./questionnaire.js";
import { renderAIAnalysisSection } from "./ai-analysis.js";
import { renderCoughAnalysisSection } from "./cough-analysis.js";

export function renderAppLayout() {
    return `
        <div class="container">
            <div class="analysis-card">
                ${renderQuestionnaireSection()}
                ${renderAIAnalysisSection()}
                ${renderCoughAnalysisSection()}
            </div>
        </div>
    `;
}