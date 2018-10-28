import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPrintDisabledElement
 * @class IconRoundPrintDisabledElement
 * @extends {AoflElement}
 */
class IconRoundPrintDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPrintDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-print-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPrintDisabledElement.is, IconRoundPrintDisabledElement);

export default IconRoundPrintDisabledElement;
