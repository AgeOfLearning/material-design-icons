import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSatelliteElement
 * @class IconBaselineSatelliteElement
 * @extends {AoflElement}
 */
class IconBaselineSatelliteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSatelliteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-satellite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSatelliteElement.is, IconBaselineSatelliteElement);

export default IconBaselineSatelliteElement;
