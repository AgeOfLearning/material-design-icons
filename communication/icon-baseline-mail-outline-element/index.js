import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMailOutlineElement
 * @class IconBaselineMailOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineMailOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMailOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mail-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMailOutlineElement.is, IconBaselineMailOutlineElement);

export default IconBaselineMailOutlineElement;
