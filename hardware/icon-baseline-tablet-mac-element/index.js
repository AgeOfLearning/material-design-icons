import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTabletMacElement
 * @class IconBaselineTabletMacElement
 * @extends {AoflElement}
 */
class IconBaselineTabletMacElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTabletMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tablet-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTabletMacElement.is, IconBaselineTabletMacElement);

export default IconBaselineTabletMacElement;
