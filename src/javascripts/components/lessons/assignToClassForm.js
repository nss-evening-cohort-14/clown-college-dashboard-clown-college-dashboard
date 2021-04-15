import { getAllLessons } from '../../helpers/lessonHelper';

const assignToClassForm = (classFirebaseKey) => {
  document.querySelector('#modal-body').innerHTML = '';
  let domString = `<form class="mt-1">
  <div class="form-group" id="assign-teacher">
    <label for="roles">Assign Class To Teacher</label>
    <select name="assignment" id="class-teacher">
      <option></option>
  `;
  getAllLessons().then((lessonArray) => {
    lessonArray.forEach((lesson) => {
      if (lessonArray.includes(lesson.firebaseKey)) {
        domString += `<option selected id="selected-teacher" value="${lesson.firebaseKey}">${lesson.lesson_name}</option>`;
      } else {
        domString += `<option id="selected-teacher" value="${lesson.firebaseKey}">${lesson.lesson_name}</option>`;
      }
    });
    domString += `</select> </div> <button type="submit" id="submit-assignment--${classFirebaseKey}" class="btn btn-primary">Assign Teacher</button></form>`;
    document.querySelector('#modal-body').innerHTML = domString;
  });
};
export default assignToClassForm;
