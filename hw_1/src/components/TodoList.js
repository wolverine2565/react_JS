import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            setTasks([...tasks, taskText]);
            setTaskText('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <TextField
                label="Новая задача"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <Button onClick={handleAddTask}>Добавить задачу</Button>
            {tasks.map((task, index) => (
                <Card key={index} style={{ margin: '10px 0' }}>
                    <CardContent>
                        <Typography>{task}</Typography>
                        <IconButton onClick={() => handleDeleteTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default TodoList;

