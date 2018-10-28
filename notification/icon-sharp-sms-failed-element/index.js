import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSmsFailedElement
 * @class IconSharpSmsFailedElement
 * @extends {AoflElement}
 */
class IconSharpSmsFailedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSmsFailedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sms-failed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSmsFailedElement.is, IconSharpSmsFailedElement);

export default IconSharpSmsFailedElement;
