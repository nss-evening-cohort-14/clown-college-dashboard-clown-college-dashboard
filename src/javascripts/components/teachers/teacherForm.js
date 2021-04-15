const teacherForm = (teacherInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Full Name</label>
    <input type="text" class="form-control" id="fullName" aria-describedby="fullName" ${teacherInfo ? `value="${teacherInfo.teacher_name}"` : ''} placeholder="Enter Teacher's Full Name">
  </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="imageUrl" ${teacherInfo ? `value="${teacherInfo.teacher_image}"` : ''} placeholder="Image URL">
  </div>
  <button id="${teacherInfo ? `teachers--edit-submit--${teacherInfo.firebaseKey}` : 'teachers--add-submit'}" class="btn btn-secondary">${teacherInfo ? 'Edit' : 'Add'} Teacher</button>
</form>
`;

export default teacherForm;
