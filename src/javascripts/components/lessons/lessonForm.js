const lessonForm = (lessonInfo) => `
<form class="mb-4">
  <div class="form-group">
    <label for="title">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Lesson's Name" value="" required>
  </div>
  <button id="${lessonInfo ? 'ADD_ID_HERE' : 'lessons--add-submit'}" class="btn btn-success">Add Lesson</button>
</form>
`;

export default lessonForm;
