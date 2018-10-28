import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPresentToAllElement
 * @class IconSharpPresentToAllElement
 * @extends {AoflElement}
 */
class IconSharpPresentToAllElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPresentToAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-present-to-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPresentToAllElement.is, IconSharpPresentToAllElement);

export default IconSharpPresentToAllElement;
