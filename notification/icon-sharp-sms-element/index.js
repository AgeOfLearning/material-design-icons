import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSmsElement
 * @class IconSharpSmsElement
 * @extends {AoflElement}
 */
class IconSharpSmsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSmsElement.is, IconSharpSmsElement);

export default IconSharpSmsElement;
