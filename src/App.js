import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultVideo from "./components/SearchResultVideo";
import Errorpage from "./components/Errorpage";

const AppLayout = () => {
	return (
		<div className="w-full">
			<Header />
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Errorpage />,
		children: [
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
						path: "search",
						element: <SearchResultVideo />,
					},
				],
			},
		],
	},
]);

function App() {
	console.log("App Component");
	return (
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	);
}

export default App;
