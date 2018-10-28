import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularNoSimElement
 * @class IconOutlineSignalCellularNoSimElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularNoSimElement.is, IconOutlineSignalCellularNoSimElement);

export default IconOutlineSignalCellularNoSimElement;
