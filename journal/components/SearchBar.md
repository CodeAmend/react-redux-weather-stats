![](search-bar.png)

Will this be a Component or a Container?

> The search needs to be able to modify the state of our app by dispatching actions, needs to be able to call an actionCreator

Container: SearchBar
```
<form className="input-group">
  <input />
  <span className="input-group-button">
    <button type="submit" className="btn btn-secondary">Submit</button>
  </span>
</form>
```
* We need it to be a controlled field (controlled component)
  + form element where value of input is set by state of component
    + when we click button it just sends the state of component

We need to initialize the state in the constructor:
```
constructor(props) {
  super(props);
  this.state = { term: '' };
  // This is important to
  this.onInputChange = this.onInputChange.bind(this);
}


onInputChange(event ){
  super.setState({term: event.target.value})
}
...
<input
  className="form-control"
  placeholder="Enter city to add to your custom list"
  value={this.state.term}
  onChange={this.onInputChange.bind(this)}
/>
```
value is equal to this.state.term, term is not updated unless the onInputChange() function calls the setState() function

It is important to bind 'this', whether it be in the constructor or on the calback itself.

 
