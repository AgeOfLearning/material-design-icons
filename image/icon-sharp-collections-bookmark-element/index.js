import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCollectionsBookmarkElement
 * @class IconSharpCollectionsBookmarkElement
 * @extends {AoflElement}
 */
class IconSharpCollectionsBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCollectionsBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-collections-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCollectionsBookmarkElement.is, IconSharpCollectionsBookmarkElement);

export default IconSharpCollectionsBookmarkElement;
