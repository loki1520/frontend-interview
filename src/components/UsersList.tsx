
export const UsersList = ((props) => {
    console.log('UsersList rendered');
    const { users } = props;

    return (
        <div className="users-list"></div>
    );
})


const UserItem = (props) => {
    console.log('UserItem rendered');

    const { user } = props;

    return (
        <div className="user">
            <div>{user.name}</div>
            <div>Возраст: {user.age}</div>
            {/* TODO удаление */}
            <button style={{ marginLeft: 'auto' }}>x</button>
        </div>
    )
}



