import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRemoveCircleElement
 * @class IconTwotoneRemoveCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneRemoveCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRemoveCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-remove-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRemoveCircleElement.is, IconTwotoneRemoveCircleElement);

export default IconTwotoneRemoveCircleElement;
