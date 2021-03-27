const majorForm = (majorInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Major's Name" ${majorInfo ? `value="${majorInfo.name}"` : ''}>
  </div>
  <button id="${majorInfo ? `majors--edit-submit--${majorInfo.firebaseKey}` : 'majors--add-submit'}" class="btn btn-success">${majorInfo ? 'Edit' : 'Add'} Major</button>
</form>
`;

export default majorForm;
