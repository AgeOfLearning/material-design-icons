import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellular3BarElement
 * @class IconRoundSignalCellular3BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellular3BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellular3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellular3BarElement.is, IconRoundSignalCellular3BarElement);

export default IconRoundSignalCellular3BarElement;
