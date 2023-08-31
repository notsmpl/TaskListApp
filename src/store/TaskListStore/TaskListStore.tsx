import { createEvent, createStore } from "effector";

export interface ITask {
    lable?: string;
    description?: string;
    id?:number;
    isDone?:boolean;
}
export const $taskList = createStore<ITask[]>([{id:1,lable:'task1',description:'some description'},{id:2,lable:'task2'},{id:3,lable:'task3'}]);

