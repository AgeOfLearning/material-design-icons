import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRemoveCircleOutlineElement
 * @class IconTwotoneRemoveCircleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneRemoveCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRemoveCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-remove-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRemoveCircleOutlineElement.is, IconTwotoneRemoveCircleOutlineElement);

export default IconTwotoneRemoveCircleOutlineElement;
