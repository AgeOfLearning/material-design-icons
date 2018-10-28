import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFiberPinElement
 * @class IconSharpFiberPinElement
 * @extends {AoflElement}
 */
class IconSharpFiberPinElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFiberPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fiber-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFiberPinElement.is, IconSharpFiberPinElement);

export default IconSharpFiberPinElement;
