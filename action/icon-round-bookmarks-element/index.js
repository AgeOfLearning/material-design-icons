import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBookmarksElement
 * @class IconRoundBookmarksElement
 * @extends {AoflElement}
 */
class IconRoundBookmarksElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBookmarksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bookmarks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBookmarksElement.is, IconRoundBookmarksElement);

export default IconRoundBookmarksElement;
