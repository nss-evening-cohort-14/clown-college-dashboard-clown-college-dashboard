const classForm = (classInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">ADD_TEXT_HOLDER</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="ADD_TEXT_HOLDER" ${classInfo ? `value="${classInfo.class_name}"` : ''}>
  </div>
  <button id="${classInfo ? `classes--edit-submit--${classInfo.firebaseKey}` : 'classes--add-submit'}" class="btn btn-success">${classInfo ? 'Edit' : 'ADD_TEXT_HOLDER'} ADD_TEXT_HOLDER</button>
</form>
`;

export default classForm;
