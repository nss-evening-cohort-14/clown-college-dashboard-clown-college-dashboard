const studentForm = (studentInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Full Name</label>
    <input type="text" class="form-control" id="fullName" aria-describedby="fullName" ${studentInfo ? `value="${studentInfo.student_name}"` : ''} placeholder="Enter Student's Full Name">
  </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="imageUrl" placeholder="Image URL" required value="">
  </div>
  <button id="${studentInfo ? `students--edit-submit--${studentInfo.firebaseKey}` : 'students--add-submit'}" class="btn btn-secondary">${studentInfo ? 'Edit' : 'Add'} Student</button>
</form>
`;

export default studentForm;
