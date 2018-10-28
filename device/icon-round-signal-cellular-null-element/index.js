import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularNullElement
 * @class IconRoundSignalCellularNullElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularNullElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularNullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-null';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularNullElement.is, IconRoundSignalCellularNullElement);

export default IconRoundSignalCellularNullElement;
