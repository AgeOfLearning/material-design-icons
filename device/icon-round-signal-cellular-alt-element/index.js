import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularAltElement
 * @class IconRoundSignalCellularAltElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularAltElement.is, IconRoundSignalCellularAltElement);

export default IconRoundSignalCellularAltElement;
