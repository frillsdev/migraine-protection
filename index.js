(function () {
    const script = document.currentScript;

    const defaultColour = '#000';
    const defaultOpacity = 0.5;
    const defaultZ = 999;
    const defaultKey = 'm';
    const defaultModifiers = ['alt'];

    // parse colour + opacity
    const background = script.dataset.colour || defaultColour;
    const opacity = (v => (isNaN(v) || v < 0 || v > 1) ? defaultOpacity : v)(parseFloat(script.dataset.opacity));

    // z-index
    const z = (v => (isNaN(v) || v < 0) ? defaultZ : v)(parseInt(script.dataset.z));

    // key and modifier config
    const toggleKey = (script.dataset.toggle || defaultKey).toLowerCase();
    const modifiers = (script.dataset.modifier || defaultModifiers.join(' ')).toLowerCase().split(/\s+/);

    const requireShift = modifiers.includes('shift');
    const requireCtrl = modifiers.includes('ctrl') || modifiers.includes('control');
    const requireAlt = modifiers.includes('alt');
    const requireMeta = modifiers.includes('meta') || modifiers.includes('cmd') || modifiers.includes('command');

    // build overlay
    const overlay = document.createElement('div');
    overlay.className = 'migraine-protection';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = background;
    overlay.style.opacity = opacity;
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = z;
    overlay.style.mixBlendMode = 'multiply';
    overlay.style.transition = 'opacity 0.2s ease';

    // hide on print
    const style = document.createElement('style');
    style.textContent = '@media print { .migraine-protection { display: none !important; } }';
    document.head.appendChild(style);

    document.body.appendChild(overlay);

    // toggle logic
    let enabled = true;
    document.addEventListener('keydown', (e) => {
        if (
            e.key.toLowerCase() === toggleKey &&
            (!requireShift || e.shiftKey) &&
            (!requireCtrl || e.ctrlKey) &&
            (!requireAlt || e.altKey) &&
            (!requireMeta || e.metaKey)
        ) {
            enabled = !enabled;
            overlay.style.opacity = enabled ? opacity : '0';
        }
    });
})();
