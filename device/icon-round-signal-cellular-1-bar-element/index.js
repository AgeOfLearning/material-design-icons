import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellular1BarElement
 * @class IconRoundSignalCellular1BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellular1BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellular1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellular1BarElement.is, IconRoundSignalCellular1BarElement);

export default IconRoundSignalCellular1BarElement;
