import { getAllTeachers } from '../../helpers/teacherHelper';

const assignClassToTeacherForm = (classFirebaseKey) => {
  document.querySelector('#modal-body').innerHTML = '';
  let domString = `<form class="mt-1">
  <div class="form-group" id="assign-teacher">
    <label for="roles">Assign Class To Teacher</label>
    <select name="assignment" id="class-teacher">
      <option></option>
  `;

  getAllTeachers().then((teacherArray) => {
    teacherArray.forEach((teacher) => {
      if (teacherArray.includes(teacher.firebaseKey)) {
        domString += `<option selected id="selected-teacher" value="${teacher.firebaseKey}">${teacher.teacher_name}</option>`;
      } else {
        domString += `<option id="selected-teacher" value="${teacher.firebaseKey}">${teacher.teacher_name}</option>`;
      }
    });

    domString += `</select> </div> <button type="submit" id="submit-assignment--${classFirebaseKey}" class="btn btn-primary">Assign Teacher</button></form>`;

    document.querySelector('#modal-body').innerHTML = domString;
  });
};

export default assignClassToTeacherForm;
