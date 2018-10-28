import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBookmarksElement
 * @class IconOutlineBookmarksElement
 * @extends {AoflElement}
 */
class IconOutlineBookmarksElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBookmarksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bookmarks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBookmarksElement.is, IconOutlineBookmarksElement);

export default IconOutlineBookmarksElement;
