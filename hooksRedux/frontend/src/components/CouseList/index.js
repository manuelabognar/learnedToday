import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
    return { type: 'ADD_COURSE', title: title }
}

export default function CourseList() {
    const [addCourse, setaddCourse] = useState([]);

    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function handleAddCourse(e) {
        e.preventDefault();
        dispatch(addCourseAction(addCourse));
    }

    return ( 
        <>
            <form>
                <input 
                    placeholder="Digite" 
                    value = {addCourse} 
                    onChange = {e => setaddCourse(e.target.value) }
                />
                <button type="button" onClick={ handleAddCourse }>
                    Adicionar
                </button>
            </form>

            <ul>
                { courses.map(course => <li key={course}> { course } </li>) }
            </ul>
        </>
    )
}