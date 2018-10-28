import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonelinkLockElement
 * @class IconSharpPhonelinkLockElement
 * @extends {AoflElement}
 */
class IconSharpPhonelinkLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonelinkLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phonelink-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonelinkLockElement.is, IconSharpPhonelinkLockElement);

export default IconSharpPhonelinkLockElement;
