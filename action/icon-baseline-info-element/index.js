import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInfoElement
 * @class IconBaselineInfoElement
 * @extends {AoflElement}
 */
class IconBaselineInfoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInfoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-info';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInfoElement.is, IconBaselineInfoElement);

export default IconBaselineInfoElement;
