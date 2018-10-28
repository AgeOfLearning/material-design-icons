import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirplanemodeInactiveElement
 * @class IconBaselineAirplanemodeInactiveElement
 * @extends {AoflElement}
 */
class IconBaselineAirplanemodeInactiveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirplanemodeInactiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airplanemode-inactive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirplanemodeInactiveElement.is, IconBaselineAirplanemodeInactiveElement);

export default IconBaselineAirplanemodeInactiveElement;
