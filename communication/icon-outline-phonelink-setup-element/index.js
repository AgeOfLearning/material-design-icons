import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonelinkSetupElement
 * @class IconOutlinePhonelinkSetupElement
 * @extends {AoflElement}
 */
class IconOutlinePhonelinkSetupElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonelinkSetupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phonelink-setup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonelinkSetupElement.is, IconOutlinePhonelinkSetupElement);

export default IconOutlinePhonelinkSetupElement;
