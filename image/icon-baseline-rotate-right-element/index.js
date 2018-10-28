import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRotateRightElement
 * @class IconBaselineRotateRightElement
 * @extends {AoflElement}
 */
class IconBaselineRotateRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRotateRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rotate-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRotateRightElement.is, IconBaselineRotateRightElement);

export default IconBaselineRotateRightElement;
