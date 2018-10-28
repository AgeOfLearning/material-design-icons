import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineColorizeElement
 * @class IconBaselineColorizeElement
 * @extends {AoflElement}
 */
class IconBaselineColorizeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineColorizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-colorize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineColorizeElement.is, IconBaselineColorizeElement);

export default IconBaselineColorizeElement;
