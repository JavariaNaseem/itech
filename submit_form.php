<?php
$servername = "localhost";
$username = "root";      // your DB username
$password = "";          // your DB password
$dbname = "itech_db";    // your database name
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name = $_POST['name'];
$company_name = $_POST['company_name'];
$email = $_POST['email'];
$services = $_POST['services'];
$project_details = $_POST['project_details'];
$sql = "INSERT INTO business_form (name, company_name, email, services, project_details)
        VALUES ('$name', '$company_name', '$email', '$services', '$project_details')";
    
if ($conn->query($sql) === TRUE) {
    echo "<h2>Thank you! Your form has been submitted successfully.</h2>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
