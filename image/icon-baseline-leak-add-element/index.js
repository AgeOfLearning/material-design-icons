import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLeakAddElement
 * @class IconBaselineLeakAddElement
 * @extends {AoflElement}
 */
class IconBaselineLeakAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLeakAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-leak-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLeakAddElement.is, IconBaselineLeakAddElement);

export default IconBaselineLeakAddElement;
