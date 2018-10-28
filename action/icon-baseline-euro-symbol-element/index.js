import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEuroSymbolElement
 * @class IconBaselineEuroSymbolElement
 * @extends {AoflElement}
 */
class IconBaselineEuroSymbolElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEuroSymbolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-euro-symbol';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEuroSymbolElement.is, IconBaselineEuroSymbolElement);

export default IconBaselineEuroSymbolElement;
