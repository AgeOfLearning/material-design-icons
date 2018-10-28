import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRepeatOneElement
 * @class IconTwotoneRepeatOneElement
 * @extends {AoflElement}
 */
class IconTwotoneRepeatOneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRepeatOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-repeat-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRepeatOneElement.is, IconTwotoneRepeatOneElement);

export default IconTwotoneRepeatOneElement;
