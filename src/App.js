import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchSuggest from "./components/SearchSuggest";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "watch",
				element: <WatchPage />,
			},
			{
				path: "query",
				element: <SearchSuggest/> ,
			},
		],
	},
]);

function App() {
	console.log("App Component");
	return (
		<Provider store={store}>
			<div>
				<Header />
				<RouterProvider router={appRouter}>
					<Body />
				</RouterProvider>
			</div>
		</Provider>
	);
}

export default App;
