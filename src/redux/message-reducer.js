

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const addMessageActionCreator = (newMessageText, funcSearch) => {
  return { type: ADD_MESSAGE, newText: newMessageText, doSearch: funcSearch }
}

export const updateNewMessageTextCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}


let initialState = {
  newMessageText: "",
  collocutors: [
    {
      id: 1,
      name: 'Алибек',
      messages: [{ id: 1, message: 'HI!' }, { id: 2, message: 'How are u ?' }, { id: 3, message: 'Goooood!' }, { id: 3, message: 'Have a nice design!' }]
    },
    {
      id: 2,
      name: 'Зульфия',
      messages: [{ id: 1, message: 'Привет!' }, { id: 2, message: 'Как дела ?' }]
    },
    {
      id: 3, name: 'Мамаджан',
      messages: [{ id: 1, message: 'Занзибарушка, салам алейкум, что-то от тебя давно вестей нет, Алия скучает, приезжай скорее' }, { id: 2, message: 'Ау!' }]
    },

    {
      id: 4,
      name: 'Расул',
      messages: [{ id: 1, message: 'Здравствуй дорогой!' }, { id: 2, message: 'Свежий насвай появился, надо ?' }]
    }],
  userSearch() { },
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      console.log(state)
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        id: 3,
        message: action.newText
      }
      let funcSearch = action.doSearch;

      let findUser = state.collocutors.find(funcSearch);
      findUser.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
}

export default messageReducer;