class Action {
  constructor(name){
    this._name = name
  }
  lompat() {
    return "LOMPAT!";
  }
  lompatSejauh(){
    return "LOMPAT SEJAUH "+ this._name+ " m";
  }
}

class Hard extends Action{
  lompatLebihJauh(){
    let jarak = this._name+10
    return "LOMPAT LEBIH JAUH "+jarak+ " m"
  }
}

let scott = new Hard(500);
console.log(scott.lompatSejauh());
console.log(scott.lompatLebihJauh());