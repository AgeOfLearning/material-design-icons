import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularNoSimElement
 * @class IconRoundSignalCellularNoSimElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularNoSimElement.is, IconRoundSignalCellularNoSimElement);

export default IconRoundSignalCellularNoSimElement;
