import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWarningElement
 * @class IconBaselineWarningElement
 * @extends {AoflElement}
 */
class IconBaselineWarningElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWarningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-warning';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWarningElement.is, IconBaselineWarningElement);

export default IconBaselineWarningElement;
