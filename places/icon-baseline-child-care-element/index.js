import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChildCareElement
 * @class IconBaselineChildCareElement
 * @extends {AoflElement}
 */
class IconBaselineChildCareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChildCareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-child-care';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChildCareElement.is, IconBaselineChildCareElement);

export default IconBaselineChildCareElement;
