// Test Vocacional JavaScript - Universidad Tres Culturas

// Test data structure
const testQuestions = [
    {
        category: "Intereses Profesionales",
        question: "¿Cuál de estas actividades te resulta más atractiva?",
        options: [
            { text: "Resolver problemas matemáticos complejos", description: "Trabajar con números, cálculos y análisis cuantitativos", value: "exactas" },
            { text: "Ayudar a personas con problemas emocionales", description: "Brindar apoyo psicológico y orientación personal", value: "sociales" },
            { text: "Crear diseños artísticos innovadores", description: "Desarrollar conceptos visuales y expresiones creativas", value: "artes" },
            { text: "Liderar un equipo de trabajo", description: "Dirigir proyectos y coordinar grupos de personas", value: "administracion" }
        ]
    },
    {
        category: "Habilidades Naturales",
        question: "¿En qué área sientes que tienes más habilidades naturales?",
        options: [
            { text: "Análisis lógico y pensamiento crítico", description: "Resolver problemas de manera sistemática y objetiva", value: "exactas" },
            { text: "Comunicación y empatía", description: "Conectar con otros y entender sus necesidades", value: "sociales" },
            { text: "Creatividad e imaginación", description: "Generar ideas originales y soluciones innovadoras", value: "artes" },
            { text: "Organización y planificación", description: "Estructurar tareas y dirigir procesos eficientemente", value: "administracion" }
        ]
    },
    {
        category: "Motivaciones Personales",
        question: "¿Qué te motiva más en un trabajo?",
        options: [
            { text: "Descubrir cómo funcionan las cosas", description: "Investigar, analizar y encontrar soluciones técnicas", value: "exactas" },
            { text: "Hacer una diferencia en la vida de las personas", description: "Contribuir al bienestar y desarrollo de otros", value: "sociales" },
            { text: "Expresar mi creatividad y visión personal", description: "Crear algo único y con valor estético", value: "artes" },
            { text: "Alcanzar metas y liderar proyectos exitosos", description: "Lograr objetivos y dirigir equipos hacia el éxito", value: "administracion" }
        ]
    },
    {
        category: "Entorno de Trabajo Preferido",
        question: "¿En qué tipo de entorno te sentirías más cómodo trabajando?",
        options: [
            { text: "Laboratorio o centro de investigación", description: "Ambiente técnico y científico con equipos especializados", value: "exactas" },
            { text: "Centro comunitario o institución social", description: "Espacio orientado a la ayuda y el desarrollo humano", value: "sociales" },
            { text: "Estudio creativo o espacio artístico", description: "Ambiente inspirador con libertad para la expresión", value: "artes" },
            { text: "Oficina corporativa o centro de negocios", description: "Entorno profesional y dinámico orientado a resultados", value: "administracion" }
        ]
    },
    {
        category: "Valores Profesionales",
        question: "¿Qué valor es más importante para ti en tu carrera profesional?",
        options: [
            { text: "Precisión y exactitud", description: "Trabajar con datos confiables y resultados verificables", value: "exactas" },
            { text: "Justicia social y equidad", description: "Contribuir a un mundo más justo e inclusivo", value: "sociales" },
            { text: "Originalidad y autenticidad", description: "Mantener una voz única y expresión personal", value: "artes" },
            { text: "Eficiencia y productividad", description: "Optimizar recursos y maximizar resultados", value: "administracion" }
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
    document.querySelector('.badge').textContent = question.category;
    document.getElementById('questionText').textContent = question.question;
    
    // Update options
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionHtml = `
            <div class="form-check mb-3">
                <input class="form-check-input" type="radio" name="question" id="option${index}" value="${option.value}">
                <label class="form-check-label w-100 p-3 rounded border" for="option${index}">
                    <strong>${option.text}</strong>
                    <br><small class="text-muted">${option.description}</small>
                </label>
            </div>
        `;
        optionsContainer.innerHTML += optionHtml;
    });

    // Add event listeners to options
    document.querySelectorAll('input[name="question"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('nextBtn').disabled = false;
        });
    });

    // Reset selection
    document.getElementById('nextBtn').disabled = true;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
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

// Calculate and show results
function showResults() {
    const results = {
        exactas: 0,
        sociales: 0,
        artes: 0,
        administracion: 0
    };

    // Count answers
    answers.forEach(answer => {
        if (results.hasOwnProperty(answer)) {
            results[answer]++;
        }
    });

    // Convert to percentages
    const totalQuestions = testQuestions.length;
    Object.keys(results).forEach(key => {
        results[key] = Math.round((results[key] / totalQuestions) * 100);
    });

    // Sort results by percentage (highest first)
    const sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

    // Area names and descriptions
    const areaInfo = {
        exactas: { name: "Ciencias Exactas", description: "Matemáticas, Ingeniería, Física", color: "success" },
        sociales: { name: "Ciencias Sociales", description: "Psicología, Trabajo Social, Pedagogía", color: "primary" },
        artes: { name: "Artes y Diseño", description: "Diseño Gráfico, Arte, Arquitectura", color: "warning" },
        administracion: { name: "Administración", description: "Negocios, Gestión, Liderazgo", color: "info" }
    };

    // Update modal content dynamically
    updateModalResults(sortedResults, areaInfo);

    // Show modal with results
    const modal = new bootstrap.Modal(document.getElementById('resultsModal'));
    modal.show();
}

// Update modal with dynamic results
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

// Get specific recommendation text for each area
function getRecommendationText(area) {
    const recommendations = {
        exactas: "resolución de problemas técnicos, investigación científica y análisis de datos",
        sociales: "trabajo directo con personas, desarrollo humano y impacto social",
        artes: "expresión creativa, diseño innovador y comunicación visual",
        administracion: "liderazgo de equipos, gestión de proyectos y estrategia empresarial"
    };
    return recommendations[area] || "exploración de múltiples intereses";
}

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

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('prevBtn').addEventListener('click', prevQuestion);

// Initialize test when page loads
document.addEventListener('DOMContentLoaded', initTest);
