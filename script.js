function hitungImpuls() {
  let I = parseFloat(document.getElementById("arus").value);
  let N = parseFloat(document.getElementById("impuls").value);
  let K = parseFloat(document.getElementById("konstanta").value);
  let V = parseFloat(document.getElementById("tegangan").value);
  let cosphi = parseFloat(document.getElementById("cosphi").value);
  let tManual = parseFloat(document.getElementById("waktuManual").value);

  // === PERHITUNGAN ===
  let kWh = (I * V * cosphi) / 1000;
  let tHitung = (N * 3600 / kWh / K);
  let tMin = tHitung - (tHitung * 0.10);
  let tMax = tHitung + (tHitung * 0.10);
  let deviasiRaw = (tHitung / tManual) - 1;
  let deviasiPercent = deviasiRaw * 100;

  // === TAMPILKAN OUTPUT ===
  document.getElementById("kwh").innerText = kWh.toFixed(4);
  document.getElementById("waktu").innerText = tHitung.toFixed(2);
  document.getElementById("tMin").innerText = tMin.toFixed(2);
  document.getElementById("tMax").innerText = tMax.toFixed(2);
  document.getElementById("deviasi").innerText =
  deviasiPercent.toFixed(2) + " %";
}

function resetImpuls() {
  document.getElementById("arus").value = "";
  document.getElementById("impuls").value = "";
   document.getElementById("konstanta").value = "";
  document.getElementById("waktuManual").value = "";

  // Tetap pertahankan nilai default
  document.getElementById("tegangan").value = 220;
  document.getElementById("cosphi").value = 0.95;

  // Hapus output
  document.getElementById("kwh").innerText = "";
  document.getElementById("waktu").innerText = "";
  document.getElementById("tMin").innerText = "";
  document.getElementById("tMax").innerText = "";
  document.getElementById("deviasi").innerText = "";
}
  function hitungKwh() {
  let kwhP2 = parseFloat(document.getElementById("kwhP2_val").value);
  let K = parseFloat(document.getElementById("konstanta2").value);
  let N = parseFloat(document.getElementById("impuls2").value);
  let t = parseFloat(document.getElementById("waktu2").value);

  if (isNaN(kwhP2) || isNaN(K) || isNaN(N) || isNaN(t)) {
    alert("Isi semua input Validasi kWh!");
    return;
  }

  // === RUMUS SESUAI EXCEL KAMU ===
  let kwhP1 = (N * 3600) / (K * t);
  let deviasiRaw = (kwhP1 / kwhP2) - 1;
  let deviasiPercent = deviasiRaw * 100;

  // Tampilkan output
  document.getElementById("kwhP1").innerText = kwhP1.toFixed(2);
  document.getElementById("kwhP2").innerText = kwhP2.toFixed(2);
  document.getElementById("deviasiKwh").innerText =
    deviasiPercent.toFixed(2) + " %";

}
 function resetKwh() {
  document.getElementById("kwhP2_val").value = "";
  document.getElementById("konstanta2").value = "";
  document.getElementById("impuls2").value = "";
  document.getElementById("waktu2").value = "";

  document.getElementById("kwhP1").innerText = "";
  document.getElementById("deviasiKwh").innerText = "";

}
