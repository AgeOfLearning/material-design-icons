import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineComputerElement
 * @class IconBaselineComputerElement
 * @extends {AoflElement}
 */
class IconBaselineComputerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineComputerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-computer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineComputerElement.is, IconBaselineComputerElement);

export default IconBaselineComputerElement;
