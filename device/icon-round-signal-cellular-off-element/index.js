import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularOffElement
 * @class IconRoundSignalCellularOffElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularOffElement.is, IconRoundSignalCellularOffElement);

export default IconRoundSignalCellularOffElement;
