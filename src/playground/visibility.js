class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visible: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }
  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide Text': 'Show Text'}
          </button>  
          {this.state.visible && <p>Here is the hidden text!</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))