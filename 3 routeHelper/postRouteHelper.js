import Post from "../1 models/Post.js";

// Get back all data from db

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {}
};

// Get a post with id

export const getPostWithID = async (req, res) => {
  const { postID } = req.params;

  try {
    const post = await Post.findById(postID);

    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Save to db

export const savePostToDB = async (req, res) => {
  const { title, description } = req.body;

  const post = new Post({
    title,
    description,
  });

  try {
    const savedPost = await post.save();
    res.status(200).send(savedPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete from db
export const deleteFromDBWithID = async (req, res) => {
  const { postID } = req.params;
  try {
    const removedPost = await Post.remove({
      _id: postID,
    });

    res.status(200).send(removedPost);
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update one
export const update = async (req, res) => {
  const { postID } = req.params;
  const { title, description } = req.body;

  try {
    if (title) {
      const updatedPost = await Post.updateOne(
        {
          _id: postID,
        },
        {
          $set: {
            title,
            date: Date.now(),
          },
        }
      );
    }

    if (description) {
      const updatedPost = await Post.updateOne(
        {
          _id: postID,
        },
        {
          $set: {
            description,
            date: Date.now(),
          },
        }
      );
    }

    res.status(200).send();
  } catch (err) {
    res.status(400).send(err);
  }
};
