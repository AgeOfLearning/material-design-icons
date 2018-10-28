import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSmsElement
 * @class IconOutlineSmsElement
 * @extends {AoflElement}
 */
class IconOutlineSmsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSmsElement.is, IconOutlineSmsElement);

export default IconOutlineSmsElement;
