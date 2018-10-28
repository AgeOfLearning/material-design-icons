import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSendElement
 * @class IconSharpSendElement
 * @extends {AoflElement}
 */
class IconSharpSendElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-send';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSendElement.is, IconSharpSendElement);

export default IconSharpSendElement;
