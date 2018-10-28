import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddCircleOutlineElement
 * @class IconBaselineAddCircleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineAddCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddCircleOutlineElement.is, IconBaselineAddCircleOutlineElement);

export default IconBaselineAddCircleOutlineElement;
