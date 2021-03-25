const classForm = (classInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">ADD_TEXT_HOLDER</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="ADD_TEXT_HOLDER" value="" required>
  </div>
  <button id="${classInfo ? 'ADD_ID_HERE' : 'classes--add-submit'}" class="btn btn-success">ADD_TEXT_HOLDER</button>
</form>
`;

export default classForm;
