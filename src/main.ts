import EditorApp from "./editorui/editor-app";

document.body.style.margin = '0';
let eapp = new EditorApp(window);
// @ts-ignore
document.body.append(eapp.app.view);
eapp.registerEvents();
eapp.draw();