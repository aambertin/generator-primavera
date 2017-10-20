const debug = require('debug')('endpoints:<%=hypened%>')

import { Route, Controller, Context, Request, Session, HttpStatus, HttpError } from 'primavera/web'
import { RequiresAuth, RequiresRole } from 'primavera/web-security'
import { PropertySources, Property } from 'primavera/core'
import { ValidateSchema } from 'primavera/validations'
import { Transform } from 'primavera/transform'
import { ResolveWith } from 'primavera/flow'
// import * as S from './<%=hypened%>.schemas'


@PropertySources(process.env) // add more if required
@Controller({prefix:'<%=hypened%>'})
class <%=pascal%>Endpoints {

	@Property('SOME_PROP', 'default_value')
	get redirectUrl() {}

	@Context('$response')
	get $response() {} 

	@Session('user')
	get auth() {}

	@HttpStatus(HttpStatus.CREATED) // custom http status on-success
	// @ValidateSchema({}, S.Create<%=pascal%>) // apply schemas
	// RequiresAuth() // protect if you want
	@Transform.OUT((raw) => raw) // apply transformations
	@Route.POST('')
	async create<%=pascal%>(params, payload) {
		// this is one way of calling your services
		const <%=camel%> = await ResolveWith.resolver({domain:'<%=pascal%>', action:'Save'})(payload)

		return <%=camel%>
	}


	@HttpStatus(HttpStatus.OK)
	// @ValidateSchema(S.Retrieve<%=pascal%>) // apply schemas
	@Route.GET(':_id')
	async retrieve<%=pascal%>(params, payload) {
		try {
			return await ResolveWith.resolver({domain:'<%=pascal%>', action:'GetOne'})(params)
		}
		catch (err) {
			// translate to http error
			const fn = _.camelCase(err.message)
			if (HttpError[fn]) throw HttpError[fn]()

			console.error(err)
			throw err
		}
	}

	@ResolveWith({domain:'<%=pascal%>', action:'GetOne'})
	async $retrieve<%=pascal%>(payload, pattern) {
		// alter the payload if you want
		// or the pattern to maniulate the routing
		// but do return the payload after it
		return payload
	}

}