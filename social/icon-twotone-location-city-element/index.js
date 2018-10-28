import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocationCityElement
 * @class IconTwotoneLocationCityElement
 * @extends {AoflElement}
 */
class IconTwotoneLocationCityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocationCityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-location-city';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocationCityElement.is, IconTwotoneLocationCityElement);

export default IconTwotoneLocationCityElement;
