// Test Vocacional JavaScript - CPD

// Test data structure based on RIASEC model and comprehensive assessment
const testQuestions = [
    // SECCIÓN 1: INTERESES PERSONALES (RIASEC - Holland)
    {
        section: "INTERESES PERSONALES",
        question: "Me gustaría:",
        type: "multiple-choice",
        options: [
            { text: "Reparar una computadora o herramienta", value: "A" },
            { text: "Investigar un experimento científico", value: "B" },
            { text: "Pintar un mural", value: "C" },
            { text: "Organizar un evento escolar", value: "D" },
            { text: "Ayudar a alguien con sus tareas", value: "E" },
            { text: "Clasificar documentos", value: "F" }
        ]
    },
    {
        section: "INTERESES PERSONALES",
        question: "Me llama más la atención:",
        type: "multiple-choice",
        options: [
            { text: "Utilizar herramientas manuales", value: "A" },
            { text: "Resolver ecuaciones o cálculos", value: "B" },
            { text: "Escribir cuentos o poemas", value: "C" },
            { text: "Dirigir un proyecto grupal", value: "D" },
            { text: "Escuchar a alguien con un problema", value: "E" },
            { text: "Llevar inventario", value: "F" }
        ]
    },
    {
        section: "INTERESES PERSONALES",
        question: "Prefiero:",
        type: "multiple-choice",
        options: [
            { text: "Ensamblar objetos", value: "A" },
            { text: "Leer temas científicos", value: "B" },
            { text: "Tocar un instrumento", value: "C" },
            { text: "Vender un producto", value: "D" },
            { text: "Cuidar personas", value: "E" },
            { text: "Llevar registros en computadora", value: "F" }
        ]
    },
    // SECCIÓN 2: HABILIDADES Y FORTALEZAS
    {
        section: "HABILIDADES Y FORTALEZAS",
        question: "¿Qué tan fácil se te hace comunicarte frente a un grupo?",
        type: "scale",
        scale: { min: 1, max: 4, labels: ["Nada fácil", "Poco fácil", "Fácil", "Muy fácil"] }
    },
    {
        section: "HABILIDADES Y FORTALEZAS",
        question: "¿Qué tan fácil se te hace resolver problemas matemáticos?",
        type: "scale",
        scale: { min: 1, max: 4, labels: ["Nada fácil", "Poco fácil", "Fácil", "Muy fácil"] }
    },
    {
        section: "HABILIDADES Y FORTALEZAS",
        question: "¿Qué tan fácil se te hace diseñar algo visual o artístico?",
        type: "scale",
        scale: { min: 1, max: 4, labels: ["Nada fácil", "Poco fácil", "Fácil", "Muy fácil"] }
    },
    {
        section: "HABILIDADES Y FORTALEZAS",
        question: "¿Qué tan fácil se te hace ayudar a resolver conflictos?",
        type: "scale",
        scale: { min: 1, max: 4, labels: ["Nada fácil", "Poco fácil", "Fácil", "Muy fácil"] }
    },
    {
        section: "HABILIDADES Y FORTALEZAS",
        question: "¿Qué tan fácil se te hace reparar objetos electrónicos?",
        type: "scale",
        scale: { min: 1, max: 4, labels: ["Nada fácil", "Poco fácil", "Fácil", "Muy fácil"] }
    },
    {
        section: "HABILIDADES Y FORTALEZAS",
        question: "¿Qué tan fácil se te hace ordenar datos o información?",
        type: "scale",
        scale: { min: 1, max: 4, labels: ["Nada fácil", "Poco fácil", "Fácil", "Muy fácil"] }
    },
    // SECCIÓN 3: VALORES Y PROYECTO DE VIDA
    {
        section: "VALORES Y PROYECTO DE VIDA",
        question: "¿Qué es más importante para ti?",
        type: "multiple-choice",
        options: [
            { text: "Tener estabilidad económica", value: "A" },
            { text: "Disfrutar tu trabajo todos los días", value: "B" },
            { text: "Ser reconocido por tus logros", value: "C" },
            { text: "Ayudar a mejorar tu comunidad", value: "D" },
            { text: "Tener tiempo libre para tu vida personal", value: "E" }
        ]
    },
    {
        section: "VALORES Y PROYECTO DE VIDA",
        question: "¿Qué estilo de trabajo prefieres?",
        type: "multiple-choice",
        options: [
            { text: "En oficina con horarios fijos", value: "A" },
            { text: "Al aire libre y activo", value: "B" },
            { text: "Creativo, con libertad", value: "C" },
            { text: "Trabajando con personas constantemente", value: "D" },
            { text: "Resolviendo problemas técnicos", value: "E" }
        ]
    },
    // SECCIÓN 4: CONTEXTO PERSONAL Y ACADÉMICO
    {
        section: "CONTEXTO PERSONAL Y ACADÉMICO",
        question: "¿Tienes acceso a internet y computadora en casa?",
        type: "multiple-choice",
        options: [
            { text: "Sí", value: "A" },
            { text: "A veces", value: "B" },
            { text: "No", value: "C" }
        ]
    },
    {
        section: "CONTEXTO PERSONAL Y ACADÉMICO",
        question: "¿En qué medida cuentas con apoyo familiar para estudiar una carrera?",
        type: "multiple-choice",
        options: [
            { text: "Totalmente", value: "A" },
            { text: "Parcialmente", value: "B" },
            { text: "Poco", value: "C" },
            { text: "Nada", value: "D" }
        ]
    },
    {
        section: "CONTEXTO PERSONAL Y ACADÉMICO",
        question: "¿Te interesa mudarte a otra ciudad para estudiar?",
        type: "multiple-choice",
        options: [
            { text: "Sí", value: "A" },
            { text: "Tal vez", value: "B" },
            { text: "No", value: "C" }
        ]
    },
    {
        section: "CONTEXTO PERSONAL Y ACADÉMICO",
        question: "¿Conoces las carreras que existen actualmente?",
        type: "multiple-choice",
        options: [
            { text: "Sí, muchas", value: "A" },
            { text: "Algunas", value: "B" },
            { text: "Muy pocas", value: "C" },
            { text: "Ninguna", value: "D" }
        ]
    }
];

let currentQuestionIndex = 0;
let answers = [];

// Initialize test
function initTest() {
    updateQuestion();
    updateProgress();
}

// Update question display
function updateQuestion() {
    const question = testQuestions[currentQuestionIndex];
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = testQuestions.length;
    
    // Update question content
    document.querySelector('.badge').textContent = question.section;
    document.getElementById('questionText').textContent = question.question;
    
    // Update options based on question type
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';
    
    if (question.type === 'multiple-choice') {
        // Create multiple choice options
        question.options.forEach((option, index) => {
            const optionHtml = `
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="question" id="option${index}" value="${option.value}">
                    <label class="form-check-label w-100 p-3 rounded border" for="option${index}">
                        <strong>${option.text}</strong>
                    </label>
                </div>
            `;
            optionsContainer.innerHTML += optionHtml;
        });
    } else if (question.type === 'scale') {
        // Create scale options (1-4)
        const scaleHtml = `
            <div class="scale-container">
                <p class="text-muted mb-3">Selecciona el nivel que mejor te describa:</p>
                <div class="row g-2">
                    ${question.scale.labels.map((label, index) => `
                        <div class="col-6 col-md-3">
                            <div class="form-check text-center">
                                <input class="form-check-input position-absolute opacity-0" type="radio" name="question" id="scale${index}" value="${index + 1}">
                                <label class="form-check-label w-100 p-3 rounded border d-block" for="scale${index}" style="cursor: pointer;">
                                    <div class="fs-4 fw-bold text-primary mb-1">${index + 1}</div>
                                    <small class="text-muted">${label}</small>
                                </label>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        optionsContainer.innerHTML = scaleHtml;
    }

    // Add event listeners to options
    document.querySelectorAll('input[name="question"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('nextBtn').disabled = false;
            
            // Visual feedback for scale questions
            if (question.type === 'scale') {
                document.querySelectorAll('.options-container label').forEach(label => {
                    label.classList.remove('border-primary', 'bg-light');
                });
                this.nextElementSibling.classList.add('border-primary', 'bg-light');
            }
        });
    });

    // Reset selection
    document.getElementById('nextBtn').disabled = true;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    // Special handling for last question
    if (currentQuestionIndex === testQuestions.length - 1) {
        document.getElementById('nextBtn').innerHTML = 'Finalizar Test<i class="bi bi-check-circle ms-1"></i>';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Siguiente<i class="bi bi-arrow-right ms-1"></i>';
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / testQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressBar').setAttribute('aria-valuenow', currentQuestionIndex + 1);
}

// Next question
function nextQuestion() {
    // Save answer
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        answers[currentQuestionIndex] = selectedOption.value;
        
        if (currentQuestionIndex < testQuestions.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
            updateProgress();
        } else {
            // Test completed
            showResults();
        }
    }
}

// Previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
        updateProgress();
        
        // Restore previous answer if exists
        if (answers[currentQuestionIndex]) {
            const savedAnswer = answers[currentQuestionIndex];
            document.querySelector(`input[value="${savedAnswer}"]`).checked = true;
            document.getElementById('nextBtn').disabled = false;
        }
    }
}

// Calculate and show results based on RIASEC and comprehensive evaluation
function showResults() {
    const evaluation = evaluateAnswers();
    displayResults(evaluation);
    updateStudentInfo();
    const modal = new bootstrap.Modal(document.getElementById('resultsModal'));
    modal.show();
}

// Comprehensive evaluation based on the interpretation criteria
function evaluateAnswers() {
    // RIASEC Analysis (questions 1-3, indices 0-2)
    const riasecCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
    for (let i = 0; i < 3; i++) {
        if (answers[i]) {
            riasecCounts[answers[i]]++;
        }
    }
    
    // Find dominant RIASEC type
    const dominantType = Object.entries(riasecCounts)
        .sort((a, b) => b[1] - a[1])[0];
    
    const riasecTypes = {
        A: { name: "Realista", description: "Técnico, mecánico, práctico" },
        B: { name: "Investigador", description: "Científico, lógico" },
        C: { name: "Artístico", description: "Creativo, comunicador" },
        D: { name: "Emprendedor", description: "Líder, negocios" },
        E: { name: "Social", description: "Apoyo, salud, educación" },
        F: { name: "Convencional", description: "Organizado, administración" }
    };
    
    // Abilities Analysis (questions 4-9, indices 3-8)
    let abilitiesTotal = 0;
    for (let i = 3; i < 9; i++) {
        if (answers[i]) {
            abilitiesTotal += parseInt(answers[i]);
        }
    }
    
    let abilitiesLevel;
    if (abilitiesTotal >= 18) {
        abilitiesLevel = { level: "Alta", description: "Tienes habilidades destacadas" };
    } else if (abilitiesTotal >= 13) {
        abilitiesLevel = { level: "Media", description: "Tienes habilidades adecuadas" };
    } else {
        abilitiesLevel = { level: "Baja", description: "Necesitas desarrollar más habilidades" };
    }
    
    // Values Analysis (questions 10-11, indices 9-10)
    const valuesMap = {
        A: "Estabilidad económica",
        B: "Satisfacción personal", 
        C: "Reconocimiento",
        D: "Impacto social",
        E: "Tiempo libre"
    };
    
    const workStyleMap = {
        A: "Oficina con horarios fijos",
        B: "Al aire libre y activo",
        C: "Creativo, con libertad",
        D: "Trabajando con personas",
        E: "Resolviendo problemas técnicos"
    };
    
    const dominantValue = valuesMap[answers[9]] || "No definido";
    const preferredWorkStyle = workStyleMap[answers[10]] || "No definido";
    
    // Context Analysis (questions 12-15, indices 11-14)
    let contextScore = 0;
    const contextAnswers = answers.slice(11, 15);
    
    contextAnswers.forEach(answer => {
        if (answer === 'A') contextScore += 2; // Favorable
        else if (answer === 'B') contextScore += 1; // Medio
        // C or D = 0 points (limitado)
    });
    
    let contextLevel;
    if (contextScore >= 6) {
        contextLevel = { level: "Favorable", description: "Tienes condiciones favorables para estudiar" };
    } else if (contextScore >= 3) {
        contextLevel = { level: "Medio", description: "Tienes algunas condiciones favorables" };
    } else {
        contextLevel = { level: "Limitado", description: "Enfrentas algunas limitaciones" };
    }
    
    // Career recommendations based on RIASEC type
    const careerRecommendations = {
        A: ["Ingeniería Mecánica", "Técnico en Computación", "Arquitectura"],
        B: ["Medicina", "Ingeniería", "Investigación Científica"],
        C: ["Diseño Gráfico", "Arte", "Comunicación"],
        D: ["Administración de Empresas", "Marketing", "Liderazgo"],
        E: ["Psicología", "Trabajo Social", "Educación"],
        F: ["Contabilidad", "Administración", "Organización"]
    };
    
    return {
        riasec: {
            type: dominantType[0],
            count: dominantType[1],
            info: riasecTypes[dominantType[0]]
        },
        abilities: {
            total: abilitiesTotal,
            ...abilitiesLevel
        },
        values: {
            dominant: dominantValue,
            workStyle: preferredWorkStyle
        },
        context: contextLevel,
        careers: careerRecommendations[dominantType[0]] || ["Explorar múltiples opciones", "Consultar orientador", "Investigar más carreras"]
    };
}

// Display comprehensive results
function displayResults(evaluation) {
    const resultsContainer = document.querySelector('#resultsModal .row.g-3');
    resultsContainer.innerHTML = `
        <!-- RIASEC Profile -->
        <div class="col-md-6">
            <div class="card border-primary border-2 h-100">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title text-primary">
                        <i class="bi bi-person-badge me-2"></i>Tipo Vocacional Dominante
                    </h6>
                    <div class="text-center mb-2 flex-grow-1 d-flex flex-column justify-content-center">
                        <span class="display-4 text-primary">${evaluation.riasec.type}</span>
                        <h5 class="mt-2">${evaluation.riasec.info.name}</h5>
                        <p class="text-muted mb-2">${evaluation.riasec.info.description}</p>
                    </div>
                    <small class="text-info text-center">Aparece ${evaluation.riasec.count} vez(es) en tus respuestas</small>
                </div>
            </div>
        </div>
        
        <!-- Abilities -->
        <div class="col-md-6">
            <div class="card border-success h-100">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title text-success">
                        <i class="bi bi-graph-up me-2"></i>Nivel de Habilidades
                    </h6>
                    <div class="text-center mb-2 flex-grow-1 d-flex flex-column justify-content-center">
                        <span class="display-4 text-success">${evaluation.abilities.total}/24</span>
                        <h5 class="mt-2 text-success">${evaluation.abilities.level}</h5>
                        <p class="text-muted mb-2">${evaluation.abilities.description}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Values -->
        <div class="col-md-6">
            <div class="card border-warning h-100">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title text-warning">
                        <i class="bi bi-heart me-2"></i>Valores Profesionales
                    </h6>
                    <div class="flex-grow-1 d-flex flex-column justify-content-center">
                        <p class="mb-2"><strong>Más importante:</strong><br>${evaluation.values.dominant}</p>
                        <p class="mb-2"><strong>Estilo de trabajo:</strong><br>${evaluation.values.workStyle}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Context -->
        <div class="col-md-6">
            <div class="card border-info h-100">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title text-info">
                        <i class="bi bi-house me-2"></i>Contexto Personal
                    </h6>
                    <div class="flex-grow-1 d-flex flex-column justify-content-center text-center">
                        <h5 class="text-info mb-2">${evaluation.context.level}</h5>
                        <p class="text-muted mb-2">${evaluation.context.description}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Career Recommendations -->
        <div class="col-12">
            <div class="card border-dark">
                <div class="card-body">
                    <h6 class="card-title">
                        <i class="bi bi-mortarboard me-2"></i>Recomendaciones de Carreras
                    </h6>
                    <div class="row">
                        ${evaluation.careers.map((career, index) => `
                            <div class="col-md-4 mb-2">
                                <div class="alert alert-light mb-1">
                                    <strong>${index + 1}.</strong> ${career}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="alert alert-primary mt-3">
                        <i class="bi bi-info-circle me-2"></i>
                        <strong>Recomendación:</strong> Investiga más sobre estas carreras y consulta con un orientador vocacional para tomar la mejor decisión.
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update student information in results modal
function updateStudentInfo() {
    if (studentData.name) {
        document.getElementById('displayName').textContent = studentData.name;
        document.getElementById('displaySchool').textContent = studentData.school;
        document.getElementById('displayGroup').textContent = studentData.group;
        
        // Format and display date
        const date = new Date(studentData.date);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        document.getElementById('displayDate').textContent = date.toLocaleDateString('es-ES', options);
    }
}

// Update modal with dynamic results
// Temporary comment - will be replaced with new evaluation method
/*
function updateModalResults(sortedResults, areaInfo) {
    const resultsContainer = document.querySelector('#resultsModal .row.g-3');
    resultsContainer.innerHTML = '';

    sortedResults.forEach(([area, percentage], index) => {
        const info = areaInfo[area];
        const cardHtml = `
            <div class="col-md-6">
                <div class="card border-${info.color} ${index === 0 ? 'border-3' : ''}">
                    <div class="card-body text-center">
                        <div class="h2 text-${info.color} mb-2">${percentage}%</div>
                        <h6 class="card-title">${info.name}</h6>
                        <small class="text-muted">${info.description}</small>
                        ${index === 0 ? '<div class="mt-2"><span class="badge bg-' + info.color + '">¡Tu mejor match!</span></div>' : ''}
                    </div>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += cardHtml;
    });

    // Update recommendation text
    const topArea = sortedResults[0];
    const topAreaInfo = areaInfo[topArea[0]];
    const recommendationText = document.querySelector('#resultsModal .alert-primary p');
    
    if (topArea[1] > 0) {
        recommendationText.innerHTML = `Considera carreras en el área de <strong>${topAreaInfo.name}</strong>, especialmente aquellas que involucren ${getRecommendationText(topArea[0])}.`;
    } else {
        recommendationText.innerHTML = `Tus respuestas muestran intereses diversos. Te recomendamos explorar carreras multidisciplinarias que combinen diferentes áreas de conocimiento.`;
    }
}
*/

// Temporary comment - will be replaced with new evaluation method
/*
function getRecommendationText(area) {
    const recommendations = {
        exactas: "resolución de problemas técnicos, investigación científica y análisis de datos",
        sociales: "trabajo directo con personas, desarrollo humano y impacto social",
        artes: "expresión creativa, diseño innovador y comunicación visual",
        administracion: "liderazgo de equipos, gestión de proyectos y estrategia empresarial"
    };
    return recommendations[area] || "exploración de múltiples intereses";
}
*/

// Restart test
function restartTest() {
    currentQuestionIndex = 0;
    answers = [];
    
    // Hide modal properly
    const modal = bootstrap.Modal.getInstance(document.getElementById('resultsModal'));
    if (modal) {
        modal.hide();
    }
    
    // Reinitialize test
    setTimeout(() => {
        initTest();
    }, 300); // Small delay to ensure modal is hidden
}

// Student data management
let studentData = {};

function displayCurrentDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    const dateString = now.toLocaleDateString('es-ES', options);
    document.getElementById('currentDate').textContent = dateString;
}

function handleStudentForm(event) {
    event.preventDefault();
    
    // Capture student data
    studentData = {
        name: document.getElementById('studentName').value.trim(),
        school: document.getElementById('studentSchool').value.trim(),
        group: document.getElementById('studentGroup').value.trim(),
        email: document.getElementById('studentEmail').value.trim(),
        date: new Date().toISOString()
    };
    
    // Validate all fields are filled
    if (!studentData.name || !studentData.school || !studentData.group || !studentData.email) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(studentData.email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    
    // Hide student form and show test
    document.getElementById('studentDataForm').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';
    document.getElementById('questionCard').style.display = 'block';
    document.getElementById('navigationButtons').style.display = 'flex';
    document.getElementById('testInstructions').style.display = 'block';
    
    // Initialize test
    initTest();
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('prevBtn').addEventListener('click', prevQuestion);
document.getElementById('studentForm').addEventListener('submit', handleStudentForm);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
    // Don't auto-initialize test anymore, wait for student data
});
