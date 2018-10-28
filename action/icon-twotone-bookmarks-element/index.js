import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBookmarksElement
 * @class IconTwotoneBookmarksElement
 * @extends {AoflElement}
 */
class IconTwotoneBookmarksElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBookmarksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bookmarks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBookmarksElement.is, IconTwotoneBookmarksElement);

export default IconTwotoneBookmarksElement;
