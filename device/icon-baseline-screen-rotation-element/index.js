import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScreenRotationElement
 * @class IconBaselineScreenRotationElement
 * @extends {AoflElement}
 */
class IconBaselineScreenRotationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScreenRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-screen-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScreenRotationElement.is, IconBaselineScreenRotationElement);

export default IconBaselineScreenRotationElement;
