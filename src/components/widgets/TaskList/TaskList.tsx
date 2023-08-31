import { useStore } from "effector-react";
import Task from "../../entities/Task";
import { $taskList } from "store/TaskListStore/TaskListStore";

const TaskList = () => {
    
    const list = useStore($taskList);

    return(
        <div>
            {list?.map((task) => <Task {...task}/>)}
        </div>
    )
};

export default TaskList;