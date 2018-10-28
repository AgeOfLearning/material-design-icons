import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocationCityElement
 * @class IconSharpLocationCityElement
 * @extends {AoflElement}
 */
class IconSharpLocationCityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocationCityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-location-city';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocationCityElement.is, IconSharpLocationCityElement);

export default IconSharpLocationCityElement;
