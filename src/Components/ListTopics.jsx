import React, { Component } from 'react'

export default class ListTopics extends Component {
  render() {
    return <div>
  
  {/*list-topics start */}
  <section id="list-topics" className="list-topics">
    <div className="container">
      <div className="list-topics-content">
        <ul>
          <li>
            <div className="single-list-topics-content">
              <div className="single-list-topics-icon">
                <i className="flaticon-restaurant" />
              </div>
              <h2><a href="#">resturent</a></h2>
              <p>150 listings</p>
            </div>
          </li>
          <li>
            <div className="single-list-topics-content">
              <div className="single-list-topics-icon">
                <i className="flaticon-travel" />
              </div>
              <h2><a href="#">destination</a></h2>
              <p>214 listings</p>
            </div>
          </li>
          <li>
            <div className="single-list-topics-content">
              <div className="single-list-topics-icon">
                <i className="flaticon-building" />
              </div>
              <h2><a href="#">hotels</a></h2>
              <p>185 listings</p>
            </div>
          </li>
          <li>
            <div className="single-list-topics-content">
              <div className="single-list-topics-icon">
                <i className="flaticon-pills" />
              </div>
              <h2><a href="#">healthcaree</a></h2>
              <p>200 listings</p>
            </div>
          </li>
          <li>
            <div className="single-list-topics-content">
              <div className="single-list-topics-icon">
                <i className="flaticon-transport" />
              </div>
              <h2><a href="#">automotion</a></h2>
              <p>120 listings</p>
            </div>
          </li>
        </ul>
      </div>
    </div>{/*/.container*/}
  </section>{/*/.list-topics*/}
  {/*list-topics end*/}
  
</div>

  }
}
