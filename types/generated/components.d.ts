import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlogPosts extends Struct.ComponentSchema {
  collectionName: 'components_content_blog_posts';
  info: {
    displayName: 'Blog posts';
    icon: 'bulletList';
  };
  attributes: {
    loadingMessage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Loading...'>;
    loadMoreButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Load more...'>;
  };
}

export interface ContentCalendar extends Struct.ComponentSchema {
  collectionName: 'components_content_calendars';
  info: {
    displayName: 'Calendar';
    icon: 'calendar';
  };
  attributes: {
    updatedAtLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Last updated'>;
  };
}

export interface ContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_content_headings';
  info: {
    displayName: 'Heading';
    icon: 'layout';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'middle', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    level: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Schema.Attribute.Required;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ContentMembershipRegistrationForm
  extends Struct.ComponentSchema {
  collectionName: 'components_content_membership_registration_forms';
  info: {
    displayName: 'Membership registration';
    icon: 'user';
  };
  attributes: {};
}

export interface ContentRichText extends Struct.ComponentSchema {
  collectionName: 'components_content_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'layout';
  };
  attributes: {
    blocks: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.blog-posts': ContentBlogPosts;
      'content.calendar': ContentCalendar;
      'content.heading': ContentHeading;
      'content.membership-registration-form': ContentMembershipRegistrationForm;
      'content.rich-text': ContentRichText;
    }
  }
}
