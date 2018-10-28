import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCommuteElement
 * @class IconBaselineCommuteElement
 * @extends {AoflElement}
 */
class IconBaselineCommuteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCommuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-commute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCommuteElement.is, IconBaselineCommuteElement);

export default IconBaselineCommuteElement;
