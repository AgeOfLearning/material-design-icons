import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalHospitalElement
 * @class IconRoundLocalHospitalElement
 * @extends {AoflElement}
 */
class IconRoundLocalHospitalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalHospitalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-hospital';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalHospitalElement.is, IconRoundLocalHospitalElement);

export default IconRoundLocalHospitalElement;
