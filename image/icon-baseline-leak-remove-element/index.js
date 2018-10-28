import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLeakRemoveElement
 * @class IconBaselineLeakRemoveElement
 * @extends {AoflElement}
 */
class IconBaselineLeakRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLeakRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-leak-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLeakRemoveElement.is, IconBaselineLeakRemoveElement);

export default IconBaselineLeakRemoveElement;
