import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMinimizeElement
 * @class IconBaselineMinimizeElement
 * @extends {AoflElement}
 */
class IconBaselineMinimizeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMinimizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-minimize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMinimizeElement.is, IconBaselineMinimizeElement);

export default IconBaselineMinimizeElement;
