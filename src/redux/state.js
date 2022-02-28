let store = {
    _state: {
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
            dialogs: [
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            text: postMessage
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: Date.now(),
                text: action.text
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state)
        }
    }


}









export default store;
window.store = store;