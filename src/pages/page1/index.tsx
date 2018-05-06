import React from "react";
import { connect } from "dva";

@connect(({ page1 }) => ({ list: page1.list }))
class Page1 extends React.Component<any> {
  handleClick = () => {
    this.props.dispatch({
      type: 'page1/fetch'
    })
  }
  render() {
    const list = this.props.list;
    console.log('list:', list);
    return (
      <div onClick={this.handleClick}>
        page1
        <ul>
          {
            list.length ? list.map(({ id, name }) => <li key={id}>{name}</li>)
              : null
          }
        </ul>
      </div>
    )
  }
}

export default Page1
