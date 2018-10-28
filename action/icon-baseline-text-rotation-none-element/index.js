import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextRotationNoneElement
 * @class IconBaselineTextRotationNoneElement
 * @extends {AoflElement}
 */
class IconBaselineTextRotationNoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextRotationNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-text-rotation-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextRotationNoneElement.is, IconBaselineTextRotationNoneElement);

export default IconBaselineTextRotationNoneElement;
