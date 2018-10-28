import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalPharmacyElement
 * @class IconSharpLocalPharmacyElement
 * @extends {AoflElement}
 */
class IconSharpLocalPharmacyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalPharmacyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-pharmacy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalPharmacyElement.is, IconSharpLocalPharmacyElement);

export default IconSharpLocalPharmacyElement;
