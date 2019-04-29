class Action {
  constructor(name){
    this._name = name
  }
  lompat() {
    return this._name+ " LOMPAT!";
  }
  lompatSejauh(jarak = 0){
    return this._name+ " LOMPAT SEJAUH "+ jarak+ " m";
  }
}

class moreAction extends Action{
  constructor(nama, more = 500){
    super(nama)
    this._more = more
  }
  lompatLebihJauh(jarak = 0){
    let jarak_baru = jarak+this._more
    return this._name+ " LOMPAT SEJAUH "+ jarak_baru + " m";
  }
}

// let jojo = new moreAction("jojo");
// console.log(jojo.lompatLebihJauh(35));
// console.log(scott.lompatLebihJauh());

// export default Hard