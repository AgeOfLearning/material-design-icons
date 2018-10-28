import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLastPageElement
 * @class IconBaselineLastPageElement
 * @extends {AoflElement}
 */
class IconBaselineLastPageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLastPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-last-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLastPageElement.is, IconBaselineLastPageElement);

export default IconBaselineLastPageElement;
