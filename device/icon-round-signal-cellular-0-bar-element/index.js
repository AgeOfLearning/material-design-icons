import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellular0BarElement
 * @class IconRoundSignalCellular0BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellular0BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellular0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellular0BarElement.is, IconRoundSignalCellular0BarElement);

export default IconRoundSignalCellular0BarElement;
