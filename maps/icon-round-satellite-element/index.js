import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSatelliteElement
 * @class IconRoundSatelliteElement
 * @extends {AoflElement}
 */
class IconRoundSatelliteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSatelliteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-satellite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSatelliteElement.is, IconRoundSatelliteElement);

export default IconRoundSatelliteElement;
