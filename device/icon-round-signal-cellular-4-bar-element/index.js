import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellular4BarElement
 * @class IconRoundSignalCellular4BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellular4BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellular4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellular4BarElement.is, IconRoundSignalCellular4BarElement);

export default IconRoundSignalCellular4BarElement;
