import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirplanemodeActiveElement
 * @class IconBaselineAirplanemodeActiveElement
 * @extends {AoflElement}
 */
class IconBaselineAirplanemodeActiveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirplanemodeActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airplanemode-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirplanemodeActiveElement.is, IconBaselineAirplanemodeActiveElement);

export default IconBaselineAirplanemodeActiveElement;
