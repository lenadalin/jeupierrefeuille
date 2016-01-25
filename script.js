var Jeu = function() {
  var joueur_score = 0;
  var ordinateur_score = 0;

  this.initialize = function() {
    update_score();
    document.querySelector('form').addEventListener('submit', fight);
  };

  var fight = function(ev) {
    ev.preventDefault();
    var joueur_coup = parseInt(this.elements.coup.value);
    var ordinateur_coup = Math.floor((Math.random()*3)+1);

    if(joueur_coup == ordinateur_coup) {
         alert('Egalité!');
      return;
    }

    if(joueur_coup > ordinateur_coup || (joueur_coup == 1 && ordinateur_coup == 3)) {
      joueur_score++;
    } 

    else {
      ordinateur_score++;
    }
    update_score();
  };

  var update_score = function() {
    document.querySelector('#td_joueur').innerHTML = joueur_score;
    document.querySelector('#td_ordinateur').innerHTML = ordinateur_score;

    if(joueur_score >= 10 || ordinateur_score >= 10) {
      final_action();
    }
  };

  var final_action = function() {
    if(joueur_score > ordinateur_score) {
      alert('Vous avez gagné!');
    } else {
      alert('Vous avez perdu...');
    }

    joueur_score = ordinateur_score = 0;
    update_score();
  };

  return this;
};

new Jeu().initialize();