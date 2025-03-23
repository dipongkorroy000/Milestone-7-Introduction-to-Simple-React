// export default function ToDo({task,isDone}) {
//     if (isDone) {
//         return (
//             <li>Task: {task}, done this task.</li>
//         )
//     } else {
//         return (
//             <li>pending : {task}</li>
//         )
//     }
// }

//alternative--
// export default function ToDo({ task, isDone, time = 0 }) {
//     if (isDone === true) {
//         return (
//             <li>Task: {task}, done this task. duration: {time}</li>
//         )
//     } else {
//         return (
//             <li>pending : {task} duration: {time}</li>
//         )
//     }
// }

//alternative--
export default function ToDo({ task, isDone, time = 0 }) {
  let displayTime = time ? time : 100;
  let listItem;
  if (isDone === true) {
    listItem = (
      <li>
        Done: {task}, done this task. duration: {displayTime}
      </li>
    );
  } else {
    listItem = (
      <li>
        Pending: {task}, task is pending. duration: {displayTime}
      </li>
    );
  }
  return listItem;
}

// conditional rendering: 3 ternary --
// condition true : false ---
// export default function ToDo({task,isDone,time = 0}) {
//     return isDone ? <li>Done: {task} time : {time}</li> : <li>Not Done: {task}</li>
// }

// conditional rendering : 4 && --
// export default function ToDo({task,isDone,time = 0}) {
//     return isDone && <li>Done Task: {task} time : {time}</li>
// }

// conditional rendering : 5 || --
// export default function ToDo({task,isDone,time = 0}) {
//     return isDone || <li>Done Task: {task} time : {time}</li>
// }
