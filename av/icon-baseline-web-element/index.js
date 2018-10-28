import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWebElement
 * @class IconBaselineWebElement
 * @extends {AoflElement}
 */
class IconBaselineWebElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWebElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-web';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWebElement.is, IconBaselineWebElement);

export default IconBaselineWebElement;
