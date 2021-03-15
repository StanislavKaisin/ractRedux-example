import React, { Component } from "react";

export interface IPostFormProps {}

export interface IPostFormState {
  [key: string]: string;
}

export default class PostForm extends Component<
  IPostFormProps,
  IPostFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
    };
  }
  submitHandler = (evenet: React.SyntheticEvent) => {
    evenet.preventDefault();
    console.log(`this.state.title=`, this.state.title);
    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(`newPost=`, newPost);
    this.setState({ title: "" });
  };

  inputHandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  render() {
    return (
      <div className="pb-3 pt-3">
        PostForm
        <form onSubmit={this.submitHandler}>
          <div className="form-group pb-3 pt-3">
            <label htmlFor="title">Post title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.inputHandlerChange}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Create post
          </button>
        </form>
      </div>
    );
  }
}
