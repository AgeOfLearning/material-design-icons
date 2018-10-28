import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularNoSimElement
 * @class IconSharpSignalCellularNoSimElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularNoSimElement.is, IconSharpSignalCellularNoSimElement);

export default IconSharpSignalCellularNoSimElement;
