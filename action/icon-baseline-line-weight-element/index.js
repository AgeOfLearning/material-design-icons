import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLineWeightElement
 * @class IconBaselineLineWeightElement
 * @extends {AoflElement}
 */
class IconBaselineLineWeightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLineWeightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-line-weight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLineWeightElement.is, IconBaselineLineWeightElement);

export default IconBaselineLineWeightElement;
