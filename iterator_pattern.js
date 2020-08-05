class NameIterator {
	constructor() {
		this.names = ['Robert', 'John',' Julie', 'Lora'];
		this.index = -1;
	}
	
	hasNext() {
		if(this.index < this.names.length) {
			return true;
		}
		
		return false;
	}
	
	next() {
		if(this.hasNext()) {
			return this.names[++this.index];
		}
		
		return null;
	}
}

const nameIterator = new NameIterator();
console.log(nameIterator.hasNext());
console.log(nameIterator.next());