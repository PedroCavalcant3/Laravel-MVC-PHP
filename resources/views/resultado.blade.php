

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="{{ app()->getLocale() }}" xml:lang="pt-br">
  <head>
    <title>Simulador</title>

    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Relatorio de seus Votos</h1>

    <table>
        <thead>
            <tr>
                <th>Candidato</th>
                <th>Partido</th>
                <th>cargo</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($user->candidates as $candidate)
    <tr>
        <td>{{ $candidate->nome }}</td>
        <td>{{ $candidate->partido }}</td>
        <td>{{ $candidate->cargo }}</td>
    </tr>
@endforeach
        </tbody>
    </table>
</body>
</html>


