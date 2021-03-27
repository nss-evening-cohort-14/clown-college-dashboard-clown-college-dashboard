const studentForm = (studentInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Full Name</label>
    <input type="text" class="form-control" id="fullName" aria-describedby="fullName" placeholder="Enter Student's Full Name" value="" required>
  </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="imageUrl" placeholder="Image URL" required value="">
  </div>
  <button id="${studentInfo ? 'ADD_ID_HERE' : 'students--add-submit'}" class="btn btn-success">Add Student</button>
</form>
`;

export default studentForm;
