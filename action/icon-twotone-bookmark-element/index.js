import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBookmarkElement
 * @class IconTwotoneBookmarkElement
 * @extends {AoflElement}
 */
class IconTwotoneBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBookmarkElement.is, IconTwotoneBookmarkElement);

export default IconTwotoneBookmarkElement;
