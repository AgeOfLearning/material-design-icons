import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocationCityElement
 * @class IconRoundLocationCityElement
 * @extends {AoflElement}
 */
class IconRoundLocationCityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocationCityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-location-city';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocationCityElement.is, IconRoundLocationCityElement);

export default IconRoundLocationCityElement;
