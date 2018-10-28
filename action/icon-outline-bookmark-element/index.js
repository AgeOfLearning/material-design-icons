import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBookmarkElement
 * @class IconOutlineBookmarkElement
 * @extends {AoflElement}
 */
class IconOutlineBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBookmarkElement.is, IconOutlineBookmarkElement);

export default IconOutlineBookmarkElement;
