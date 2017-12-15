<?php include_once ('../php/config.php'); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Compare github repository statistics</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.13/css/jquery.dataTables.css">
        <link rel="stylesheet" href="../../css/style.css">

    </head>
    <body>
<div class="">
    <h2>Gather new data (beta)</h2>
    Enter your github api token, update the csv inputs if you want, and hit go. Monitor the javascript console for errors and watch the countdown that replaces the go button.
    <div>
      <label><a href="https://github.com/settings/tokens">Github api token: </a></label>
      <input id="token" placeholder="token" value="1996bd63f4c524b4cd36499e3db39d321f0b39a7"/>
    </div>

    <div>
      <label title="Enter each entry on seperate lines. Each line as 'name,url' where url is 'https://github.com/<orgname>/<reponame>' or 'https://github.com/orgs/<orgname>' or  'https://github.com/users/<username>' or a space seperated list 'https://github.com/<orgname>/<reponame1> https://github.com/<orgname>/<reponame2>">csv inputs</label>
      <textarea id="repos" style="width: 100%; height:200px;">
<?php echo $conf['coins-list'] ?>
    </textarea>
    </div>
    <div class="">
        <button id="go">go</button>
        <button id="clear">clear cache</button>
    </div>
    Output to use in data/example_data.js to update the stats
    <textarea id="json" style="width:100%;height:200px;background-color:#a5a5a5;border: 1px solid #000000;margin-top:10px;"></textarea>
</div>
    </body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js" charset="utf-8"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.13/js/jquery.dataTables.js" charset="utf-8"></script>
<script src="https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.4/css/buttons.dataTables.min.css">
<script src="https://cdn.datatables.net/buttons/1.2.4/js/buttons.colVis.min.js" charset="utf-8"></script>
<script src="https://cdn.datatables.net/colreorder/1.3.2/js/dataTables.colReorder.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.3.2/css/colReorder.dataTables.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gh.js/3.0.8/gh.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.js" charset="utf-8"></script>

<script src="../../data/example_data.js" charset="utf-8"></script>
<script src="../../js/fetch_stats.js" charset="utf-8"></script>
<script src="../../js/main.js" charset="utf-8"></script>
</html>
