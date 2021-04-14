const classForm = (classInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Edit A Class</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Class Name" ${classInfo ? `value="${classInfo.class_name}"` : ''}>
  </div>
  <button id="${classInfo ? `classes--edit-submit--${classInfo.firebaseKey}` : 'classes--add-submit'}" class="btn btn-success">${classInfo ? 'Edit' : 'Add'} Class</button>
</form>
`;
export default classForm;
