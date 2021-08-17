import React from 'react';
import {connect} from 'react-redux';
import FormLabel from '../../components/elements/FormLabel/FormLabel';
import FormButton from '../../components/elements/FormButton/FormButton';
import FormInput from '../../components/elements/FormInput/FormInput';

const NewProject = () => (
  <>
    <div className="row">
      <div className="col">
        <h1>New Project</h1>
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
              <div className="form-group">
                <FormLabel text="Status"/>
                <FormInput className="form-control" type="text"/>
                <small>Can be filled later</small>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Description *"/>
                <textarea className="form-control"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Customer Info *"/>
                <textarea className="form-control"/>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Manager"/>
                <select className="form-control" defaultValue={12}>
                  <option value="12">This is item 1</option>
                  <option value="13">This is item 2</option>
                  <option value="14">This is item 3</option>
                </select>
                <small>Can be filled later</small>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Team"/>
                <select className="form-control">
                  <option value="12">This is item 1</option>
                  <option value="13">This is item 2</option>
                  <option value="14">This is item 3</option>
                </select>
                <small>Can be filled later</small></div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Expected Budget"/>
                <FormInput className="form-control" type="text"/>
                <small>Can be filled later</small>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Due Date"/>
                <FormInput className="form-control" type="date"/>
                <small>Can be filled later</small>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Add collaborator"/>
                <FormInput className="form-control" type="text"/>
                <small>Can be filled later</small>
              </div>
            </div>
            <div className="col">
              <FormButton className="btn-primary" text="Add Collaborator"/>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                  <tr>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Cell 1</td>
                    <td>
                      <FormButton className="btn-primary" text="Remove"/>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="btn-group" role="group">
          <FormButton className="btn-primary" text="Discard"/>
          <FormButton className="btn-primary" text="Save"/>
        </div>
      </div>
    </div>
  </>
);

export default connect(null, null)(NewProject);
