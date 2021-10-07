import React from "react";
import CustomList from './CustomList'
// import './App.css';
class ClientApp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("/api/personnel")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Hold on.... </h1> </div> ;

		return (
		<div className = "ClientApp">
            <CustomList data={this.state.items} />
				{/* // this.state.items.map((item) => (
                    console.log(this.state.items)
                    // <ol key = { item.id } >
					// Id: { item.id },
					// Reference: { item.Reference },
					// GivenName: { item.GivenName }
					// FamilyName: { item.FamilyName }
					// DateOfBirth: { item.DateOfBirth },
					// </ol>
				// )) */}
		</div>
	);
}
}

export default ClientApp;
