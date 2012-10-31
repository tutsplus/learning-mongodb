<?php

include('mongo.php');

if (isset($_GET['id'])) {
  $person = $people->findOne(array( '_id' => new MongoId($_GET['id']) ));
} else if (isset($_POST['name'])) {
  $people->update(
    array( '_id' => new MongoID($_POST['id'])),
    array( 
      "name" => $_POST['name'],
      "job"  => $_POST['job']
    )
  );
  header("Location: /");
}

?>

<form method="POST" action="update.php">
<input type="hidden" name="id" value="<?php echo $person['_id'] ?>" />
<p>Name: <input type="text" name="name" value="<?php echo $person['name'] ?>" /></p>
<p>Job: <input type="text" name="job" value="<?php echo $person['job'] ?>" /></p>
  <p><button>Update </button></p>
</form>
