import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalPharmacyElement
 * @class IconOutlineLocalPharmacyElement
 * @extends {AoflElement}
 */
class IconOutlineLocalPharmacyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalPharmacyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-pharmacy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalPharmacyElement.is, IconOutlineLocalPharmacyElement);

export default IconOutlineLocalPharmacyElement;
