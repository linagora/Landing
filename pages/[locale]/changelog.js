class Changelog extends React.Component {
	componentDidMount(){
		window.location.href = "https://headwayapp.co/twake-changelog";
	}
  render() {
    return (
			<div></div>
    );
  }
}
Changelog.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});
export default Changelog;
