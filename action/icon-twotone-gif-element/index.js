import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGifElement
 * @class IconTwotoneGifElement
 * @extends {AoflElement}
 */
class IconTwotoneGifElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGifElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gif';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGifElement.is, IconTwotoneGifElement);

export default IconTwotoneGifElement;
