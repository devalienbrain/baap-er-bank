let remainingAmount = parseFloat(document.getElementById('remaining-amount').innerText);;

// DEPOSIT BUTTON
document.getElementById('deposit-btn').addEventListener('click', function () {
  const amountDeposited = parseFloat(document.getElementById('amount-to-deposit').value);

  if (isNaN(amountDeposited)) {
    alert('Invalid amount! Please input a valid amount.')
    return;
  }

  document.getElementById('amount-to-deposit').value = '';

  let depositTotal = parseFloat(document.getElementById('deposited-amount').innerText);

  depositTotal += amountDeposited;
  document.getElementById('deposited-amount').innerText = depositTotal;
  remainingAmount += amountDeposited;
  document.getElementById('remaining-amount').innerText = remainingAmount;
});

// WITHDRAW BUTTON
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const amountWithdrawed = parseFloat(document.getElementById('amount-to-withdraw').value);

  if (isNaN(amountWithdrawed)) {
    alert('Invalid amount! Please input a valid amount.')
    return;
  }

  document.getElementById('amount-to-withdraw').value = '';

  if (amountWithdrawed <= remainingAmount) {
    let withdrawTotal = parseFloat(document.getElementById('withdrawed-amount').innerText);

    withdrawTotal += amountWithdrawed;
    document.getElementById('withdrawed-amount').innerText = withdrawTotal;
    remainingAmount -= amountWithdrawed;
    document.getElementById('remaining-amount').innerText = remainingAmount;
  }
  else {
    alert('Tor baaper kache eto taka nai re pagla!');
  }
});