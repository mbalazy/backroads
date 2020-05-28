import React from 'react';
import BlogThumbnail from 'components/organisms/Blog/BlogThumbnail.component';
import GridLayout from 'templates/GridLayout.template';

const BlogList = ({ listOfBlogs }) => {
  return (
    <GridLayout>
      {listOfBlogs.map(({ node: { id, ...props } }) => (
        <BlogThumbnail key={id} {...props} />
      ))}
    </GridLayout>
  );
};

export default BlogList;
