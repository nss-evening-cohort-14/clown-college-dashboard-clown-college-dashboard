const classForm = (classInfo) => `
<form class="mb-4">
<div class="form-group">
<label for="title">Class Name</label>
<input type="text" class="form-control" id="name" aria-describedby="name" ${classInfo ? `value="${classInfo.class_name}"` : ''} placeholder="Enter Class Name">
</div>
  <button id="${classInfo ? `classes--edit-submit--${classInfo.firebaseKey}` : 'classes--add-submit'}" class="btn btn-secondary">${classInfo ? 'Edit' : 'Add'} Class</button>
</form>
`;
export default classForm;
