fetch('https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/zakladni-prehled.json')
  .then(response => response.json())
  .then(data => {
      const ockovaniCelkem = data.data[0].vykazana_ockovani_celkem;
      const ockovaniDatumString = data.data[0].vykazana_ockovani_vcerejsi_den_datum;
      const ockovaniDatum = new Date(ockovaniDatumString);
      $(".circle-number").text(ockovaniCelkem.toLocaleString("cs-CZ"));
      $(".circle-date").text(ockovaniDatum.toLocaleDateString("cs-CZ"));

  });
