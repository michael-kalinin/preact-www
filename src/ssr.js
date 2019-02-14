import 'isomorphic-unfetch';
//import '.';
import { h } from 'preact';
import 'linkstate/polyfill';
import renderToString from 'preact-render-to-string';
import App from './components/app';

export default function render(props) {
	props = props || {};
	props.url = props.url || '/';
	location.href = location.path = props.url;
	return renderToString(<App {...props} />);
}
