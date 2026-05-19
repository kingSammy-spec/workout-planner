// Preset Available Workout Splits
const PRESET_SPLITS = [
    {
        id: 'preset-push',
        name: 'Push Day (Hypertrophy)',
        desc: 'Focuses on building raw strength and muscle mass in your chest, shoulders, and triceps.',
        exercises: [
            { name: 'Bench Press (Barbell)', sets: 4, reps: '8-12', defaultWeight: 80 },
            { name: 'Overhead Press (Dumbbell)', sets: 3, reps: '8-10', defaultWeight: 24 },
            { name: 'Incline Dumbbell Fly', sets: 3, reps: '12', defaultWeight: 18 },
            { name: 'Tricep Rope Pushdowns', sets: 4, reps: '12-15', defaultWeight: 25 }
        ]
    },
    {
        id: 'preset-pull',
        name: 'Pull Day (Power & Width)',
        desc: 'Engage your posterior chain and back width with pulling compounds and isolation biceps.',
        exercises: [
            { name: 'Deadlift (Barbell)', sets: 3, reps: '5', defaultWeight: 140 },
            { name: 'Lat Pulldowns (Cable)', sets: 4, reps: '8-12', defaultWeight: 65 },
            { name: 'Single-Arm Dumbbell Rows', sets: 3, reps: '10', defaultWeight: 32 },
            { name: 'Barbell Bicep Curls', sets: 4, reps: '12', defaultWeight: 35 }
        ]
    },
    {
        id: 'preset-legs',
        name: 'Leg Day (Lower Body)',
        desc: 'Championship legs are built here. High-intensity squats and posterior chain accessories.',
        exercises: [
            { name: 'Back Squat (Barbell)', sets: 4, reps: '6-8', defaultWeight: 120 },
            { name: 'Romanian Deadlift (Dumbbell)', sets: 3, reps: '10', defaultWeight: 40 },
            { name: 'Leg Press (Plate Loaded)', sets: 3, reps: '12', defaultWeight: 200 },
            { name: 'Seated Calf Raises', sets: 4, reps: '15', defaultWeight: 50 }
        ]
    },
    {
        id: 'preset-fullbody',
        name: 'Full Body Conditioning',
        desc: 'A high-energy, full-body compound split optimized for conditioning and functional capacity.',
        exercises: [
            { name: 'Goblet Squats (Dumbbell)', sets: 3, reps: '12', defaultWeight: 30 },
            { name: 'Push-Ups (Weighted)', sets: 3, reps: '15', defaultWeight: 10 },
            { name: 'Dumbbell Renegade Rows', sets: 3, reps: '10', defaultWeight: 16 },
            { name: 'Hanging Knee Raises', sets: 3, reps: '15', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-seniors-strength',
        name: 'Silver Strength (Seniors)',
        desc: 'Gentle resistance training for older adults focusing on functional strength, core stability, and balance.',
        exercises: [
            { name: 'Chair Squats (Bodyweight)', sets: 3, reps: '10', defaultWeight: 0 },
            { name: 'Seated Dumbbell Bicep Curls', sets: 3, reps: '12', defaultWeight: 5 },
            { name: 'Wall Push-Ups (Controlled)', sets: 3, reps: '10', defaultWeight: 0 },
            { name: 'Supported Standing Calf Raises', sets: 3, reps: '15', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-seniors-balance',
        name: 'Joint Health & Balance (Seniors)',
        desc: 'Low-impact movements and mobility exercises designed to preserve joints, boost flexibility, and improve balance.',
        exercises: [
            { name: 'Single-Leg Balance Stand (Holds)', sets: 3, reps: '30s', defaultWeight: 0 },
            { name: 'Light Dumbbell Lateral Raises', sets: 3, reps: '10', defaultWeight: 3 },
            { name: 'Bird Dog (Core Stability)', sets: 3, reps: '10', defaultWeight: 0 },
            { name: 'Seated Hamstring Stretch (Holds)', sets: 3, reps: '5', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-kids-agility',
        name: 'Junior Champ Agility (Kids)',
        desc: 'Fun, dynamic, bodyweight training designed to improve coordination, balance, and athletic foundations.',
        exercises: [
            { name: 'Bear Crawls (Animal Walks)', sets: 3, reps: '15m', defaultWeight: 0 },
            { name: 'Jumping Jacks (Coordination)', sets: 3, reps: '20', defaultWeight: 0 },
            { name: 'Speed Squats (Bodyweight)', sets: 3, reps: '12', defaultWeight: 0 },
            { name: 'Superman Back Extensors', sets: 3, reps: '10', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-kids-cardio',
        name: 'Active Kids Cardio Play (Kids)',
        desc: 'Engaging, fast-paced moves to burn energy, strengthen the heart, and build healthy fitness habits.',
        exercises: [
            { name: 'Crab Walks (Back Strength)', sets: 3, reps: '12m', defaultWeight: 0 },
            { name: 'Knee Push-Ups (Upper Power)', sets: 3, reps: '8', defaultWeight: 0 },
            { name: 'High Knees (In Place)', sets: 3, reps: '20', defaultWeight: 0 },
            { name: 'Frog Jumps (Lower Explosive)', sets: 3, reps: '10', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-rehab-back',
        name: 'Lower Back Recovery (Rehab)',
        desc: 'Therapeutic movements targeting core activation, pelvic stability, and spinal decompressions.',
        exercises: [
            { name: 'Glute Bridges (Double Leg)', sets: 3, reps: '12', defaultWeight: 0 },
            { name: 'Cat-Cow Flow (Mobility)', sets: 3, reps: '10', defaultWeight: 0 },
            { name: 'Pelvic Tilts (Core Isolation)', sets: 3, reps: '15', defaultWeight: 0 },
            { name: 'Alternating Bird-Dog Holds', sets: 3, reps: '10', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-rehab-shoulder',
        name: 'Shoulder Rehab & Band Work',
        desc: 'Focuses on rotator cuff strengthening, scapular upward rotation, and structural shoulder alignment.',
        exercises: [
            { name: 'Elastic Band Pull-Aparts', sets: 3, reps: '15', defaultWeight: 5 },
            { name: 'Band External Rotations', sets: 3, reps: '12', defaultWeight: 3 },
            { name: 'Scapular Push-Ups', sets: 3, reps: '10', defaultWeight: 0 },
            { name: 'Wall Slides (Scapular Health)', sets: 3, reps: '10', defaultWeight: 0 }
        ]
    },
    {
        id: 'preset-rehab-knee',
        name: 'Knee-Friendly Lower Body (Rehab)',
        desc: 'Build lower body strength without high knee-joint compression. High stabilizer activation.',
        exercises: [
            { name: 'Single-Leg Glute Bridges', sets: 3, reps: '10', defaultWeight: 0 },
            { name: 'Straight Leg Raises (Quad Lock)', sets: 3, reps: '12', defaultWeight: 0 },
            { name: 'Side-Lying Clamshells', sets: 3, reps: '15', defaultWeight: 0 },
            { name: 'Wall Sit Isometric Holds', sets: 3, reps: '30s', defaultWeight: 0 }
        ]
    }
];

// App States
let customRoutines = JSON.parse(localStorage.getItem('customRoutines')) || [];
let activeWorkout = JSON.parse(localStorage.getItem('activeWorkout')) || null;

// DOM Elements
const navLinks = document.querySelectorAll('#main-nav a, #mobile-nav a');
const views = document.querySelectorAll('.view-section');
const presetsGrid = document.getElementById('presets-grid');
const customGrid = document.getElementById('custom-grid');
const activeWorkoutContent = document.getElementById('active-workout-content');
const activeWorkoutTitle = document.getElementById('active-workout-title');
const activeWorkoutSubtitle = document.getElementById('active-workout-subtitle');
const btnCancelWorkout = document.getElementById('btn-cancel-workout');
const activeSessionNav = document.getElementById('active-session-nav');

// Modals DOM
const customRoutineModal = document.getElementById('customRoutineModal');
const closeCustomModal = document.getElementById('closeCustomModal');
const btnOpenCreateModal = document.getElementById('btn-open-create-modal');
const btnCancelCreate = document.getElementById('btn-cancel-create');
const createRoutineForm = document.getElementById('create-routine-form');
const btnAddExerciseRow = document.getElementById('btn-add-exercise-row');
const modalExercisesList = document.getElementById('modal-exercises-list');

const celebrationModal = document.getElementById('celebrationModal');
const btnCloseCelebration = document.getElementById('btn-close-celebration');

// --- Tab Navigation ---
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        
        // Synchronize active states across both navigation lists (sidebar and mobile nav)
        navLinks.forEach(l => {
            if (l.getAttribute('data-target') === target) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        });

        views.forEach(view => {
            if (view.id === target) {
                view.style.display = 'block';
            } else {
                view.style.display = 'none';
            }
        });
    });
});

// Update active indicator pill in nav
function updateActiveNavIndicator() {
    const activeSessionMobileNav = document.getElementById('active-session-mobile-nav');
    if (activeWorkout) {
        const livePill = `<span style="background: var(--primary); color: #000; font-size: 0.65rem; padding: 2px 6px; border-radius: 10px; font-weight: 800; margin-left: 5px; animation: pulse 1.5s infinite;">LIVE</span>`;
        if (activeSessionNav) activeSessionNav.innerHTML = `Active Session ${livePill}`;
        if (activeSessionMobileNav) activeSessionMobileNav.innerHTML = `⚡ Active ${livePill}`;
    } else {
        if (activeSessionNav) activeSessionNav.innerHTML = `Active Session`;
        if (activeSessionMobileNav) activeSessionMobileNav.innerHTML = `⚡ Active`;
    }
}

// Add CSS keyframe animation for the LIVE tag dynamically
const styleTag = document.createElement('style');
styleTag.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.08); opacity: 1; box-shadow: 0 0 8px var(--primary); }
        100% { transform: scale(1); opacity: 0.9; }
    }
`;
document.head.appendChild(styleTag);

// --- Render Presets ---
function renderPresets() {
    presetsGrid.innerHTML = '';
    PRESET_SPLITS.forEach(split => {
        const card = document.createElement('div');
        card.className = 'routine-card';
        
        let exercisesHTML = '';
        split.exercises.forEach(ex => {
            exercisesHTML += `<li>${ex.name} <span class="exercise-sets">${ex.sets} Sets x ${ex.reps}</span></li>`;
        });

        card.innerHTML = `
            <div>
                <h3>${split.name}</h3>
                <p class="routine-desc">${split.desc}</p>
                <div class="routine-exercises">
                    <h4>Exercises Included</h4>
                    <ul>
                        ${exercisesHTML}
                    </ul>
                </div>
            </div>
            <div class="routine-card-actions">
                <button class="btn-primary btn-start-preset" data-id="${split.id}">Start Workout</button>
            </div>
        `;
        presetsGrid.appendChild(card);
    });

    // Event listener for starting preset
    document.querySelectorAll('.btn-start-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const preset = PRESET_SPLITS.find(p => p.id === id);
            if (preset) {
                activateWorkout(preset);
            }
        });
    });
}

// --- Render Custom Routines ---
function renderCustomRoutines() {
    customGrid.innerHTML = '';
    
    if (customRoutines.length === 0) {
        customGrid.innerHTML = `
            <div class="empty-active-state" style="grid-column: span 2; padding: 4rem 2rem;">
                <div class="icon">📝</div>
                <h3>No Custom Splits Yet</h3>
                <p>Take full control of your workouts. Design your own routines with custom exercises, specific sets, and target ranges to track your progress.</p>
                <button class="btn-primary" onclick="btnOpenCreateModal.click()">Build Custom Routine</button>
            </div>
        `;
        return;
    }

    customRoutines.forEach((routine, idx) => {
        const card = document.createElement('div');
        card.className = 'routine-card';
        
        let exercisesHTML = '';
        routine.exercises.forEach(ex => {
            exercisesHTML += `<li>${ex.name} <span class="exercise-sets">${ex.sets} Sets x ${ex.reps}</span></li>`;
        });

        card.innerHTML = `
            <div>
                <h3>${routine.name}</h3>
                <p class="routine-desc">Personalized user-made training split routine.</p>
                <div class="routine-exercises">
                    <h4>Exercises Included</h4>
                    <ul>
                        ${exercisesHTML}
                    </ul>
                </div>
            </div>
            <div class="routine-card-actions">
                <button class="btn-primary btn-start-custom" data-idx="${idx}">Start Workout</button>
                <button class="btn-secondary btn-delete-custom" data-idx="${idx}" style="max-width: 60px; display: flex; align-items: center; justify-content: center; color: var(--cancel); border-color: rgba(255,51,51,0.2);">🗑️</button>
            </div>
        `;
        customGrid.appendChild(card);
    });

    // Start Custom Workout
    document.querySelectorAll('.btn-start-custom').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = btn.getAttribute('data-idx');
            const routine = customRoutines[idx];
            if (routine) {
                activateWorkout(routine);
            }
        });
    });

    // Delete Custom Workout
    document.querySelectorAll('.btn-delete-custom').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = btn.getAttribute('data-idx');
            if (confirm('Are you sure you want to delete this custom routine?')) {
                customRoutines.splice(idx, 1);
                localStorage.setItem('customRoutines', JSON.stringify(customRoutines));
                renderCustomRoutines();
            }
        });
    });
}

// --- Active Session Tracker ---

// Activate routine (preset or custom) and move user to live active tracking
function activateWorkout(routine) {
    // Structure active workout tracking format
    activeWorkout = {
        name: routine.name,
        exercises: routine.exercises.map(ex => {
            const setsList = [];
            const count = parseInt(ex.sets) || 3;
            for (let s = 1; s <= count; s++) {
                setsList.push({
                    weight: ex.defaultWeight || 60,
                    reps: parseInt(ex.reps) || 10,
                    completed: false
                });
            }
            return {
                name: ex.name,
                sets: setsList
            };
        })
    };

    localStorage.setItem('activeWorkout', JSON.stringify(activeWorkout));
    updateActiveNavIndicator();
    renderActiveWorkout();
    
    // Switch to active session tab
    document.querySelector('[data-target=view-active]').click();
}

// Render active session tracking interface
function renderActiveWorkout() {
    if (!activeWorkout) {
        activeWorkoutTitle.innerText = "No Active Session";
        activeWorkoutSubtitle.innerText = "Select a routine from presets or your custom list to start tracking";
        btnCancelWorkout.style.display = 'none';
        
        activeWorkoutContent.innerHTML = `
            <div class="empty-active-state">
                <div class="icon">🏋️‍♂️</div>
                <h3>Start Your Training Session</h3>
                <p>Ready to log some heavy sets? Choose a workout split from our presets or build a personalized split to begin tracking your active progress live.</p>
                <button class="btn-primary" onclick="document.querySelector('[data-target=view-presets]').click()">Browse Preset Splits</button>
            </div>
        `;
        return;
    }

    activeWorkoutTitle.innerText = activeWorkout.name;
    activeWorkoutSubtitle.innerText = "Track your session. Check off each completed set.";
    btnCancelWorkout.style.display = 'block';

    let totalSets = 0;
    let completedSets = 0;

    let exercisesHTML = '';
    activeWorkout.exercises.forEach((ex, exIdx) => {
        let setsHTML = '';
        let exAllCompleted = true;

        ex.sets.forEach((set, setIdx) => {
            totalSets++;
            if (set.completed) completedSets++;
            else exAllCompleted = false;

            setsHTML += `
                <div class="set-row ${set.completed ? 'completed' : ''}">
                    <span class="set-num">Set ${setIdx + 1}</span>
                    <div>
                        <input type="number" class="set-weight-input" data-ex="${exIdx}" data-set="${setIdx}" value="${set.weight}">
                        <span class="set-unit">kg</span>
                    </div>
                    <span>x</span>
                    <div>
                        <input type="number" class="set-reps-input" data-ex="${exIdx}" data-set="${setIdx}" value="${set.reps}">
                        <span class="set-reps-unit">reps</span>
                    </div>
                    <label class="set-checkbox-container">
                        <input type="checkbox" class="set-complete-toggle" data-ex="${exIdx}" data-set="${setIdx}" ${set.completed ? 'checked' : ''}>
                        <span class="checkmark-btn"></span>
                    </label>
                </div>
            `;
        });

        exercisesHTML += `
            <div class="active-exercise-card ${exAllCompleted ? 'completed' : ''}">
                <div class="active-exercise-header">
                    <h3>${ex.name}</h3>
                    <span class="sets-summary">${ex.sets.length} Sets</span>
                </div>
                <div class="sets-checkbox-grid">
                    ${setsHTML}
                </div>
            </div>
        `;
    });

    const progressPercent = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;
    const progressMetaHTML = `
        <div class="active-session-meta">
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
            </div>
            <div class="progress-text">
                ${progressPercent}% Done (${completedSets}/${totalSets} Sets)
            </div>
        </div>
    `;

    const activeFooterHTML = `
        <div class="active-session-actions" style="margin-top: 3rem; text-align: center;">
            <button class="btn-primary" id="btn-finish-workout" style="width: 100%; font-size: 1.1rem; padding: 1.2rem; background: var(--success); border-color: var(--success); box-shadow: 0 4px 15px rgba(0, 255, 102, 0.15);" ${completedSets === totalSets ? '' : 'style="opacity: 0.65;"'}>
                Finish & Log Workout split
            </button>
        </div>
    `;

    activeWorkoutContent.innerHTML = progressMetaHTML + `<div class="active-exercises-list">${exercisesHTML}</div>` + activeFooterHTML;

    // Bind event listeners for input logs and complete checkboxes
    document.querySelectorAll('.set-weight-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const exIdx = parseInt(input.getAttribute('data-ex'));
            const setIdx = parseInt(input.getAttribute('data-set'));
            activeWorkout.exercises[exIdx].sets[setIdx].weight = parseFloat(input.value) || 0;
            localStorage.setItem('activeWorkout', JSON.stringify(activeWorkout));
        });
    });

    document.querySelectorAll('.set-reps-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const exIdx = parseInt(input.getAttribute('data-ex'));
            const setIdx = parseInt(input.getAttribute('data-set'));
            activeWorkout.exercises[exIdx].sets[setIdx].reps = parseInt(input.value) || 0;
            localStorage.setItem('activeWorkout', JSON.stringify(activeWorkout));
        });
    });

    document.querySelectorAll('.set-complete-toggle').forEach(chk => {
        chk.addEventListener('change', (e) => {
            const exIdx = parseInt(chk.getAttribute('data-ex'));
            const setIdx = parseInt(chk.getAttribute('data-set'));
            activeWorkout.exercises[exIdx].sets[setIdx].completed = chk.checked;
            localStorage.setItem('activeWorkout', JSON.stringify(activeWorkout));
            
            // Re-render immediately to update visual completed states and progress bar
            renderActiveWorkout();
        });
    });

    // Finish Workout Event
    document.getElementById('btn-finish-workout').addEventListener('click', () => {
        showInterstitialAd();
    });
}

// Cancel Active Workout Session
btnCancelWorkout.addEventListener('click', () => {
    if (confirm('Cancel active training session? Your live logged weights for this split will be cleared.')) {
        activeWorkout = null;
        localStorage.removeItem('activeWorkout');
        updateActiveNavIndicator();
        renderActiveWorkout();
    }
});


// --- Custom Routine Creation Modal ---

// Open Modal
btnOpenCreateModal.addEventListener('click', () => {
    modalExercisesList.innerHTML = '';
    addExerciseRowToModal(); // start with one blank exercise row
    customRoutineModal.style.display = 'flex';
});

// Close Modal
function closeCustomRoutineModal() {
    customRoutineModal.style.display = 'none';
    createRoutineForm.reset();
}

closeCustomModal.addEventListener('click', closeCustomRoutineModal);
btnCancelCreate.addEventListener('click', closeCustomRoutineModal);

// Add exercise row to builder modal
function addExerciseRowToModal() {
    const row = document.createElement('div');
    row.className = 'modal-exercise-row';
    row.innerHTML = `
        <input type="text" class="ex-name-input" placeholder="Exercise Name (e.g. Squat)" required>
        <input type="number" class="ex-sets-input" placeholder="Sets" min="1" max="10" value="4" required>
        <input type="text" class="ex-reps-input" placeholder="Reps (e.g. 8-12)" required>
        <button type="button" class="btn-remove-row">&times;</button>
    `;
    modalExercisesList.appendChild(row);

    // Bind remove button inside the row
    row.querySelector('.btn-remove-row').addEventListener('click', () => {
        row.remove();
        if (modalExercisesList.children.length === 0) {
            addExerciseRowToModal();
        }
    });
}

btnAddExerciseRow.addEventListener('click', addExerciseRowToModal);

// Save custom routine
createRoutineForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('routine-name-input').value;
    const exerciseRows = modalExercisesList.querySelectorAll('.modal-exercise-row');
    const exercises = [];

    exerciseRows.forEach(row => {
        exercises.push({
            name: row.querySelector('.ex-name-input').value,
            sets: parseInt(row.querySelector('.ex-sets-input').value) || 3,
            reps: row.querySelector('.ex-reps-input').value || '10',
            defaultWeight: 60
        });
    });

    const newRoutine = { name, exercises };
    customRoutines.push(newRoutine);
    localStorage.setItem('customRoutines', JSON.stringify(customRoutines));
    
    closeCustomRoutineModal();
    renderCustomRoutines();
});


// --- Celebration Modal Logic ---
btnCloseCelebration.addEventListener('click', () => {
    celebrationModal.style.display = 'none';
    
    // Completely clear active workout after celebration finish
    activeWorkout = null;
    localStorage.removeItem('activeWorkout');
    updateActiveNavIndicator();
    renderActiveWorkout();
    
    // Redirect user back to the presets view tab
    document.querySelector('[data-target=view-presets]').click();
});


// Close modal on gray backdrop click
window.addEventListener('click', (event) => {
    if (event.target === customRoutineModal) {
        closeCustomRoutineModal();
    }
});

// --- Strategic Ad System Logic ---

const interstitialAdModal = document.getElementById('interstitialAdModal');
const btnSkipAd = document.getElementById('btn-skip-ad');
const btnClaimAd = document.getElementById('btn-claim-ad');
const floatingAdBanner = document.getElementById('floating-ad-banner');
const btnBannerShop = document.getElementById('btn-banner-shop');
const btnBannerClose = document.getElementById('btn-banner-close');

let adTimer = null;

// Show post-workout interstitial ad with 5 second countdown
function showInterstitialAd() {
    interstitialAdModal.style.display = 'flex';
    
    // Reset skip button state
    btnSkipAd.disabled = true;
    btnSkipAd.style.opacity = '0.4';
    btnSkipAd.style.cursor = 'not-allowed';
    btnSkipAd.innerText = 'Skip Ad in 5s';
    
    let count = 5;
    if (adTimer) clearInterval(adTimer);
    
    adTimer = setInterval(() => {
        count--;
        if (count > 0) {
            btnSkipAd.innerText = `Skip Ad in ${count}s`;
        } else {
            clearInterval(adTimer);
            btnSkipAd.innerText = 'Skip Ad';
            btnSkipAd.disabled = false;
            btnSkipAd.style.opacity = '1';
            btnSkipAd.style.cursor = 'pointer';
            btnSkipAd.style.borderColor = 'var(--primary)';
        }
    }, 1000);
}

// Skip Ad - proceed to celebration modal
btnSkipAd.addEventListener('click', () => {
    interstitialAdModal.style.display = 'none';
    celebrationModal.style.display = 'flex';
});

// Claim Ad Offer
btnClaimAd.addEventListener('click', () => {
    alert('Promo claimed! Redirecting to Partner Store... Use discount code: RECOVER25');
    interstitialAdModal.style.display = 'none';
    celebrationModal.style.display = 'flex';
});

// --- Rotating Strategic Ad Pool ---
const FLOATING_ADS = [
    {
        badge: 'PRO SPONSOR',
        text: '⚡ <strong>HyperDrive Pre-Workout:</strong> Laser focus & massive pumps. Use code <strong>DRIVE30</strong> for 30% off!',
        buttonText: 'Shop Now',
        alertMsg: 'Redirecting to HyperDrive Store... Use discount code: DRIVE30 at checkout!'
    },
    {
        badge: 'POST-NUTRITION',
        text: '🥛 <strong>PureWhey Isolate 2.0:</strong> 26g of pure grass-fed isolate. Use code <strong>PURE25</strong> for 25% off.',
        buttonText: 'Claim Deal',
        alertMsg: 'Redirecting to PureWhey store... Use discount code: PURE25 for 25% off!'
    },
    {
        badge: 'EQUIPMENT',
        text: '💪 <strong>IronGrip Straps:</strong> Zero-slip heavy duty lifting straps. Maximize your heavy pulls.',
        buttonText: 'View Gear',
        alertMsg: 'Redirecting to IronGrip store... Claim 15% off cart discount automatically!'
    },
    {
        badge: 'AI COACHING',
        text: '🤖 <strong>IronTrack Elite:</strong> Get custom, AI-driven diet & training programs optimized live.',
        buttonText: 'Start Free',
        alertMsg: 'Starting your IronTrack Elite 14-day trial registration...'
    },
    {
        badge: 'PHYSIO SPECIAL',
        text: '🩹 <strong>HyperRecover Bands:</strong> Professional heavy latex bands for joint mobility & warmups.',
        buttonText: 'Get Bands',
        alertMsg: 'Redirecting to HyperRecover Store... Free shipping applied!'
    },
    {
        badge: 'TRAINING PLAN',
        text: '📖 <strong>Master the Deadlift:</strong> Add 20kg to your pull with our 4-week program. Download now.',
        buttonText: 'Get Program',
        alertMsg: 'Downloading your free 4-week deadlift program PDF block...'
    }
];

let currentAdIdx = 0;
let bannerRotationInterval = null;

// Render active ad details in the banner container
function renderBannerAd(idx) {
    if (!floatingAdBanner) return;
    const ad = FLOATING_ADS[idx];
    floatingAdBanner.innerHTML = `
        <div class="banner-content">
            <span class="banner-badge">${ad.badge}</span>
            <p>${ad.text}</p>
        </div>
        <div class="banner-actions">
            <button class="btn-banner-action" id="btn-banner-shop">${ad.buttonText}</button>
            <button class="btn-banner-close" id="btn-banner-close">&times;</button>
        </div>
    `;
}

// Transition & swap out the floating ad content elegantly
function rotateFloatingAd() {
    if (!floatingAdBanner || floatingAdBanner.style.display === 'none') return;
    
    // Add fade-out transition class
    floatingAdBanner.classList.add('fade-out');
    
    setTimeout(() => {
        currentAdIdx = (currentAdIdx + 1) % FLOATING_ADS.length;
        renderBannerAd(currentAdIdx);
        // Remove fade-out class to transition back in
        floatingAdBanner.classList.remove('fade-out');
    }, 400); // matches CSS transition duration
}

// Initialize floating ad with a 4 second page delay
setTimeout(() => {
    if (floatingAdBanner) {
        renderBannerAd(currentAdIdx);
        floatingAdBanner.style.display = 'flex';
        
        // Rotate ads every 10 seconds for premium engagement
        bannerRotationInterval = setInterval(rotateFloatingAd, 10000);
    }
}, 4000);

// Use Event Delegation to handle dynamic button clicks safely
if (floatingAdBanner) {
    floatingAdBanner.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.id === 'btn-banner-close') {
            floatingAdBanner.style.display = 'none';
            if (bannerRotationInterval) clearInterval(bannerRotationInterval);
        }
        
        else if (target.id === 'btn-banner-shop') {
            const activeAd = FLOATING_ADS[currentAdIdx];
            alert(activeAd.alertMsg);
            floatingAdBanner.style.display = 'none';
            if (bannerRotationInterval) clearInterval(bannerRotationInterval);
        }
    });
}

// --- Recurring Strategic Pop-up Ad Pool ---
const POPUP_ADS = [
    {
        type: 'premium',
        badge: '⚡',
        title: 'IronTrack Premium',
        subtitle: 'LIMITED TIME UPGRADE OFFER',
        desc: 'Unlock all 200+ elite gym splits, unlimited custom routine logging, and completely ad-free tracking forever.',
        promoText: 'Deal Expires In:',
        hasTimer: true,
        acceptBtnText: 'Unlock Ad-Free ($2)',
        declineBtnText: 'Skip Offer',
        alertMsg: '🎉 Welcome to IronTrack Premium! All ads have been successfully removed.'
    },
    {
        type: 'sponsor',
        badge: '🥛',
        title: 'PureWhey Isolate 2.0',
        subtitle: 'SPONSORED PEAK RECOVERY',
        desc: 'Accelerate protein synthesis and repair muscle fibers instantly. 26g of pure grass-fed whey isolate per scoop.',
        promoText: 'SPECIAL CODE: RECOVER25 (25% OFF)',
        hasTimer: false,
        acceptBtnText: 'Claim Offer',
        declineBtnText: 'No Thanks',
        alertMsg: 'Promo claimed! Redirecting to PureWhey store... Use discount code: RECOVER25'
    },
    {
        type: 'sponsor',
        badge: '💪',
        title: 'IronGrip Straps',
        subtitle: 'EQUIPMENT OF CHAMPIONS',
        desc: 'Zero-slip heavy duty lifting straps designed to support your grip on deadlifts, rows, and heavy pulls.',
        promoText: 'GET 15% OFF ON YOUR CART INSTANTLY',
        hasTimer: false,
        acceptBtnText: 'View Gear',
        declineBtnText: 'Skip Ad',
        alertMsg: 'Redirecting to IronGrip store... Claim 15% off cart discount automatically!'
    },
    {
        type: 'sponsor',
        badge: '⚡',
        title: 'HyperDrive Pre-Workout',
        subtitle: 'MAXIMUM ENERGY & FOCUS',
        desc: 'Shatter plateaus and experience mind-blowing muscle pumps with our clean, high-intensity pre-workout formula.',
        promoText: 'SPECIAL CODE: DRIVE30 (30% OFF)',
        hasTimer: false,
        acceptBtnText: 'Shop Now',
        declineBtnText: 'Maybe Later',
        alertMsg: 'Redirecting to HyperDrive Store... Use discount code: DRIVE30 at checkout!'
    },
    {
        type: 'sponsor',
        badge: '📖',
        title: 'Master the Deadlift',
        subtitle: 'FREE TRAINING PROGRAM',
        desc: 'Add up to 20kg to your barbell pull in 4 weeks with our professional peak loading programs and lifting guides.',
        promoText: 'FREE DIRECT PDF DOWNLOAD',
        hasTimer: false,
        acceptBtnText: 'Download Program',
        declineBtnText: 'Close',
        alertMsg: 'Downloading your free 4-week deadlift program PDF...'
    }
];

const premiumUpgradeModal = document.getElementById('premiumUpgradeModal');
let activePopupIdx = 0;
let upgradeCountdownTimer = null;
let nextPopupTimeout = null;

// Starts a 10 minute ticking countdown inside the active Premium popup
function startPremiumCountdown() {
    let durationSeconds = 10 * 60; // 10 minutes
    const display = document.getElementById('premium-timer-display');
    if (!display) return;
    
    if (upgradeCountdownTimer) clearInterval(upgradeCountdownTimer);
    
    upgradeCountdownTimer = setInterval(() => {
        durationSeconds--;
        if (durationSeconds >= 0) {
            const minutes = Math.floor(durationSeconds / 60);
            const seconds = durationSeconds % 60;
            display.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(upgradeCountdownTimer);
            premiumUpgradeModal.style.display = 'none';
            scheduleNextPopup();
        }
    }, 1000);
}

// Render the active ad specifications dynamically into the pop-up modal
function renderPopupAdContent(ad) {
    if (!premiumUpgradeModal) return;
    
    let promoHTML = '';
    if (ad.hasTimer) {
        promoHTML = `
            <div style="background: #080808; border: 1px solid var(--border); padding: 1rem; border-radius: 12px; margin-bottom: 2.5rem; display: flex; justify-content: center; align-items: center; gap: 1rem;">
                <span style="font-size: 0.85rem; font-weight: 700; color: #888;">${ad.promoText}</span>
                <span id="premium-timer-display" style="font-family: monospace; font-size: 1.5rem; font-weight: 800; color: var(--primary);">10:00</span>
            </div>
        `;
    } else {
        promoHTML = `
            <div style="background: #080808; border: 1px solid var(--border); padding: 1rem; border-radius: 12px; margin-bottom: 2.5rem; text-align: center;">
                <span style="font-size: 0.95rem; font-weight: 800; color: var(--primary); letter-spacing: 0.5px; text-transform: uppercase;">${ad.promoText}</span>
            </div>
        `;
    }

    premiumUpgradeModal.innerHTML = `
        <div class="modal-content" style="max-width: 540px; text-align: center; border-color: rgba(250, 255, 0, 0.2); box-shadow: 0 0 40px rgba(250, 255, 0, 0.1);">
            <div class="celebration-badge" style="font-size: 4rem; animation: bounce 1.5s infinite alternate; margin-bottom: 1rem;">${ad.badge}</div>
            <h2 style="font-family: 'Archivo Black', sans-serif; font-size: 2.2rem; color: var(--primary); margin: 1rem 0 0.5rem; letter-spacing: -1px; text-transform: uppercase;">${ad.title}</h2>
            <p style="color: var(--text-muted); font-size: 0.85rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem;">${ad.subtitle}</p>
            
            <p style="color: #ccc; font-size: 1rem; line-height: 1.6; margin-bottom: 2rem;">${ad.desc}</p>
            
            ${promoHTML}
            
            <div style="display: flex; gap: 1.5rem;">
                <button class="btn-secondary" id="btn-decline-upgrade" style="flex: 1; padding: 1rem;">${ad.declineBtnText}</button>
                <button class="btn-primary" id="btn-accept-upgrade" style="flex: 1; padding: 1rem; background: var(--primary); color: #000; border-color: var(--primary);">${ad.acceptBtnText}</button>
            </div>
        </div>
    `;
    
    if (ad.hasTimer) {
        startPremiumCountdown();
    }
}

// Shows the active popup ad if the user is not in a live gym split session
function triggerPopupAdFlow() {
    if (!premiumUpgradeModal || activeWorkout) {
        // Retry in 30 seconds if they are busy tracking a workout
        scheduleNextPopup(30000);
        return;
    }
    
    renderPopupAdContent(POPUP_ADS[activePopupIdx]);
    premiumUpgradeModal.style.display = 'flex';
}

// Schedules the next popup ad to fire after a specific delay (default 60s)
function scheduleNextPopup(delayMs = 60000) {
    if (nextPopupTimeout) clearTimeout(nextPopupTimeout);
    
    nextPopupTimeout = setTimeout(() => {
        activePopupIdx = (activePopupIdx + 1) % POPUP_ADS.length;
        triggerPopupAdFlow();
    }, delayMs);
}

// Initial timed pop-up load (15 seconds after page load)
setTimeout(triggerPopupAdFlow, 15000);

// Use event delegation to handle dynamic button clicks safely
if (premiumUpgradeModal) {
    premiumUpgradeModal.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.id === 'btn-decline-upgrade') {
            premiumUpgradeModal.style.display = 'none';
            if (upgradeCountdownTimer) clearInterval(upgradeCountdownTimer);
            scheduleNextPopup(); // queue up the next ad in 60s
        }
        
        else if (target.id === 'btn-accept-upgrade') {
            const activeAd = POPUP_ADS[activePopupIdx];
            alert(activeAd.alertMsg);
            premiumUpgradeModal.style.display = 'none';
            if (upgradeCountdownTimer) clearInterval(upgradeCountdownTimer);
            
            if (activeAd.type === 'premium') {
                // Completely dismiss all future popups & floating banners (Premium Experience)
                if (floatingAdBanner) floatingAdBanner.style.display = 'none';
                if (bannerRotationInterval) clearInterval(bannerRotationInterval);
                if (nextPopupTimeout) clearTimeout(nextPopupTimeout);
            } else {
                scheduleNextPopup(); // queue up next ad for sponsor claims
            }
        }
    });
}


// --- App Initialization ---
renderPresets();
renderCustomRoutines();
renderActiveWorkout();
updateActiveNavIndicator();
