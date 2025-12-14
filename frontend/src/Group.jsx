import TodoList from "./TodoList";

function Group () {
    return (
        <>
            <div className="content">
                <h1 className='title'>Title</h1>
                <TodoList />
                <div className="inp-new-item">
                    <input
                        type="text"
                        placeholder="Type a new todo"
                    />
                </div>
            </div>
        </>
    )
}
export default Group;