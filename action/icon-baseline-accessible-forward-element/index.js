import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessibleForwardElement
 * @class IconBaselineAccessibleForwardElement
 * @extends {AoflElement}
 */
class IconBaselineAccessibleForwardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessibleForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-accessible-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessibleForwardElement.is, IconBaselineAccessibleForwardElement);

export default IconBaselineAccessibleForwardElement;
