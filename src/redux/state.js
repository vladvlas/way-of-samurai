import {renderTree} from '../render';

let state = {
    profilePage: {
      posts: [
          {
            id: '1',
            text: 'How are you?'
          },
          {
            id: '2',
            text: 'I am Ok'
          },
        ],
        
    },
    messagesPage: {
      messages: [
          {
              id: '1',
              text: 'Hi'
          },
          {
              id: '2',
              text: 'Hi'
          },
          {
              id: '3',
              text: 'How are you?'
          },
        ],
        dialogs:  [
          {
              path: '1',
              name: 'Maria'
          },
          {
              path: '2',
              name: 'Dima'
          },
          {
              path: '3',
              name: 'Vlad'
          },
          {
              path: '4',
              name: 'Sasha'
          },
          {
              path: '5',
              name: 'Lisa'
          },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        text: postMessage
    };
    state.profilePage.posts.push(newPost)
    console.log(postMessage);
    console.log(state.profilePage.posts)
    renderTree(state)
}


 
export default state;