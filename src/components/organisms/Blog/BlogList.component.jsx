import React from 'react';
import BlogThumbnail from 'components/organisms/Blog/BlogThumbnail.component';
import { v4 as uuidv4 } from 'uuid';
import GridLayout from 'templates/GridLayout.template';

const BlogList = ({ listOfBlogs }) => {
  return (
    <GridLayout>
      {listOfBlogs.map(({ node: { ...props } }) => (
        <BlogThumbnail key={uuidv4()} {...props} />
      ))}
    </GridLayout>
  );
};

export default BlogList;
