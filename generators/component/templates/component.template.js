const debug = require('debug')('components:<%=hypened%>')
import { Injectable } from 'primavera/core'

// No default exports, promote working within the container.
// Access this component using:
// class <%=pascal%>Client {
// 		Inject('components/<%=pascal%>')
// 		get $<%=pascal%>() {}
// }

@Injectable('components/<%=pascal%>')
class <%=pascal%> {

}