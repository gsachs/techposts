// Generator function which gives kill weapon based on Night King's health
function* nightKingKillWeapon() {

  let health = 100;

  while (true) {
    if (health > 575) {
      break; // To Lord of death, we say 'Today' 
    }

    if (health > 500 && health < 575) {
      health = yield arya();
    }
    else if (health > 400) {
      health = yield daenerys();
    }
    else if (health >= 100) {
      health = yield jon();
    }
  }
}

// This method starts with default weapon, and tries various methods until NK is killed or it runs out of options 
function theLongNight() {
  let killWeapon = nightKingKillWeapon(); killWeapon.next();

  let weaponOption = true;
  let killed = false;
  let health = 100;

  while (weaponOption && !killed) {
    let weapon = killWeapon.next(health);
    weaponOption = !weapon.done;
    health = hitNightKing(weapon.value);
    console.log('==> ' + weapon.value);

    if (health === 0) {
      killed = true;
      console.log('Night King\'s dead');
    }
  }
}

// Simple function to measure impact of weapon on NK
function hitNightKing(weapon) {
  let health = 500;

  if (weapon === 'Dragon Glass Sword') {
    return health - weaponImpact(150) + nightIceBoost(100);
  }
  else if (weapon === 'Dracarys') {
    return health - weaponImpact(200) + nightIceBoost(100);
  }
  else if (weapon === 'Valyrian Steel Dagger') {
    return 0;
  }
}

// Random Int Generator
getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns weapon
arya = () => {
  // Some magic, fire and ice here
  return 'Valyrian Steel Dagger';
}

jon = () => {
  // Some magic, fire and ice here
  return 'Dragon Glass Sword';
}

daenerys = () => {
  // Some magic, fire and ice here
  return 'Dracarys';
}


// Random impact due to weapon hit
weaponImpact = (upto) => {
  return getRandomInt(0, upto);
}

// NK is Anti fragile :)
nightIceBoost = (upto) => {
  return getRandomInt(0, upto);
}



theLongNight();