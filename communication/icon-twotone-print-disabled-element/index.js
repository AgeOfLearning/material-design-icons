import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePrintDisabledElement
 * @class IconTwotonePrintDisabledElement
 * @extends {AoflElement}
 */
class IconTwotonePrintDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePrintDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-print-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePrintDisabledElement.is, IconTwotonePrintDisabledElement);

export default IconTwotonePrintDisabledElement;
