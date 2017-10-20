const debug = require('debug')('middlewares:<%=hypened%>')

import { Route, Middleware, Context, Request, Session, HttpStatus, HttpError } from 'primavera/web'
import { RequiresAuth, RequiresRole } from 'primavera/web-security'
import { PropertySources, Property } from 'primavera/core'
import { ValidateSchema } from 'primavera/validations'
import { Transform } from 'primavera/transform'
import { ResolveWith } from 'primavera/flow'


@PropertySources(process.env) // add other configuration sources
@Middleware({prefix:''})
class <%=pascal%>Middleware {

	@Context('$response')
	get $response() {}

	@Context('$request')
	get $request() {}

	@Session()
	get $session() {}

	@Route.USE('')
	doSomething() {
		const {$request, $response, $session} = this
		// ...
	}
}