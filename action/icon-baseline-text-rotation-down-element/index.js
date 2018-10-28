import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextRotationDownElement
 * @class IconBaselineTextRotationDownElement
 * @extends {AoflElement}
 */
class IconBaselineTextRotationDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextRotationDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-text-rotation-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextRotationDownElement.is, IconBaselineTextRotationDownElement);

export default IconBaselineTextRotationDownElement;
