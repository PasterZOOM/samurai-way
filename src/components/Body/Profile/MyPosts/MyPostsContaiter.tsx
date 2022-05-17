import {StoreType} from '../../../../redux/reduxStore';
import {MyPosts} from './MyPosts';
import {addPostAC, PostType, updateNewPostTextAC} from '../../../../redux/profileReducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    })
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
            addPost: () => {
                dispatch(addPostAC())
            },
            updateNewPostText: (text) => {
                dispatch(updateNewPostTextAC(text))
            }
        }
    )
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
