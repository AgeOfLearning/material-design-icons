import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRemoveRedEyeElement
 * @class IconBaselineRemoveRedEyeElement
 * @extends {AoflElement}
 */
class IconBaselineRemoveRedEyeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRemoveRedEyeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-remove-red-eye';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRemoveRedEyeElement.is, IconBaselineRemoveRedEyeElement);

export default IconBaselineRemoveRedEyeElement;
