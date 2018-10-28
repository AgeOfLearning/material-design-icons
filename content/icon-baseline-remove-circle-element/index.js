import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRemoveCircleElement
 * @class IconBaselineRemoveCircleElement
 * @extends {AoflElement}
 */
class IconBaselineRemoveCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRemoveCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-remove-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRemoveCircleElement.is, IconBaselineRemoveCircleElement);

export default IconBaselineRemoveCircleElement;
