import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRemoveElement
 * @class IconBaselineRemoveElement
 * @extends {AoflElement}
 */
class IconBaselineRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRemoveElement.is, IconBaselineRemoveElement);

export default IconBaselineRemoveElement;
