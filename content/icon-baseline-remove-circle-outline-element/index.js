import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRemoveCircleOutlineElement
 * @class IconBaselineRemoveCircleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineRemoveCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRemoveCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-remove-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRemoveCircleOutlineElement.is, IconBaselineRemoveCircleOutlineElement);

export default IconBaselineRemoveCircleOutlineElement;
