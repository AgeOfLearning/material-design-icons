import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonelinkEraseElement
 * @class IconOutlinePhonelinkEraseElement
 * @extends {AoflElement}
 */
class IconOutlinePhonelinkEraseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonelinkEraseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phonelink-erase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonelinkEraseElement.is, IconOutlinePhonelinkEraseElement);

export default IconOutlinePhonelinkEraseElement;
