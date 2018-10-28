import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCollectionsBookmarkElement
 * @class IconTwotoneCollectionsBookmarkElement
 * @extends {AoflElement}
 */
class IconTwotoneCollectionsBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCollectionsBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-collections-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCollectionsBookmarkElement.is, IconTwotoneCollectionsBookmarkElement);

export default IconTwotoneCollectionsBookmarkElement;
