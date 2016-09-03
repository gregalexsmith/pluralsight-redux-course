export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
    // cant do this....
      //  state.push(action.course);
      //  return state;
    //instead....
    debugger;
    return [...state,      // ... es6 spread: explodes the array
                          // like taking the array and defining all of the values inline
      Object.assign({}, action.course)
    ];

     default:
      return state;
  }
}
