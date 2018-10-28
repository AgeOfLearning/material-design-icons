import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGifElement
 * @class IconOutlineGifElement
 * @extends {AoflElement}
 */
class IconOutlineGifElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGifElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gif';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGifElement.is, IconOutlineGifElement);

export default IconOutlineGifElement;
