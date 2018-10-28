import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBookmarkBorderElement
 * @class IconOutlineBookmarkBorderElement
 * @extends {AoflElement}
 */
class IconOutlineBookmarkBorderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBookmarkBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bookmark-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBookmarkBorderElement.is, IconOutlineBookmarkBorderElement);

export default IconOutlineBookmarkBorderElement;
