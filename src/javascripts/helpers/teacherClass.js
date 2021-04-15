import { deleteTeacher } from './db/teachers.json';
import { deleteClass, getClassesForTeachers } from './db/classes.json';

// DELETE TEACHER AND ALL THEIR CLASSES
const deleteTeacherClass = (firebaseKey) => new Promise((resolve, reject) => {
  getClassesForTeachers(firebaseKey).then((teacherClassArray) => {
    const deleteClasses = teacherClassArray.map((classes) => deleteClasses(classes.firebaseKey));

    Promise.all(deleteClass).then(() => resolve(deleteTeacher(firebaseKey)));
  }).catch((error) => reject(error));
});
export default deleteTeacherClass;
