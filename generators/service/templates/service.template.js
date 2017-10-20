const debug = require('debug')('services:<%=hypened%>')

import { Resolve, ResolveWith } from 'primavera/flow'
import { Transform } from 'primavera/transform'

// How can you invoke this service?
// import { ResolveWith } from 'primavera/flow'
// class My<%=pascal%>Client {
// 		@ResolveWith({domain:'<%=pascal%>', action: 'DoSomething'})
// 		$doSomething(payload, pattern) {
// 			// alter the pattern if needed
// 			// or transform the message if you want
// 			return payload // but do return it
// 		}
// 		
// 		exposedMethod() {
// 			...
// 			return this.$doSomething({ some: 'data' })
// 		}
// }

class <%=pascal%>Service {

	@Resolve({domain: '<%=pascal%>', action: 'DoSomething'})
	@Transform.OUT((raw) => raw) // apply transformations
	async doSomething (payload) {
		return { status: 'OK' }
	}
	
}
