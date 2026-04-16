import { some } from "./fable_modules/fable-library-js.4.29.0/Option.js";

export function findMyButton(id) {
    if (!(document.getElementById(id) == null)) {
        console.log(some("Кнопка найдена: " + id));
    }
    else {
        console.log(some("Кнопка не найдена"));
    }
}

findMyButton("CaseSectionSeparateModeAddRecordButtonButton-wrapperEl");

