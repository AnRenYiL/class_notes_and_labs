const eventLogger = (event) => {
    const {
        currentTarget,
        eventPhase
    } = event;
    const {
        tagName,
        id,
        className
    } = currentTarget;
    let eventPhaseText = '';
    switch (eventPhase) {
        case 0:
            eventPhaseText = 'none'
            break;
        case 1:
            eventPhaseText = 'Capture'
            break;
        case 2:
            eventPhaseText = 'At Target'
            break;
        case 3:
            eventPhaseText = 'Bubble'
            break;
        default:
            break;
    }
    if (currentTarget.matches('.team')) {
        event.stopPropagation();
    }
    // if (currentTarget.matches('body')) {
    //     event.stopPropagation();
    // }
    console.log(`Phase: ${eventPhaseText} -${eventPhase} Node:${tagName}.${className}`);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('*').forEach((node) => {
        // node.addEventListener('click', eventLogger, true);
        node.addEventListener('click', eventLogger);

    })
});