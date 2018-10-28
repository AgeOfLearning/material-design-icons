import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBookmarksElement
 * @class IconSharpBookmarksElement
 * @extends {AoflElement}
 */
class IconSharpBookmarksElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBookmarksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bookmarks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBookmarksElement.is, IconSharpBookmarksElement);

export default IconSharpBookmarksElement;
