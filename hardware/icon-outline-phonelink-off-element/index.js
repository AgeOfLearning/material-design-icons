import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonelinkOffElement
 * @class IconOutlinePhonelinkOffElement
 * @extends {AoflElement}
 */
class IconOutlinePhonelinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonelinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phonelink-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonelinkOffElement.is, IconOutlinePhonelinkOffElement);

export default IconOutlinePhonelinkOffElement;
