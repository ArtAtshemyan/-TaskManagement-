import React from 'react';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import HomePage from "../screen/HomePage";
import LoginPage from '../screen/LoginPage';
import TaskManagement from '../screen/TaskManagement';
import ProjectPage from '../screen/ProjectPage';
import AddProjectTask from '../screen/AddProjectTask';
import AddMember from '../screen/AddMember';

function AppRouting() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='taskManagement/:id' element={<TaskManagement/>}>
                        <Route path='' element={<ProjectPage/>}/>
                        <Route path='addTask/:taskId' element={<AddProjectTask/>}/>
                    </Route>
                    <Route path='addMember/:id' element={<AddMember/>}/>
                    <Route path='*' element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouting;
