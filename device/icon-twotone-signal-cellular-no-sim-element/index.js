import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularNoSimElement
 * @class IconTwotoneSignalCellularNoSimElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularNoSimElement.is, IconTwotoneSignalCellularNoSimElement);

export default IconTwotoneSignalCellularNoSimElement;
