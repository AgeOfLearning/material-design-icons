import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessibleElement
 * @class IconBaselineAccessibleElement
 * @extends {AoflElement}
 */
class IconBaselineAccessibleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessibleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-accessible';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessibleElement.is, IconBaselineAccessibleElement);

export default IconBaselineAccessibleElement;
