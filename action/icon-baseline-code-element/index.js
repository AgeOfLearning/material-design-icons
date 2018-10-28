import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCodeElement
 * @class IconBaselineCodeElement
 * @extends {AoflElement}
 */
class IconBaselineCodeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCodeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-code';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCodeElement.is, IconBaselineCodeElement);

export default IconBaselineCodeElement;
