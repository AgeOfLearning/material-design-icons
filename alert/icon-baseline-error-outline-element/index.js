import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineErrorOutlineElement
 * @class IconBaselineErrorOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineErrorOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineErrorOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-error-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineErrorOutlineElement.is, IconBaselineErrorOutlineElement);

export default IconBaselineErrorOutlineElement;
