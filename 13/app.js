export class App {
	constructor(baseNode) {
		console.log('app', baseNode)
		this.root = baseNode;
	}
	run() {
		console.log('app is running on base root ', this.root)
	}
}
