import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTabletElement
 * @class IconBaselineTabletElement
 * @extends {AoflElement}
 */
class IconBaselineTabletElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTabletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tablet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTabletElement.is, IconBaselineTabletElement);

export default IconBaselineTabletElement;
