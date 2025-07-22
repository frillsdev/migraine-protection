(function () {
    const script = document.currentScript;

    // fallback defaults
    const defaultOpacity = 0.5;
    const defaultZ = 999;

    // dataset config
    let opacity = parseFloat(script.dataset.opacity);
    if (isNaN(opacity) || opacity < 0 || opacity > 1) opacity = defaultOpacity;

    let z = parseInt(script.dataset.z);
    if (isNaN(z) || z < 0) z = defaultZ;

    // overlay setup
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

    // hide on print
    const style = document.createElement('style');
    style.textContent = '@media print { .migraine-overlay { display: none !important; } }';
    document.head.appendChild(style);
    overlay.className = 'migraine-overlay';

    document.body.appendChild(overlay);

    // toggle logic
    let enabled = true;
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'm' && e.shiftKey) {
            enabled = !enabled;
            overlay.style.opacity = enabled ? opacity : '0';
        }
    });
})();
