import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSatelliteElement
 * @class IconOutlineSatelliteElement
 * @extends {AoflElement}
 */
class IconOutlineSatelliteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSatelliteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-satellite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSatelliteElement.is, IconOutlineSatelliteElement);

export default IconOutlineSatelliteElement;
