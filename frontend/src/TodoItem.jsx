import { FaRegCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

function TodoItem () {
    return (
        <>
            <li className="todo-item">
                <button>
                    <FaRegCircle size={16} />
                </button>
                <span>
                    Lorem ipsum...
                </span>
                <button>
                    <FaPencil size={18} />
                </button>
                <button>
                    <FaTrashCan size={18} />
                </button>
            </li>
        </>
    )
}
export default TodoItem;