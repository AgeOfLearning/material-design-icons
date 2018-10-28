import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonelinkElement
 * @class IconOutlinePhonelinkElement
 * @extends {AoflElement}
 */
class IconOutlinePhonelinkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonelinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phonelink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonelinkElement.is, IconOutlinePhonelinkElement);

export default IconOutlinePhonelinkElement;
