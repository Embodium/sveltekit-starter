import { dev } from '$app/environment';
import { sequence } from '@sveltejs/kit/hooks';
import { handleGraphiql, handleGraphql } from '@kitql/all-in';

const kitql_server = undefined

export const handle = sequence(
	// Add graphql
	handleGraphql(kitql_server),

	// Add graphiql
	 handleGraphiql({
	 	enabled: dev
	})
);
