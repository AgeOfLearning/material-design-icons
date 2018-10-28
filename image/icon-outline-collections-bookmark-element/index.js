import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCollectionsBookmarkElement
 * @class IconOutlineCollectionsBookmarkElement
 * @extends {AoflElement}
 */
class IconOutlineCollectionsBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCollectionsBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-collections-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCollectionsBookmarkElement.is, IconOutlineCollectionsBookmarkElement);

export default IconOutlineCollectionsBookmarkElement;
