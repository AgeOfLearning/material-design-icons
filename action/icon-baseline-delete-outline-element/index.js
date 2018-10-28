import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeleteOutlineElement
 * @class IconBaselineDeleteOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineDeleteOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeleteOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-delete-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeleteOutlineElement.is, IconBaselineDeleteOutlineElement);

export default IconBaselineDeleteOutlineElement;
