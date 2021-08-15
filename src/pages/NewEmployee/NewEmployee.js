import React from 'react';
import {connect} from 'react-redux';
import FormLabel from '../../components/elements/FormLabel/FormLabel';
import FormInput from '../../components/elements/FormInput/FormInput';
import FormButton from '../../components/elements/FormButton/FormButton';

const NewEmployee = () => (
  <>
    <div className="row">
      <div className="col">
        <h1>New Employee</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <form>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="First Name*"/>
                <FormInput className="form-control" type="text"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Last Name"/>
                <FormInput className="form-control" type="text"/>
                <small>Can be filled later</small>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Email*"/>
                <FormInput className="form-control" type="email"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Position*"/>
                <FormInput className="form-control" type="text"/>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Prise her hour external*"/>
                <FormInput className="form-control" type="text"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Prise her hour internal*"/>
                <FormInput className="form-control" type="text"/>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-sm-6">
              <div className="form-group">
                <FormLabel text="Seniority*"/>
                <FormInput className="form-control" type="text"/>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <FormLabel text="Team"/>
                <select className="form-control">
                  <option value="12">This is item 1</option>
                  <option value="13">This is item 2</option>
                  <option value="14">This is item 3</option>
                </select></div>
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

export default connect(null, null)(NewEmployee);
