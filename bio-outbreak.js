const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;
const ARENA = { left: 36, top: 72, right: 924, bottom: 604 };
const SHOP_ITEMS = [
  { name: "Ammo refill", cost: 35, detail: "Refill your magazine and reserve ammo." },
  { name: "Weapon upgrade", cost: 120, detail: "Increase weapon damage and magazine size." },
  { name: "Rapid reload", cost: 100, detail: "Reload 25% faster. Stacks twice." },
  { name: "Health upgrade", cost: 90, detail: "Restore health and increase maximum health." },
  { name: "Double damage", cost: 180, detail: "Permanently double weapon damage." },
  { name: "Auto-turret", cost: 140, detail: "Add one turret charge. Press Q to deploy." },
  { name: "Barricade kit", cost: 80, detail: "Add one barricade charge. Press B to deploy." }
];

let gameMode = "title";
let playerSprite;
let player;
let enemies = [];
let bullets = [];
let turrets = [];
let barricades = [];
let currentWave = 0;
let enemiesToSpawn = 0;
let spawnTimer = 0;
let fireTimer = 0;
let trapTimer = 0;
let powered = false;
let extractionOpen = false;
let extractionPoint;
let messageText = "";
let messageTimer = 0;
let reloadTimer = 0;
let gamepadStatus = "Connect a controller for gamepad controls";
let gamepadAimAngle = -Math.PI / 2;
let gamepadAimActive = false;
let pointerAimAngle = 0;
let waveAnnouncement = "";
let waveAnnouncementTimer = 0;
let shopButtons = [];

function setup() {
  new Canvas(GAME_WIDTH, GAME_HEIGHT);
  world.gravity.y = 0;
  textFont("Arial");
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  background("#07121c");
  drawFacility();

  if (gameMode === "title") {
    drawTitleScreen();
    return;
  }

  if (gameMode === "playing") {
    updateGame();
  }

  drawWorldDetails();
  drawHud();

  if (waveAnnouncementTimer > 0) {
    drawWaveAnnouncement();
    waveAnnouncementTimer -= 1;
  }

  if (gameMode === "shop") drawShop();
  if (gameMode === "won") drawEndScreen(true);
  if (gameMode === "lost") drawEndScreen(false);
}

function drawFacility() {
  background("#07121c");
  fill("#102330");
  rect(ARENA.left, ARENA.top, ARENA.right - ARENA.left, ARENA.bottom - ARENA.top, 10);

  stroke("#203b48");
  strokeWeight(1);
  for (let x = ARENA.left + 20; x < ARENA.right; x += 40) {
    line(x, ARENA.top + 1, x, ARENA.bottom - 1);
  }
  for (let y = ARENA.top + 20; y < ARENA.bottom; y += 40) {
    line(ARENA.left + 1, y, ARENA.right - 1, y);
  }
  noStroke();

  fill("#0b1821");
  rect(0, 0, GAME_WIDTH, 62);
  fill("#1b303a");
  rect(ARENA.left, ARENA.top, ARENA.right - ARENA.left, 5);
  rect(ARENA.left, ARENA.bottom - 5, ARENA.right - ARENA.left, 5);
  rect(ARENA.left, ARENA.top, 5, ARENA.bottom - ARENA.top);
  rect(ARENA.right - 5, ARENA.top, 5, ARENA.bottom - ARENA.top);
}

function drawWorldDetails() {
  drawPowerConsole();
  drawTrap();
  if (extractionOpen) drawExtraction();
  drawBarricades();
  drawTurrets();
  drawBullets();
  drawReticle();
  if (messageTimer > 0) {
    fill("#d8f6f5");
    textSize(14);
    text(messageText, GAME_WIDTH / 2, GAME_HEIGHT - 24);
    messageTimer -= 1;
  }
}

function drawPowerConsole() {
  const consoleX = ARENA.left + 54;
  const consoleY = ARENA.top + 56;
  fill(powered ? "#1d756b" : "#27404b");
  rect(consoleX - 18, consoleY - 15, 36, 30, 5);
  fill(powered ? "#7effd3" : "#f4b65f");
  circle(consoleX, consoleY, 8);
  fill("#bed0d4");
  textSize(11);
  text("POWER [E]", consoleX, consoleY + 28);
}

function drawTrap() {
  const trapX = GAME_WIDTH / 2;
  const trapY = GAME_HEIGHT / 2 + 18;
  noFill();
  stroke(powered ? "#48d7b1" : "#49606a");
  strokeWeight(2);
  circle(trapX, trapY, powered ? 106 : 82);
  noStroke();
  fill(powered ? "#267c6d" : "#233942");
  circle(trapX, trapY, 16);
  fill("#9ab1b7");
  textSize(10);
  text(powered ? "TRAP: LIVE" : "TRAP: OFF", trapX, trapY + 60);
}

function drawExtraction() {
  const pulse = 3 + sin(frameCount * 0.08) * 3;
  noFill();
  stroke("#69ffcb");
  strokeWeight(2);
  circle(extractionPoint.x, extractionPoint.y, 58 + pulse);
  noStroke();
  fill("#69ffcb");
  circle(extractionPoint.x, extractionPoint.y, 18);
  fill("#e0fff3");
  textSize(11);
  text("EXTRACTION", extractionPoint.x, extractionPoint.y - 42);
}

function drawBarricades() {
  for (const barricade of barricades) {
    fill("#8d7045");
    rect(barricade.x - 26, barricade.y - 8, 52, 16, 3);
    stroke("#d0a866");
    strokeWeight(2);
    line(barricade.x - 20, barricade.y - 6, barricade.x - 8, barricade.y + 6);
    line(barricade.x - 2, barricade.y - 6, barricade.x + 10, barricade.y + 6);
    line(barricade.x + 16, barricade.y - 6, barricade.x + 24, barricade.y + 2);
    noStroke();
    fill("#e4c078");
    textSize(9);
    text(`${barricade.hp}`, barricade.x, barricade.y - 16);
  }
}

function drawTurrets() {
  for (const turret of turrets) {
    fill("#244e68");
    rect(turret.x - 13, turret.y - 13, 26, 26, 5);
    fill("#67d8ee");
    circle(turret.x, turret.y, 9);
    stroke("#67d8ee");
    strokeWeight(3);
    line(turret.x, turret.y, turret.x + cos(turret.angle) * 19, turret.y + sin(turret.angle) * 19);
    noStroke();
  }
}

function drawBullets() {
  for (const bullet of bullets) {
    fill(bullet.fromTurret ? "#8ef8ee" : "#ffe18a");
    circle(bullet.x, bullet.y, bullet.fromTurret ? 6 : 5);
  }
}

function drawReticle() {
  if (!player || gameMode === "shop") return;
  let aimX = mouseX;
  let aimY = mouseY;
  if (gamepadAimActive) {
    aimX = playerSprite.x + cos(gamepadAimAngle) * 90;
    aimY = playerSprite.y + sin(gamepadAimAngle) * 90;
  }
  noFill();
  stroke("#d4f4ef");
  strokeWeight(1);
  circle(aimX, aimY, 14);
  line(aimX - 10, aimY, aimX - 5, aimY);
  line(aimX + 5, aimY, aimX + 10, aimY);
  line(aimX, aimY - 10, aimX, aimY - 5);
  line(aimX, aimY + 5, aimX, aimY + 10);
  noStroke();
}

function updateGame() {
  if (messageTimer > 0) messageTimer -= 1;
  updateGamepadStatus();
  updatePlayer();
  updateEnemies();
  updateBullets();
  updateTurrets();
  updateTraps();
  updateBarricades();
  updateReload();
  updateWave();
  checkExtraction();
}

function updatePlayer() {
  const input = readMovementInput();
  const magnitude = Math.hypot(input.x, input.y);
  if (magnitude > 0) {
    const speed = 3.2;
    playerSprite.x += input.x / Math.max(1, magnitude) * speed;
    playerSprite.y += input.y / Math.max(1, magnitude) * speed;
  }
  playerSprite.x = constrain(playerSprite.x, ARENA.left + 20, ARENA.right - 20);
  playerSprite.y = constrain(playerSprite.y, ARENA.top + 20, ARENA.bottom - 20);

  const aim = readAimInput();
  player.facing = aim.angle;
  if ((mouseIsPressed || aim.shooting) && fireTimer <= 0) fireWeapon();
  if (fireTimer > 0) fireTimer -= 1;
}

function readMovementInput() {
  let x = (keyIsDown(68) || keyIsDown(RIGHT_ARROW) ? 1 : 0) - (keyIsDown(65) || keyIsDown(LEFT_ARROW) ? 1 : 0);
  let y = (keyIsDown(83) || keyIsDown(DOWN_ARROW) ? 1 : 0) - (keyIsDown(87) || keyIsDown(UP_ARROW) ? 1 : 0);

  const pad = getConnectedGamepad();
  if (pad) {
    const stickX = Math.abs(pad.axes[0] || 0) > 0.18 ? pad.axes[0] : 0;
    const stickY = Math.abs(pad.axes[1] || 0) > 0.18 ? pad.axes[1] : 0;
    if (stickX || stickY) {
      x = stickX;
      y = stickY;
    }
  }
  return { x, y };
}

function readAimInput() {
  const pad = getConnectedGamepad();
  if (pad) {
    const stickX = pad.axes[2] || 0;
    const stickY = pad.axes[3] || 0;
    if (Math.hypot(stickX, stickY) > 0.24) {
      gamepadAimAngle = Math.atan2(stickY, stickX);
      gamepadAimActive = true;
    } else {
      gamepadAimActive = false;
    }
    return {
      angle: gamepadAimAngle,
      shooting: Boolean(pad.buttons[7] && (pad.buttons[7].pressed || pad.buttons[7].value > 0.25))
    };
  }
  gamepadAimActive = false;
  return { angle: Math.atan2(mouseY - playerSprite.y, mouseX - playerSprite.x), shooting: false };
}

function getConnectedGamepad() {
  if (!navigator.getGamepads) return null;
  const pads = navigator.getGamepads();
  for (const pad of pads) {
    if (pad && pad.connected) return pad;
  }
  return null;
}

function updateGamepadStatus() {
  const pad = getConnectedGamepad();
  gamepadStatus = pad ? `Gamepad connected: ${pad.id.slice(0, 32)}` : "Connect a controller for gamepad controls";
}

function fireWeapon(fromTurret = false, turret = null) {
  if (!fromTurret && player.reloading) return;
  if (!fromTurret && player.magazine <= 0) {
    beginReload();
    return;
  }

  const sourceX = fromTurret ? turret.x : playerSprite.x;
  const sourceY = fromTurret ? turret.y : playerSprite.y;
  const angle = fromTurret ? turret.angle : player.facing;
  const bulletSpeed = fromTurret ? 8 : 10;
  const bulletDamage = fromTurret ? 1 : player.damage;
  bullets.push({
    x: sourceX + cos(angle) * 18,
    y: sourceY + sin(angle) * 18,
    velocityX: cos(angle) * bulletSpeed,
    velocityY: sin(angle) * bulletSpeed,
    damage: bulletDamage,
    life: 75,
    fromTurret
  });

  if (!fromTurret) {
    player.magazine -= 1;
    fireTimer = 11;
  }
}

function beginReload() {
  if (player.reloading || player.magazine === player.magazineSize || player.reserveAmmo <= 0) return;
  player.reloading = true;
  const reloadFrames = Math.round(100 * player.reloadSpeed);
  reloadTimer = Math.max(35, reloadFrames);
  showMessage("Reloading...");
}

function updateReload() {
  if (!player.reloading) return;
  reloadTimer -= 1;
  if (reloadTimer <= 0) {
    const needed = player.magazineSize - player.magazine;
    const loaded = Math.min(needed, player.reserveAmmo);
    player.magazine += loaded;
    player.reserveAmmo -= loaded;
    player.reloading = false;
    showMessage("Reload complete");
  }
}

function updateEnemies() {
  for (const enemy of enemies) {
    enemy.attackCooldown = Math.max(0, enemy.attackCooldown - 1);
    const dx = playerSprite.x - enemy.sprite.x;
    const dy = playerSprite.y - enemy.sprite.y;
    const distance = Math.max(1, Math.hypot(dx, dy));

    if (distance > 24) {
      const targetBarricade = barricades.find((barrier) =>
        Math.hypot(barrier.x - enemy.sprite.x, barrier.y - enemy.sprite.y) < 38 &&
        Math.hypot(playerSprite.x - barrier.x, playerSprite.y - barrier.y) < distance
      );
      if (targetBarricade) {
        if (enemy.attackCooldown === 0) {
          targetBarricade.hp -= enemy.damage;
          enemy.attackCooldown = enemy.attackRate;
        }
        continue;
      }
      enemy.sprite.x += dx / distance * enemy.speed;
      enemy.sprite.y += dy / distance * enemy.speed;
      continue;
    }

    if (enemy.attackCooldown === 0) {
      player.health = Math.max(0, player.health - enemy.damage);
      enemy.attackCooldown = enemy.attackRate;
      showMessage("INJURY DETECTED");
      if (player.health === 0) endGame(false);
    }
  }
}

function updateBullets() {
  for (let bulletIndex = bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
    const bullet = bullets[bulletIndex];
    bullet.x += bullet.velocityX;
    bullet.y += bullet.velocityY;
    bullet.life -= 1;
    let hit = false;

    for (let enemyIndex = enemies.length - 1; enemyIndex >= 0; enemyIndex -= 1) {
      const enemy = enemies[enemyIndex];
      if (Math.hypot(bullet.x - enemy.sprite.x, bullet.y - enemy.sprite.y) > enemy.size / 2 + 3) continue;

      const headshot = Math.abs(bullet.y - (enemy.sprite.y - enemy.size * 0.2)) < 5;
      enemy.health -= bullet.damage;
      if (enemy.health <= 0) defeatEnemy(enemyIndex, headshot);
      hit = true;
      break;
    }

    if (hit || bullet.life <= 0 || bullet.x < ARENA.left || bullet.x > ARENA.right ||
      bullet.y < ARENA.top || bullet.y > ARENA.bottom) {
      bullets.splice(bulletIndex, 1);
    }
  }
}

function defeatEnemy(enemyIndex, headshot) {
  const enemy = enemies[enemyIndex];
  enemy.sprite.remove();
  enemies.splice(enemyIndex, 1);
  player.credits += headshot ? 30 : 20;
  showMessage(headshot ? "HEADSHOT +30 CREDITS" : "TARGET ELIMINATED +20 CREDITS");
}

function updateTurrets() {
  for (const turret of turrets) {
    turret.cooldown = Math.max(0, turret.cooldown - 1);
    let nearest = null;
    let nearestDistance = 250;
    for (const enemy of enemies) {
      const distance = Math.hypot(enemy.sprite.x - turret.x, enemy.sprite.y - turret.y);
      if (distance < nearestDistance) {
        nearest = enemy;
        nearestDistance = distance;
      }
    }
    if (nearest && turret.cooldown === 0) {
      turret.angle = Math.atan2(nearest.sprite.y - turret.y, nearest.sprite.x - turret.x);
      fireWeapon(true, turret);
      turret.cooldown = 28;
    }
  }
}

function updateTraps() {
  if (!powered) return;
  trapTimer -= 1;
  if (trapTimer > 0) return;
  trapTimer = 160;
  let hitCount = 0;
  for (let index = enemies.length - 1; index >= 0; index -= 1) {
    const enemy = enemies[index];
    if (Math.hypot(enemy.sprite.x - GAME_WIDTH / 2, enemy.sprite.y - (GAME_HEIGHT / 2 + 18)) < 54) {
      enemy.health -= 2;
      hitCount += 1;
      if (enemy.health <= 0) defeatEnemy(index, false);
    }
  }
  if (hitCount) showMessage("CONTAINMENT TRAP FIRED");
}

function updateBarricades() {
  for (let index = barricades.length - 1; index >= 0; index -= 1) {
    barricades[index].life -= 1;
    if (barricades[index].hp <= 0 || barricades[index].life <= 0) barricades.splice(index, 1);
  }
}

function updateWave() {
  if (enemiesToSpawn > 0) {
    spawnTimer -= 1;
    if (spawnTimer <= 0) {
      spawnEnemy();
      enemiesToSpawn -= 1;
      spawnTimer = Math.max(28, 74 - currentWave * 4);
    }
  }
  if (gameMode === "playing" && enemiesToSpawn === 0 && enemies.length === 0) {
    if (currentWave >= 10) {
      if (!extractionOpen) {
        extractionOpen = true;
        showMessage("EXTRACTION UNLOCKED — REACH THE BEACON");
      }
    } else {
      gameMode = "shop";
      showMessage("WAVE CLEAR — RESTOCK BEFORE THE NEXT WAVE");
    }
  }
}

function spawnEnemy() {
  const side = floor(random(4));
  let x = ARENA.left + 28;
  let y = ARENA.top + 28;
  if (side === 0) x = random(ARENA.left + 24, ARENA.right - 24);
  if (side === 1) {
    x = ARENA.right - 24;
    y = random(ARENA.top + 24, ARENA.bottom - 24);
  }
  if (side === 2) {
    x = random(ARENA.left + 24, ARENA.right - 24);
    y = ARENA.bottom - 24;
  }
  if (side === 3) y = random(ARENA.top + 24, ARENA.bottom - 24);

  let variant = "infected";
  if (currentWave >= 5 && random() < 0.22) variant = "brute";
  else if (currentWave >= 3 && random() < 0.35) variant = "runner";

  const definitions = {
    infected: { size: 25, health: 2 + floor(currentWave / 5), speed: 0.65 + currentWave * 0.035, damage: 5, color: "#b85666", attackRate: 62 },
    runner: { size: 20, health: 1 + floor(currentWave / 7), speed: 1.15 + currentWave * 0.04, damage: 4, color: "#da934b", attackRate: 48 },
    brute: { size: 34, health: 5 + floor(currentWave / 2), speed: 0.45 + currentWave * 0.025, damage: 10, color: "#8f6bc2", attackRate: 78 }
  };
  const stats = definitions[variant];
  const sprite = new Sprite(x, y, stats.size, stats.size, "none");
  sprite.color = stats.color;
  sprite.stroke = "#f3d9cf";
  sprite.strokeWeight = 1;
  enemies.push({
    sprite,
    kind: variant,
    size: stats.size,
    health: stats.health,
    speed: stats.speed,
    damage: stats.damage,
    attackRate: stats.attackRate,
    attackCooldown: 30
  });
}

function checkExtraction() {
  if (extractionOpen && Math.hypot(playerSprite.x - extractionPoint.x, playerSprite.y - extractionPoint.y) < 30) {
    endGame(true);
  }
}

function togglePower() {
  const consoleX = ARENA.left + 54;
  const consoleY = ARENA.top + 56;
  if (Math.hypot(playerSprite.x - consoleX, playerSprite.y - consoleY) > 58) {
    showMessage("MOVE CLOSER TO THE POWER CONSOLE");
    return;
  }
  powered = !powered;
  showMessage(powered ? "POWER RESTORED — CENTRAL TRAP ONLINE" : "POWER DISABLED");
}

function deployTurret() {
  if (player.turretCharges <= 0) {
    showMessage("NO TURRET CHARGES — BUY ONE BETWEEN WAVES");
    return;
  }
  if (turrets.length >= 3) {
    showMessage("MAXIMUM OF THREE TURRETS DEPLOYED");
    return;
  }
  turrets.push({ x: playerSprite.x, y: playerSprite.y, angle: player.facing, cooldown: 0 });
  player.turretCharges -= 1;
  showMessage("TURRET DEPLOYED");
}

function deployBarricade() {
  if (player.barricadeCharges <= 0) {
    showMessage("NO BARRICADE KITS — BUY ONE BETWEEN WAVES");
    return;
  }
  barricades.push({ x: playerSprite.x, y: playerSprite.y, hp: 40, life: 1100 });
  player.barricadeCharges -= 1;
  showMessage("BARRICADE DEPLOYED");
}

function startNewGame() {
  if (playerSprite) playerSprite.remove();
  for (const enemy of enemies) enemy.sprite.remove();
  enemies = [];
  bullets = [];
  turrets = [];
  barricades = [];
  playerSprite = new Sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 65, 27, 27, "none");
  playerSprite.color = "#44cbbb";
  playerSprite.stroke = "#d9fff6";
  playerSprite.strokeWeight = 2;
  player = {
    health: 100,
    maxHealth: 100,
    credits: 100,
    magazine: 12,
    magazineSize: 12,
    reserveAmmo: 60,
    damage: 1,
    reloadSpeed: 1,
    reloadUpgrades: 0,
    doubleDamage: false,
    turretCharges: 0,
    barricadeCharges: 0,
    facing: -Math.PI / 2,
    reloading: false
  };
  currentWave = 0;
  enemiesToSpawn = 0;
  spawnTimer = 0;
  fireTimer = 0;
  trapTimer = 0;
  powered = false;
  extractionOpen = false;
  extractionPoint = { x: ARENA.right - 78, y: ARENA.bottom - 72 };
  messageText = "";
  messageTimer = 0;
  reloadTimer = 0;
  gameMode = "playing";
  startWave();
}

function startWave() {
  currentWave += 1;
  enemiesToSpawn = 4 + currentWave * 2;
  spawnTimer = 15;
  gameMode = "playing";
  waveAnnouncement = `WAVE ${currentWave}`;
  waveAnnouncementTimer = 105;
}

function buyItem(index) {
  const item = SHOP_ITEMS[index];
  if (!item || player.credits < item.cost) {
    showMessage("NOT ENOUGH CREDITS");
    return;
  }
  if (index === 2 && player.reloadUpgrades >= 2) {
    showMessage("RAPID RELOAD IS ALREADY MAXED");
    return;
  }
  if (index === 4 && player.doubleDamage) {
    showMessage("DOUBLE DAMAGE IS ALREADY ACTIVE");
    return;
  }
  player.credits -= item.cost;

  if (index === 0) {
    player.magazine = player.magazineSize;
    player.reserveAmmo += 48;
    player.reloading = false;
    showMessage("AMMO RESTOCKED");
  } else if (index === 1) {
    player.damage += 1;
    player.magazineSize += 4;
    player.magazine = player.magazineSize;
    showMessage("WEAPON UPGRADED");
  } else if (index === 2) {
    player.reloadUpgrades += 1;
    player.reloadSpeed *= 0.75;
    showMessage("RELOAD SPEED IMPROVED");
  } else if (index === 3) {
    player.maxHealth += 25;
    player.health = Math.min(player.maxHealth, player.health + 40);
    showMessage("MAX HEALTH INCREASED");
  } else if (index === 4) {
    player.doubleDamage = true;
    player.damage *= 2;
    showMessage("DOUBLE DAMAGE ENABLED");
  } else if (index === 5) {
    player.turretCharges += 1;
    showMessage("TURRET CHARGE ADDED — PRESS Q TO DEPLOY");
  } else if (index === 6) {
    player.barricadeCharges += 1;
    showMessage("BARRICADE KIT ADDED — PRESS B TO DEPLOY");
  }
}

function showMessage(message) {
  messageText = message;
  messageTimer = 150;
}

function endGame(victory) {
  gameMode = victory ? "won" : "lost";
}

function drawTitleScreen() {
  fill("#102b38");
  rect(110, 82, 740, 475, 14);
  fill("#61e6d0");
  textSize(18);
  text("ORBITAL CONTAINMENT // INCIDENT 07", GAME_WIDTH / 2, 135);
  fill("#effbf7");
  textSize(42);
  text("BIO-OUTBREAK", GAME_WIDTH / 2, 194);
  fill("#d2e6e5");
  textSize(17);
  text("Survive ten waves. Restore facility power. Reach extraction.", GAME_WIDTH / 2, 238);
  textSize(14);
  text("WASD move  •  Mouse aim and fire  •  R reload  •  E power console", GAME_WIDTH / 2, 292);
  text("Q deploy turret  •  B deploy barricade  •  1–7 buy upgrades between waves", GAME_WIDTH / 2, 319);
  fill("#83a5aa");
  textSize(13);
  text("GAMEPAD: left stick move • right stick aim • right trigger fire", GAME_WIDTH / 2, 358);
  text(gamepadStatus, GAME_WIDTH / 2, 382);
  fill("#65f1d0");
  textSize(20);
  text("PRESS ENTER OR CLICK TO START", GAME_WIDTH / 2, 451);
  fill("#819a9d");
  textSize(12);
  text("Original sci-fi survival game • No external art or assets required", GAME_WIDTH / 2, 503);
}

function drawHud() {
  noStroke();
  fill("#0b1821");
  rect(0, 0, GAME_WIDTH, 62);
  fill("#e1f3ef");
  textAlign(LEFT, CENTER);
  textSize(15);
  text(`WAVE ${currentWave}/10`, 22, 20);
  text(`CREDITS ${player.credits}`, 22, 44);

  fill("#213b44");
  rect(190, 18, 186, 16, 5);
  fill(player.health > player.maxHealth * 0.3 ? "#54d2a4" : "#f36f68");
  rect(190, 18, 186 * (player.health / player.maxHealth), 16, 5);
  fill("#e6f4f0");
  textAlign(CENTER, CENTER);
  textSize(11);
  text(`HEALTH ${player.health}/${player.maxHealth}`, 283, 26);

  textAlign(RIGHT, CENTER);
  textSize(13);
  const ammunitionText = player.reloading
    ? "RELOADING"
    : `${player.magazine}/${player.reserveAmmo} AMMO`;
  text(ammunitionText, GAME_WIDTH - 22, 21);
  text(`TURRETS ${player.turretCharges}  •  BARRICADES ${player.barricadeCharges}`, GAME_WIDTH - 22, 44);
  textAlign(CENTER, CENTER);

  fill("#9bb3b7");
  textSize(10);
  const remainingCount = enemies.length + enemiesToSpawn;
  text(`HOSTILES ${remainingCount}   •   TRAP ${powered ? "ONLINE" : "OFFLINE"}   •   E: POWER   Q: TURRET   B: BARRICADE`,
    GAME_WIDTH / 2, GAME_HEIGHT - 8);
}

function drawWaveAnnouncement() {
  fill(4, 12, 18, 190);
  rect(0, 270, GAME_WIDTH, 86);
  fill("#a4f6e8");
  textSize(34);
  text(waveAnnouncement, GAME_WIDTH / 2, 313);
}

function drawShop() {
  fill(4, 12, 18, 225);
  rect(0, 62, GAME_WIDTH, GAME_HEIGHT - 62);
  fill("#eaf8f3");
  textSize(28);
  text("SUPPLY WINDOW", GAME_WIDTH / 2, 105);
  fill("#70e4cc");
  textSize(15);
  text(`WAVE ${currentWave} COMPLETE  •  ${player.credits} CREDITS`, GAME_WIDTH / 2, 135);
  textSize(12);
  text("Press a number or click a card to purchase. ENTER starts the next wave.", GAME_WIDTH / 2, 159);

  shopButtons = [];
  const cardWidth = 390;
  const cardHeight = 66;
  for (let index = 0; index < SHOP_ITEMS.length; index += 1) {
    const column = index % 2;
    const row = floor(index / 2);
    const x = 70 + column * 410;
    const y = 185 + row * 74;
    shopButtons.push({ x, y, width: cardWidth, height: cardHeight, itemIndex: index });

    fill("#142c37");
    rect(x, y, cardWidth, cardHeight, 7);
    fill("#68d9c5");
    textAlign(LEFT, CENTER);
    textSize(15);
    text(`${index + 1}. ${SHOP_ITEMS[index].name}`, x + 14, y + 20);
    fill("#aac0c0");
    textSize(11);
    text(SHOP_ITEMS[index].detail, x + 14, y + 44);
    fill("#ffe09a");
    textAlign(RIGHT, CENTER);
    textSize(13);
    text(`${SHOP_ITEMS[index].cost} CR`, x + cardWidth - 14, y + 20);
  }

  textAlign(CENTER, CENTER);
  fill("#91a9ad");
  textSize(12);
  text("Press ENTER when ready. Health and equipment persist between waves.", GAME_WIDTH / 2, 490);
  fill("#7ddbc6");
  textSize(11);
  text("Press E near the console during a wave to activate the central containment trap.", GAME_WIDTH / 2, 515);
}

function drawEndScreen(victory) {
  fill(4, 12, 18, 235);
  rect(0, 62, GAME_WIDTH, GAME_HEIGHT - 62);
  fill(victory ? "#75f3ce" : "#ff817a");
  textSize(42);
  text(victory ? "EXTRACTION SUCCESSFUL" : "CONTAINMENT FAILED", GAME_WIDTH / 2, 260);
  fill("#e0efed");
  textSize(18);
  text(victory ? "You survived the outbreak and escaped the facility." : `The infection reached you on wave ${currentWave}.`,
    GAME_WIDTH / 2, 310);
  textSize(15);
  text(`Final credits: ${player.credits}`, GAME_WIDTH / 2, 352);
  fill("#7debd1");
  text("PRESS ENTER OR CLICK TO PLAY AGAIN", GAME_WIDTH / 2, 414);
}

function keyPressed() {
  if (gameMode === "title" && (keyCode === ENTER || key === " ")) {
    startNewGame();
    return false;
  }
  if ((gameMode === "won" || gameMode === "lost") && (keyCode === ENTER || key === " ")) {
    startNewGame();
    return false;
  }
  if (gameMode === "shop") {
    if (keyCode === ENTER) {
      startWave();
      return false;
    }
    const itemIndex = Number(key) - 1;
    if (itemIndex >= 0 && itemIndex < SHOP_ITEMS.length) buyItem(itemIndex);
    return false;
  }
  if (gameMode !== "playing") return;

  const keyName = key.toLowerCase();
  if (keyName === "r" || key === " ") beginReload();
  if (keyName === "e") togglePower();
  if (keyName === "q") deployTurret();
  if (keyName === "b") deployBarricade();
}

function mousePressed() {
  if (gameMode === "title" || gameMode === "won" || gameMode === "lost") {
    startNewGame();
    return;
  }
  if (gameMode !== "shop") return;
  for (const button of shopButtons) {
    if (mouseX >= button.x && mouseX <= button.x + button.width &&
      mouseY >= button.y && mouseY <= button.y + button.height) {
      buyItem(button.itemIndex);
      return;
    }
  }
}

function gamepadconnected() {
  updateGamepadStatus();
}

function gamepaddisconnected() {
  updateGamepadStatus();
}
