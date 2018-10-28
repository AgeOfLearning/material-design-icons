import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBookmarkBorderElement
 * @class IconTwotoneBookmarkBorderElement
 * @extends {AoflElement}
 */
class IconTwotoneBookmarkBorderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBookmarkBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bookmark-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBookmarkBorderElement.is, IconTwotoneBookmarkBorderElement);

export default IconTwotoneBookmarkBorderElement;
