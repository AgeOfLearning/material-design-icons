import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTabUnselectedElement
 * @class IconBaselineTabUnselectedElement
 * @extends {AoflElement}
 */
class IconBaselineTabUnselectedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTabUnselectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tab-unselected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTabUnselectedElement.is, IconBaselineTabUnselectedElement);

export default IconBaselineTabUnselectedElement;
