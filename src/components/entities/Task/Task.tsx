import { ITask } from "store/TaskListStore/TaskListStore";
import Button from "components/shared/Buttons/Button";

const Task = ({lable,description}:ITask) => {
    return(
        <div className='px-3 py-3'>
            <h1 className= 'text-3xl text-black'>{lable}</h1>
            <h2 className= 'text-2xl text-black'>{description}</h2>
            <Button color="red">Done!</Button>
        </div>
    );
};

export default Task;