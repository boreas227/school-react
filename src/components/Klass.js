import React from 'react';
import axios from 'axios';

export default class Klass extends React.Component{
  constructor(props){
    super(props);
    this.state = {students: []};
    this.get = this.get.bind(this);
  }

  get(){
    const id = +this.kid.value;
    const url = `http://localhost:9001/klasses/${id}`;
    axios.get(url).then(r => {
      this.setState({students: r.data});
    }).catch(e => {
      this.setState({students: []});
    });
  }

  render(){
    return (
      <div>
        <h1>Klassroom Query</h1>
        <div>
          <label>Klass ID</label>
          <input ref={n => this.kid = n} type="number" />
          <button onClick={this.get}>Get Students</button>
        </div>
        <h3>Students</h3>
        <ul>
          {
            this.state.students.map(s => {
              return <li key={s.id}>{s.email}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}
