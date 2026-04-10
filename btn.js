(function() {
    const buttonId = 'CaseSectionSeparateModeAddRecordButtonButton-wrapperEl';
    const el = document.getElementById(buttonId);
    if (el) {
        el.scrollIntoView();
        el.style.outline = '5px solid green';
        console.log('Элемент найден через внешний скрипт!');
    } else {
        console.error('Элемент не найден');
    }
})();
