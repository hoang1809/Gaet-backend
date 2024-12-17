import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleFile extends Struct.ComponentSchema {
  collectionName: 'components_article_files';
  info: {
    displayName: 'File';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'>;
  };
}

export interface ArticleMultipleImages extends Struct.ComponentSchema {
  collectionName: 'components_article_multiple_images';
  info: {
    displayName: 'MultipleImages';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface ArticleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_article_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface ArticleSingleImage extends Struct.ComponentSchema {
  collectionName: 'components_article_single_images';
  info: {
    displayName: 'SingleImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.file': ArticleFile;
      'article.multiple-images': ArticleMultipleImages;
      'article.paragraph': ArticleParagraph;
      'article.single-image': ArticleSingleImage;
    }
  }
}
