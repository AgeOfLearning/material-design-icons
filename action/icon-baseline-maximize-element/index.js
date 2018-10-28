import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMaximizeElement
 * @class IconBaselineMaximizeElement
 * @extends {AoflElement}
 */
class IconBaselineMaximizeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMaximizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-maximize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMaximizeElement.is, IconBaselineMaximizeElement);

export default IconBaselineMaximizeElement;
