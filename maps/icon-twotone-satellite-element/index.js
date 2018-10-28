import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSatelliteElement
 * @class IconTwotoneSatelliteElement
 * @extends {AoflElement}
 */
class IconTwotoneSatelliteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSatelliteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-satellite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSatelliteElement.is, IconTwotoneSatelliteElement);

export default IconTwotoneSatelliteElement;
