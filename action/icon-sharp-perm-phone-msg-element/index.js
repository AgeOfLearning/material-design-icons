import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermPhoneMsgElement
 * @class IconSharpPermPhoneMsgElement
 * @extends {AoflElement}
 */
class IconSharpPermPhoneMsgElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermPhoneMsgElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-phone-msg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermPhoneMsgElement.is, IconSharpPermPhoneMsgElement);

export default IconSharpPermPhoneMsgElement;
