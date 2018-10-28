import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonelinkRingElement
 * @class IconOutlinePhonelinkRingElement
 * @extends {AoflElement}
 */
class IconOutlinePhonelinkRingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonelinkRingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phonelink-ring';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonelinkRingElement.is, IconOutlinePhonelinkRingElement);

export default IconOutlinePhonelinkRingElement;
