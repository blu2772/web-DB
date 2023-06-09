<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST');
// JSON-Daten aus der POST-Anfrage abrufen
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

// Verbindung zur Datenbank herstellen (Beispiel für MySQL)
$host = 'localhost';
$dbname = 'Booking';
$username = 'Try409';
$password = 'Try!409tr+$';

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // Fehlerbehandlung bei Verbindungsfehler
    die('Verbindungsfehler zur Datenbank: ' . $e->getMessage());
}

// Daten in die Datenbank einfügen (Beispiel für eine Tabelle mit den Spalten "name" und "email")
$name = $data['name'];
$email = $data["email"];
$startdate = $data['startdate'];
$enddate = $data['enddate'];
$status = $data['status'];
switch($data['cmd']){
    case"Book":
        try {
            $stmt = $db->prepare("INSERT INTO Kalender (name, email, startdate, enddate, status) VALUES (:name, :email, :startdate, :enddate, :status)");
$stmt->bindParam(':name', $data["name"]);
$stmt->bindParam(':email', $data["email"]);
$stmt->bindParam(':startdate', $data['startdate']);
$stmt->bindParam(':enddate', $data['enddate']);
$stmt->bindParam(':status', $data['status']);
$stmt->execute();
        
            // Erfolgsnachricht senden
            $response = ['success' => true, 'message' => 'Daten erfolgreich in die Datenbank eingefügt'];
            echo json_encode($response);
        } catch(PDOException $e) {
            // Fehlerbehandlung bei Datenbankeinfügefehler
            $response = ['success' => false, 'message' => 'Fehler beim Einfügen der Daten in die Datenbank','error' => $e->getMessage()];
            echo json_encode($response);
        }
    break;
    case"read":
        try {
            $stmt = $db->prepare("SELECT * FROM Kalender WHERE startdate >= :startdate or enddate <= :enddate");
            $stmt->bindParam(':startdate', $data["startdate"]);
            $stmt->bindParam(':enddate', $data["enddate"]);
            $stmt->execute();
        
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Convert the results to JSON
            $jsonArray = json_encode($results);

            // Return the JSON response
            echo $jsonArray;
        } catch(PDOException $e) {
            // Fehlerbehandlung bei Datenbankeinfügefehler
            $response = ['success' => false, 'message' => 'Fehler beim lessen des Kalenders','error' => $e->getMessage()];
            echo json_encode($response);
        }
    break;
    default:
    $response = ['success' => false, 'message' => 'no known comand given'];
    echo json_encode($response);
    break;   
}

?>
