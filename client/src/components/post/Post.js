import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getOnePost, getPosts } from "../../actions/post";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getOnePost, post: { post, loading }, match }) => {
  useEffect(() => {
    getOnePost(match.params.id);
  });
  return loading || post == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back to Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />{" "}
      <div className="comment">
        {post.comments.map(
          (
            comment //console.log(comment)
          ) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          )
        )}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getOnePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getOnePost })(Post);
