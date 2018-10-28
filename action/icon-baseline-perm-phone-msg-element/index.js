import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermPhoneMsgElement
 * @class IconBaselinePermPhoneMsgElement
 * @extends {AoflElement}
 */
class IconBaselinePermPhoneMsgElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermPhoneMsgElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-phone-msg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermPhoneMsgElement.is, IconBaselinePermPhoneMsgElement);

export default IconBaselinePermPhoneMsgElement;
