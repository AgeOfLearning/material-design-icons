import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSmsElement
 * @class IconBaselineSmsElement
 * @extends {AoflElement}
 */
class IconBaselineSmsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSmsElement.is, IconBaselineSmsElement);

export default IconBaselineSmsElement;
