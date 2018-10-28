import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSatelliteElement
 * @class IconSharpSatelliteElement
 * @extends {AoflElement}
 */
class IconSharpSatelliteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSatelliteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-satellite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSatelliteElement.is, IconSharpSatelliteElement);

export default IconSharpSatelliteElement;
