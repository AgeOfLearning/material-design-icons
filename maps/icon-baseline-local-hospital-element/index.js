import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalHospitalElement
 * @class IconBaselineLocalHospitalElement
 * @extends {AoflElement}
 */
class IconBaselineLocalHospitalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalHospitalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-hospital';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalHospitalElement.is, IconBaselineLocalHospitalElement);

export default IconBaselineLocalHospitalElement;
