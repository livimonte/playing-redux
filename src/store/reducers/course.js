const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: "Playing with Redux",
      lessons: [
        { id: 1, title: "Class 1" },
        { id: 2, title: "Class 2" }
      ]
    },
    {
      id: 2,
      title: "Learning Redux",
      lessons: [
        { id: 3, title: "Class 3" },
        { id: 4, title: "Class 4" }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
