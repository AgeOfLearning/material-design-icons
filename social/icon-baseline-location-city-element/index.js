import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocationCityElement
 * @class IconBaselineLocationCityElement
 * @extends {AoflElement}
 */
class IconBaselineLocationCityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocationCityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-location-city';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocationCityElement.is, IconBaselineLocationCityElement);

export default IconBaselineLocationCityElement;
