import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEvStationElement
 * @class IconRoundEvStationElement
 * @extends {AoflElement}
 */
class IconRoundEvStationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEvStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-ev-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEvStationElement.is, IconRoundEvStationElement);

export default IconRoundEvStationElement;
