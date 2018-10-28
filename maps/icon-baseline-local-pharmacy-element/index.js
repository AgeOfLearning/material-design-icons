import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalPharmacyElement
 * @class IconBaselineLocalPharmacyElement
 * @extends {AoflElement}
 */
class IconBaselineLocalPharmacyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalPharmacyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-pharmacy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalPharmacyElement.is, IconBaselineLocalPharmacyElement);

export default IconBaselineLocalPharmacyElement;
