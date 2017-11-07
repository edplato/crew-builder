import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Modal, Button, Glyphicon } from 'react-bootstrap';
// import AddTask from './../../forms/addTask.jsx';
import AddReward from './../../forms/addReward.jsx';
// import { DeleteTask, GetLeaderTasks } from '../../../utils/requests.jsx';

export default class ManageRewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      displayModal: false,
      newReward: '',
      reward: {}
    };

    this.open = () => {
      this.setState({
        showModal: true
      });
    };

    this.show = () => {
      this.setState({
        displayModal: true
      });
    };

    this.close = () => {
      this.setState({
        showModal: false,
        displayModal: false
      });
    };

    this.func = () => {
      if (this.state.newReward.length !== 0) {
        this.props.userTasks.push({name: this.state.newReward});
      }
      // TODO:
      // should update the newly added in database
    };

    this.handleSelect = (reward) => {
      this.setState({reward: reward});
      this.show();
    };

    this.delete = (e) => {
      e.preventDefault();
      // DeleteTask(this.state.task.id, function(err, done) {
      //   if (err) {
      //     console.log('problem in deleting');
      //   }
      //   if (done) {
      //     props.getUserTasks(props.userId, props.currentCrew.crew.id);
      //   }
      // });
      // this.close();
    };
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.currentCrewRewards.map((reward, i) => (
            <ListGroupItem key={i} onClick={() => this.handleSelect(reward)}>{reward.name}</ListGroupItem>
          )) }
          <ListGroupItem onClick={this.open}><Glyphicon glyph="plus" /> Add Reward</ListGroupItem>
        </ListGroup>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            Add Reward
          </Modal.Header>
          <Modal.Body>
            <AddReward {...this.props}/>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.displayModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.reward.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Points: {this.state.reward.points}</h4>
            <h4>Limit: {this.state.reward.limit}</h4>
            <h4>Expires: {this.state.reward.expiry}</h4>
            <h4>Description</h4>
            <p>{this.state.reward.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.delete}>Delete</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}
