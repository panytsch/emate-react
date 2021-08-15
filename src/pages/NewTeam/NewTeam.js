import React from 'react';
import {connect} from 'react-redux';
import FormLabel from '../../components/elements/FormLabel/FormLabel';
import FormInput from '../../components/elements/FormInput/FormInput';
import FormButton from '../../components/elements/FormButton/FormButton';

const NewTeam = () => (
  <>
    <div className="row">
      <div className="col">
        <h1>New Team</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <form>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Name *"/>
                <FormInput className="form-control" type="text"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">.
                <FormLabel text="Manager"/>
                <select className="form-control">
                  <option value="12">This is item 1</option>
                  <option value="13">This is item 2</option>
                  <option value="14">This is item 3</option>
                </select>
                <small>Can be filled later</small>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Description"/>
                <textarea className="form-control"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Employees"/>
                <select className="form-control">
                  <option value="12">This is item 1</option>
                  <option value="13">This is item 2</option>
                  <option value="14">This is item 3</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="table-responsive">
          <table className="table">
            <thead>
            <tr>
              <th>Employee</th>
              <th>Position</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>John Wick</td>
              <td>Senior CTO Architect</td>
            </tr>
            <tr>
              <td>Terminator</td>
              <td>Junior Pisun</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-group" role="group">
          <FormButton className="btn-primary" text="Discard"/>
          <FormButton className="btn-primary" text="Save"/>
        </div>
      </div>
    </div>
  </>
);

export default connect(null, null)(NewTeam);
