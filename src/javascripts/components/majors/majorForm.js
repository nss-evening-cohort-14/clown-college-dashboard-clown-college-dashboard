const majorForm = (majorInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Major's Name" value="" required>
  </div>
  <button id="${majorInfo ? 'ADD_ID_HERE' : 'majors--add-submit'}" class="btn btn-success">Add Major</button>
</form>
`;

export default majorForm;
