import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSmsElement
 * @class IconTwotoneSmsElement
 * @extends {AoflElement}
 */
class IconTwotoneSmsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSmsElement.is, IconTwotoneSmsElement);

export default IconTwotoneSmsElement;
