import React, { Component } from "react";
import { connect } from "react-redux";

import { createPost } from "../redux/actions";
import { IPost, IPostAction } from "../redux/postsReducer";

export interface IPostFormProps {
  createPost: (arg0: IPost[]) => IPostAction;
}
export interface IPostFormState {
  [key: string]: string;
}

class PostForm extends Component<IPostFormProps, IPostFormState> {
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
    if (!title.trim()) {
      return;
    }
    const newPost = {
      post: {
        title,
        id: Date.now().toString(),
      },
    };
    console.log(`newPost=`, newPost);
    this.props.createPost([newPost]);
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

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
