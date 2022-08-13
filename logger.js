import EventEmitter from 'events'

class Logger extends EventEmitter {
	log(msg) {
		// Call event
		this.emit('message', { id:Math.random()*10, msg });
	}
}

export default Logger;