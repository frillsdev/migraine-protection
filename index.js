(function () {
    const script = document.currentScript;

    // fallback defaults
    const defaultOpacity = 0.5;
    const defaultZ = 999;
    const defaultKey = 'm';
    const defaultUseShift = true;

    // parse opacity
    let opacity = parseFloat(script.dataset.opacity);
    if (isNaN(opacity) || opacity < 0 || opacity > 1) opacity = defaultOpacity;

    // parse z-index
    let z = parseInt(script.dataset.z);
    if (isNaN(z) || z < 0) z = defaultZ;

    // parse toggle key
    const toggleKey = (script.dataset.toggle || defaultKey).toLowerCase();
    const useShift = script.dataset.shift !== 'false'; // default true unless explicitly false

    // create overlay
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

    // toggle functionality
    let enabled = true;
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === toggleKey && (useShift ? e.shiftKey : true)) {
            enabled = !enabled;
            overlay.style.opacity = enabled ? opacity : '0';
        }
    });
})();
