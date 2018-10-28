import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGifElement
 * @class IconSharpGifElement
 * @extends {AoflElement}
 */
class IconSharpGifElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGifElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gif';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGifElement.is, IconSharpGifElement);

export default IconSharpGifElement;
