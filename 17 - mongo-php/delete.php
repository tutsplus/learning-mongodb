<?php

include('mongo.php');

if (isset($_GET['id'])) {
  $people->remove(array(
    "_id" => new MongoID($_GET['id'])
  ));
  header('Location: /');
}
