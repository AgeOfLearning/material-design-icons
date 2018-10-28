import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePrintDisabledElement
 * @class IconOutlinePrintDisabledElement
 * @extends {AoflElement}
 */
class IconOutlinePrintDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePrintDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-print-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePrintDisabledElement.is, IconOutlinePrintDisabledElement);

export default IconOutlinePrintDisabledElement;
