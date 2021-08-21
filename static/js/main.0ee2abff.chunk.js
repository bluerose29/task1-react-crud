(this["webpackJsonptask1-react-crud"]=this["webpackJsonptask1-react-crud"]||[]).push([[0],{11:function(c,t,e){"use strict";e.r(t);var n=e(1),i=e.n(n),A=e(4),l=e.n(A),b=(e(9),e(2)),o=function(c){var t=Object(n.useState)(null),e=Object(b.a)(t,2),i=e[0],A=e[1],l=Object(n.useState)(!0),o=Object(b.a)(l,2),a=o[0],j=o[1],s=Object(n.useState)(null),I=Object(b.a)(s,2),h=I[0],O=I[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(c,{signal:t.signal}).then((function(c){if(!c.ok)throw Error("No Data Fetch");return c.json()})).then((function(c){A(c),j(!1),O(null)})).catch((function(c){"AbortError"===c.name?console.log("fetch aborted"):(j(!1),O(c.message))})),function(){return t.abort()}}),[c]),{data:i,isPending:a,error:h}},a=e(0),j=function(c){var t=c.tasks,e=(c.title,Object(n.useState)(new Array(t.length).fill(!1))),i=Object(b.a)(e,2),A=i[0],l=i[1];var o=Object(n.useState)(Object.keys(t).length),j=Object(b.a)(o,1)[0],s=Object(n.useState)(0),I=Object(b.a)(s,2),h=I[0],O=I[1];return Object(a.jsxs)("div",{className:"task-view",children:[Object(a.jsxs)("p",{children:[j-h,"  Unfinished Task"]}),t.map((function(c,t){var e=c.title,n=c.id;return Object(a.jsxs)("div",{className:"task-items",children:[Object(a.jsxs)("div",{className:"checkbox-container",children:[Object(a.jsx)("input",{type:"checkbox",id:"custom-checkbox-".concat(t),checked:A[t],onChange:function(){return function(c){var t=A.map((function(t,e){return e===c?!t:t}));l(t);var e=t.reduce((function(c,t,e){return!0===t?c+1:c}),0);O(e)}(t)}}),Object(a.jsx)("label",{children:e})]}),Object(a.jsx)("button",{onClick:function(){return function(c){console.log(c),fetch("http://localhost:8000/tasks/".concat(c),{method:"DELETE"}).then((function(c){c.json().then((function(c){console.warn(c)}))}))}(n)},children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTE5VDEyOjM1OjM0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOC0yMVQwMTo0ODoyNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wOC0yMVQwMTo0ODoyNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZWE5MzYyYy1jM2Q5LWI1NDctYjIxOS0zMWU0N2Q1MWVlZTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M2VhOTM2MmMtYzNkOS1iNTQ3LWIyMTktMzFlNDdkNTFlZWUzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2VhOTM2MmMtYzNkOS1iNTQ3LWIyMTktMzFlNDdkNTFlZWUzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozZWE5MzYyYy1jM2Q5LWI1NDctYjIxOS0zMWU0N2Q1MWVlZTMiIHN0RXZ0OndoZW49IjIwMjEtMDgtMTlUMTI6MzU6MzQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6SGOgKAAAAZUlEQVRIiWP8//8/Ay0BE01Np4cFLNgEH2XzIHMJhSEjjCE39QtxFhBhKC61jOiSNA8iRmypiJERwyFEAWxm4QoihodZ3CSlX/lpX7G6augn01ELRi0YtWDUAiIA1uKammDoBxEAXfwWKvTctoMAAAAASUVORK5CYII="})})]})}))]})},s=function(){var c=o("http://localhost:8000/tasks"),t=c.data,e=c.isPending,i=c.error,A=Object(n.useState)(""),l=Object(b.a)(A,2),s=l[0],I=l[1];return Object(n.useEffect)((function(){console.log("Site Running")}),[]),Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{children:"Todo List"}),Object(a.jsx)("button",{onClick:function(c){var t={title:s};console.log(t),fetch("http://localhost:8000/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("New Task"),console.log({title:s})}))},children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTE4VDIzOjU3OjQ2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOC0yMVQwMTo0ODo0OSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wOC0yMVQwMTo0ODo0OSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTNiYTI1Mi1mYTZkLTJlNDktOGRmYS1kZjEyMDBlMThjNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MGUzYmEyNTItZmE2ZC0yZTQ5LThkZmEtZGYxMjAwZTE4Yzc2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGUzYmEyNTItZmE2ZC0yZTQ5LThkZmEtZGYxMjAwZTE4Yzc2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTNiYTI1Mi1mYTZkLTJlNDktOGRmYS1kZjEyMDBlMThjNzYiIHN0RXZ0OndoZW49IjIwMjEtMDgtMThUMjM6NTc6NDYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VjqQlAAAAnklEQVRIidVWSQ7AIAgE02Pf0A/2Pf1g39A7PdVEyqgkYuKcDCrDsBhZRCgSKdQ7EW3f4j53a79HHlvG43qIqK6gN3dSO2sRVC94Axpdgx+JJhjRUoWPhDYAmEBREaLaNAcbPgfzBg0A5VvbXXMwFC0FOjIGdoj1izyVoGdCex/C7EsrcD0DLecWwXBYbepuRXWvQE2BJ13wLC//q3gBgtwbLTDNLS0AAAAASUVORK5CYII="})})]}),Object(a.jsxs)("div",{className:"task-list-display",children:[i&&Object(a.jsx)("div",{children:i}),e&&Object(a.jsx)("div",{style:{margin:"15px"},children:"Loading Task..."}),t&&Object(a.jsx)(j,{tasks:t})]}),Object(a.jsx)("input",{type:"text",placeholder:"New Task",value:s,onChange:function(c){return I(c.target.value)}})]})})},I=function(){return Object(a.jsx)("div",{className:"navBar",children:Object(a.jsx)("h2",{children:"React CRUD"})})};var h=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(I,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(s,{})})]})},O=function(c){c&&c instanceof Function&&e.e(3).then(e.bind(null,12)).then((function(t){var e=t.getCLS,n=t.getFID,i=t.getFCP,A=t.getLCP,l=t.getTTFB;e(c),n(c),i(c),A(c),l(c)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),O()},9:function(c,t,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.0ee2abff.chunk.js.map