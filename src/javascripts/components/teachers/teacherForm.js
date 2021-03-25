const teacherForm = (teacherInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Full Name</label>
    <input type="text" class="form-control" id="fullName" aria-describedby="fullName" placeholder="Enter Teacher's Full Name" value="" required>
  </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="imageUrl" placeholder="Image URL" required value="">
  </div>
  <button id="${teacherInfo ? 'ADD_ID_HERE' : 'teachers--add-submit'}" class="btn btn-success">Add Teacher</button>
</form>
`;

export default teacherForm;
