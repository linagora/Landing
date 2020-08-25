class Roadmap extends React.Component {
	componentDidMount(){
		window.location.href = "https://www.notion.so/Twake-Public-Roadmap-7c52a3afd0de4b6b8eee1d08e0a9d8b9";
	}
  render() {
    return (
			<div></div>
    );
  }
}
Roadmap.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});
export default Roadmap;
