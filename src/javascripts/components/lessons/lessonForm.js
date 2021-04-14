const lessonForm = (lessonInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" ${lessonInfo ? `value="${lessonInfo.lesson_name}"` : ''} placeholder="Enter Lesson's Name">
  </div>
  <button id="${lessonInfo ? `lessons--edit-submit--${lessonInfo.firebaseKey}` : 'lessons--add-submit'}" class="btn btn-success">${lessonInfo ? 'Edit' : 'Add'} Lesson</button>
</form>
`;

export default lessonForm;
