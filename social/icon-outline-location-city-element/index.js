import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocationCityElement
 * @class IconOutlineLocationCityElement
 * @extends {AoflElement}
 */
class IconOutlineLocationCityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocationCityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-location-city';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocationCityElement.is, IconOutlineLocationCityElement);

export default IconOutlineLocationCityElement;
