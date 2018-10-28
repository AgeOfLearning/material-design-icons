import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellular2BarElement
 * @class IconRoundSignalCellular2BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellular2BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellular2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellular2BarElement.is, IconRoundSignalCellular2BarElement);

export default IconRoundSignalCellular2BarElement;
