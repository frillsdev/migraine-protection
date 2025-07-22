(function () {
    const script = document.currentScript;

    const defaultOpacity = 0.5;
    const defaultZ = 999;
    const defaultKey = 'm';
    const defaultModifiers = ['alt'];

    // parse values
    const opacity = (v => (isNaN(v) || v < 0 || v > 1) ? defaultOpacity : v)(parseFloat(script.dataset.opacity));
    const z = (v => (isNaN(v) || v < 0) ? defaultZ : v)(parseInt(script.dataset.z));
    const toggleKey = (script.dataset.toggle || defaultKey).toLowerCase();

    // parse modifiers
    const modifiers = (script.dataset.modifier || defaultModifiers.join(' ')).toLowerCase().split(/\s+/);
    const requireShift = modifiers.includes('shift');
    const requireCtrl = modifiers.includes('ctrl') || modifiers.includes('control');
    const requireAlt = modifiers.includes('alt');
    const requireMeta = modifiers.includes('meta') || modifiers.includes('cmd') || modifiers.includes('command');

    // overlay element
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = `rgba(0, 0, 0, ${opacity})`;
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = z;
    overlay.style.mixBlendMode = 'multiply';
    overlay.style.transition = 'opacity 0.2s ease';
    overlay.className = 'migraine-protection';

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
