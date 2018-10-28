import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSearchElement
 * @class IconBaselineSearchElement
 * @extends {AoflElement}
 */
class IconBaselineSearchElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSearchElement.is, IconBaselineSearchElement);

export default IconBaselineSearchElement;
