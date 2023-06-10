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
$startdate = $data['startdate'];
$enddate = $data['enddate'];
$status = $data['status'];

try {
    $stmt = $db->prepare("INSERT INTO deine_tabelle (name, start_date, end_date, status) VALUES ($name, $startdate, $enddate, $status)");
    $stmt->execute();

    // Erfolgsnachricht senden
    $response = ['success' => true, 'message' => 'Daten erfolgreich in die Datenbank eingefügt'];
    echo json_encode($response);
} catch(PDOException $e) {
    // Fehlerbehandlung bei Datenbankeinfügefehler
    $response = ['success' => false, 'message' => 'Fehler beim Einfügen der Daten in die Datenbank','error' => $e->getMessage()];
    echo json_encode($response);
}
?>
