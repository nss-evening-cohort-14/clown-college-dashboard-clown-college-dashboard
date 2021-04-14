const classForm = (classInfo) => `
<form class="mb-4">
<div class="form-group">
<label for="title">Full Name</label>
<input type="text" class="form-control" id="name" aria-describedby="name" ${classInfo ? `value="${classInfo.class_name}"` : ''} placeholder="Enter Student's Full Name">
</div>
  <button id="${classInfo ? `classes--edit-submit--${classInfo.firebaseKey}` : 'classes--add-submit'}" class="btn btn-success">${classInfo ? 'Edit' : 'Add'} Class</button>
</form>
`;
export default classForm;
